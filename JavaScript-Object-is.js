// link of the Image
// https://www.javascripttutorial.net/es6/javascript-object-is/

// in this tutorial, you will learn about the JavaScript Object.is() to check if two values are the same.

// The Object.is() behaves like the === operator with two differences:

// -0 and +0
// NaN
// Negative zero
// The === operator treats -0 and +0 are the same value:

// let amount = +0,
//     volume = -0;
// console.log(volume === amount);
// Code language: JavaScript (javascript)
// Output:

// true
// Code language: JavaScript (javascript)
// However, the Object.is() treats +0 and -0 as different values. For example:

// let amount = +0,
//     volume = -0;
// console.log(Object.is(amount, volume));
// Code language: JavaScript (javascript)
// Output

// false
// Code language: JavaScript (javascript)
// NaN
// The === operator considers NaN and NaN are different values. The NaN is the only number that does not equal itself. For example:

// let quantity = NaN;
// console.log(quantity === quantity);
// Code language: JavaScript (javascript)
// Output:

// false

// However, Object.is() treats NaN as the same value:

// let quantity = NaN;

// console.log(Object.is(quantity, quantity));

// Output:

// true

// See the following sameness comparison table for reference: