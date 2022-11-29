// let name = 'machine name';
// let machine = {
//     [name]: 'server',
//     'machine hours': 10000
// };
// console.log(name)
// console.log(machine[name]); // server
// console.log(machine['machine hours']); // 10000

// Computed property name
// Prior to ES6, you could use the square brackets( [])  to enable the computed property names for the properties on objects.

// The square brackets allow you to use the string literals and variables as the property names.

// The name variable was initialized to a value of 'machine name'. Since both properties of the machine object contains a space, you can only reference them using the square brackets.

// In ES6, the computed property name is a part of the object literal syntax, and it uses the square bracket notation.

// When a property name is placed inside the square brackets, the JavaScript engine evaluates it as a string. It means that you can use an expression as a property name. For example:

// let prefix = 'machine';
// let machine = {
//     [prefix + ' name']: 'server',
//     [prefix + ' hours']: 10000
// };

// console.log(prefix);
// console.log(machine['machine name']); // server
// console.log(machine['machine hours']); // 10000
// Code language: JavaScript (javascript)
// The machine object’s properties evaluate to 'machine name' and 'machine hours', therefore you can reference them as the properties of the machine object.

// his shorthand syntax is also known as the concise method syntax. It’s valid to have spaces in the property name. For example:

//* let server = {
//     name: 'Server',
//     restart() {
//         console.log("The " + this.name + " is restarting...");
//     },
//     'starting up'() {
//         console.log("The " +  this.name + " is starting up!");
//     }
// };

//! server['starting up']();
// Code language: JavaScript (javascript)
// In this example, the method 'starting up' has spaces in its name. To call the method, you use the following syntax:

// object_name['property name']();
// Code language: CSS (css)
// In this tutorial, you have learned how to use some new object literal syntax extensions in ES6 including property initializer shorthand, computed properties, and concise method syntax.