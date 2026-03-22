---
title: "Python Fundamentals — Mixed Mini Tasks"
sub_title: "Python Course · Short Practice Set"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Task 1 — Sports Locker (variables & types)
==========================================

Create two variables: a player `name` (`str`) and a `jersey` number (`int`).  
Print one line that shows both using an **f‑string**.

Bonus: add a `float` for `height_m` and print it with **one** decimal place.

Expected behavior:

```text
Player: Alex — jersey 10
```

With bonus (example):

```text
Player: Alex — jersey 10 — height 1.8 m
```

---

Task 2 — Recipe Scaler (arithmetic)
===================================

A cake needs `3` eggs for `4` servings. Ask the user how many servings they want (`int`).  
Compute how many **whole eggs** are needed using proportional math, and print the result.

Use `//` or `round()` — pick one and say which you chose in a comment.

Expected behavior:

```text
How many servings? 8
Eggs needed: 6
```

---

Task 3 — Username Cleanup (strings)
=====================================

Ask for a username. Print:
- stripped of leading/trailing spaces  
- in **lower** case  
- its **length**

Expected behavior:

```text
Username:   Ada  
Stripped: Ada
Lower: ada
Length: 3
```

---

Task 4 — Quiz Gate (`input` & conversion)
===========================================

Ask: “How many points out of 100?” Read as `int`.  
If the value is **not** between `0` and `100`, print `"Invalid"` and stop.  
Otherwise print `"OK"` and the points as a `float` divided by `100` (e.g. `0.85`).

Expected behavior:

```text
How many points out of 100? 150
Invalid
```

```text
How many points out of 100? 85
OK
0.85
```

---

Task 5 — Traffic Light (booleans)
=================================

Set booleans: `is_green`, `is_pedestrian_waiting`.  
Print `True` if the car **may go**: green **and not** waiting pedestrian.  
Otherwise print `False`.

Expected behavior (examples — your labels may differ, values must match the logic):

```text
is_green = True, is_pedestrian_waiting = False
May go: True
```

```text
is_green = True, is_pedestrian_waiting = True
May go: False
```

---

Task 6 — Grade Letter (`if` / `elif` / `else`)
==============================================

Given `score` (0–100) as a variable in code (no input needed), print **one** letter:  
`A` ≥ 90, `B` ≥ 80, `C` ≥ 70, else `D`.

Expected behavior (for `score = 82` in code):

```text
B
```

---

Task 7 — Countdown Timer (`for` + `range`)
==========================================

Print a countdown from `5` down to `1`, then print `"Lift off!"`.  
Use a `for` loop with `range`.

Expected behavior:

```text
5
4
3
2
1
Lift off!
```

---

Task 8 — Guess Until Five (`while`)
===================================

Loop: ask the user for an `int`.  
Stop when the number is `5`.  
Print how many **attempts** it took (count starts at `0` or `1` — be consistent).

Expected behavior:

```text
Enter an integer: 2
Enter an integer: 7
Enter an integer: 5
Attempts: 3
```

---

Task 9 — Shopping List (lists)
==============================

Start with `items = []`. Add three strings using `.append()`.  
Print the **first** and **last** item using indexing.  
Print the list **length**.

Expected behavior (example items `milk`, `bread`, `eggs`):

```text
First: milk
Last: eggs
Length: 3
```

---

Task 10 — Country Capitals (dicts)
===================================

Create a dict mapping **three** country names to capital cities.  
Ask the user for a country; print the capital, or `"Unknown"` if missing.

Expected behavior:

```text
Country? France
Paris
```

```text
Country? Atlantis
Unknown
```

---

Task 11 — Skip Multiples of Three (`continue`)
==============================================

Use a `for` loop over `range(1, 21)`.  
Print each number **except** multiples of `3` (use `continue`).

Expected behavior (one number per line; `3`, `6`, `9` … do not appear):

```text
1
2
4
5
7
8
10
11
13
14
16
17
19
20
```

---

Task 12 — First Negative (`break`)
==================================

Given a list of integers in code, e.g. `[4, 1, -2, 9]`, print numbers in order **until** the first negative; then **stop** the loop with `break`.

Expected behavior (for `[4, 1, -2, 9]`):

```text
4
1
```

---

Task 13 — Rectangle Helper (functions)
======================================

Write `def area(length, width)` returning the area.  
Write `def perimeter(length, width)` returning the perimeter.  
Call both with `length=5`, `width=3` and print results.

Expected behavior:

```text
Area: 15
Perimeter: 16
```

---

Task 14 — Greet or Silent (function + default)
==============================================

Write `def greet(name, loud=False)`.  
If `loud` is `True`, print the name in **upper** case inside the greeting; else normal case.  
Call it twice to show both behaviors.

Expected behavior (wording may vary; show normal vs loud):

```text
Hello, Sam
Hello, SAM
```

---

Task 15 — Word Lengths (loop + list)
====================================

Given `words = ["cat", "python", "sky"]`, build a **new** list of each word’s **length** using a `for` loop and `.append()`.  
Print the new list.

Bonus: do the same in **one line** with a list comprehension (optional).

Expected behavior:

```text
[3, 6, 3]
```

---

<!-- end_slide -->
<!-- font_size: 5 -->
<!-- alignment: center -->
<!-- jump_to_middle -->

# Thanks!

<!-- font_size: 1 -->

#### By ElnurBDa
