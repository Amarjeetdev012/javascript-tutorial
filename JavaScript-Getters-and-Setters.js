// ES6 provides specific syntax for defining the getter and setter using the get and set keywords. For example:

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         newName = newName.trim();
//         if (newName === '') {
//             throw 'The name cannot be empty';
//         }
//         this._name = newName;
//     }
// }


// let person = new Person('Jane Doe');
// console.log(person); // Jane Doe

// person.name = "rashjya tim"
// console.log(person)


//! Summary
// Use the get and set keywords to define the JavaScript getters and setters for a class or an object.
// The get keyword binds an object property to a method that will be invoked when that property is looked up.
// The set keyword binds an object property to a method that will be invoked when that property is assigned.