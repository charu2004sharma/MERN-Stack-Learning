Day 13: Arrays, Objects, and Loops  

*What I Learned*  

*1. Arrays*  
- Arrays are collections of elements stored in a single variable.  
- Useful methods:  
  - push(): Add an element at the end.  
  - pop(): Remove the last element.  
  - unshift(): Add an element at the beginning.  
  - splice(): Add/remove elements at a specific index.  

- Example:  
  ```javascript
  let colors = ["Red", "Green", "Blue"];
  colors.push("Yellow");  // ["Red", "Green", "Blue", "Yellow"]
  colors.shift();         // ["Green", "Blue", "Yellow"]
  console.log(colors);

2. Objects
	•	Objects hold related data in key-value pairs.
	•	Example:

let student = {
    name: "Charu",
    grade: "A",
    subjects: ["Math", "Science"]
};
console.log(student.name);        // Output: Charu
console.log(student.subjects[1]); // Output: Science

3. Loops
	1.	For Loop: Iterate a specific number of times.

for (let i = 1; i <= 3; i++) {
    console.log(Iteration ${i});
}


	2.	For…Of Loop: Iterate through an array.

let animals = ["Cat", "Dog", "Rabbit"];
for (let animal of animals) {
    console.log(animal);
}


	3.	While Loop: Repeat as long as a condition is true.

let count = 0;
while (count < 3) {
    console.log(Count: ${count});
    count++;
}

Reflection
	•	Arrays and objects are powerful tools for organizing data.
	•	Loops made it easier to work with collections and repeat tasks efficiently.

