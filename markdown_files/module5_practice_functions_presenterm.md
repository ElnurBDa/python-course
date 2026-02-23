---
title: "List & Dictionary CRUD Practice"
sub_title: "Python Course · Mini Apps for Kids"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Practice 1 — Pet Shelter Manager
=================================

Create `pet_shelter.py` that manages pets in a shelter using a **list of dictionaries**.

### Data model
Each pet must be stored like this:

```python
pet = {
    "id": 0,
    "name": "Mila",
    "type": "cat",          # dog/cat/rabbit/bird...
    "age": 2,
    "vaccinated": "yes",    # yes/no
    "arrivalDate": "22 Feb"
}
```

### Requirements
1. Start with an empty list: `pets = []` and `id = 0`.
2. Keep adding pets until there are **3 pets** in the list:
   - Ask for: `name`, `type`, `age`, `vaccinated`
   - Create the pet dict, append to list, increment `id`
3. Create functions:
   - `create_pet(name, type, age, vaccinated)`
   - `find_pet_by_id(id)` → returns index or `-1`
   - `adopt_pet(id)` → deletes pet by id (prints what was adopted)
   - `change_field(id, field_name, new_value)` → updates one field
4. Menu loop using `while True`:
   - `Adopt` (delete by id)
   - `Update` (change one field by id)
   - `Find` (print the pet by id)
   - `List` (print all pets)
   - `End` (print all pets and exit)
5. If the id is not found, print: `Pet not found!` and do nothing.

Example interaction:

```text
Name: Mila
Type: cat
Age: 2
Vaccinated (yes/no): yes
New pet is added: {'id': 0, 'name': 'Mila', ...}

Action (Adopt/Update/Find/List/End): List
All pets:
{'id': 0, 'name': 'Mila', ...}
{'id': 1, 'name': 'Rex', ...}
{'id': 2, 'name': 'Coco', ...}

Action (Adopt/Update/Find/List/End): Adopt
Id: 1
{'id': 1, 'name': 'Rex', ...} is adopted!!!
```

---

Practice 2 — Game Inventory Backpack
=====================================

Create `game_inventory.py` that manages items in a game backpack.

### Data model

```python
item = {
    "id": 0,
    "itemName": "Iron Sword",
    "rarity": "common",   # common/rare/epic
    "power": 5,
    "quantity": 1,
    "foundDate": "22 Feb"
}
```

### Requirements
1. Use `items = []` and `id = 0`.
2. Add **3 starter items** from user input (same style as Practice 1).
3. Functions:
   - `add_item(itemName, rarity, power, quantity)`
   - `find_item_by_id(id)` → index or `-1`
   - `use_item(id)` → decreases `quantity` by 1; if `quantity` becomes 0, delete the item
   - `upgrade_item(id, plus_power)` → increases `power`
   - `delete_item(id)`
4. Menu loop:
   - `AddItem`
   - `UseItem`
   - `Upgrade`
   - `DeleteItem`
   - `ListItems`
   - `End`
5. Rules:
   - Do not allow `quantity` to go below 0
   - If id is not found, print `Item not found!`

Example interaction:

```text
Action (AddItem/UseItem/Upgrade/DeleteItem/ListItems/End): UseItem
Id: 0
Used 1x Iron Sword. Quantity now: 0
Item removed from backpack (quantity is 0).
```

---

Practice 3 — Library Book Tracker
==================================

Create `library_tracker.py` that tracks books in a mini library.

### Data model

```python
book = {
    "id": 0,
    "title": "Harry Potter",
    "author": "J.K. Rowling",
    "year": 1997,
    "isBorrowed": False
}
```

### Requirements
1. Use `books = []` and `id = 0`.
2. Add **3 books** from user input.
3. Functions:
   - `add_book(title, author, year)`
   - `find_book_by_id(id)` → index or `-1`
   - `borrow_book(id)` → sets `isBorrowed = True`
   - `return_book(id)` → sets `isBorrowed = False`
   - `remove_book(id)`
4. Menu loop:
   - `AddBook`
   - `Borrow`
   - `Return`
   - `RemoveBook`
   - `List`
   - `ListAvailable`
   - `End`
5. Rules:
   - If a book is already borrowed, do not borrow it again (print a message)
   - If id is not found, print `Book not found!`

Example interaction:

```text
Action (Borrow/Return/List/End): Borrow
Id: 2
Borrowed: The Hobbit

Action (Borrow/Return/List/End): Borrow
Id: 2
This book is already borrowed!
```

---

Practice 4 — Classroom Points System
=====================================

Create `class_points.py` that manages students and points.

### Data model

```python
student = {
    "id": 0,
    "studentName": "Ayan",
    "points": 0,
    "level": "starter"   # starter/pro/legend
}
```

### Requirements
1. Use `students = []` and `id = 0`.
2. Add **3 students** from user input.
3. Functions:
   - `add_student(studentName)`
   - `find_student_by_id(id)` → index or `-1`
   - `give_points(id, x)` → add points
   - `take_points(id, x)` → subtract points (not below 0)
   - `promote(id, new_level)` → changes level
   - `delete_student(id)`
4. Menu loop:
   - `AddStudent`
   - `GivePoints`
   - `TakePoints`
   - `Promote`
   - `DeleteStudent`
   - `List`
   - `End`
5. Rules:
   - Points cannot go below 0
   - If id is not found, print `Student not found!`

Optional challenge:
- **Auto-level** based on points:
  - 0–9: starter
  - 10–19: pro
  - 20+: legend

---

Mini Project — City Zoo Manager
================================

Create `zoo_manager.py` that combines everything into a bigger menu app.

### Data model
Store animals as a **list of dictionaries**:

```python
animals = [
    {"id": 0, "name": "Leo", "species": "lion", "age": 5, "health": 80, "fedToday": False},
    {"id": 1, "name": "Mimi", "species": "monkey", "age": 2, "health": 95, "fedToday": True}
]
```

### Menu (must be menu-driven with a while loop)
1. Add animal
2. Feed animal (set `fedToday=True`, increase health by +5, max 100)
3. Heal animal (increase health by +10, max 100)
4. View all animals
5. View animals that are NOT fed today
6. Update animal field by id (choose a field)
7. Remove animal
8. Statistics
9. Exit

### Statistics must show
- Total animals
- Fed today count vs not fed
- Average health (sum / count)
- Count by species (use a dictionary)

### Rules
- If id does not exist → print a clear message and continue
- Use `break` only when user chooses Exit
- Use `continue` for invalid menu choices
