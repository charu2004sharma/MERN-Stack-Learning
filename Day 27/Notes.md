 Understanding Frontend-Backend Communication & Backend Setup

What I Learned

1. How Frontend and Backend Work Together
	•	The frontend (HTML, CSS, JavaScript, React) is responsible for displaying content and handling user interactions.
	•	The backend (Node.js, Express, databases) processes requests, manages data, and responds to the frontend.
	•	Communication between them happens via APIs (Application Programming Interfaces).

2. RESTful API Basics
	•	API (Application Programming Interface): A structured way for frontend and backend communication.
	•	Common HTTP Methods:
	•	GET → Retrieves data from the backend.
	•	POST → Sends new data to the backend.
	•	PUT → Updates existing data.
	•	DELETE → Removes data from the backend.
	•	JSON (JavaScript Object Notation) is the standard format for sending and receiving API responses.

3. Making API Requests
	•	The frontend sends API requests using fetch() or Axios.
	•	Example workflow:
	1.	The user interacts with the UI (e.g., clicks a button).
	2.	The frontend makes an API request (GET, POST, etc.).
	3.	The backend processes the request and sends a response.
	4.	The frontend updates the UI based on the response.

4. Testing APIs Using Postman
	•	Postman allows sending API requests manually to check responses before integrating them with the frontend.

5. Setting Up the Backend with Node.js & Express
	•	Express.js is a Node.js framework that simplifies handling API requests.
	•	CORS (Cross-Origin Resource Sharing) must be enabled to allow the frontend to interact with the backend.

6. Understanding CORS and Why It’s Important
	•	By default, browsers block API requests to a different domain for security reasons.
	•	CORS (Cross-Origin Resource Sharing) enables secure frontend-backend communication.
	•	The backend must allow frontend requests by configuring CORS settings.

Reflection
	•	Understood the frontend-backend connection and how APIs work.
	•	Learned how to test APIs using Postman before frontend integration.
	•	Set up a Node.js + Express backend and enabled CORS for cross-origin requests.
