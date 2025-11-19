---
title: "Data Structures"
sub_title: "Python Course · Module 3"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Data Structures — Overview
===========================
Python provides multiple built‑in structures for organizing data:

- **Lists**
- **Strings**
- **Tuples**
- **Sets**
- **Dictionaries**
- Choosing the right structure

Each structure has unique properties and use‑cases.

---


Lists
===========================
Lists store **ordered, changeable** sequences.

```python +exec
numbers = [10, 20, 30]

# Operations:
numbers.append(40)
numbers[1] = 99
numbers.remove(10)
print(numbers)

# List indexing:
print(numbers[0])
print(numbers[-1])
print(numbers[1:3])
```

---

List Characteristics
====================

<!-- column_layout: [1,1] -->

<!-- column: 0 -->
Advantages:
- Mutable  
- Dynamic size  
- Supports duplicates  

<!-- column: 1 -->
Use‑cases:
- Collections  
- Queues  
- Storing ordered items  

<!-- reset_layout -->

---

Strings
===========================
Strings represent **text**.

Properties:
- Ordered  
- Immutable  
- Indexable  
- Iterable  

```python +exec
s = "Hello"

a = s[0]       # first character
b = s[-1]      # last character
c = s.upper()  # all upper chars
d = len(s)     # Length of the string

print(a, b, c, d)
```

---

Tuples
===========================
Tuples store **ordered, immutable** sequences.

```python
point = (10, 20)
```

Benefits:
- Fast  
- Secure from modification  
- Memory‑efficient  

Tuple unpacking:
```python
x, y = point
```

---

Tuple vs List
===========================
- Need modification → **List**
- Need fixed, reliable structure → **Tuple**
- Performance required → **Tuple**

---

Sets
===========================
Sets store **unordered, unique** elements.

```python
colors = {"red", "blue", "green"}
```

Operations:
```python
colors.add("yellow")
colors.remove("red")
```

Useful for:
- membership checks  
- removing duplicates  
- mathematical operations  

---

Set Operations
===========================

```python +exec
a = {1, 2, 3}
b = {3, 4, 5}

x1 = a | b    # union
x2 = a & b    # intersection
x3 = a - b    # difference
x4 = a ^ b    # symmetric difference

print(x1, x2, x3, x4)
```

---

Dictionaries
===========================
Dictionaries store **key : value** pairs.

```python +exec
user = {
    "name": "Alice",
    "age": 25,
    "city": "Baku"
}

# Access:
n = user["name"]
print(n)
print()

# Modify:
user["age"] = 26
user["country"] = "Azerbaijan"
print(user)
```

---

Dictionary Operations
===========================

```python +exec
user = {
    "name": "Alice",
    "age": 25,
    "city": "Baku"
}

a = user.keys()
b = user.values()
c = user.items()
d = "city" in user  # check key existence
e = "Baku" in user

print(a)
print(b)
print(c)
print(d)
print(e)
```

Dictionaries are ideal for structured data.

---

Example
===============================

```python +line_numbers +exec
student = {
    "name": "Elnur",
    "scores": [90, 85, 97],
    "passed": True
}

average = sum(student["scores"]) / len(student["scores"])

print(student["name"], "average:", average)
```

---

Choosing the Right Data Structure
==================================

| Type        | Ordered | Mutable | Unique | Best For |
|-------------|---------|---------|--------|----------|
| **String**  | Yes     | No      | N/A    | Text     |
| **List**    | Yes     | Yes     | No     | General collections |
| **Tuple**   | Yes     | No      | No     | Fixed data |
| **Set**     | No      | Yes     | Yes    | Unique items |
| **Dict**    | Keys no | Yes     | Keys unique | Structured data |

---

Mini Task — Apply Everything
============================
Create a script that:

1. Stores student info in a dictionary  
2. Contains: name, age, list of grades  
3. Calculates average grade  
4. Prints a formatted summary  

---

