//! Summary
// JavaScript hoisting occurs during the creation phase of the execution context that moves the variable and function declarations to the top of the script.
// The JavaScript engine hoists the variables declared using the let keyword, but it doesn’t initialize them as the variables declared with the var keyword.
// The JavaScript engine doesn’t hoist the function expressions and arrow functions.

// Block scope
// ES6 provides the let and const keywords that allow you to declare variables in block scope.

// Generally, whenever you see curly brackets {}, it is a block. It can be the area within the if, else, switch conditions or for, do while, and while loops.

// See the following example:

// function say(message) {
//     if(!message) {
//         let greeting = 'Hello'; // block scope
//         console.log(greeting);
//     }
//     // say it again ?
//     console.log(greeting); // ReferenceError
// }

// say();
// Code language: JavaScript (javascript)
// In this example, we reference the variable greeting outside the if block that results in an error.

// In this tutorial, you have learned about the JavaScript variable scopes including function scope, global scope, and block scope.