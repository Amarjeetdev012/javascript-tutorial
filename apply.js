let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log(arr); 

//! Summary
// The apply() method invokes a function with a given this value and arguments provided as an array.
// The apply() method is similar to the call() method excepts that it accepts the arguments of the function as an array instead of individual arguments.