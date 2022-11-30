// { // enter new scope, TDZ starts
//     let log = function () {
//         console.log(message); // messagedeclared later
//     };

//     // This is the TDZ and accessing log
//     // would cause a ReferenceError

//     let message= 'Hello'; // TDZ ends
//     log(); // called outside TDZ
// }

// { // TDZ starts
//     console.log(typeof myVar); // undefined
//     console.log(typeof message); // ReferenceError
//     let message; // TDZ ends
// }

//! Summary
// Variables are declared using the let keyword are block-scoped, are not initialized to any value, and are not attached to the global object.
// Redeclaring a variable using the let keyword will cause an error.
// A temporal dead zone of a variable declared using the let keyword starts from the block until the initialization is evaluated.