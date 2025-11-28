import { Elysia, t } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { Database } from 'bun:sqlite';

type TaskRow = {
    id: number;
    title: string;
    description: string | null;
    completed: number;
    created_at: string;
    updated_at: string;
};

type Task = Omit<TaskRow, 'completed'> & { completed: boolean };

const db = new Database('tasks.db', { create: true });

db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        completed INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
`);

const selectAll = db.query<TaskRow, []>('SELECT * FROM tasks ORDER BY id DESC');
const selectById = db.query<TaskRow, [number]>('SELECT * FROM tasks WHERE id = ?1');
const insertTask = db.prepare(
    `INSERT INTO tasks (title, description, completed) VALUES (?1, ?2, ?3)`
);
const updateTask = db.prepare(
    `UPDATE tasks
     SET title = COALESCE(?1, title),
         description = COALESCE(?2, description),
         completed = COALESCE(?3, completed),
         updated_at = datetime('now')
     WHERE id = ?4`
);
const deleteTask = db.prepare(`DELETE FROM tasks WHERE id = ?1`);

const rowToTask = (row: TaskRow | undefined | null): Task | undefined =>
    row
        ? {
              ...row,
              completed: Boolean(row.completed)
          }
        : undefined;

const app = new Elysia({
    prefix: '/api'
})
    .use(
        swagger({
            documentation: {
                info: {
                    title: 'Tasks API',
                    description: 'Demo CRUD API with SQLite + Swagger using Elysia',
                    version: '1.0.0'
                }
            }
        })
    )
    .onError(({ code, error, set }) => {
        if (code === 'NOT_FOUND') {
            set.status = 404;
            return { message: 'Resource not found' };
        }

        console.error('Unhandled error', error);
        set.status = 500;
        return { message: 'Internal server error' };
    })
    .get(
        '/tasks',
        ({ query }) => {
            const flag =
                typeof query?.completed === 'boolean'
                    ? query.completed
                    : typeof query?.completed === 'string'
                    ? query.completed === 'true'
                    : undefined;

            const list =
                typeof flag === 'boolean'
                    ? selectAll
                          .all()
                          .filter((row) => Boolean(row.completed) === flag)
                    : selectAll.all();

            return list.map((row) => rowToTask(row)!);
        },
        {
            query: t.Optional(
                t.Object({
                    completed: t.Union([
                        t.Boolean(),
                        t.String({
                            enum: ['true', 'false']
                        })
                    ])
                })
            ),
            detail: {
                summary: 'List tasks',
                description: 'Retrieve every task, optionally filtering by completion status.'
            },
            response: {
                200: t.Array(
                    t.Object({
                        id: t.Number(),
                        title: t.String(),
                        description: t.Nullable(t.String()),
                        completed: t.Boolean(),
                        created_at: t.String(),
                        updated_at: t.String()
                    })
                )
            }
        }
    )
    .get(
        '/tasks/:id',
        ({ params, set }) => {
            const task = rowToTask(selectById.get(params.id));
            if (!task) {
                set.status = 404;
                return { message: 'Task not found' };
            }

            return task;
        },
        {
            params: t.Object({ id: t.Numeric() }),
            detail: {
                summary: 'Get task',
                description: 'Fetch a single task by id.'
            }
        }
    )
    .post(
        '/tasks',
        ({ body, set }) => {
            const result = insertTask.run(
                body.title,
                body.description ?? null,
                body.completed ? 1 : 0
            );
            const task = rowToTask(selectById.get(Number(result.lastInsertRowid)));

            set.status = 201;
            return task;
        },
        {
            body: t.Object({
                title: t.String({ minLength: 1 }),
                description: t.Optional(t.Nullable(t.String())),
                completed: t.Optional(t.Boolean())
            }),
            response: {
                201: t.Object({
                    id: t.Number(),
                    title: t.String(),
                    description: t.Nullable(t.String()),
                    completed: t.Boolean(),
                    created_at: t.String(),
                    updated_at: t.String()
                })
            },
            detail: {
                summary: 'Create task',
                description: 'Create a new task entry.'
            }
        }
    )
    .put(
        '/tasks/:id',
        ({ params, body, set }) => {
            const result = updateTask.run(
                body.title ?? null,
                body.description ?? null,
                typeof body.completed === 'boolean' ? Number(body.completed) : null,
                params.id
            );

            if (result.changes === 0) {
                set.status = 404;
                return { message: 'Task not found' };
            }

            return rowToTask(selectById.get(params.id));
        },
        {
            params: t.Object({ id: t.Numeric() }),
            body: t.Object({
                title: t.Optional(t.String({ minLength: 1 })),
                description: t.Optional(t.Nullable(t.String())),
                completed: t.Optional(t.Boolean())
            }),
            detail: {
                summary: 'Update task',
                description: 'Update mutable properties of an existing task.'
            }
        }
    )
    .delete(
        '/tasks/:id',
        ({ params, set }) => {
            const result = deleteTask.run(params.id);
            if (result.changes === 0) {
                set.status = 404;
                return { message: 'Task not found' };
            }

            return { message: 'Task deleted' };
        },
        {
            params: t.Object({ id: t.Numeric() }),
            detail: {
                summary: 'Delete task',
                description: 'Remove a task forever.'
            }
        }
    )
    .get('/health', () => ({ status: 'ok' }), {
        detail: { summary: 'Health check' }
    });

const port = parseInt(process.env.PORT ?? '3000', 10);

app.listen(port);

console.log(`Elysia server listening on http://localhost:${port}/api`);