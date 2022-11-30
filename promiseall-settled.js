// Introduction to the Promise.allSettled() method
// ES2020 introduced the Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.

// The following shows the syntax of the Promise.allSettled() method:

// Promise.allSettled(iterable);
// Code language: JavaScript (javascript)
// The iterable contains the promises. The Promise.allSettled() returns a pending promise that will be asynchronously fulfilled once every input promise has settled.

// The Promise.allSettled() method returns a promise that resolves to an array of objects that each describes the result of the input promise.

// Each object has two properties: status and value (or reason).

// The status can be either fulfilled or rejected.
// The value if case the promise is fulfilled or reason) if the promise is rejected.
// The following diagram illustrates how the Promise.allSettled() method works:

// JavaScript Promise.allSettled
// In this diagram:

// The promise1 rejects to the error at t1.
// The promise2 resolves to a value at t2.
// The Promise.allSettled() method resolves to a array containing objects that describe the statuses and outcomes of the promise1 and promise2.

// Summary
// The Promise.allSettled() method accepts an iterable of promises and returns a new promise that resolves when every input promise has settled with an array of objects that describes the result of each promise in the iterable object.