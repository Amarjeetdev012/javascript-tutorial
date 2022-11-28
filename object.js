//! When a property name contains spaces, you need to place it inside quotes. For example, the following address object has the 'building no' as a property:

// let address = {
//     'building no': 3960,
//     street: 'North 1st street',
//     state: 'CA',
//     country: 'USA'
// };
// To access the 'building no' property, you need to use the array-like notation:

// address['building no'];
// Code language: CSS (css)
// If you use the dot notation, you’ll get an error:

// address.'building no';
// Code language: JavaScript (javascript)
// Error:

// SyntaxError: Unexpected string
//TODO: Note that it is not a good practice to use spaces in the property names of an object.

//! Summary
// An object is a collection of key-value pairs.
// Use the dot notation ( .) or array-like notation ([]) to access a property of an object.
// The delete operator removes a property from an object.
// The in operator check if a property exists in an object.