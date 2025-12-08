---
title: "Files & Error Handling Practice — Solutions"
sub_title: "Python Course · Module 6 Practice Solutions"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Solutions Overview
==================

These solutions are **one possible implementation** for each practice task.  
You can (and should!) experiment with different designs as long as:

- Files are handled safely  
- Exceptions are caught where appropriate  
- Data structures and control flow are used clearly

---

Practice 1 — Robust Score Importer (Solution)
=============================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**score_importer.py** — core logic:

```python
def load_scores(path):
    scores = []

    try:
        with open(path, "r", encoding="utf-8") as f:
            for line_number, line in enumerate(f, start=1):
                text = line.strip()
                if text == "":
                    continue

                try:
                    value = int(text)
                except ValueError:
                    print(f"[WARN] Line {line_number}: not a valid integer -> {text!r}")
                    continue

                if value < 0 or value > 100:
                    print(f"[WARN] Line {line_number}: score out of range (0-100) -> {value}")
                    continue

                scores.append(value)

    except FileNotFoundError:
        print("File not found:", path)
        return []
    except OSError as e:
        print("Could not open file:", e)
        return []

    return scores
```

<!-- column: 1 -->
**Main program:**

```python
def main():
    path = input("Enter absolute path to scores file: ").strip()
    scores = load_scores(path)

    if not scores:
        print("No valid scores found. Exiting.")
        return

    count = len(scores)
    minimum = min(scores)
    maximum = max(scores)
    average = sum(scores) / count

    print("\nScore Summary")
    print("=============")
    print(f"Valid scores: {count}")
    print(f"Min: {minimum}")
    print(f"Max: {maximum}")
    print(f"Average: {average:.2f}")


if __name__ == "__main__":
    main()
```

<!-- reset_layout -->

---

Practice 2 — Simple User Database (CSV) (Solution)
==================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Helper functions (user_database.py):**

```python
import csv


def load_users(path):
    users = []
    try:
        with open(path, "r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                try:
                    user = {
                        "id": int(row["id"]),
                        "username": row["username"],
                        "email": row["email"],
                        "age": int(row["age"]),
                    }
                    users.append(user)
                except (KeyError, ValueError):
                    print("[WARN] Skipping malformed row:", row)
    except FileNotFoundError:
        print("CSV file not found, creating a new one at save time.")
    except OSError as e:
        print("Error reading CSV file:", e)
    return users


def save_users(path, users):
    fieldnames = ["id", "username", "email", "age"]
    try:
        with open(path, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            for user in users:
                writer.writerow(user)
        print("Users saved successfully.")
    except OSError as e:
        print("Error writing CSV file:", e)
```

<!-- column: 1 -->
**Menu logic:**

```python
def get_next_id(users):
    if not users:
        return 1
    return max(user["id"] for user in users) + 1


def add_user(users):
    username = input("Username: ").strip()
    email = input("Email: ").strip()

    try:
        age = int(input("Age: ").strip())
        if age < 0:
            print("Age cannot be negative.")
            return
    except ValueError:
        print("Invalid age. Must be an integer.")
        return

    new_id = get_next_id(users)
    users.append({"id": new_id, "username": username, "email": email, "age": age})
    print("User added!")
```


Practice 2 — Simple User Database (CSV) (Solution)
==================================================


<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**More menu actions:**

```python
def list_users(users):
    if not users:
        print("No users in database.")
        return

    print("\nUsers")
    print("=====")
    for user in users:
        print(
            f"{user['id']:>3}  "
            f"{user['username']:<15}  "
            f"{user['email']:<25}  "
            f"age={user['age']}"
        )


def find_by_min_age(users):
    try:
        min_age = int(input("Minimum age: ").strip())
    except ValueError:
        print("Invalid age.")
        return

    filtered = [u for u in users if u["age"] >= min_age]

    if not filtered:
        print("No users with that minimum age.")
        return

    print(f"\nUsers with age >= {min_age}")
    print("=========================")
    for user in filtered:
        print(f"{user['id']} - {user['username']} ({user['age']} years)")
```

<!-- column: 1 -->
**Main loop:**

```python
def main():
    path = input("Enter CSV path (absolute): ").strip()
    users = load_users(path)

    while True:
        print("\nMenu:")
        print("1. Add user")
        print("2. List users")
        print("3. Find users by minimum age")
        print("4. Save & Exit")

        choice = input("Choice: ").strip()

        if choice == "1":
            add_user(users)
        elif choice == "2":
            list_users(users)
        elif choice == "3":
            find_by_min_age(users)
        elif choice == "4":
            save_users(path, users)
            break
        else:
            print("Invalid choice.")


if __name__ == "__main__":
    main()
```

<!-- reset_layout -->

---

Practice 3 — Log Analyzer with Error Handling (Solution)
========================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Parser helper:**

```python
def parse_log_line(line):
    line = line.strip()
    if not line:
        return None

    parts = line.split(" ", 3)  # max 4 parts
    if len(parts) < 4:
        print("[WARN] Malformed log line (too few parts):", line)
        return None

    date_part, time_part, level_part, message_part = parts
    entry = {
        "datetime": f"{date_part} {time_part}",
        "level": level_part,
        "message": message_part,
    }
    return entry
```

<!-- column: 1 -->
**Analyzer logic:**

```python
def analyze_log(path):
    entries = []
    try:
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                entry = parse_log_line(line)
                if entry is not None:
                    entries.append(entry)
    except FileNotFoundError:
        print("Log file not found:", path)
        return []
    except OSError as e:
        print("Error reading log file:", e)
        return []

    return entries
```

Practice 3 — Log Analyzer with Error Handling (Solution)
========================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Counting and reporting:**

```python
def build_level_counts(entries):
    counts = {}
    for entry in entries:
        level = entry["level"]
        if level not in counts:
            counts[level] = 0
        counts[level] += 1
    return counts


def print_report(entries):
    print("\nLog Report")
    print("==========")
    print("Total parsed entries:", len(entries))

    counts = build_level_counts(entries)
    print("\nBy level:")
    for level, count in counts.items():
        print(f"- {level}: {count}")

    error_entries = [
        e for e in entries if e["level"].upper() == "ERROR"
    ]

    if error_entries:
        print("\nERROR entries:")
        for e in error_entries:
            print(f"[{e['datetime']}] {e['message']}")
    else:
        print("\nNo ERROR entries found.")
```

<!-- column: 1 -->
**Main function:**

```python
def main():
    path = input("Enter absolute path to log file: ").strip()
    entries = analyze_log(path)
    if not entries:
        print("No entries to report.")
        return

    print_report(entries)


if __name__ == "__main__":
    main()
```

<!-- reset_layout -->

---

Practice 4 — Task Manager with File Persistence (Solution)
==========================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Line format helpers:**

```python
def task_to_line(task):
    return f"{task['id']}|{task['title']}|{task['priority']}|{task['completed']}"


def line_to_task(line):
    parts = line.strip().split("|")
    if len(parts) != 4:
        raise ValueError("Wrong number of parts")

    task_id_str, title, priority, completed_str = parts

    task_id = int(task_id_str)
    completed = completed_str == "True"

    return {
        "id": task_id,
        "title": title,
        "priority": priority,
        "completed": completed,
    }
```

<!-- column: 1 -->
**File helpers with error handling:**

```python
def load_tasks(path):
    tasks = []
    try:
        with open(path, "r", encoding="utf-8") as f:
            for line_number, line in enumerate(f, start=1):
                line = line.strip()
                if not line:
                    continue
                try:
                    task = line_to_task(line)
                    tasks.append(task)
                except (ValueError, TypeError) as e:
                    print(f"[WARN] Skipping malformed task at line {line_number}: {e}")
    except FileNotFoundError:
        print("Task file not found, starting with empty task list.")
    except OSError as e:
        print("Error reading tasks file:", e)

    return tasks
```

Practice 4 — Task Manager with File Persistence (Solution)
==========================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Saving tasks:**

```python
def save_tasks(path, tasks):
    try:
        with open(path, "w", encoding="utf-8") as f:
            for task in tasks:
                f.write(task_to_line(task) + "\n")
        print("Tasks saved successfully.")
    except OSError as e:
        print("Error writing tasks file:", e)
```

**Utility helpers:**

```python
def next_task_id(tasks):
    if not tasks:
        return 1
    return max(t["id"] for t in tasks) + 1
```

<!-- column: 1 -->
**Menu actions:**

```python
def add_task(tasks):
    title = input("Task title: ").strip()
    priority = input("Priority (high/medium/low): ").strip().lower()
    if priority not in ("high", "medium", "low"):
        print("Invalid priority, defaulting to 'medium'.")
        priority = "medium"
    task_id = next_task_id(tasks)
    tasks.append(
        {"id": task_id, "title": title, "priority": priority, "completed": False}
    )
    print("Task added!")
```

Practice 4 — Task Manager with File Persistence (Solution)
==========================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**More menu actions:**

```python
def mark_complete(tasks):
    try:
        task_id = int(input("Enter task ID to mark complete: ").strip())
    except ValueError:
        print("Invalid ID.")
        return

    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = True
            print("Task marked as complete.")
            return

    print("Task not found.")


def list_tasks(tasks, only_incomplete=False):
    if not tasks:
        print("No tasks.")
        return

    print("\nTasks")
    print("=====")
    for task in tasks:
        if only_incomplete and task["completed"]:
            continue
        status = "✓" if task["completed"] else "✗"
        print(
            f"{task['id']:>3}  [{status}]  "
            f"{task['priority']:<6}  {task['title']}"
        )
```

<!-- column: 1 -->
**Delete and main loop:**

```python
def delete_task(tasks):
    try:
        task_id = int(input("Enter task ID to delete: ").strip())
    except ValueError:
        print("Invalid ID.")
        return

    for i, task in enumerate(tasks):
        if task["id"] == task_id:
            tasks.pop(i)
            print("Task deleted.")
            return

    print("Task not found.")
```

```python
def main():
    path = input("Enter absolute path to task file: ").strip()
    tasks = load_tasks(path)

    try:
        while True:
            print("\nMenu:")
            print("1. Add task")
            print("2. Mark task as complete")
            print("3. List tasks")
            print("4. List incomplete tasks")
            print("5. Delete task")
            print("6. Save & Exit")

            choice = input("Choice: ").strip()

            if choice == "1":
                add_task(tasks)
            elif choice == "2":
                mark_complete(tasks)
            elif choice == "3":
                list_tasks(tasks, only_incomplete=False)
            elif choice == "4":
                list_tasks(tasks, only_incomplete=True)
            elif choice == "5":
                delete_task(tasks)
            elif choice == "6":
                save_tasks(path, tasks)
                break
            else:
                print("Invalid choice.")
    finally:
        print("Goodbye!")


if __name__ == "__main__":
    main()
```

<!-- reset_layout -->

---


