---
title: "Functions & Modular Code"
sub_title: "Python Course · Module 5"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Functions — Introduction
=========================
Functions group reusable code into named blocks.

Benefits:
- Avoid repetition  
- Improve readability  
- Easier debugging  
- Modular structure  

Basic structure:
```python
def name():
    pass
```

---

Creating Functions
=========================

```python
def greet():
    print("Hello!")
```

Call:

```python
greet()
```

Functions must be defined **before** calling.

---

Parameters
=========================

```python
def greet(name):
    print("Hello,", name)
```

Multiple parameters:

```python
def add(a, b):
    return a + b
```

---

Return Values
=========================

```python
def square(x):
    return x * x
```

Functions without `return` return `None`.

---

Multiple Returns
=========================

```python
def values():
    return 10, 20, 30
```

Unpacking:

```python
a, b, c = values()
```

---

Variable Scope
=========================

```python
x = 10      # global

def func():
    y = 5   # local
```

Local variables override global ones inside functions.

---

global Keyword
=========================

```python
count = 0

def inc():
    global count
    count += 1
```

Use sparingly; global state makes code harder to manage.

---

Lambda Functions
=========================

```python
square = lambda x: x * x
```

Often used inline:

```python
add = lambda a, b: a + b
```

---

Higher‑Order Functions
=========================

```python
nums = [1, 2, 3, 4]

squares = list(map(lambda x: x*x, nums))
```

Using normal function:

```python
def sq(x): return x*x
```

---

Modules — Importing
=========================

```python
import math
math.sqrt(16)
```

Selective:

```python
from math import sqrt
```

Rename:

```python
import math as m
```

---

Built‑in Modules
=========================

Examples:
- math  
- random  
- os  
- sys  
- datetime  

Example:
```python
import random
x = random.randint(1, 10)
```

---

Creating Your Own Module
=========================

File:
```
mymath.py
```

Content:
```python
def add(a, b):
    return a + b
```

Usage:
```python
import mymath
mymath.add(2, 3)
```

---

Organizing Code
=============================

```
project/
├── main.py
├── utils.py
└── math_ops.py
```

```python
from utils import greet
from math_ops import add
```

---

Example
=============================

```python {all|1-3|5-7|9-14} +line_numbers
# utils.py
def greet(name):
    return f"Hello {name}"

# math_ops.py
def multiply(a, b):
    return a * b

# main.py
from utils import greet
from math_ops import multiply

print(greet("Elnur"))
print(multiply(4, 5))
```

---

Mini Task
=============================

Create a project with:

1. `main.py`  
2. `converter.py` with:
   - km_to_miles(km)  
   - celsius_to_fahrenheit(c)  
3. Import into main.py  
4. Ask user input and print converted values  

---

