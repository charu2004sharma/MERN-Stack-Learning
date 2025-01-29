Day 14: DOM Manipulation Basics  

*What I Learned*  

*1. Introduction to DOM*  
- The *Document Object Model (DOM)* represents the structure of a web page.  
- JavaScript can be used to select, modify, and create HTML elements dynamically.  


*2. Selecting Elements*  
- Different methods for selecting elements:  
  - document.getElementById("id") → Selects by ID.  
  - document.querySelector("selector") → Selects the first matching element.  
  - document.querySelectorAll("selector") → Selects all matching elements.  

- Example:  
  ```javascript
  let heading = document.querySelector("h1");
  heading.innerText = "Hello, DOM!";

3. Modifying HTML and CSS with JavaScript
	1.	Changing Text Content:

document.getElementById("info").textContent = "DOM Manipulation is fun!";

	2.	Modifying Styles Dynamically:

document.body.style.backgroundColor = "yellow";

	3.	Creating and Appending New Elements:

let newDiv = document.createElement("div");
newDiv.textContent = "New Element Added!";
document.body.appendChild(newDiv);

Reflection
	•	Practicing DOM manipulation helped me understand how JavaScript interacts with HTML.
	•	Selecting elements and modifying them dynamically made
