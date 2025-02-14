 Understanding the HTTP Module  

## *What I Learned*  

### *1. Introduction to the HTTP Module*  
- The *http* module in Node.js is used to create a basic web server.  
- It listens for incoming requests and sends responses.  
- Important methods:  
  - http.createServer() → Creates a new server.  
  - res.writeHead() → Sets response headers.  
  - res.end() → Sends the response.  

### *2. Creating a Basic Server*  
#### *Example: Simple HTTP Server*
javascript
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello! This is my first Node.js server.");
});

server.listen(3000, () => console.log("Server running on port 3000"));

	•	Start the server using:

node server.js


	•	Open http://localhost:3000 in a browser to see the response.

3. Handling Multiple Routes
	•	The server can respond differently based on the requested route.


Hands-On Practice
	1.	Modify the server to return HTML responses instead of plain text.
	2.	Test the server with different HTTP methods.

Reflection
	•	Learned how to create a basic HTTP server with Node.js.
	•	Handling different routes helped understand request-response flow.
