// Introduction to the JavaScript promise chaining
// Sometimes, you want to execute two or more related asynchronous operations, where the next operation starts with the result from the previous step. For example:

// First, create a new promise that resolves to the number 10 after 3 seconds:

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });
// Code language: JavaScript (javascript)
// Note that the setTimeout() function simulates an asynchronous operation.