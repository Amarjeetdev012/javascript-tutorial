// let name = 'fullName';

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get [name]() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// let person = new Person('John', 'Doe');
// console.log(person.fullName);
// Code language: JavaScript (javascript)
// Output:

// John Doe
// How it works:

// The get[name] is a computed property name of a getter of the Person class. At runtime, when you access the fullName property, the person object calls the getter and returns the full name.

//! Summary
// Computed properties allow you to use the values of expressions as property names of an object.