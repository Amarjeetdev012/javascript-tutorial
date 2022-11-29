// A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.

// ES6 class declaration
// ES6 introduced a new syntax for declaring a class as shown in this example:

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }
// Code language: JavaScript (javascript)
// This Person class behaves like the Person type in the previous example. However, instead of using a constructor/prototype pattern, it uses the class keyword.

// In the Person class, the constructor() is where you can initialize the properties of an instance. JavaScript automatically calls the constructor() method when you instantiate an object of the class.

// The following creates a new Person object, which will automatically call the constructor() of the Person class:

// let john = new Person("John Doe");
// Code language: JavaScript (javascript)
// The getName() is called a method of the Person class. Like a constructor function, you can call the methods of a class using the following syntax:

// objectName.methodName(args)
// Code language: CSS (css)
// For example:

// let name = john.getName();
// console.log(name); // "John Doe"
// Code language: JavaScript (javascript)
// To verify the fact that classes are special functions, you can use the typeof operator of to check the type of the Person class.

// console.log(typeof Person); // function

// Note that it’s possible to call the constructor function without the new operator. In this case, the constructor function behaves like a regular function.

//! Summary
// Use the JavaScript class keyword to declare a new class.
// A class declaration is syntactic sugar over prototypal inheritance with additional enhancements.