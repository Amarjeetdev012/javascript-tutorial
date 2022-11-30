// Introduction to JavaScript Promise.race() static method
// The Promise.race() static method accepts a list of promises as an iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise.

// Here’s the syntax of the Promise.race() method:

// Promise.race(iterable)
// Code language: JavaScript (javascript)
// In this syntax, the iterable is an iterable object that contains a list of promises.

// The name of Promise.race() implies that all the promises race against each other with a single winner, either resolved or rejected.

// See the following diagram:


// In this diagram:

// The promise1 is fulfilled with the value v1 at t1.
// The promise2 is rejected with the error at t2.
// Because the promise1 is resolved earlier than the promise2, the promise1 wins the race. Therefore, the Promise.race([promise1, promise2]) returns a new promise that is fulfilled with the value v1 at t1.
// See another diagram:


// In this diagram:

// The promise1 is fulfilled with v1 at t2.
// The promise2 is rejected with error at t1.
// Because the promise2 is resolved earlier than the promise1, the promise2 wins the race. Therefore, the Promise.race([promise1, promise2]) returns a new promise that is rejected with the error at t1.
// JavaScript Promise.race() examples
// Let’s take some examples of using the Promise.race() static method.

// 1) Simple JavaScript Promise.race() examples
// The following creates two promises: one resolves in 1 second and the other resolves in 2 seconds. Because the first promise resolves faster than the second one, the Promise.race() resolves with the value from the first promise:

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 1 * 1000);

// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has resolved');
//         resolve(20);
//     }, 2 * 1000);
// });


// Promise.race([p1, p2])
//     .then(value => console.log(`Resolved: ${value}`))
//     .catch(reason => console.log(`Rejected: ${reason}`));
// Code language: JavaScript (javascript)
// Output:

// The first promise has resolved
// Resolved: 10
// The second promise has resolved
// The following example creates two promises. The first promise resolves in 1 second while the second one rejects in 2 seconds. Because the first promise is faster than the second one, the returned promise resolves to the value of the first promise:

//! Summary
// The Promise.race(iterable) method returns a new promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or error from that promise.