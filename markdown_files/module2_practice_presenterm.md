---
title: "Python Basics Practice"
sub_title: "Python Course · Module 2 Practice"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Module 2 Practice — Variables, Types & Operators
================================================

This practice module sits between Modules 2 and 3.

Goals:

- Get more **hands‑on** with variables and types  
- Become fluent with **input/output** and **type casting**  
- Practice arithmetic, comparison, and logical operators  
- Prepare your brain for data structures in Module 3  

Use this as a **lab deck**: lots of short exercises, less theory.

---

Warm‑Up — Quick Questions
==========================

Without running code, guess the results:

```python
1 + 2 * 3
(1 + 2) * 3
10 / 3
10 // 3
10 % 3
```

Then open a Python REPL or script file and **verify** your answers.

Why? Getting a “feel” for operator behavior makes later code easier to read.

---

Practice 1 — Simple Calculator
==============================

Task:

Create `calculator.py` inside `projects/module2_basics/` that:

1. Asks the user for two numbers.  
2. Converts them to `float`.  
3. Computes and prints:
   - sum  
   - difference  
   - product  
   - quotient (second not zero)  

Example interaction:

```text
Enter first number: 10
Enter second number: 3
Sum: 13.0
Difference: 7.0
Product: 30.0
Quotient: 3.3333333333
```

Try adding **rounding** with `round(value, 2)`.

---

Practice 2 — BMI Calculator
===========================

Create `bmi.py` that:

1. Asks for weight in kg (`float`)  
2. Asks for height in meters (`float`)  
3. Computes BMI = weight / (height ** 2)  
4. Prints BMI rounded to 1 decimal place  

Add basic classification (just using if/elif):

- BMI < 18.5 → “Underweight”  
- 18.5 ≤ BMI < 25 → “Normal”  
- 25 ≤ BMI < 30 → “Overweight”  
- ≥ 30 → “Obese”  

This connects arithmetic, comparison operators, and string formatting.

---

Practice 3 — String Playground
==============================

In `strings_play.py`:

1. Ask for the user’s full name (one line of text).  
2. Print:
   - Length of the string  
   - Uppercase version  
   - Lowercase version  
   - First and last character (if not empty)  
3. Create a **short username** suggestion:
   - first 3 letters of the name (no spaces)  
   - plus the string length  

Example:

```text
Full name: Ada Lovelace
Length: 12
Upper: ADA LOVELACE
Lower: ada lovelace
Short username: Ada12
```

---

Practice 4 — Truth Tables with `and` / `or` / `not`
===================================================

In `logic_table.py`, without using user input:

1. Create variables `a = True`, `b = False`.  
2. Print a simple truth table:

```text
a      b      a and b   a or b   not a
True   False  False     True     False
...
```

Use **f‑strings** for clean formatting.

Goal: see how logical operators behave for all combinations.

---

Practice 5 — Age Gate
=====================

`age_gate.py`:

1. Ask user for age (convert to `int`).  
2. Use comparisons and `and`/`or` to decide:
   - `< 13` → “Child account”  
   - `13–17` → “Teen account”  
   - `18+` → “Adult account”  
3. Use a boolean variable `has_parent_consent` (True/False) and update messages:
   - If `< 18` and no consent → “Access denied”  

This will warm you up for more structured `if` logic and loops later.

---

Practice 6 — Simple Tip Calculator
==================================

`tip.py`:

1. Ask for bill amount (`float`).  
2. Ask for desired tip percentage (e.g., 10, 15, 20).  
3. Compute tip and total.  
4. Print results with 2 decimal places.  

Extra: allow the user to input tip as either `0.15` or `15`, and handle both correctly.

---

Mini Project — Profile Summary
==============================

Create `profile.py` that:

1. Asks for:
   - name (`str`)  
   - age (`int`)  
   - city (`str`)  
   - favorite number (`int`)  
2. Uses arithmetic and logic to compute:
   - age next year  
   - whether the favorite number is even or odd  
3. Prints a nicely formatted multi‑line summary using an f‑string.

Example output:

```text
Hello, Ada!
You live in London and next year you will be 37.
Your favorite number 42 is even.
```

---


