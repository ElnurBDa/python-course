---
title: "Files & Error Handling Practice"
sub_title: "Python Course · Module 6 Practice"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Practice 1 — Robust Score Importer
==================================

Create `score_importer.py` that reads a text file with one student score per line,  
calculates simple statistics, and handles bad data safely.

**File format (example `scores.txt`):**

```text
95
80
abc
102
67
```

**Requirements:**

1. Ask the user for the **absolute path** to a scores file.  
2. Try to open the file for reading.  
   - If the file does not exist or cannot be opened, print a clear message and **exit** gracefully.  
3. Read the file **line by line**:
   - Strip whitespace from each line  
   - Use `try` / `except` to convert each line to `int`  
   - If a line is not a valid integer, **skip it** and print a warning with the line content  
   - Ignore scores that are **less than 0 or greater than 100**, with a warning  
4. Store all valid scores in a **list**.  
5. If there are no valid scores, print a message and exit.  
6. Otherwise compute:
   - count of valid scores  
   - minimum, maximum  
   - average (float, 2 decimal places)  
7. Print a formatted summary.

**Bonus:**

- Use a **function** like `load_scores(path)` that returns the list of valid scores.  
- Return `None` or an empty list when something goes wrong and handle it in `main`.

---

Practice 2 — Simple User Database (CSV)
=======================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->

Create `user_database.py` that manages a **CSV file of users** with safe file handling.

**CSV structure (`users.csv`):**

```text
id,username,email,age
1,alice,alice@example.com,25
2,bob,bob@example.com,19
```

**Requirements:**

1. Use the built‑in `csv` module.  
2. At program start:
   - Try to open the CSV file (ask user for **absolute path** or use a default path)  
   - If the file does not exist:
     - Create it and write a **header row**  
     - Start with an empty list of users  
3. Represent each user as a **dictionary**:

```python
{
    "id": int,
    "username": str,
    "email": str,
    "age": int
}
```
<!-- column: 1 -->

4. Implement a menu in a `while True` loop:
   - `1. Add user`
   - `2. List users`
   - `3. Find users by minimum age`
   - `4. Save & Exit`
5. For **Add user**:
   - Ask for username, email, age  
   - Validate age (`int`, >= 0) with `try` / `except`  
   - Assign a new `id` (max existing id + 1, or 1 if empty)  
   - Append to the in‑memory list
6. For **List users**:
   - Print all users in a neat table‑like format.  
7. For **Find users by minimum age**:
   - Ask the user for a minimum age (int, with validation)  
   - Use a **list comprehension** or loop to filter users  
8. On **Save & Exit**:
   - Write all users back to the CSV file  
   - Use `try` / `except` to handle file write errors and print a clear message.

**Bonus:**

- Wrap file‑related code in helper functions (`load_users`, `save_users`).  
- Use `else` / `finally` where it makes sense.

<!-- reset_layout -->

---

Practice 3 — Log Analyzer with Error Handling
=============================================


<!-- column_layout: [1, 1] -->

<!-- column: 0 -->


Create `log_analyzer.py` that reads a log file,  
extracts **basic statistics**, and survives bad input or missing files.

**Example log file (`app.log`):**

```text
2025-12-01 10:00:00 INFO User alice logged in
2025-12-01 10:05:23 ERROR Failed to load profile
2025-12-01 10:06:10 WARNING Slow response
2025-12-01 10:10:45 INFO User bob logged out
```

**Requirements:**

1. Ask the user for the **absolute path** to the log file.  
2. Try to open and read the file:
   - If it fails, print a friendly error and exit.  
3. For each line, try to parse it into parts:
   - date (string up to first space)  
   - time (string between first and second space)  
   - level (`INFO`, `ERROR`, `WARNING`, …)  
   - message (rest of the line)  
4. Use `split()` and **defensive programming**:
   - If a line does not have at least 4 parts, skip it with a warning.  
5. Use a **dictionary** to count how many messages for each level:

```python
counts = {"INFO": 0, "ERROR": 0, "WARNING": 0, ...}
```
<!-- column: 1 -->

6. Store all **ERROR** messages in a **list** of dictionaries:

```python
{
    "datetime": "2025-12-01 10:05:23",
    "message": "Failed to load profile"
}
```

7. After processing:
   - Print total lines processed  
   - Print count per log level  
   - Print all ERROR entries in a readable format  
8. Use at least one helper **function**, e.g. `parse_log_line(line)` that returns either a dict or `None`.

**Bonus:**

- Add a menu option to **filter by date** (e.g. show only entries that start with a given date string).  
- Handle user input errors with `try` / `except`.

<!-- reset_layout -->

---

Practice 4 — Task Manager with File Persistence & Exceptions
============================================================


<!-- column_layout: [1, 1] -->

<!-- column: 0 -->

Extend the earlier **task manager** idea into `task_manager_files.py` that  
stores tasks in a JSON‑like text format (you can invent a simple format) and uses error handling.

**Requirements:**

1. Each task is represented as a **dictionary**:

```python
{
    "id": int,
    "title": str,
    "priority": str,  # "high", "medium", "low"
    "completed": bool
}
```

2. At program start:
   - Ask for an **absolute path** to a task file (e.g. `tasks.txt`)  
   - Try to open and read it  
   - If file does not exist:
     - Start with an **empty list** of tasks  
     - Create the file when saving  
3. Choose a **simple line‑based format**, for example:

```text
1|Learn Python|high|False
2|Exercise|medium|True
```
<!-- column: 1 -->

4. Implement helper functions:
   - `load_tasks(path)` → returns list of task dictionaries (with `try` / `except`)  
   - `save_tasks(path, tasks)` → writes tasks to file safely  
5. Implement a `while` loop menu:
   - `1. Add task`
   - `2. Mark task as complete`
   - `3. List tasks`
   - `4. List incomplete tasks`
   - `5. Delete task`
   - `6. Save & Exit`
6. Use **safe integer parsing** with `try` / `except` for IDs and choices.  
7. When loading tasks:
   - Use `try` / `except` when splitting/parsing lines  
   - Skip malformed lines with a warning instead of crashing  
8. When saving tasks:
   - Catch file write errors and show a clear message.

**Bonus:**

- Add a small `Task` class with methods like `mark_done()` and `to_line()` / `from_line()`.  
- Use `finally` to print a goodbye or cleanup message no matter how the program exits.

<!-- reset_layout -->

---


