---
title: "Functions & Modular Code Practice — Solutions"
sub_title: "Python Course · Module 5 Practice Solutions"
author: "ElnurBDa"
theme:
  name: gruvbox-dark
options:
  implicit_slide_ends: true
---

Practice 1 — Function Library (Solution)
========================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**math_utils.py**:

```python
def calculate_area(length, width):
    return length * width

def calculate_perimeter(length, width):
    return 2 * (length + width)

def is_even(number):
    return number % 2 == 0

def factorial(n):
    if n == 0 or n == 1:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

def power(base, exponent):
    result = 1
    for i in range(exponent):
        result *= base
    return result
```

<!-- column: 1 -->
**main.py**:

```python
from math_utils import (
    calculate_area,
    calculate_perimeter,
    is_even,
    factorial,
    power
)

# Get length and width
length = float(input("Enter length: "))
width = float(input("Enter width: "))

# Calculate area and perimeter
area = calculate_area(length, width)
perimeter = calculate_perimeter(length, width)

print(f"Area: {area}")
print(f"Perimeter: {perimeter}")

# Check if number is even
num = int(input("\nEnter a number: "))
print(f"Is even: {is_even(num)}")

# Calculate factorial
fact_num = int(input("\nEnter a number for factorial: "))
fact_result = factorial(fact_num)
print(f"Factorial of {fact_num}: {fact_result}")

# Calculate power
base = int(input("\nEnter base: "))
exponent = int(input("Enter exponent: "))
power_result = power(base, exponent)
print(f"{base}^{exponent} = {power_result}")
```

<!-- reset_layout -->

---

Practice 2 — Text Processing Functions (Solution)
==================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Basic Functions** (Part 1):

```python
def count_words(text):
    words = []
    current_word = ""
    for char in text:
        if char == ' ':
            if current_word != "":
                words.append(current_word)
                current_word = ""
        else:
            current_word += char
    if current_word != "":
        words.append(current_word)
    return len(words)

def count_vowels(text):
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count

def reverse_text(text):
    reversed_str = ""
    for i in range(len(text) - 1, -1, -1):
        reversed_str += text[i]
    return reversed_str

def remove_spaces(text):
    result = ""
    for char in text:
        if char != ' ':
            result += char
    return result
```

<!-- column: 1 -->
**Basic Functions** (Part 2):

```python
def capitalize_words(text):
    # Split into words manually
    words = []
    current_word = ""
    for char in text:
        if char == ' ':
            if current_word != "":
                words.append(current_word)
                current_word = ""
        else:
            current_word += char
    if current_word != "":
        words.append(current_word)
    
    # Capitalize each word
    uppercase_map = {
        'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E',
        'f': 'F', 'g': 'G', 'h': 'H', 'i': 'I', 'j': 'J',
        'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O',
        'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T',
        'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z'
    }
    
    capitalized_words = []
    for word in words:
        if len(word) > 0:
            first_char = word[0]
            if first_char in uppercase_map:
                first_char = uppercase_map[first_char]
            capitalized_word = first_char
            for i in range(1, len(word)):
                capitalized_word += word[i]
            capitalized_words.append(capitalized_word)
    
    # Join words with spaces manually
    result = ""
    for i, word in enumerate(capitalized_words):
        if i > 0:
            result += " "
        result += word
    
    return result
```

<!-- reset_layout -->

---

Practice 2 — Text Processing Functions (Solution)
==================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Main Program**:

```python
from text_processor import (
    count_words,
    count_vowels,
    reverse_text,
    capitalize_words,
    remove_spaces
)

# Get user input
sentence = input("Enter a sentence: ")

# Display individual results
print("=" * 40)
print("Text Analysis:")
print("=" * 40)
print(f"Word count: {count_words(sentence)}")
print(f"Vowel count: {count_vowels(sentence)}")
print(f"Reversed: {reverse_text(sentence)}")
print(f"Capitalized: {capitalize_words(sentence)}")
print(f"No spaces: {remove_spaces(sentence)}")
```

<!-- column: 1 -->
**Bonus Function**:

```python
def analyze_text(text):
    return {
        "word_count": count_words(text),
        "vowel_count": count_vowels(text),
        "reversed": reverse_text(text),
        "capitalized": capitalize_words(text),
        "no_spaces": remove_spaces(text)
    }

# Using analyze_text function
print("\n" + "=" * 40)
print("Using analyze_text function:")
print("=" * 40)
analysis = analyze_text(sentence)
for key, value in analysis.items():
    print(f"{key}: {value}")
```

<!-- reset_layout -->

---

Practice 3 — Student Management System (Solution)
==================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Functions**:

```python
def add_student(students_dict, name, grades):
    students_dict[name] = grades

def calculate_average(grades):
    total = 0
    for grade in grades:
        total += grade
    return total / len(grades)

def get_letter_grade(average):
    if average >= 90:
        return "A"
    elif average >= 80:
        return "B"
    elif average >= 70:
        return "C"
    elif average >= 60:
        return "D"
    else:
        return "F"

def find_top_student(students_dict):
    top_name = None
    top_average = -1
    
    for name, grades in students_dict.items():
        avg = calculate_average(grades)
        if avg > top_average:
            top_average = avg
            top_name = name
    
    return top_name, top_average

def get_students_above_threshold(students_dict, threshold):
    above_threshold = []
    for name, grades in students_dict.items():
        avg = calculate_average(grades)
        if avg > threshold:
            above_threshold.append(name)
    return above_threshold
```

<!-- column: 1 -->
**Main Program**:

```python
from student_functions import (
    add_student,
    calculate_average,
    get_letter_grade,
    find_top_student,
    get_students_above_threshold
)

students = {}

while True:
    print("\nMenu:")
    print("1. Add student")
    print("2. View all students")
    print("3. Find top student")
    print("4. Find students above threshold")
    print("5. Exit")
    
    choice = input("Choice: ")
    
    if choice == "1":
        name = input("Student name: ")
        grades_str = input("Enter grades (comma-separated): ")
        grades = [int(x.strip()) for x in grades_str.split(",")]
        add_student(students, name, grades)
        print("Student added!")
    
    elif choice == "2":
        print("\nAll Students:")
        for name, grades in students.items():
            avg = calculate_average(grades)
            letter = get_letter_grade(avg)
            print(f"{name}: Average = {avg:.2f}, Grade = {letter}")
    
    elif choice == "3":
        if len(students) == 0:
            print("No students found!")
        else:
            top_name, top_avg = find_top_student(students)
            print(f"Top student: {top_name} (Average: {top_avg:.2f})")
    
    elif choice == "4":
        threshold = float(input("Enter threshold: "))
        above = get_students_above_threshold(students, threshold)
        print(f"Students above {threshold}: {above}")
    
    elif choice == "5":
        print("Goodbye!")
        break
    
    else:
        print("Invalid choice!")
```

<!-- reset_layout -->

---

Practice 4 — Lambda Functions & Higher-Order Functions (Solution)
====================================================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**Solution**:

```python
# Original list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(f"Original numbers: {numbers}\n")

# Lambda functions
square_lambda = lambda x: x * x
is_even_lambda = lambda x: x % 2 == 0
is_greater_than_five_lambda = lambda x: x > 5

# Using lambdas with list comprehensions
squared_lambda = [square_lambda(x) for x in numbers]
even_lambda = [x for x in numbers if is_even_lambda(x)]
greater_five_lambda = [x for x in numbers if is_greater_than_five_lambda(x)]
even_and_greater_lambda = [
    x for x in numbers 
    if is_even_lambda(x) and is_greater_than_five_lambda(x)
]

print("Using Lambda Functions:")
print(f"Squared: {squared_lambda}")
print(f"Even numbers: {even_lambda}")
print(f"Greater than 5: {greater_five_lambda}")
print(f"Even AND > 5: {even_and_greater_lambda}\n")

# Regular functions
def square_number(x):
    return x * x

def is_even_num(x):
    return x % 2 == 0

def is_greater_than_five(x):
    return x > 5

# Using regular functions with list comprehensions
squared_func = [square_number(x) for x in numbers]
even_func = [x for x in numbers if is_even_num(x)]
greater_five_func = [x for x in numbers if is_greater_than_five(x)]
even_and_greater_func = [
    x for x in numbers 
    if is_even_num(x) and is_greater_than_five(x)
]

print("Using Regular Functions:")
print(f"Squared: {squared_func}")
print(f"Even numbers: {even_func}")
print(f"Greater than 5: {greater_five_func}")
print(f"Even AND > 5: {even_and_greater_func}\n")

# Verify they produce same results
print("Verification:")
print(f"Lambdas and functions produce same results: {squared_lambda == squared_func}")
```

<!-- column: 1 -->
**Alternative with map()** (if you want to show higher-order functions):

```python
# Original list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Using map() with lambda
square_lambda = lambda x: x * x
squared_map = list(map(square_lambda, numbers))

# Using filter() with lambda
is_even_lambda = lambda x: x % 2 == 0
even_filter = list(filter(is_even_lambda, numbers))

# Combining filter conditions
is_greater_than_five = lambda x: x > 5
even_and_greater = list(filter(
    lambda x: is_even_lambda(x) and is_greater_than_five(x),
    numbers
))

print(f"Original: {numbers}")
print(f"Squared (map): {squared_map}")
print(f"Even (filter): {even_filter}")
print(f"Even AND > 5: {even_and_greater}")
```

<!-- reset_layout -->

---

Practice 5 — Bank Account Class (Solution)
============================================

<!-- column_layout: [1, 1] -->

<!-- column: 0 -->
**BankAccount Class**:

```python
class BankAccount:
    total_accounts = 0  # Class attribute
    
    def __init__(self, account_holder, initial_balance=0):
        self.account_holder = account_holder
        self.balance = initial_balance
        BankAccount.total_accounts += 1
        print(f"Account created for {account_holder} with ${initial_balance:.2f}!")
    
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return self.balance
        else:
            return None
    
    def get_balance(self):
        return self.balance
    
    def display_info(self):
        print("\nAccount Information:")
        print("=" * 20)
        print(f"Account Holder: {self.account_holder}")
        print(f"Balance: ${self.balance:.2f}")
```

<!-- column: 1 -->
**Main Program**:

```python
from bank_account import BankAccount

# Create accounts
print("Creating account for Alice with $100...")
alice_account = BankAccount("Alice", 100)

print("\nDepositing $50 to Alice's account...")
new_balance = alice_account.deposit(50)
print(f"New balance: ${new_balance:.2f}")

print("\nWithdrawing $75 from Alice's account...")
new_balance = alice_account.withdraw(75)
if new_balance is not None:
    print(f"New balance: ${new_balance:.2f}")
else:
    print("Insufficient funds!")

print("\nAttempting to withdraw $100 from Alice's account...")
result = alice_account.withdraw(100)
if result is None:
    print(f"Insufficient funds! Current balance: ${alice_account.get_balance():.2f}")

alice_account.display_info()

# Create second account
print("\n" + "=" * 40)
print("Creating account for Bob with $200...")
bob_account = BankAccount("Bob", 200)

print(f"\nBob's balance: ${bob_account.get_balance():.2f}")
print(f"Alice's balance: ${alice_account.get_balance():.2f}")
print("(Each account is independent!)")

# Display total accounts
print(f"\nTotal accounts created: {BankAccount.total_accounts}")
```

<!-- reset_layout -->

---

Mini Project — Library Management System (Solution)
====================================================

<!-- column_layout: [1, 1, 1] -->

<!-- column: 0 -->
**book.py**:

```python
class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.available = True
    
    def checkout(self):
        if self.available:
            self.available = False
            return True
        return False
    
    def return_book(self):
        self.available = True
    
    def get_info(self):
        status = "Available" if self.available else "Checked Out"
        return f"{self.title} by {self.author} (ISBN: {self.isbn}) - {status}"
```

<!-- column: 1 -->
**library.py**:

```python
from book import Book

class Library:
    def __init__(self, name):
        self.name = name
        self.books = []
    
    def add_book(self, book):
        self.books.append(book)
    
    def find_book(self, title):
        for book in self.books:
            if book.title.lower() == title.lower():
                return book
        return None
    
    def list_available_books(self):
        available = []
        for book in self.books:
            if book.available:
                available.append(book)
        return available
    
    def checkout_book(self, title):
        book = self.find_book(title)
        if book is None:
            return "Book not found!"
        if book.checkout():
            return "Book checked out successfully!"
        return "Book is already checked out!"
    
    def return_book(self, title):
        book = self.find_book(title)
        if book is None:
            return "Book not found!"
        book.return_book()
        return "Book returned successfully!"
    
    def display_all_books(self):
        if len(self.books) == 0:
            print("No books in library.")
        else:
            for i, book in enumerate(self.books, 1):
                print(f"{i}. {book.get_info()}")
```

<!-- column: 2 -->
**main.py**:

```python
from library import Library
from book import Book

def handle_add_book(library):
    title = input("Enter title: ")
    author = input("Enter author: ")
    isbn = input("Enter ISBN: ")
    book = Book(title, author, isbn)
    library.add_book(book)
    print("Book added!")

def handle_list_all(library):
    print("\nAll Books:")
    library.display_all_books()

def handle_list_available(library):
    available = library.list_available_books()
    if len(available) == 0:
        print("No available books.")
    else:
        print("\nAvailable Books:")
        for i, book in enumerate(available, 1):
            print(f"{i}. {book.get_info()}")

def handle_checkout(library):
    title = input("Enter book title: ")
    message = library.checkout_book(title)
    print(message)

def handle_return(library):
    title = input("Enter book title: ")
    message = library.return_book(title)
    print(message)

# Main program
library = Library("Python Library System")

# Add some initial books
book1 = Book("Python Basics", "John Doe", "123456")
book2 = Book("Advanced Python", "Jane Smith", "789012")
library.add_book(book1)
library.add_book(book2)

print("Welcome to Python Library System!\n")

while True:
    print("Menu:")
    print("1. Add book")
    print("2. List all books")
    print("3. List available books")
    print("4. Checkout book")
    print("5. Return book")
    print("6. Exit")
    
    choice = input("\nChoice: ")
    
    if choice == "1":
        handle_add_book(library)
    elif choice == "2":
        handle_list_all(library)
    elif choice == "3":
        handle_list_available(library)
    elif choice == "4":
        handle_checkout(library)
    elif choice == "5":
        handle_return(library)
    elif choice == "6":
        print("Goodbye!")
        break
    else:
        print("Invalid choice!")
    
    print()  # Empty line for spacing
```

<!-- reset_layout -->

---

