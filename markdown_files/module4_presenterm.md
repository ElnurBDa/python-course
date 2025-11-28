---
title: "Control Flow"
sub_title: "Python Course · Module 4"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Control Flow — Overview
=======================
Control flow decides **how a program behaves**:

- Conditional statements  
- Logical operators  
- Loops (`for`, `while`)  
- Loop control (`break`, `continue`, `pass`)

This module teaches how Python makes decisions and repeats actions.

---

Conditional Statements
======================

Basic structure:

```python
if condition:
    block
```

A condition must evaluate to **True** or **False**.

Example:

```python +exec
age = 20
if age >= 18:
    print("Adult")
```

---

if / else
==========

```python
if condition:
    action_if_true
else:
    action_if_false
```

Example:

```python +exec
temperature = 10

if temperature > 15:
    print("Warm")
else:
    print("Cold")
```

---

if / elif / else
================

Used when multiple conditions must be checked in order.

```python +exec
grade = "?"
score = 75

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"

print(grade)
```

---

Logical Operators in Conditions
===============================

```python
and   # both True
or    # one True
not   # invert
```

Examples:

```python
age = 20
has_id = True

age >= 18 and has_id
age < 18 or has_id
not has_id
```

---

Nested Conditions
=================

```python +exec
age = 25
citizen = True

if age >= 18:
    if citizen:
        print("Eligible")
    else:
        print("Not eligible")
```

Avoid deep nesting when possible.

---

for Loop — Basics
==================

Iterates over a sequence:

```python +exec
for x in [1, 2, 3]:
    print(x)
```

Strings:

```python +exec
for char in "Python":
    print(char)
```

---

for Loop with range()
=====================

```python +exec
for i in range(5):
    print(i)
```

Custom range:

```python +exec
for i in range(2, 10, 2):
    print(i)
```

---

while Loop
==========

Repeats while a condition is **True**.

```python +exec
count = 0
while count < 5:
    print(count)
    count += 1
```

---

Loop Control — break
====================

Stops the loop immediately.

```python +exec
for i in range(10):
    if i == 5:
        break
    print(i)
```

---

Loop Control — continue
=======================

Skips current iteration.

```python +exec
for i in range(5):
    if i % 2 == 0:
        continue
    print(i)
```

---

Loop Control — pass
===================

`pass` does nothing — placeholder.

```python +exec
for i in range(3):
    pass
```

---

Loop Patterns & Comprehensions
==============================

Often we use loops to **build new lists** from old ones.

Classic pattern:

```python +exec
nums = [1, 2, 3, 4, 5]
evens = []

for n in nums:
    if n % 2 == 0:
        evens.append(n)

print("evens:", evens)
```

Same logic using a **list comprehension** (from Module 3):

```python +exec
nums = [1, 2, 3, 4, 5]
evens = [n for n in nums if n % 2 == 0]
print("evens:", evens)
```

Use whichever is **clearer** to you and your team; for multiple complex steps, prefer the classic loop.

---

Example
===========================

```python {all|1|3-7|4-5|6-7|9} +line_numbers +exec 
total = 0

for i in range(1, 6):
    if i % 2 == 0:
        total += i
    else:
        continue

print("Sum of even numbers:", total)
```

---

Mini Task
============================

<!-- column_layout: [1, 2] -->
<!-- column: 0 -->
Write a script that:

1. Asks the user for a number  
2. Prints all numbers from 1 to that number  
3. Prints only **even numbers**  
4. Skips odd numbers using `continue`  
5. Stops entirely if number exceeds 100 using `break`  

<!-- column: 1 -->
![](assets/Python_meme_2.jpg)
<!-- reset_layout -->
---

