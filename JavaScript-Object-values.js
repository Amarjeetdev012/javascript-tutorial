// JavaScript Object.values()

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25
// };

// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         const value = person[key];
//         console.log(value);

//     }
// }


// ES2017 introduces a new method called Object.values() that allows you to return an array of own enumerable property’s values of an object.

// The following shows the syntax of the Object.values():

// Object.values(obj)
// Code language: JavaScript (javascript)
// The Object.values() accepts an object and returns its own enumerable property’s values as an array. See the following example:

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25
// };

// const profile = Object.values(person);

// console.log(profile);
// Code language: JavaScript (javascript)
// Output:

// [ 'John', 'Doe', 25 ]


//! Summary
// Object.values() vs. for...in
// The Object.values() returns own enumerable properties while the for...in loop iterates properties in the prototype chain.

// Technically, if you use the for...in loop with the Object.hasOwnProperty() method, you will get the same set of values as the Object.values().