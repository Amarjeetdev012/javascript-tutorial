// Arrow function vs. regular function
// There are two main differences between an arrow function and a regular function.

// First, in the arrow function, the this, arguments, super, new.target are lexical. It means that the arrow function uses these variables (or constructs) from the enclosing lexical scope.
// Second, an arrow function cannot be used as a function constructor. If you use the new keyword to create a new object from an arrow function, you will get an error.
// JavaScript arrow functions and this value
// In JavaScript, a new function defines its own this value. However, it is not the case for the arrow function. See the following example:

// function Car() {
//     this.speed = 0;

//     this.speedUp = function (speed) {
//         this.speed = speed;
//         setTimeout(function () {
//             console.log(this.speed); // undefined
//         }, 1000);

//     };
// }

// let car = new Car();
// car.speedUp(50);
// Code language: JavaScript (javascript)
// Inside the anonymous function of the setTimeout() function, the this.speed is undefined. The reason is that the this of the anonymous function shadows the this of the speedUp() method.

// To fix this, you assign the this value to a variable that doesn’t shadow inside the anonymous function as follows:

// function Car() {
//     this.speed = 0;

//     this.speedUp = function (speed) {
//         this.speed = speed;
//         let self = this;
//         setTimeout(function () {
//             console.log(self.speed);
//         }, 1000);

//     };
// }

// let car = new Car();
// car.speedUp(50); // 50;
// Code language: JavaScript (javascript)
// Unlike an anonymous function, an arrow function captures the this value of the enclosing context instead of creating its own this context. The following code should work as expected:

// function Car() {
//     this.speed = 0;

//     this.speedUp = function (speed) {
//         this.speed = speed;
//         setTimeout(
//             () => console.log(this.speed),
//             1000);

//     };
// }

// let car = new Car();
// car.speedUp(50); // 50;
// Code language: JavaScript (javascript)
// JavaScript arrow functions and the arguments object
// An arrow function doesn’t have the arguments object. For example:

// function show() {
//     return x => x + arguments[0];
// }

// let display = show(10, 20);
// let result = display(5);
// console.log(result); // 15
// Code language: JavaScript (javascript)
// The arrow function inside the showMe() function references the arguments object. However, this arguments object belongs to the show() function, not the arrow function.

// Also, an arrow function doesn’t have the new.target keyword.

// JavaScript arrow functions and the prototype property
// When you define a function using a function keyword, the function has a property called prototype:

// function dump( message ) {
//     console.log(message);
// }
// console.log(dump.hasOwnProperty('prototype')); // true
// Code language: JavaScript (javascript)
// However, arrow functions don’t have the prototype property:

// let dump = message => console.log(message);
// console.log(dump.hasOwnProperty('prototype')); // false
// Code language: JavaScript (javascript)
// It is a good practice to use arrow functions for callbacks and closures because the syntax of arrow functions is cleaner.

//! Summary
// Use the (...args) => expression; to define an arrow function.
// Use the (...args) => { statements } to define an arrow function that has multiple statements.
// An arrow function doesn’t have its binding to this or super.
// An arrow function doesn’t have arguments object, new.target keyword, and prototype property.

//! Summary
// An arrow function doesn’t have its own this value. Instead, it uses the this value of the enclosing lexical scope. An arrow function also doesn’t have the arguments object.
// Avoid using the arrow function for event handlers, object methods, prototype methods, and functions that use the arguments object.