// let numberObject = new Number(10);
// let number = 10;
let boolean = true

// typeof
console.log(typeof numberObject); //object
console.log(typeof number); // number
console.log(typeof boolean); // boolean

// instanceof
console.log(numberObject instanceof Number); // true
console.log(number instanceof Number); // false
console.log(number instanceof Boolean); // false


// JavaScript Number object vs. primitive number
// The following table illustrates the differences between a Number object and a primitive number:

//  Operator	Number object	Number value
//  typeof	 "object"	 "number"
//  instanceof Number	 true	 false
// And here are examples:

let numberObject = new Number(10);
let number = 10;

// typeof
console.log(typeof numberObject);
console.log(typeof number);
// instanceof
console.log(numberObject instanceof Number); // true
console.log(number instanceof Number); // false
// Code language: JavaScript (javascript)
// In this tutorial, you have learned about the Number type and some useful methods for formatting numbers.