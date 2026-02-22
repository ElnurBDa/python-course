---
title: "Python Basics — Extra Practice Solutions"
sub_title: "Python Course · Module 2 Extra Practice Solutions"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Extra Practice 1 — Temperature Converter (Solution)
===================================================

**Basic Solution**:

```python
# Get temperature in Celsius from user
celsius = float(input("Enter temperature in Celsius: "))

# Convert to Fahrenheit
fahrenheit = celsius * 9 / 5 + 32

# Print result rounded to 1 decimal place
print(f"{celsius:.1f}°C is {fahrenheit:.1f}°F")
```

Key ideas:
- Uses `float` for decimal input  
- Uses arithmetic operators (`*`, `/`, `+`)  
- Uses an f-string with formatting (`:.1f`)  

---

Extra Practice 2 — Pass/Fail Checker (Solution)
===============================================

**Basic Solution**:

```python
# Get exam score
score = int(input("Enter your exam score (0-100): "))

# Pass if score is at least 50
is_pass = score >= 50

# High score if at least 90
is_high_score = score >= 90

# Print summary
print(f"Score: {score}")
print(f"Pass status: {is_pass}")
print(f"High score (>= 90): {is_high_score}")
```

**With Additional Feedback**:

```python
score = int(input("Enter your exam score (0-100): "))

is_pass = score >= 50
is_high_score = score >= 90

print(f"Score: {score}")
print(f"Pass status: {is_pass}")
print(f"High score (>= 90): {is_high_score}")

if not is_pass:
    print("You did not pass. Review the material and try again!")
elif is_high_score:
    print("Excellent! This is a high score!")
else:
    print("Good job! You passed.")
```

This reinforces:
- **Comparison operators** (`>=`)  
- **Logical reasoning** with booleans  
- Simple **selection** (`if` / `elif` / `else`)  

---

Extra Practice 3 — Monthly Budget Helper (Solution)
===================================================

**Basic Solution**:

```python
# Get income and expenses
income = float(input("Enter monthly income: "))
rent = float(input("Enter monthly rent: "))
food = float(input("Enter monthly food cost: "))
transport = float(input("Enter monthly transport cost: "))

# Calculate total expenses
total_expenses = rent + food + transport

# Calculate remaining money
remaining = income - total_expenses

# Check if over budget
is_over_budget = total_expenses > income

# Print formatted summary
print(f"\nTotal expenses: {total_expenses:.2f}")
print(f"Remaining: {remaining:.2f}")
print(f"Over budget: {is_over_budget}")
```

**Alternative Approach** (using an accumulator variable):

```python
income = float(input("Enter monthly income: "))

# Start with zero and use assignment operators to accumulate
total_expenses = 0.0

rent = float(input("Enter monthly rent: "))
total_expenses += rent

food = float(input("Enter monthly food cost: "))
total_expenses += food

transport = float(input("Enter monthly transport cost: "))
total_expenses += transport

remaining = income - total_expenses
is_over_budget = total_expenses > income

print("\n=== Monthly Budget Summary ===")
print(f"Total expenses: {total_expenses:.2f}")
print(f"Remaining: {remaining:.2f}")
print(f"Over budget: {is_over_budget}")
```

This practises:
- **Variables** and **arithmetic operators**  
- **Assignment operators** (`+=`)  
- **Booleans** and comparison (`>`), plus formatted output  

---


