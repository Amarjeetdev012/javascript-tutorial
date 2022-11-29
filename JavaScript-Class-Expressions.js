// First-class citizen
// JavaScript classes are first-class citizens. It means that you can pass a class into a function, return it from a function, and assign it to a variable.

// See the following example:

// function factory(aClass) {
//     return new aClass();
// }

// let greeting = factory(class {
//     sayHi() { console.log('Hi'); }
// });

// greeting.sayHi(); // 'Hi'
// Code language: Python (python)
// How it works.

// First, define a factory() function that takes a class expression as an argument and return the instance of the class:

// function factory(aClass) {
//     return new aClass();
// }
// Code language: Python (python)
// Second, pass an unnamed class expression to the factory() function and assign its result to the greeting variable:

// let greeting = factory(class {
//     sayHi() { console.log('Hi'); }
// });
// Code language: Python (python)
// The class expression has a method called sayHi(). And the greeting variable is an instance of the class expression.

// Third, call the sayHi() method on the greeting object:

// greeting.sayHi(); // 'Hi'

// Singleton
// Singleton is a design pattern that limits the instantiation of a class to a single instance. It ensures that only one instance of a class can be created throughout the system.

// Class expressions can be used to create a singleton by calling the class constructor immediately.

// To do that, you use the new operator with a class expression and include the parentheses at the end of class declaration as shown in the following example:

// let app = new class {
//     constructor(name) {
//         this.name = name;
//     }
//     start() {
//         console.log(`Starting the ${this.name}...`);
//     }
// }('Awesome App');

// app.start(); // Starting the Awesome App...
// Code language: Python (python)
// How it works.

// The following is an unnamed class expresion:

// new class {
//     constructor(name) {
//         this.name = name;
//     }
//     start() {
//         console.log(`Starting the ${this.name}...`);
//     }
// }

// The class has a constructor() that accepts an argument. It aslo has a method called start().

// The class expression evaluates to a class. Therefore, you can call its constructor immediately by placing parentheses after the expression:

// new class {
//     constructor(name) {
//         this.name = name;
//     }
//     start() {
//         console.log(`Starting the ${this.name}...`);
//     }
// }('Awesome App')
// Code language: Python (python)
// This expression returns an instance of the class expression which is assigned to the app variable.

// The following calls the start() method on the app object:

// app.start(); // Starting the Awesome App...
// Code language: Python (python)
//! Summary
// ES6 provides you with an alternative way to defining a new class using a class expression.
// Class expressions can be named or unnamed.
// The class expression can be used to create a singleton object.

