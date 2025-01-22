# Day 3: Functions Basics  

*1. Functions*  
- Functions are reusable blocks of code that perform specific tasks.  
- *Advantages:*  
  - Avoid repetition.  
  - Improve code readability and modularity.  

*2. Declaring and Calling Functions*  
- Example (Python):  
  ```python
  def greet(name):
      return f"Hello, {name}!"

  print(greet("Aniruddh"))  # Output: Hello, Aniruddh!

	•	Example (JavaScript):

function add(a, b) {
    return a + b;
}

console.log(add(5, 3));  // Output: 8

*3. Parameters and Return Values*
•	Parameters: Variables passed into functions.
	•	Return Values: Output a function provides.
	•	Example (Python):

def square(num):
    return num * num

print(square(4))  # Output: 16

Hands-On Practice
1.	Write a function to calculate the factorial of a number:

def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))  # Output: 120


2.	Write a function to find the maximum of two numbers:

function maxOfTwo(a, b) {
    return a > b ? a : b;
}

console.log(maxOfTwo(10, 20));  // Output: 20

Reflection
	•	Functions make code reusable and efficient.
	•	Practicing parameterized functions helped me understand how to pass and return data effectively.

Looking Forward:
Tomorrow, I’ll learn how to combine functions, loops, and variables to solve complex problems.
