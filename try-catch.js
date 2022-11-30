// Introduction to JavaScript try…catch statement
// The following example attempts to call the add() function that doesn’t exist:

// let result = add(10, 20);
// console.log(result);

// console.log('Bye');
// Code language: JavaScript (javascript)
// And the JavaScript engine issues the following error:

// Uncaught TypeError: add is not a function
// Code language: JavaScript (javascript)
// The error message states that the add is not a function and the error type is TypeError.

// When the JavaScript engine encounters an error, it issues that error and immediately terminates the execution of the entire script. In the above example, the code execution stops at the first line.

// Sometimes, you want to handle the error and continue the execution. To do that, you use the try...catch statement with the following syntax:

// try {
//   // code may cause error
// } catch(error){
//   // code to handle error
// }
// Code language: JavaScript (javascript)
// In this syntax:

// First, place the code that may cause an error in the try block.
// Second, implement the logic to handle the error in the catch block.
// If an error occurs in the try block, the JavaScript engine immediately executes the code in the catch block. Also, the JavaScript engine provides you with an error object that contains detailed information about the error.

// Basically, the error object has at least two properties:

// name specifies the error name.
// message explains the error in detail.
// If no error occurs in the try block, the JavaScript engine ignores the catch block.

// Note that web browsers may add more properties to the error object. For example, Firefox adds filename, lineNumber, and stack properties to the error object.

// It’s a good practice to place only the code that may cause an exception in the try block.

// The following flowchart illustrates how the try...catch statement works:

//! Summary
// Use the try...catch statement to handle exceptions in JavaScript.
// Place only the code that may cause an exception in the try block.

