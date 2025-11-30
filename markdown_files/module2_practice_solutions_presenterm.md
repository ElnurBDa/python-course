---
title: "Python Basics Practice — Solutions"
sub_title: "Python Course · Module 2 Practice Solutions"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Warm‑Up — Quick Questions (Answers)
====================================

```python
1 + 2 * 3        # 7 (multiplication first: 2*3=6, then 1+6=7)
(1 + 2) * 3      # 9 (parentheses first: 1+2=3, then 3*3=9)
10 / 3           # 3.3333333333333335 (float division)
10 // 3          # 3 (floor division, integer result)
10 % 3           # 1 (remainder: 10 divided by 3 is 3 with remainder 1)
```

**Key takeaway**: Operator precedence matters! Multiplication/division happen before addition/subtraction.

---

Practice 1 — Simple Calculator (Solution)
==========================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Basic Solution**:

```python
# Get two numbers from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Calculate operations
sum_result = num1 + num2
difference = num1 - num2
product = num1 * num2

# Print results
print(f"Sum: {sum_result}")
print(f"Difference: {difference}")
print(f"Product: {product}")

# Handle division (check for zero)
if num2 != 0:
    quotient = num1 / num2
    print(f"Quotient: {round(quotient, 2)}")
else:
    print("Quotient: Cannot divide by zero!")
```

<!-- column: 1 -->
**With Rounding**:

```python
# Get two numbers from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Calculate operations
sum_result = round(num1 + num2, 2)
difference = round(num1 - num2, 2)
product = round(num1 * num2, 2)

# Print results
print(f"Sum: {sum_result}")
print(f"Difference: {difference}")
print(f"Product: {product}")

# Handle division (check for zero)
if num2 != 0:
    quotient = round(num1 / num2, 2)
    print(f"Quotient: {quotient}")
else:
    print("Quotient: Cannot divide by zero!")
```

<!-- reset_layout -->

---

Practice 2 — Truth Tables (Solution)
=====================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Basic Solution**:

```python
# Create boolean variables
a = True
b = False

# Print header
print(f"{'a':<8} {'b':<8} {'a and b':<12} {'a or b':<12} {'not a':<12}")
print("-" * 60)

# Print first row (a=True, b=False)
print(f"{str(a):<8} {str(b):<8} {str(a and b):<12} {str(a or b):<12} {str(not a):<12}")

# Print second row (a=True, b=True)
a = True
b = True
print(f"{str(a):<8} {str(b):<8} {str(a and b):<12} {str(a or b):<12} {str(not a):<12}")

# Print third row (a=False, b=True)
a = False
b = True
print(f"{str(a):<8} {str(b):<8} {str(a and b):<12} {str(a or b):<12} {str(not a):<12}")

# Print fourth row (a=False, b=False)
a = False
b = False
print(f"{str(a):<8} {str(b):<8} {str(a and b):<12} {str(a or b):<12} {str(not a):<12}")
```

<!-- column: 1 -->
**More Elegant Solution** (using a loop):

```python
# Print header
print(f"{'a':<8} {'b':<8} {'a and b':<12} {'a or b':<12} {'not a':<12}")
print("-" * 60)

# Generate all combinations
combinations = [
    (True, False),
    (True, True),
    (False, True),
    (False, False)
]

# Print each row
for a, b in combinations:
    print(f"{str(a):<8} {str(b):<8} {str(a and b):<12} {str(a or b):<12} {str(not a):<12}")
```

<!-- reset_layout -->

---

Practice 3 — Simple Tip Calculator (Solution)
==============================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Basic Solution**:

```python
# Get bill amount
bill = float(input("Enter bill amount: "))

# Get tip percentage
tip_percent = float(input("Enter tip percentage (e.g., 10, 15, 20): "))

# Calculate tip amount
tip_amount = bill * (tip_percent / 100)

# Calculate total
total = bill + tip_amount

# Print results with 2 decimal places
print(f"Bill: ${bill:.2f}")
print(f"Tip ({tip_percent}%): ${tip_amount:.2f}")
print(f"Total: ${total:.2f}")
```

<!-- column: 1 -->
**Alternative Approach** (more detailed):

```python
# Get bill amount
bill = float(input("Enter bill amount: $"))

# Get tip percentage
tip_percent = float(input("Enter tip percentage: "))

# Calculate tip and total
tip_amount = round(bill * (tip_percent / 100), 2)
total = round(bill + tip_amount, 2)

# Print formatted results
print(f"\nBill: ${bill:.2f}")
print(f"Tip ({tip_percent}%): ${tip_amount:.2f}")
print(f"Total: ${total:.2f}")
```

<!-- reset_layout -->

---

Mini Project — Profile Summary (Solution)
=========================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Basic Solution**:

```python
# Get user information
name = input("Enter your name: ")
age = int(input("Enter your age: "))
city = input("Enter your city: ")
favorite_number = int(input("Enter your favorite number: "))

# Calculate age next year
age_next_year = age + 1

# Calculate favorite number squared
number_squared = favorite_number ** 2

# Print formatted summary
print(f"\nHello, {name}!")
print(f"You live in {city} and next year you will be {age_next_year}.")
print(f"Your favorite number {favorite_number} squared is {number_squared}.")
```

<!-- column: 1 -->
**Alternative Approach** (more detailed formatting):

```python
# Get user information
name = input("Enter your name: ")
age = int(input("Enter your age: "))
city = input("Enter your city: ")
favorite_number = int(input("Enter your favorite number: "))

# Calculations
age_next_year = age + 1
number_squared = favorite_number ** 2

# Print nicely formatted summary
print("\n" + "=" * 40)
print(f"Hello, {name}!")
print(f"You live in {city} and next year you will be {age_next_year}.")
print(f"Your favorite number {favorite_number} squared is {number_squared}.")
print("=" * 40)
```

<!-- reset_layout -->

---