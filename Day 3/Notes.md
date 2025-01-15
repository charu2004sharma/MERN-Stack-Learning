# Day 4: Browser-Server Communication, HTTP, and HTTPS  

*Browser-Server Communication*  
 *How it Works:*  
   - The browser (client) sends a request to the server to fetch resources like HTML, CSS, and JavaScript.  
   - The server processes the request and sends back a response with the requested data.  
 *Key Components of Communication:*  
   - *Request:* Contains the HTTP method (e.g., GET, POST), URL, headers, and optional body.  
   - *Response:* Contains status codes (e.g., 200 OK, 404 Not Found), headers, and the response body.  
*Request-Response Cycle:*  
   - User enters a URL → DNS resolves domain → Browser sends HTTP/HTTPS request → Server responds with content → Browser renders the page.  
 *HTTP and HTTPS*  
 *HTTP (Hypertext Transfer Protocol):*  
   - A protocol used to transfer data between browser and server.  
   - *Methods:* GET (retrieve), POST (submit), PUT (update), DELETE (remove).  
   - *Status Codes:*  
     - 200: Success  
     - 301: Redirect  
     - 404: Not Found  
     - 500: Server Error  
*HTTPS (HTTP Secure):*  
   - Secure version of HTTP that encrypts communication using SSL/TLS.  
   - Benefits:  
     - *Confidentiality:* Encrypts data.  
     - *Integrity:* Prevents tampering.  
     - *Authentication:* Ensures the server is trustworthy through SSL certificates.  
*Hands-On Practice*  
- Used Chrome DevTools to analyze HTTP/HTTPS requests:  
  - Observed request headers, response headers, and status codes in the *Network* tab.  
  - Examined SSL certificates and encryption details in the *Security* tab for HTTPS websites.  
- Compared HTTP and HTTPS behavior on different websites.  
  
