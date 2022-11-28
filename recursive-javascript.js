// Introduction to the JavaScript recursive functions
// A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.

// Suppose that you have a function called recurse(). The recurse() is a recursive function if it calls itself inside its body, like this:

// function recurse() {
//      ...
//     recurse();
//      ...
// }
// A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely. So a recursive function typically looks like the following:

// function recurse() {
//     if(condition) {
//         stop calling itself
//         ...
//     } else {
//         recurse();
//     }
// }
// Generally, you use recursive functions to break down a big problem into smaller ones. Typically, you will find the recursive functions in data structures like binary trees and graphs and algorithms such as binary search and quicksort.

// JavaScript recursive function examples
// Let’s take some examples of using recursive functions.

// 1) A simple JavaScript recursive function example

// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(3);

// 2) Calculate the sum of n natural numbers example
// Suppose you need to calculate the sum of natural numbers from 1 to n using the recursion technique. To do that, you need to define the sum() recursively as follows:

// The following illustrates the sum() recursive function:

function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1);
}

console.log(sum(33));

//! Summary
// A recursive function is a function that calls itself until it doesn’t
// A recursive function always has a condition that stops the function from calling itself.
