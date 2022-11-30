// ES6 introduced a new statement for...of that iterates over an iterable object such as:

// Built-in Array, String, Map, Set, …
// Array-like objects such as arguments or NodeList
// User-defined objects that implement the iterator protocol.
// The following illustrates the syntax of the for...of:

// for (variable of iterable) {
//    // ...
// }

//todo https://www.javascripttutorial.net/es6/javascript-for-of/

//* 1) Iterating over arrays
// let scores = [80, 90, 70];

// for (let score of scores) {
    // score = score + 5;
    // console.log(score);
// }

//* 2) In-place object destructuring with for…of
// Consider the following example:

// const ratings = [
//     {user: 'John',score: 3},
//     {user: 'Jane',score: 4},
//     {user: 'David',score: 5},
//     {user: 'Peter',score: 2},
// ];

// let sum = 0;
// for (const {score} of ratings) {
//     sum += score;
// }

// console.log(`Total scores: ${sum}`); // 14
// Output:

// Total scores: 14

//* 3) Iterating over strings
// The following example uses the for...of loop to iterate over characters of a string.

// let str = 'abc';
// for (let c of str) {
//     console.log(c);
// }
// Output:

// a
// b
// c

// 4) Iterating over Map objects
// The following example illustrates how to use the for...of statement to iterate over a Map object.

// let colors = new Map();

// colors.set('red', '#ff0000');
// colors.set('green', '#00ff00');
// colors.set('blue', '#0000ff');

// for (let color of colors) {
//     console.log(color);
// }
// Output:

// [ 'red', '#ff0000' ]
// [ 'green', '#00ff00' ]
// [ 'blue', '#0000ff' ]
// Code language: JSON / JSON with Comments (json)
// 5) Iterating over set objects
// The following example shows how to iterate over a set object using the for...of loop:

// let nums = new Set([1, 2, 3]);

// for (let num of nums) {
//     console.log(num);
// }

// Summary
// Use the for...of loop to iterate over elements of an iterable object.