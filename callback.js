// What are callbacks
// In JavaScript, functions are first-class citizens. Therefore, you can pass a function to another function as an argument.

// By definition, a callback is a function that you pass into another function as an argument for executing later.

// The following defines a filter() function that accepts an array of numbers and returns a new array of odd numbers:

// function filter(numbers) {
//   let results = [];
//   for (const number of numbers) {
//     if (number % 2 != 0) {
//       results.push(number);
//     }
//   }
//   return results;
// }
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// console.log(filter(numbers));
// Code language: JavaScript (javascript)
// How it works.

// First, define the filter() function that accepts an array of numbers and returns a new array of the odd numbers.
// Second, define the numbers array that has both odd and even numbers.
// Third, call the filter() function to get the odd numbers out of the numbers array and output the result.
// If you want to return an array that contains even numbers, you need to modify the filter() function. To make the filter() function more generic and reusable, you can:

// First, extract the logic in the if block and wrap it in a separate function.
// Second, pass the function to the filter() function as an argument.
// Here’s the updated code:

// function isOdd(number) {
//   return number % 2 != 0;
// }

// function filter(numbers, fn) {
//   let results = [];
//   for (const number of numbers) {
//     if (fn(number)) {
//       results.push(number);
//     }
//   }
//   return results;
// }
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// console.log(filter(numbers, isOdd));
// Code language: JavaScript (javascript)
// The result is the same. However, you can pass any function that accepts an argument and returns a boolean value to the second argument of the filter() function.

// function isOdd(number) {
//     return number%2 !== 0
// }

// function isEven(number) {
//     return number%2 == 0
// }

// function filter (numbers, callback) {
//     let results = [] 
//     for(let number of numbers) {
//         if(callback(number)){
//             results.push(number)
//         }
//     }
//     return results
// }

// let numbers = [1,2,5,54,4,8,46,44,646,4,46,46,464,3,46464,64,989,79,87,97,7,876,64,64,34,31,346,464,13.4,64,46,64,9,44,67,64,646,7434,
// 3464,64,46,46,465,4454,64,64,679,646,797645646798,7464,679,46,49,764,164,9461,4646,464,64,646,6464,6416,46,4,4646,6,46,46,46,46,46,46,46,34641+979]

// console.log(filter(numbers, isOdd))
// console.log(filter(numbers, isEven))

// To avoid the pyramid of doom, you use promises or async/await functions.

//! Summary
// A callback is a function passed into another function as an argument to be executed later.
// A high-order function is a function that accepts another function as an argument.
// Callback functions can be synchronous or asynchronous.