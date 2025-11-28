---
title: "Python Course Syllabus"
author: "ElnurBDa"
---

## Overview

This course introduces Python programming from fundamentals to small full‑stack applications, with an emphasis on practical skills, security, and tooling.

Presentations are organized as Markdown slide decks (`*_presenterm.md`) plus a few practice/bridge modules.

---

## Module List

### Module 1 — Foundations of Computing & Programming (`module1_presenterm.md`)
- What programming is and why it matters  
- Compilers vs interpreters  
- Algorithms and algorithm design basics  
- Installing Python and running simple scripts  

### Module 1.5 — Environment & Workflow Lab (`module1_5_presenterm.md`)
- Course folder layout (`markdown_files/`, `projects/`)  
- Terminal navigation (`cd`, `ls`, `pwd`)  
- Creating and activating a virtual environment (`python3 -m venv .venv`)  
- Installing packages inside a venv and using `pathlib` for safe paths  

### Module 2 — Python Basics (`module2_presenterm.md`)
- Variables and basic data types (`int`, `float`, `str`, `bool`, `None`)  
- Input/output (`input()`, `print()`, f‑strings)  
- Arithmetic, comparison, logical, and assignment operators  
- Type casting between common types  

### Module 2 Practice — Python Basics Practice (`module2_practice_presenterm.md`)
- Short labs to solidify Module 2 concepts:  
  - Simple calculator, BMI calculator, string playground  
  - Truth tables for `and`/`or`/`not`  
  - Age gate and tip calculator  
  - Profile summary mini‑project  

### Module 3 — Data Structures (`module3_presenterm.md`)
- Lists, strings, tuples, sets, dictionaries  
- Basic operations, indexing, and iteration  
- Introduces **list comprehensions** and when to use them  
- Choosing the right data structure for a problem  

### Module 4 — Control Flow (`module4_presenterm.md`)
- Conditional statements (`if`, `elif`, `else`) and nesting  
- `for` and `while` loops  
- Loop control: `break`, `continue`, `pass`  
- Loop patterns with ranges and basic exercises  

### Module 4.5 — From Loops to Reusable Functions (`module4_5_presenterm.md`)
- Refactoring repeated loop logic into named functions  
- Separating input, business logic, and output  
- Using a `main()` function and the `if __name__ == "__main__":` pattern  
- Number analyzer mini‑project built from helper functions  

### Module 5 — Functions & Modular Code (`module5_presenterm.md`)
- Defining and calling functions, parameters, and return values  
- Multiple returns, scope, and `global` (used sparingly)  
- Lambda functions and higher‑order functions (`map`)  
- Modules and imports, project layout with multiple `.py` files  
- Intro to **classes and objects**, attributes vs methods, and a small OOP task manager exercise  

### Module 5.5 — Function‑Driven Mini Projects (`module5_5_presenterm.md`)
- Applying functions and modules to small CLI‑style projects  
- Multi‑file layouts like `converter_project/`, `grades_project/`, `menu_project/`  
- Using a simple `config.py` module for configuration constants  
- Prepares code structure for later file I/O and error handling  

### Module 6 — Files & Error Handling (`module6_presenterm.md`)
- Text and CSV file reading/writing (`open`, `with`, `csv` module)  
- File modes, absolute vs relative paths  
- Exceptions, `try`/`except`, multiple exceptions, `else` and `finally`  
- Patterns for top‑level error handling in larger scripts  
- Log tracker mini‑task combining files and error handling  

### Module 6.5 — Files vs Databases (`module6_5_presenterm.md`)
- Comparing text/CSV files with SQLite databases  
- Strengths and weaknesses of each for logs, configs, and core data  
- Example migration from `users.csv` to a SQLite `users` table  
- Design questions to decide when to stay with files vs move to a DB  

### Module 7 — Databases & SQL (`module7_presenterm.md`)
- What databases are and when to use them  
- SQLite basics, tables, rows, columns, and relationships  
- SQL data types, `CREATE TABLE`, `INSERT`, `SELECT`, `UPDATE`, `DELETE`  
- Joins, aggregates, and constraints (`PRIMARY KEY`, `UNIQUE`, `FOREIGN KEY`)  
- SQLite CLI usage and Python `sqlite3` CRUD helpers  

### Module 7.5 — From Database to API (`module7_5_presenterm.md`)
- Mapping CRUD functions to HTTP verbs and REST‑style endpoints  
- Designing routes (paths, methods, parameters) that wrap existing SQL helpers  
- Thinking about status codes (`200`, `201`, `400`, `404`, `500`)  
- Creating an API blueprint for future Flask/FastAPI implementations  

### Module 8 — Web Basics (`module8_presenterm.md`)
- How the web works: browser → DNS → server → HTML/CSS/JS  
- HTML structure and core tags, basic CSS and inline JavaScript  
- Serving static files with `python -m http.server`  
- HTTP request/response anatomy, status codes, and APIs as “digital waiters”  
- JSON as a data format and how Python’s `requests` library consumes APIs  
- Using virtual environments with `requests` and sending data with `POST`  

### Module 9 — Web Apps in Practice (`module9_presenterm.md`)
- Web application architecture: frontend, backend, database  
- Minimal Flask backend for a To‑Do API (in‑memory list with optional DB sketch)  
- HTML/JS frontend that calls the API and updates the DOM  
- End‑to‑end flow: browser ↔ backend ↔ SQLite  
- Student Manager mini‑project as a full‑stack exercise  

### Module 10 — Security & Privacy Basics (`module10_presenterm.md`)
- Trust boundaries and input validation (CLI and conceptual web/API input)  
- SQL injection and safe **parameterized queries**  
- Safer logging: avoiding passwords, tokens, and sensitive data in logs  
- High‑level password storage concepts (hashing, salts, password‑safe libraries)  
- Basic ideas for secrets/config management and avoiding info leakage in error messages  

### Module 11 — CLI Tools, Logging & Advanced Python (`module11_presenterm.md`)
- Building real CLIs with `argparse` (flags, options, subcommands)  
- Connecting CLI subcommands to file/DB logic from earlier modules  
- Using the `logging` module, log levels, and logging to files  
- Advanced language features: dict comprehensions, generator expressions, `*args`/`**kwargs`, keyword‑only defaults, and simple decorators (`@log_calls`, `@timed`)  
- CLI admin tool mini‑project that combines argparse, SQLite, logging, comprehensions, and decorators  

---

## Suggested Learning Path

1. Core Python and environment: Modules **1 → 1.5 → 2 → 2 Practice → 3 → 4 → 4.5 → 5 → 5.5**  
2. Persistence and errors: Modules **6 → 6.5 → 7 → 7.5**  
3. Web & full‑stack: Modules **8 → 9**  
4. Hardening and tooling: Modules **10 → 11**  

Practice modules and bridge modules can be interleaved as labs between the main conceptual modules.

---


