// Introduction to the JavaScript Set object
// ES6 provides a new type named Set that stores a collection of unique values of any type. To create a new empty Set, you use the following syntax:

// let setObject = new Set();
// Code language: JavaScript (javascript)
// The Set constructor also accepts an optional iterable object. If you pass an iterable object to the Set constructor, all the elements of the iterable object will be added to the new set:

// let setObject = new Set(iterableObject);
// Code language: JavaScript (javascript)
// Useful Set methods
// The Set object provides the following useful methods:

// add(value) – appends a new element with a specified value to the set. It returns the Set object, therefore, you can chain this method with another Set method.
// clear()  – removes all elements from the Set object.
// delete(value) – deletes an element specified by the value.
// entries()– returns a new Iterator that contains an array of  [value, value] .
// forEach(callback [, thisArg]) – invokes a callback on each element of the Set with the this value sets to thisArg in each call.
// has(value) – returns true if an element with a given value is in the set, or false if it is not.
// keys() – is the same as values() function.
// [@@iterator] – returns a new Iterator object that contains values of all elements stored in the insertion order.
// JavaScript Set examples
// Create a new Set from an Array
// The following example shows how to create a new Set from an array.

// let chars = new Set(['a', 'a', 'b', 'c', 'c']);
// Code language: JavaScript (javascript)
// All elements in the set must be unique therefore the  chars only contains 3 distinct elements a, b and c.

// console.log(chars);
// Code language: JavaScript (javascript)
// Output:

// Set { 'a', 'b', 'c' }