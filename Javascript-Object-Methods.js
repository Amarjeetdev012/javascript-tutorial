// ntroduction to the JavaScript object methods
// An object is a collection of key/value pairs or properties. When the value is a function, the property becomes a method. Typically, you use methods to describe the object behaviors.

// For example, the following adds the greet method to the person object:

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// person.greet = function () {
//     console.log('Hello!');
// }

// person.greet();
// Code language: JavaScript (javascript)
// Output:

// Hello!
// In this example:

// First, use a function expression to define a function and assign it to the greet property of the person object.
// Then, call the method greet() method.

// Besides using a function expression, you can define a function and assign it to an object like this:

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// function greet() {
//     console.log('Hello, World!');
// }

// person.greet = greet;

// person.greet();
// Code language: JavaScript (javascript)
// In this example:

// First, define the greet() function as a regular function.
// Second, assign the function name to the the greet property of the person object.
// Third, call the greet() method.


// Object method shorthand
// JavaScript allows you to define methods of an object using the object literal syntax as shown in the following example:

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet: function () {
//         console.log('Hello, World!');
//     }
// };


//! ES6 provides you with the concise method syntax that allows you to define a method for an object:

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet() {
//         console.log('Hello, World!');
//     }
// };

// person.greet();
// Code language: JavaScript (javascript)
// This syntax looks much cleaner and less verbose.