---
title: "Python Basics Practice"
sub_title: "Python Course · Module 2 Practice"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
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

Practice 2 — Truth Tables with `and` / `or` / `not`
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

---

Practice 3 — Simple Tip Calculator
==================================

`tip.py`:

1. Ask for bill amount (`float`).  
2. Ask for desired tip percentage (e.g., 10, 15, 20).  
3. Compute tip and total.  
4. Print results with 2 decimal places.  

---

Mini Project — Profile Summary
==============================

Create `profile.py` that:

1. Asks for:
   - name (`str`)  
   - age (`int`)  
   - city (`str`)  
   - favorite number (`int`)  
2. Uses arithmetic to compute:
   - age next year  
   - favorite number squared  
3. Prints a nicely formatted multi‑line summary using an f‑string.

Example output:

```text
Hello, Ada!
You live in London and next year you will be 37.
Your favorite number 42 squared is 1764.
```

---

<!-- end_slide -->
<!-- font_size: 5 -->
<!-- alignment: center -->
<!-- jump_to_middle -->

# Thanks!

<!-- font_size: 1 -->

#### By ElnurBDa
