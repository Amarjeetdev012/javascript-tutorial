// { // enter new scope, TDZ starts
//     let log = function () {
//         console.log(message); // messagedeclared later
//     };

//     // This is the TDZ and accessing log
//     // would cause a ReferenceError

//     let message= 'Hello'; // TDZ ends
//     log(); // called outside TDZ
// }

// { // TDZ starts
//     console.log(typeof myVar); // undefined
//     console.log(typeof message); // ReferenceError
//     let message; // TDZ ends
// }

//! Summary
// Variables are declared using the let keyword are block-scoped, are not initialized to any value, and are not attached to the global object.
// Redeclaring a variable using the let keyword will cause an error.
// A temporal dead zone of a variable declared using the let keyword starts from the block until the initialization is evaluated.

//todo var
// for (var i = 0; i < 5; i++) {
// 	console.log("Inside the loop:", i);
// }

// console.log("Outside the loop:", i);

// output:
// Inside the loop: 0
// Inside the loop: 1
// Inside the loop: 2
// Inside the loop: 3
// Inside the loop: 4
// Outside the loop: 5

//todo let
// for (let i = 0; i < 5; i++) {
// 	console.log("Inside the loop:", i);
// }

// console.log("Outside the loop:", i);

// Inside the loop: 0
// Inside the loop: 1
// Inside the loop: 2
// Inside the loop: 3
// Inside the loop: 4
// d:\amarjeet\javascript\javascript-tutorial\var-let-const.js:44
// console.log("Outside the loop:", i);
//                                  ^

// ReferenceError: i is not defined

//! #4: The Temporal dead zone
// The let variables have temporal dead zones while the var variables don’t. To understand the temporal dead zone, let’s examine the life cycles of both var and let variables, which have two steps: creation and execution.

// The var variables
// In the creation phase, the JavaScript engine assigns storage spaces to var variables and immediately initializes them to undefined.
// In the execution phase, the JavaScript engine assigns the var variables the values specified by the assignments if there are ones. Otherwise, the var variables remain undefined.
// See the execution context for more information.

// The let variables
// In the creation phase, the JavaScript engine assigns storage spaces to the let variables but does not initialize the variables. Referencing uninitialized variables will cause a ReferenceError.
// The let variables have the same execution phase as the var variables.
// The temporal dead zone starts from the block until the let variable declaration is processed. In other words, it is the location where you cannot access the let variables before they are defined.

// In this tutorial, you have learned about the differences between var and let keywords.

// JavaScript const and Arrays
// Consider the following example:

// const colors = ['red'];
// colors.push('green');
// console.log(colors); // ["red", "green"]

// colors.pop();
// colors.pop();
// console.log(colors); // []

// colors = []; // TypeError
// Code language: JavaScript (javascript)
// In this example, we declare an array colors that has one element using the const keyword. Then, we can change the array’s elements by adding the green color. However, we cannot reassign the array colors to another array.

// let scores = [75, 80, 95];

// for (let score of scores) {
// 	console.log(score);
// }

//! Summary
// The const keyword creates a read-only reference to a value. The readonly reference cannot be reassigned but the value can be change.
// The variables declared by the const keyword are blocked-scope and cannot be redeclared.