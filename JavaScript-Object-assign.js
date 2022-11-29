// in this tutorial, you will learn how to use the JavaScript Object.assign() method in ES6.

// The following shows the syntax of the Object.assign() method:

// Object.assign(target, ...sources)

//* Using JavaScript Object.assign() to clone an object

// let widget = {
//     color: 'red'
// };

//TODO let clonedWidget = Object.assign({}, widget);

// console.log(clonedWidget);
// { color: 'red' }

// Using JavaScript Object.assign() to merge objects

// let box = {
//     height: 10,
//     width: 20
// };

// let style = {
//     color: 'Red',
//     borderStyle: 'solid'
// };

// let styleBox = Object.assign({}, box, style);

// console.log(styleBox);
// Code language: JavaScript (javascript)
// Output:

// {
//     height: 10,
//     width: 20,
//     color: 'Red',
//     borderStyle: 'solid'
// }

//! Summary
// Object.assign() assigns enumerable and own properties from a source object to a target object.
// Object.assign() can be used to clone an object or merge objects.