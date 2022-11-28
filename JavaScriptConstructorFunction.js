// To do that, you can use a constructor function to define a custom type and the new operator to create multiple objects from this type.

// Technically speaking, a constructor function is a regular function with the following convention:

// The name of a constructor function starts with a capital letter like Person, Document, etc.
// A constructor function should be called only with the new operator.
// Note that ES6 introduces the class keyword that allows you to define a custom type. And classes are just syntactic sugar over the constructor functions with some enhancements.

// The following example defines a constructor function called Person:

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// Code language: JavaScript (javascript)
// In this example, the Person is the same as a regular function except that its name starts with the capital letter P.

// To create a new instance of the Person, you use the new operator:

// let person = new Person('John','Doe');
// Code language: JavaScript (javascript)
// Basically, the new operator does the following:

// Create a new empty object and assign it to the this variable.
// Assign the arguments 'John' and 'Doe' to the firstName and lastName properties of the object.
// Return the this value.
// It’s functionally equivalent to the following:

// function Person(firstName, lastName) {
//     // this = {};

//     // add properties to this
//     this.firstName = firstName;
//     this.lastName = lastName;

//     // return this;
// }
// Code language: JavaScript (javascript)
// Therefore, the following statement:

// let person = new Person('John','Doe');
// Code language: JavaScript (javascript)
// … returns the same result as the following statement:

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// Code language: JavaScript (javascript)
// However, the constructor function Person allows you to create multiple similar objects. For example:

// let person1 = new Person('Jane','Doe')
// let person2 = new Person('James','Smith')


// Adding methods to JavaScript constructor functions
// An object may have methods that manipulate its data. To add a method to an object created via the constructor function, you can use the this keyword. For example:

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
//     };
// }
// Code language: JavaScript (javascript)
// Now, you can create a new Person object and invoke the getFullName() method:

// let person = new Person("John", "Doe");
// console.log(person.getFullName());
// Code language: JavaScript (javascript)
// Output:

// John Doe
// The problem with the constructor function is that when you create multiple instances of the Person, the this.getFullName() is duplicated in every instance, which is not memory efficient.

// To resolve this, you can use the prototype so that all instances of a custom type can share the same methods.

// function Person(firstName, lastName) {
//     console.log(new.target);

//     this.firstName = firstName;
//     this.lastName  = lastName;

//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
//     };
// }

// The following returns undefined because the Person constructor function is called like a regular function:

// let person = Person("John", "Doe");
// Code language: JavaScript (javascript)
// Output:

// undefined
// Code language: JavaScript (javascript)
// However, the following returns a reference to the Person function because it’s called with the new keyword:

// let person = new Person("John", "Doe");
// Code language: JavaScript (javascript)
// Output:

// [Function: Person]
// Code language: JSON / JSON with Comments (json)
// By using the new.target, you can force the callers of the constructor function to use the new keyword. Otherwise, you can throw an error like this:

// function Person(firstName, lastName) {
//     if (!new.target) {
//         throw Error("Cannot be called without the new keyword");
//     }

//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// Code language: JavaScript (javascript)
// Alternatively, you can make the syntax more flexible by creating a new Person object if the users of the constructor function don’t use the new keyword:

// function Person(firstName, lastName) {
//     if (!new.target) {
//         return new Person(firstName, lastName);
//     }

//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person = Person("John", "Doe");

// console.log(person.firstName);
// Code language: JavaScript (javascript)
// This pattern is often used in JavaScript libraries and frameworks to make the syntax more flexible.

// Summary
// JavaScript constructor function is a regular function used to create multiple similar objects.