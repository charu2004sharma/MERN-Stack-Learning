JavaScript Event Handling  

*What I Learned*  

*1. Introduction to Events*  
- Events let JavaScript respond to user actions (e.g., clicks, typing, hovering).  
- Common event types include:  
  - click → When an element is clicked.  
  - dblclick → Double-click event.  
  - mouseenter → Mouse hovers over an element.  
  - keydown → A key is pressed.  


*2. Handling Events with JavaScript*  
1. **Using addEventListener() (Recommended):**  

   document.getElementById("myButton").addEventListener("click", function() {
       console.log("Button Clicked!");
   });
   
2. Inline Event Handling (Not Recommended):

// <button onclick="console.log('Clicked!')">Click Me</button>

3. Removing an event handler

let btn = document.getElementById("alertBtn");
btn.addEventListener("click", showAlert);
btn.removeEventListener("click", showAlert);

Reflection
	•	Events allow dynamic user interaction with web pages.
	•	addEventListener() provides flexibility in managing multiple event handlers.
