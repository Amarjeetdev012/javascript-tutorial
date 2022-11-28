// in this tutorial, you will learn how to handle JavaScript default parameters in ES6.

// function say(message='Hi') {
//     console.log(message);
// }

// say(); // 'Hi'
// say('Hello') // 'Hello'
// Code language: JavaScript (javascript)
// The default value of the message paramater in the say() function is 'Hi'.

// In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or undefined are passed into the function.

// Setting JavaScript default parameters for a function
// In JavaScript, a parameter has a default value of undefined. It means that if you don’t pass the arguments into the function, its parameters will have the default values of undefined.

// See the following example:

// function say(message) {
//     console.log(message);
// }

// say(); // undefined
// Code language: JavaScript (javascript)
// The say() function takes the message parameter. Because we didn’t pass any argument into the say() function, the value of the message parameter is undefined.

// Suppose that you want to give the message parameter a default value 10.

// A typical way for achieving this is to test parameter value and assign a default value if it is undefined using a ternary operator:

// function say(message) {
//     message = typeof message !== 'undefined' ? message : 'Hi';
//     console.log(message);
// }
// say(); // 'Hi'
// Code language: JavaScript (javascript)
// In this example, we didn’t pass any value into the say() function. Therefore, the default value of the message argument is undefined. Inside the function, we reassigned the message variable the Hi string.

//! ES6 provides you with an easier way to set the default values for the function parameters like this:

// function fn(param1=default1, param2=default2,..) {
// }
// Code language: JavaScript (javascript)
// In the syntax above, you use the assignment operator (=) and the default value after the parameter name to set a default value for that parameter. For example:

//TODO function say(message='Hi') {
//     console.log(message);
// }

// say(); // 'Hi'
// say(undefined); // 'Hi'
// say('Hello'); // 'Hello'
// Code language: JavaScript (javascript)
// How it works.

// In the first function call, we didn’t pass any argument into the say() function, therefore message parameter took the default value 'Hi'.
// In the second function call, we passed the undefined into the say() function, hence the message parameter also took the default value 'Hi'.
// In the third function call, we passed the 'Hello' string into the say() function, therefore message parameter took the string 'Hello' as the default value.