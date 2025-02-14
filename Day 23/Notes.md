## *What I Learned*  

### *1. Serving HTML Files with Node.js*  
- Instead of sending plain text, we can serve actual HTML files using the *fs* module.  
- The fs.readFile() method reads an HTML file and serves it.  

#### *Example: Serving an HTML File*
javascript
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    }
});

server.listen(3000, () => console.log("Server running on port 3000"));

	•	The server reads and serves index.html when visiting http://localhost:3000/.

2. Sending JSON Responses
	•	Node.js can return JSON data, useful for APIs.

3. Handling 404 Errors
	•	If a user accesses an unknown route, the server should return 404 Not Found.



Reflection
	•	Learned how to serve HTML files using Node.js.
	•	JSON APIs for structured responses.
	•	Handling 404 errors improved user experience.
