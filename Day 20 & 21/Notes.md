Introduction to Node.js  

## *What I Learned*  

### *1. What is Node.js?*  
- Node.js is a *runtime environment* that allows JavaScript to run outside the browser.  
- It is built on *Google's V8 engine* and uses an *event-driven, non-blocking* model.  
- Commonly used for *backend development* and *API creation*.  

### *2. Installing Node.js*  
- Check if Node.js is installed:  
  bash
  node -v  # Check Node.js version

	•	Initialize a Node.js project:

npm init -y  # Creates a package.json file



3. Running a Node.js Script
	•	Create a new file index.js and write:

console.log("Hello from Node.js!");
console.log("Running in directory:", __dirname);
console.log("File path:", __filename);


	•	Run the script using:

node index.js



4. Global Objects in Node.js
	•	__dirname → Gives the directory path of the current file.
	•	__filename → Gives the full path of the current file.

Hands-On Practice
	1.	Run a Basic Script:

console.log("Exploring Node.js!");

Reflection
	•	Node.js enables JavaScript to be used for backend applications.	
