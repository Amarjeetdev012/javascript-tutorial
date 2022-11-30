// Introduction to the JavaScript try…catch…finally statement
// The try...catch statement allows you to catch exceptions and handle them gracefully. Sometimes, you want to execute a block whether exceptions occur or not. In this case, you can use the try...catch...finally statement with the following syntax:

// try {
//   // code may cause exceptions
// } catch (error) {
//   // code to handle exceptions
// } finally {
//   // code to execute whether exceptions occur or not
// }
// Code language: JavaScript (javascript)
// In this syntax, the finally block always executes after the try and catch blocks complete and whether exceptions occur or not.

// The following flowchart illustrates how the try...catch...finally works:

// JavaScript try...catch...finally
// JavaScript try…catch…finally statement example
// The following example illustrates how to use the try...catch...finally statement:

// let result = 0;
// try {
//   result = add(10, 20);
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log({ result });
// }
// Code language: JavaScript (javascript)
// Output:

// add is not defined
// { result: 0 }

//! Summary
// Use the finally clause in the try...catch...finally statement to execute a block whether exceptions occur or not.
// The try...catch...finally statement ignores the return statement in the try and catch blocks because the finally block always executes.