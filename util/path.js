const path = require("path");

module.exports = path.dirname(process.mainModule.filename);

// path.dirname: This is a function from Node.js's built-in path module. It returns the directory name of a file path.
// process.mainModule.filename: This is a property of Node.js's built-in process object. It contains the absolute filename of the main module that is currently running.
// the main module => app.js
