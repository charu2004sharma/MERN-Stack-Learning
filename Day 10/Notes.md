 Combining Variables, Loops, and Functions  

 *1. How They Work Together*  
- *Variables:* Store and pass data within loops and functions.  
- *Loops:* Execute repetitive tasks efficiently.  
- *Functions:* Encapsulate logic for reusability and clarity.  

*2. Examples*  
1. *Factorial of a Number:*  
   ```javascript
 function factorial(n) {
       let result = 1;
       for (let i = 1; i <= n; i++) {
           result *= i;
       }
       return result;
   }

   console.log(factorial(5));  // Output: 120

2.	Check Even or Odd:

def is_even(num):
    return num % 2 == 0

print(is_even(4))  # Output: True
print(is_even(7))  # Output: False


3.	Fibonacci Series:

function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

console.log(fibonacci(6));  // Output: [0, 1, 1, 2, 3, 5]

Reflection
	•	Combining these concepts made solving problems easier and more systematic.
	•	Writing reusable functions for common patterns like Fibonacci improved my understanding of logic design.

Looking Forward:
Next, I’ll tackle more complex problems and practice using these skills to write optimized solutions.
