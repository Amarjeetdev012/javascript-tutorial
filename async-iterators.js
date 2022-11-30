// The following table illustrates the differences between the iterators and async iterators:

// #	                        Iterators	                            Async iterators
// Well-known Symbol	        Symbol.iterator	                        Symbol.asyncIterator
// next() return value is	    {value, done }	Promise that resolves to {value, done}
// Loop statement	            for...of	                            for await...of

// What is an async generator
// An async generator is similar to a regular generator except that its next() method returns a Promise. To iterate over an async generator, you use the for await...of statement.

// Introduction to the JavaScript async generators
// A regular generator is a function that can pause midway and continues from where it paused. See the following example:

// function* sequence(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield i;
//     }
// }

// let seq = sequence(1, 5);

// for (const num of seq) {
//     console.log(num);
// }
// Code language: JavaScript (javascript)
// The sequence is a generator that returns a number from the start to the end.

// An async generator is similar to a regular generator with the following differences:

// The async keyword is placed in front of the function keyword.
// The yield returns a Promise , instead of a value. The Promise is typically a wrapper of an asynchronous operation.
// The following illustrates how to convert the generator sequence to the async generator asyncSequence:

// async function* asyncSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(i);
//             }, 1000);
//         });

//     }
// }
// Code language: JavaScript (javascript)
// Note that we used the setTimeout() to simulate an asynchronous operation.

// To iterate over the entire async generator, you use the for await...of statement.