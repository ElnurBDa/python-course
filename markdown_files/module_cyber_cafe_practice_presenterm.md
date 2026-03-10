---
title: "Cyber Café Order & Loyalty Lab"
sub_title: "Python Course · Integrated Practice"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Scenario — Cyber Café
=====================
You are building a **terminal-based helper app** for a small cyber café.

Important rule for this lab:
- You will work only in **one Python file**: `cyber_cafe_app.py`
- In each part, you **extend and improve** the same file

By the end of this lab, the app will:
- Show a **menu** of drinks and snacks
- Let a customer **add items to an order**
- Calculate **totals, discounts, and tax**
- Track **loyalty points** for regular customers

---

Part 1 — Single Order Calculator
================================
Goal: use **variables**, **input()**, and **arithmetic operators** to calculate the price of a single item.

Incomplete Example:

```python +exec
item_name = "Latte"
item_price = 4.5
quantity = 2

total_cost = # ...

print("You ordered ") # ...
```

---

Part 1 — Task
=============
Create (or open) `cyber_cafe_app.py` inside `projects/cyber_cafe/` and:

1. Asks the user for:
   - item name (`str`)
   - item price (`float`)
   - quantity (`int`)
2. Calculates:
   - `total_cost = item_price * quantity`
3. Prints a summary using an f‑string.

Example interaction:

```text
Item name: Latte
Item price: 4.5
Quantity: 2

You ordered 2 x Latte
Total cost: 9.0 AZN
```

Bonus:
- Add a **service fee** (e.g. 5%) and show:
  - subtotal
  - service fee
  - final total

---

Part 2 — Adding Logic: Discounts & Flags
========================================
Goal: use **comparison** and **logical operators** to add pricing rules.

Stay in the **same script** and extend your existing code.

Suggested rules:
- If `total_cost` is **at least 20 AZN**, give a **10% discount**
- Create booleans:
  - `is_large_order` → `True` if `quantity >= 3`
  - `has_discount` → `True` if discount applied

Example goal (what the program should *behave* like):

```text
Item name: Latte
Item price: 4.5
Quantity: 5

Total before discount: 22.5 AZN
Discount applied: 2.25 AZN
Final total: 20.25 AZN
Large order: True
```

---

Part 2 — Task
=============
Update your code to:

1. Compute `is_large_order` and `has_discount` using comparison/logical operators.  
2. If `has_discount` is `True`, subtract a 10% discount.  
3. Print:
   - `Total before discount`
   - `Discount applied` (amount)
   - `Final total`
   - `Large order:` True/False

Example output:

```text
Total before discount: 24.0 AZN
Discount applied: 2.4 AZN
Final total: 21.6 AZN
Large order: True
```

---

Part 3 — Café Menu with Data Structures
=======================================
Now we move from **one item** to a **menu**.

We will use:
- A **dictionary** for the menu (`item name → price`)
- A **list** for the current order (cart)

Example of how the menu might look **when printed** (you will decide how to implement it):

```text
Menu items:
Espresso: 3.0 AZN
Latte: 4.5 AZN
Tea: 2.0 AZN
Brownie: 3.5 AZN
```

---

Part 3 — Cart Structure
=======================
We need a way to store what the customer ordered.

Two possible ideas:
- A **list of dictionaries** (each element has name + quantity)
- A **dictionary of item → quantity**

For this lab we will use the **second idea** (item → quantity), because it is simpler to loop over later.

---

Part 3 — Task
=============
Below your previous code (or by refactoring it), add a new section that:

1. Defines a `menu` dictionary with **at least 4 items**.  
2. Creates an empty `cart` dictionary.  
3. Manually (no input yet) fills `cart` with **two example items**, e.g.:
   - `"Latte": 2`
   - `"Brownie": 1`
4. Loops over the `cart` and:
   - looks up each price in `menu`
   - calculates line total `price * quantity`
   - adds to `subtotal`
5. Prints:
   - each line (`2 x Latte → 9.0 AZN`)
   - subtotal
   - number of **unique items** in the cart

Hint:

- Use a variable like `subtotal` that starts at `0.0`  
- Loop over all items in the cart  
- For each item, multiply price by quantity and **add** to `subtotal`  

---

Part 4 — Interactive Ordering Loop
==================================
Now we turn the script into a **small app** with a menu using `while True`.

We will turn this script into a program that allows the user to:
- Show menu
- Add items to the cart
- View cart
- Checkout
- Exit

We will use:
- `while True`
- `if / elif / else`
- `break` and `continue`

---

Part 4 — Menu Structure
=======================
Example text menu:

```text
Cyber Café
==========
1. Show menu
2. Add item to order
3. View current order
4. Checkout
5. Exit
```

Inside your script, you will create a loop that **repeats the menu until the user exits**.  
Its overall shape could look like:

```python
while True:
    # 1. Print text menu
    # 2. Read user choice with input()
    # 3. Use if / elif / else to decide what to do
    # 4. Use break to exit when the user chooses to quit
```

You decide exactly how to implement the bodies of those steps.

---

Part 4 — Task
=============
Extend your script so that:

1. **Show menu**:
   - loops through `menu` and prints item + price
2. **Add item to order**:
   - asks for `item_name` and `quantity`
   - if `item_name` not in `menu`, prints error and uses `continue`
   - otherwise, increases `cart[item_name]` by quantity
3. **View current order**:
   - prints each item, quantity, and line total
   - prints subtotal
4. **Checkout**:
   - if `cart` is empty, print message and `continue`
   - otherwise, calculate subtotal and then:
     - apply the **same discount rules** from Part 2
     - show a simple receipt
   - after checkout, clear the cart (`cart = {}`) to start a new order

---

Part 5 — Loyalty Points System
==============================
Now we introduce **loyalty points** using dictionaries and loops.

We will use a `customers` dictionary. Example of what the data could look like in memory:

```text
customers:
  alice → visits: 3, points: 45
  bob   → visits: 1, points: 10
```

Rules:
- When a customer **checks out**:
  - Ask for `customer_name`
  - If new customer, add them to `customers` with 0 visits and 0 points
  - Increase `visits` by 1
  - Add `earned_points = int(final_total // 5)` to `points`
- If `points >= 50`, they are a **VIP**.

---

Part 5 — Task
=============
Update the script to support loyalty:

1. At the **top** of the file, define:

```python
customers = {}
```

2. During **checkout**:
   - ask for `customer_name` (lowercase is fine)
   - if the name is not in `customers`, create a new entry:
     - `{"visits": 0, "points": 0}`
   - after computing `final_total`, update:
     - `visits += 1`
     - `points += int(final_total // 5)`
3. Print a message:
   - visits, points, and whether they are VIP (points >= 50)

Example:

```text
Customer name: alice
Final total: 27.0 AZN
You earned 5 points.
Total visits: 4
Total points: 52
Status: VIP customer!
```

Bonus:
- At program exit, loop over `customers` and print a small loyalty report.

---

Part 6 — Refactor with Functions
================================
Right now, your script is probably **long and hard to read**.

Goal: break it into **functions**.

Ideas for functions:

```python
def show_menu(menu):
    ...

def add_item_to_cart(menu, cart):
    ...

def calculate_cart_total(menu, cart):
    ...

def apply_discounts(subtotal):
    ...

def update_loyalty(customers, customer_name, final_total):
    ...

def print_receipt(menu, cart, subtotal, final_total):
    ...
```

Each function should:
- Take **inputs as parameters**
- Use local variables
- Return a **result** when needed

---

Part 6 — Task
=============
1. In the same file, define and use at least these functions:
   - `show_menu(menu)`
   - `add_item_to_cart(menu, cart)`
   - `calculate_cart_total(menu, cart)` → returns `subtotal`
   - `apply_discounts(subtotal)` → returns `final_total` and `discount_amount`
   - `update_loyalty(customers, customer_name, final_total)`
   - `print_receipt(menu, cart, subtotal, final_total)`
2. The **main loop** should only:
   - display menu
   - read `choice`
   - call functions

This will make the code cleaner and easier to extend later, while keeping everything in a **single file**.

---

Extension Ideas (Optional)
==========================
If you finish early:

- Add **time‑based discounts** (e.g. happy hour flag variable)  
- Create a **set** of out‑of‑stock items; skip them when ordering  
- Prevent negative quantities or prices  
- Store customer names in a **set** and compare:
  - returning vs new customers  

Think about:
- Where can a function reduce repetition?
- Which variables should be **local** vs shared?

---

<!-- end_slide -->
<!-- font_size: 5 -->
<!-- alignment: center -->
<!-- jump_to_middle -->

# Thanks!

<!-- font_size: 1 -->

#### By ElnurBDa

