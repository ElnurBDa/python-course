---
title: "Python Basics — Extra Practice"
sub_title: "Python Course · Module 2 Extra Practice"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Extra Practice 1 — Temperature Converter
========================================

Task:

Create `temp_converter.py` inside `projects/module2_basics/` that:

1. Asks the user for a temperature in Celsius (`float`).  
2. Converts it to Fahrenheit using the formula:
\[
F = C \times \frac{9}{5} + 32
\]
3. Prints both Celsius and Fahrenheit values, rounded to 1 decimal place.  

Example interaction:

```text
Enter temperature in Celsius: 25
25.0°C is 77.0°F
```

Use **variables** to store intermediate results and **f‑strings** for formatting.

---

Extra Practice 2 — Pass/Fail Checker
====================================

Task:

Create `pass_fail.py` inside `projects/module2_basics/` that:

1. Asks the user for their exam score out of 100 (`int`).  
2. Uses **comparison** and **logical operators** to determine:  
   - If the score is at least 50 → `"Pass"`  
   - Otherwise → `"Fail"`  
3. Additionally, create a boolean variable `is_high_score` that is `True` if the score is at least 90.  
4. Print a short summary showing the score, pass/fail status, and whether it’s a high score.  

Example interaction:

```text
Enter your exam score (0-100): 92
Score: 92
Pass status: True
High score (>= 90): True
```

Use **type conversion** if needed and keep all checks inside Python, not by “eyeballing” the values.

---

Extra Practice 3 — Monthly Budget Helper
========================================

Task:

Create `budget_helper.py` inside `projects/module2_basics/` that:

1. Asks the user for:  
   - monthly income (`float`)  
   - monthly rent (`float`)  
   - monthly food costs (`float`)  
   - monthly transport costs (`float`)  
2. Calculates:  
   - total expenses  
   - remaining money after expenses  
3. Creates a boolean variable `is_over_budget` which is `True` if expenses are greater than income.  
4. Prints a nicely formatted summary with 2 decimal places.  

Example interaction:

```text
Enter monthly income: 1200
Enter monthly rent: 600
Enter monthly food cost: 250.5
Enter monthly transport cost: 80

Total expenses: 930.50
Remaining: 269.50
Over budget: False
```

Use **arithmetic**, **assignment operators**, and **booleans** to practise concepts from Module 2.

---


