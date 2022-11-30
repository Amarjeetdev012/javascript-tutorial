// Introduction to the JavaScript Promise.all() method
// The Promise.all() static method takes an iterable of promises:

// Promise.all(iterable);
// Code language: JavaScript (javascript)
// The Promise.all() method returns a single promise that resolves when all the input promises have been resolved. The returned promise resolves to an array of the results of the input promises:


// In this diagram, the promise1 resolves to a value v1 at t1 and the promise2 resolves to a value v2 at t2. Hence, the Promise.all(promise1, promise2) returns a promise that resolves to an array containing the results of the promise1 and promise2 [v1, v2] at t2.

// In other words, the Promise.all() waits for all the input promises to resolve and returns a new promise that resolves to an array containing the results of the input promises.

// If one of the input promise rejects, the Promise.all() method immediately returns a promise that rejects with an error of the first rejected promise:

// JavaScript Promise.all Rejected
// In this diagram, the promise2 rejects at t1 with an error. Therefore, the Promise.all() returns a new promise that immediately rejects with the same error. Also, the Promise.all() doesn’t care other input promises, whether they will resolve or reject.

// In practice, the Promise.all() is useful to aggregate the results from multiple asynchronous operations.