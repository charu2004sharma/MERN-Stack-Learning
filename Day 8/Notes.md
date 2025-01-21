# Day 8: Loops (For and While)  

 *1. Loops*  
- Loops allow us to repeat a block of code multiple times without rewriting it.  

 *2. Common Types of Loops*  
1. *For Loop:*  
   - Repeats for a fixed number of iterations.  
   - Example (JavaScript):  
     javascript
     for (let i = 0; i < 5; i++) {
         console.log(i); // Output: 0 1 2 3 4
     }
       
2. *While Loop:*  
   - Repeats as long as a condition is true.  
   - Example (Python):  
     python
     i = 0
     while i < 5:
         print(i)  # Output: 0 1 2 3 4
         i += 1

*Hands-On Practice*  
1. *Printing Numbers (For Loop):*  
   ```javascript
   for (let i = 1; i <= 10; i++) {
       console.log(i); // Output: 1 2 3 4 5 6 7 8 9 10
   }

2.	Print Multiples of 3 (While Loop):

i = 3
while i <= 15:
    print(i)  # Output: 3 6 9 12 15
    i += 3

Reflection
	•	Loops simplify repetitive tasks and reduce redundant code.
	•	Using examples, I understood the difference between for and while loops.
