//! A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation. The following shows the syntax of defining an immediately invoked function expression:

// (function(){
//  ...
// })();
// Why IIFEs
// When you define a function, the JavaScript engine adds the function to the global object. See the following example:

// function add(a,b) {
//     return a + b;
// }
// In web browsers, the JavaScript engine adds the add() function to the window global object:

// console.log(window.add);
// Likewise, if you declare a variable outside of a function using the var keyword, the JavaScript engine also adds the variable to the global object:

// var counter = 10;
// console.log(window.counter); // 10
// If you have many global variables and functions, the JavaScript engine will only release the memory allocated for them until the global object loses its scopes.

// As a result, the script may use the memory inefficiently. On top of that, having global variables and functions will likely cause name collisions.

// One way to prevent the functions and variables from polluting the global object is to use immediately invoked function expressions.

// In addition, you can execute the function immediately after creating it:

// let sum = (function(a,b){
//     return a + b;
// })(10, 20);

// console.log(sum);
// Code language: JavaScript (javascript)
// In this example, the sum variable holds the result of the function call.

// The following expression is called an immediately invoked function expression (IIFE) because the function is created as an expression and executed immediately:

// (function(a,b){
//         return a + b;
// })(10,20);
// Code language: JavaScript (javascript)
// This is the general syntax for defining an IIFE:

// (function(){
//     ...
// })();