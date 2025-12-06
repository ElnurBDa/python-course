---
title: "Control Flow Practice — Solutions"
sub_title: "Python Course · Module 4 Practice Solutions"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Practice 1 — Password Validator (Solution)
===========================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
```python
# Get password from user
password = input("Enter password: ")

# Initialize validation flags
has_length = False
has_uppercase = False
has_lowercase = False
has_digit = False
has_special = False

# Check length
if len(password) >= 8:
    has_length = True
else:
    print("Password too short (minimum 8 characters)")

# Check for uppercase letter
for char in password:
    if char >= 'A' and char <= 'Z':
        has_uppercase = True
        break

if not has_uppercase:
    print("Missing uppercase letter")

# Check for lowercase letter
for char in password:
    if char >= 'a' and char <= 'z':
        has_lowercase = True
        break

if not has_lowercase:
    print("Missing lowercase letter")
# ...
```

<!-- column: 1 -->
```python
# ...
# Check for digit
for char in password:
    if char >= '0' and char <= '9':
        has_digit = True
        break

if not has_digit:
    print("Missing digit")

# Check for special character
special_chars = "!@#$%^&*"
has_special = False
for char in password:
    if char in special_chars:
        has_special = True
        break

if not has_special:
    print("Missing special character")

# Final validation
if has_length and has_uppercase and has_lowercase and has_digit and has_special:
    print("Password accepted!")
else:
    print("Password rejected!")
```
<!-- reset_layout -->

---

Practice 2 — Shopping Cart Manager (Solution)
==============================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
```python
# Initialize cart dictionary
cart = {"apple": 1.50, "bread": 2.00, "milk": 3.50}

# Main menu loop
while True:
    print("\nMenu:")
    print("1. Add item")
    print("2. Remove item")
    print("3. View cart")
    print("4. Calculate total")
    print("5. Exit")
    
    choice = input("Choice: ")
    
    if choice == "1":
        # Add item
        item_name = input("Item name: ")
        price = float(input("Price: "))
        cart[item_name] = price
        print("Item added!")
    
    elif choice == "2":
        # Remove item
        item_name = input("Item name: ")
        if item_name in cart:
            del cart[item_name]
            print("Item removed!")
        else:
            print("Item not found in cart")
    
# ...
```

<!-- column: 1 -->
```python
# ...
    elif choice == "3":
        # View cart
        print("\nCart:")
        for item, price in cart.items():
            print(f"{item}: ${price:.2f}")
    
    elif choice == "4":
        # Calculate total
        total = 0
        for price in cart.values():
            total += price
        print(f"Total: ${total:.2f}")
    
    elif choice == "5":
        # Exit
        print("Goodbye!")
        break
    
    else:
        print("Invalid choice. Please try again.")
```

<!-- reset_layout -->

---

Practice 3 — Number Pattern Generator (Solution)
==================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Solution**:

```python
# Get number from user
n = int(input("Enter a number (1-20): "))

# Validate input
if n < 1 or n > 20:
    print("Number must be between 1 and 20")
else:
    # Pattern A: Right-aligned triangle
    print("\nPattern A:")
    for i in range(1, n + 1):
        for j in range(i):
            print("*", end="")
        print()
    
    # Pattern B: Number pyramid
    print("\nPattern B:")
    for i in range(1, n + 1):
        for j in range(i):
            print(i, end="")
        print()
```

<!-- column: 1 -->
**Alternative Solution** (using string multiplication):

```python
# Get number from user
n = int(input("Enter a number (1-20): "))

# Validate input
if n < 1 or n > 20:
    print("Number must be between 1 and 20")
else:
    # Pattern A: Right-aligned triangle
    print("\nPattern A:")
    for i in range(1, n + 1):
        print("*" * i)
    
    # Pattern B: Number pyramid
    print("\nPattern B:")
    for i in range(1, n + 1):
        print(str(i) * i)
```
<!-- reset_layout -->

---

Practice 4 — Student Grade Analyzer (Solution)
===============================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Solution**:

```python
# Initialize students dictionary
students = {
    "Alice": [85, 90, 78],
    "Bob": [92, 88, 95],
    "Charlie": [70, 75, 80]
}

# Print header
print("Student Report:")
print("=" * 15)

# Loop through each student
for name, grades in students.items():
    # Calculate average
    total = 0
    for grade in grades:
        total += grade
    average = total / len(grades)
    
    # Determine letter grade
    if average >= 90:
        letter_grade = "A"
    elif average >= 80:
        letter_grade = "B"
    elif average >= 70:
        letter_grade = "C"
    elif average >= 60:
        letter_grade = "D"
    else:
        letter_grade = "F"
    
    # Print formatted report
    print(f"{name}: Average = {average:.2f}, Grade = {letter_grade}")

# Find high performers (average > 85)
print("\nHigh Performers (Average > 85):")
high_performers = []
for name, grades in students.items():
    total = 0
    for grade in grades:
        total += grade
    average = total / len(grades)
    if average > 85:
        high_performers.append(name)

# Print high performers
for name in high_performers:
    print(f"- {name}")
```

<!-- column: 1 -->
**Alternative Solution** (more compact structure):

```python
# Initialize students dictionary
students = {
    "Alice": [85, 90, 78],
    "Bob": [92, 88, 95],
    "Charlie": [70, 75, 80]
}

# Print header
print("Student Report:")
print("=" * 15)

# Loop through each student
for name, grades in students.items():
    # Calculate average manually
    total = 0
    for grade in grades:
        total += grade
    average = total / len(grades)
    
    # Determine letter grade
    if average >= 90:
        letter_grade = "A"
    elif average >= 80:
        letter_grade = "B"
    elif average >= 70:
        letter_grade = "C"
    elif average >= 60:
        letter_grade = "D"
    else:
        letter_grade = "F"
    
    # Print formatted report
    print(f"{name}: Average = {average:.2f}, Grade = {letter_grade}")

# Find high performers
print("\nHigh Performers (Average > 85):")
high_performers = []
for name, grades in students.items():
    total = 0
    for grade in grades:
        total += grade
    average = total / len(grades)
    if average > 85:
        high_performers.append(name)

# Print high performers
for name in high_performers:
    print(f"- {name}")
```

<!-- reset_layout -->

---

Practice 5 — Text Statistics Tool (Solution)
=============================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Solution** (manual word splitting):

```python
# Get text from user
text = input("Enter text: ")

# Count words (manual splitting by spaces)
words = []
current_word = ""
for char in text:
    if char == ' ':
        if current_word != "":
            words.append(current_word)
            current_word = ""
    else:
        current_word += char
# Add last word if text doesn't end with space
if current_word != "":
    words.append(current_word)

word_count = len(words)

# Count sentences (ends with ., !, ?)
sentence_count = 0
for char in text:
    if char == '.' or char == '!' or char == '?':
        sentence_count += 1

# Count vowels (case-insensitive)
vowel_count = 0
vowels = "aeiouAEIOU"
for char in text:
    if char in vowels:
        vowel_count += 1

# Find longest word
longest_word = ""
for word in words:
    if len(word) > len(longest_word):
        longest_word = word

# Count characters
char_count_with_spaces = len(text)
char_count_without_spaces = 0
for char in text:
    if char != ' ':
        char_count_without_spaces += 1

# Print statistics
print("=" * 40)
print("Text Statistics:")
print("=" * 40)
print(f"Total words: {word_count}")
print(f"Total sentences: {sentence_count}")
print(f"Total vowels: {vowel_count}")
print(f"Longest word: {longest_word}")
print(f"Characters (with spaces): {char_count_with_spaces}")
print(f"Characters (without spaces): {char_count_without_spaces}")
```

<!-- column: 1 -->
**Alternative Solution** (using basic string operations):

```python
# Get text from user
text = input("Enter text: ")

# Count words by counting spaces + 1 (with edge case handling)
word_count = 1  # Start with 1 word
for i in range(len(text)):
    if text[i] == ' ':
        # Check if next char is not a space (to avoid counting multiple spaces)
        if i + 1 < len(text) and text[i + 1] != ' ':
            word_count += 1
# Handle empty text
if len(text) == 0:
    word_count = 0

# Count sentences
sentence_endings = ".!?"
sentence_count = 0
for char in text:
    if char in sentence_endings:
        sentence_count += 1

# Count vowels
vowels = "aeiouAEIOU"
vowel_count = 0
for char in text:
    if char in vowels:
        vowel_count += 1

# Find longest word (build words manually)
longest_word = ""
current_word = ""
for char in text:
    if char == ' ':
        if len(current_word) > len(longest_word):
            longest_word = current_word
        current_word = ""
    else:
        current_word += char
# Check last word
if len(current_word) > len(longest_word):
    longest_word = current_word

# Count characters
char_count_with_spaces = len(text)
char_count_without_spaces = 0
for char in text:
    if char != ' ':
        char_count_without_spaces += 1

# Print statistics
print("=" * 40)
print("Text Statistics:")
print("=" * 40)
print(f"Total words: {word_count}")
print(f"Total sentences: {sentence_count}")
print(f"Total vowels: {vowel_count}")
print(f"Longest word: {longest_word}")
print(f"Characters (with spaces): {char_count_with_spaces}")
print(f"Characters (without spaces): {char_count_without_spaces}")
```

<!-- reset_layout -->

---

Practice 6 — Set Operations & Data Filtering (Solution)
=========================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Solution**:

```python
# Create sets
active_users = {101, 102, 103, 104, 105}
premium_users = {103, 104, 106, 107}

# Set operations
active_and_premium = active_users & premium_users  # intersection
all_users = active_users | premium_users  # union
active_not_premium = active_users - premium_users  # difference
symmetric_diff = active_users ^ premium_users  # symmetric difference

# Print set operations
print("Set Operations:")
print("=" * 15)
print(f"Active AND Premium: {active_and_premium}")
print(f"All Users: {all_users}")
print(f"Active but NOT Premium: {active_not_premium}")
print(f"Symmetric Difference: {symmetric_diff}")

# Create users dictionary
users = {
    101: {"name": "Alice", "age": 25},
    102: {"name": "Bob", "age": 30},
    103: {"name": "Charlie", "age": 22},
    104: {"name": "Diana", "age": 27},
    105: {"name": "Eve", "age": 19}
}

# Filter users by age (20-28 inclusive)
filtered_users = []
for user_id, user_info in users.items():
    age = user_info["age"]
    if age >= 20 and age <= 28:
        filtered_users.append(user_id)

# Print filtered results
print("\nAge Filter (20-28):")
print("=" * 15)
print(f"Users aged 20-28: {filtered_users}")
```

<!-- column: 1 -->
**Alternative Solution** (using list comprehension):

```python
# Create sets
active_users = {101, 102, 103, 104, 105}
premium_users = {103, 104, 106, 107}

# Set operations
active_and_premium = active_users & premium_users
all_users = active_users | premium_users
active_not_premium = active_users - premium_users
symmetric_diff = active_users ^ premium_users

# Print set operations
print("Set Operations:")
print("=" * 15)
print(f"Active AND Premium: {active_and_premium}")
print(f"All Users: {all_users}")
print(f"Active but NOT Premium: {active_not_premium}")
print(f"Symmetric Difference: {symmetric_diff}")

# Create users dictionary
users = {
    101: {"name": "Alice", "age": 25},
    102: {"name": "Bob", "age": 30},
    103: {"name": "Charlie", "age": 22},
    104: {"name": "Diana", "age": 27},
    105: {"name": "Eve", "age": 19}
}

# Filter users by age using list comprehension
filtered_users = [
    user_id for user_id, user_info in users.items()
    if user_info["age"] >= 20 and user_info["age"] <= 28
]

# Print filtered results
print("\nAge Filter (20-28):")
print("=" * 15)
print(f"Users aged 20-28: {filtered_users}")
```
<!-- reset_layout -->

---

Mini Project — Personal Task Manager (Solution)
================================================

<!-- column_layout: [1, 1, 1] -->

<!-- column: 0 -->

```python
# Initialize tasks list
tasks = [
    {"id": 1, "title": "Learn Python", "priority": "high", "completed": False},
    {"id": 2, "title": "Exercise", "priority": "medium", "completed": True}
]

# Main menu loop
while True:
    print("\nMenu:")
    print("1. Add task")
    print("2. Mark task as complete")
    print("3. View all tasks")
    print("4. View incomplete tasks only")
    print("5. View tasks by priority")
    print("6. Delete task")
    print("7. Statistics")
    print("8. Exit")
    
    choice = input("\nChoice: ")
    
    if choice == "1":
        # Add task
        task_id = int(input("Enter task ID: "))
        title = input("Enter task title: ")
        priority = input("Enter priority (high/medium/low): ")
        tasks.append({
            "id": task_id,
            "title": title,
            "priority": priority,
            "completed": False
        })
        print("Task added!")
    
    elif choice == "2":
        # Mark task as complete
        task_id = int(input("Enter task ID to mark complete: "))
        found = False
        for task in tasks:
            if task["id"] == task_id:
                task["completed"] = True
                print("Task marked as complete!")
                found = True
                break
        if not found:
            print("Task not found!")
```
<!-- column: 1 -->

```python
    
    elif choice == "3":
        # View all tasks
        print("\nAll Tasks:")
        print("-" * 40)
        for task in tasks:
            status = "✓" if task["completed"] else "✗"
            print(f"ID: {task['id']}, Title: {task['title']}, "
                  f"Priority: {task['priority']}, Completed: {status}")
    
    elif choice == "4":
        # View incomplete tasks only
        print("\nIncomplete Tasks:")
        print("-" * 40)
        for task in tasks:
            if not task["completed"]:
                print(f"ID: {task['id']}, Title: {task['title']}, "
                      f"Priority: {task['priority']}")
    
    elif choice == "5":
        # View tasks by priority
        priority_filter = input("Enter priority (high/medium/low): ")
        print(f"\nTasks with priority '{priority_filter}':")
        print("-" * 40)
        for task in tasks:
            if task["priority"] == priority_filter:
                status = "✓" if task["completed"] else "✗"
                print(f"ID: {task['id']}, Title: {task['title']}, "
                      f"Completed: {status}")
    
    elif choice == "6":
        # Delete task
        task_id = int(input("Enter task ID to delete: "))
        found = False
        for i in range(len(tasks)):
            if tasks[i]["id"] == task_id:
                tasks.pop(i)
                print("Task deleted!")
                found = True
                break
        if not found:
            print("Task not found!")

```

<!-- column: 2-->


```python

    elif choice == "7":
        # Statistics
        total_tasks = len(tasks)
        completed_count = 0
        incomplete_count = 0
        
        for task in tasks:
            if task["completed"]:
                completed_count += 1
            else:
                incomplete_count += 1
        
        # Count by priority
        priority_count = {"high": 0, "medium": 0, "low": 0}
        for task in tasks:
            priority = task["priority"]
            if priority in priority_count:
                priority_count[priority] += 1
        
        print("\nStatistics:")
        print("=" * 40)
        print(f"Total tasks: {total_tasks}")
        print(f"Completed: {completed_count}")
        print(f"Incomplete: {incomplete_count}")
        print("\nTasks by Priority:")
        for priority, count in priority_count.items():
            print(f"  {priority}: {count}")
    
    elif choice == "8":
        # Exit
        print("Goodbye!")
        break
    
    else:
        # Invalid choice
        print("Invalid choice. Please try again.")
        continue
```


<!-- reset_layout -->

---

<!-- end_slide -->
<!-- font_size: 5 -->
<!-- alignment: center -->
<!-- jump_to_middle -->

# Thanks!

<!-- font_size: 1 -->

#### By ElnurBDa
