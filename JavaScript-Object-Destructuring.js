// Nested object destructuring
// Assuming that you have an employee object which has a name object as the property:

// let employee = {
//     id: 1001,
//     name: {
//         firstName: 'John',
//         lastName: 'Doe'
//     }
// };

// let {
//     name: {
//         firstName,
//         lastName
//     },
//     name
// } = employee;

// console.log(firstName); // John
// console.log(lastName); // Doe
// console.log(name); // { firstName: 'John', lastName: 'Doe' }

// Summary
// Object destructuring assigns the properties of an object to variables with the same names by default.