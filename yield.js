// Introduction to the JavaScript yield keyword
// The yield keyword allows you to pause and resume a generator function (function*).

// The following shows the syntax of the yield keyword:

// [variable_name] = yield [expression];
// In this syntax:

// The expression specifies the value to return from a generator function via the iteration protocol. If you omit the expression, the yield returns undefined.
// The variable_name stores the optional value passed to the next() method of the iterator object.
// JavaScript yield examples
// Let’s take some examples of using the yield keyword.

// A) Returning a value
// The following trivial example illustrates how to use the yield keyword to return a value from a generator function:

// function* foo() { 
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let f = foo();

// console.log(f.next());
// Output:

// { value: 1, done: false }
// Code language: CSS (css)
// As you can see the value that follows the yield is added to the value property of the return object when the next() is called:

// yield 1;
// B) Returning undefined
// This example illustrates how to use the yield keyword to return undefined:

// function* bar() {
//     yield;
// }

// let b = bar();
// console.log(b.next()); 
// Output:

// { value: undefined, done: false }

// Using the yield to return individual elements of an array
// See the following generator function:

// function* yieldArrayElements() {
//     yield 1;
//     yield* [ 20, 30, 40 ];
// }

// let a = yieldArrayElements();

// console.log(a.next()); // { value: 1, done: false }
// console.log(a.next()); // { value: 20, done: false }
// console.log(a.next()); // { value: 30, done: false }
// console.log(a.next()); // { value: 40, done: false }
// In this example, yield* is the new syntax. The yield* expression is used to delegate to another iterable object or generator.

// As a result, the following expression returns the individual elements of the array [20, 30, 40]:

// yield* [20, 30, 40];
// In this tutorial, you have learned about the JavaScript yield keyword and how to use it in function generators.