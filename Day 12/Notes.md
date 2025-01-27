# Day 12: JavaScript and ES6 Basics  

*1. Introduction to JavaScript*  
- JavaScript is used to make websites interactive and dynamic.  
- Runs in the browser and controls content, styling, and user interactions.  

*2. Variables and Data Types*  
- **var, let, and const:**  
  - **var:** Function-scoped and can be redeclared.  
  - **let:** Block-scoped and can be updated but not redeclared.  
  - **const:** Block-scoped and cannot be updated or redeclared.  

- Example:  
  javascript:
  let city = "Mumbai";
  const country = "India";
  console.log(City: ${city}, Country: ${country});
  // Output: City: Mumbai, Country: India

*3. ES6 Features*
	Arrow Functions:
	•	Provide a shorter syntax for functions.
	•	Example:

const square = (n) => n * n;
console.log(square(4));  // Output: 16

const name = "Charu";
console.log(Welcome, ${name}!);
// Output: Welcome, Charu!

Hands-On Practice:

1.	Concatenating Strings:
const firstName = "Charu";
const lastName = "Sharma";
console.log(${firstName} ${lastName});  // Output: Charu Sharma

2.	Simple Calculations:
const x = 10, y = 20;
console.log(Sum: ${x + y}, Product: ${x * y});  
// Output: Sum: 30, Product: 200

Reflection
	•	Learned to declare variables using let and const.
	•	Practiced writing functions with arrow syntax and using template literals for better readability.
