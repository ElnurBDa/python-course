---
title: "Databases & SQL Practice"
sub_title: "Python Course · Module 7 Practice"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Practice 1 — Student Score Tracker
====================================

Create `score_tracker.py` that uses SQLite to manage student scores with full CRUD operations.

<!-- column_layout: [1, 1,1] -->

<!-- column: 0 -->

**Requirements:**

1. Create a database file `scores.db` with a table `students`:
```sql
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    score INTEGER NOT NULL,
    subject TEXT NOT NULL,
    created_at TEXT
);
```

2. Implement a menu system with a `while` loop:
   - `1. Add student score`
   - `2. View all scores`
   - `3. Update score`
   - `4. Delete score`
   - `5. View scores by subject`
   - `6. Calculate average score`
   - `7. Exit`

3. For **Add student score**:
   - Ask for name, score (0-100), and subject
   - Validate score is between 0 and 100
   - Use **parameterized queries** with `?` placeholders
   - Add current timestamp to `created_at`

4. For **View all scores**:
   - Display all students with their scores and subjects
   - Format output nicely (e.g., "1. Alice - Math: 95")

5. For **Update score**:
   - Ask for student ID and new score
   - Validate score range
   - Use parameterized UPDATE query

<!-- column: 1 -->

6. For **Delete score**:
   - Ask for student ID
   - Confirm deletion before proceeding
   - Use parameterized DELETE query

7. For **View scores by subject**:
   - Ask for subject name
   - Filter and display only scores for that subject
   - Use WHERE clause with parameterized query

8. For **Calculate average score**:
   - Calculate and display the average of all scores
   - Use SQL `AVG()` function or calculate in Python
<!-- column: 2-->

**Example interaction:**

```text
Menu:
1. Add student score
2. View all scores
3. Update score
4. Delete score
5. View scores by subject
6. Calculate average score
7. Exit

Choice: 1
Enter student name: Alice
Enter score (0-100): 95
Enter subject: Math
Score added successfully!

Choice: 2
All Scores:
1. Alice - Math: 95
2. Bob - Science: 87
3. Alice - Science: 92

Choice: 5
Enter subject: Math
Scores for Math:
1. Alice - Math: 95

Choice: 6
Average score: 91.33
```

**Important:** Always use **parameterized queries** (`?` placeholders) to prevent SQL injection.

<!-- reset_layout -->

---

Practice 2 — Library Database with Relationships
==================================================

Create `library_db.py` that implements a relational database with **two related tables** using foreign keys.

<!-- column_layout: [1, 1, 1] -->

<!-- column: 0 -->

**Requirements:**

1. Create `library.db` with two tables:

   **Books table:**
```sql
CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    isbn TEXT UNIQUE,
    available INTEGER NOT NULL DEFAULT 1
);
```

   **Borrowers table:**
```sql
CREATE TABLE IF NOT EXISTS borrowers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_id INTEGER NOT NULL,
    borrower_name TEXT NOT NULL,
    borrowed_date TEXT NOT NULL,
    returned_date TEXT,
    FOREIGN KEY (book_id) REFERENCES books(id)
);
```

2. Implement helper functions:
   - `init_database()` - creates both tables if they don't exist
   - `add_book(title, author, isbn)` - inserts a new book
   - `list_books()` - shows all books with availability status
   - `borrow_book(book_id, borrower_name)` - creates a borrower record and marks book as unavailable
   - `return_book(book_id)` - updates borrower record with return date and marks book as available
   - `view_borrowing_history(book_id)` - shows all borrowers for a specific book

3. Implement a menu system:
   - `1. Add book`
   - `2. List all books`
   - `3. Borrow book`
   - `4. Return book`
   - `5. View borrowing history`
   - `6. View all active borrows`
   - `7. Exit`

<!-- column: 1 -->

4. For **Borrow book**:
   - Show available books first
   - Ask for book ID and borrower name
   - Check if book is available (use WHERE clause)
   - If available, insert into `borrowers` and update `books.available = 0`
   - If not available, show error message

5. For **Return book**:
   - Show currently borrowed books
   - Ask for book ID
   - Update `borrowers.returned_date` and set `books.available = 1`

6. For **View borrowing history**:
   - Ask for book ID
   - Use a **JOIN** query to show book title and all borrower records:
```sql
SELECT books.title, borrowers.borrower_name, 
        borrowers.borrowed_date, borrowers.returned_date
FROM borrowers
JOIN books ON borrowers.book_id = books.id
WHERE books.id = ?
```

7. For **View all active borrows**:
   - Use JOIN to show books that are currently borrowed (where `returned_date IS NULL`)

**Important:** 
- Always use **parameterized queries**
- Handle cases where book doesn't exist or is already borrowed
- Use **JOIN** queries to combine data from both tables

<!-- column: 2 -->

**Example interaction:**

```text
Menu:
1. Add book
2. List all books
3. Borrow book
4. Return book
5. View borrowing history
6. View all active borrows
7. Exit

Choice: 1
Enter book title: Python Basics
Enter author: John Doe
Enter ISBN: 123456789
Book added!

Choice: 2
All Books:
1. Python Basics by John Doe (ISBN: 123456789) - Available
2. Advanced Python by Jane Smith (ISBN: 987654321) - Available

Choice: 3
Available Books:
1. Python Basics - Available
2. Advanced Python - Available
Enter book ID to borrow: 1
Enter borrower name: Alice
Book borrowed successfully!

Choice: 6
Active Borrows:
- Python Basics borrowed by Alice on 2025-01-15

Choice: 5
Enter book ID: 1
Borrowing History for "Python Basics":
- Alice borrowed on 2025-01-15, returned on 2025-01-20
- Bob borrowed on 2025-01-25, not yet returned
```
<!-- reset_layout -->

---
