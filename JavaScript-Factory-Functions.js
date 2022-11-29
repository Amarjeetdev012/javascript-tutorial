// function createPerson(firstName, lastName) {
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       getFullName() {
//         return firstName + ' ' + lastName;
//       },
//     };
//   }
//   Code language: JavaScript (javascript)
//!   When a function creates and returns a new object, it is called a factory function. The createPerson() is a factory function because it returns a new person object.

//   The following show how to use the createPerson() factory function to create two objects person1 and person2:

//   function createPerson(firstName, lastName) {
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       getFullName() {
//         return firstName + ' ' + lastName;
//       },
//     };
//   }

//   let person1 = createPerson('John', 'Doe');
//   let person2 = createPerson('Jane', 'Doe');

//   console.log(person1.getFullName());
//   console.log(person2.getFullName());
//   Code language: JavaScript (javascript)
//   By using the factory function, you create any number of the person objects without duplicating code.

//   When you create an object, the JavaScript engine allocates memory to it. If you create many person objects, the JavaScript engine needs lots of memory spaces to store these objects.

//! The Object.create() method
// The Object.create() method creates a new object using an existing object as the prototype of the new object:

// Object.create(proto, [propertiesObject])
// Code language: CSS (css)
// So you can use the Object.create() as follows:

// var personActions = {
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// function createPerson(firstName, lastName) {
//   let person = Object.create(personActions);
//   person.firstName = firstName;
//   person.lastName = lastName;
//   return person;
// }
// Code language: JavaScript (javascript)
// Now, you can create person objects and call the methods of the personActions object:

// let person1 = createPerson('John', 'Doe');
// let person2 = createPerson('Jane', 'Doe');

// console.log(person1.getFullName());
// console.log(person2.getFullName());
// Code language: JavaScript (javascript)
// The code works perfectly fine. However, in practice, you will rarely use the factory functions. Instead, you use classes or constructor/prototype patterns.

// Summary
// A factory function is a function that returns a new object.
// Use Object.create() to create an object using an existing object as a prototype.
