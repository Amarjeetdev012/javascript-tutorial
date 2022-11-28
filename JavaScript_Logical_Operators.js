// JavaScript provides three logical operators:

// ! (Logical NOT)
// || (Logical OR)
// && (Logical AND)

// console.log(!undefined); // true
// console.log(!null); // true
// console.log(!20); //false
// console.log(!0); //true
// console.log(!NaN); //true
// console.log(!{}); // false
// console.log(!''); //true
// console.log(!'OK'); //false
// console.log(!false); //true
// console.log(!true); //false

//* Double-negation (!!)
// Sometimes, you may see the double negation (!!) in the code. The !! uses the logical NOT operator (!) twice to convert a value to its real boolean value.

// The result is the same as using the Boolean() function. For example:

// let counter = 10;
// console.log(!!counter); // true

//* The Logical AND operator (&&)
// JavaScript uses the double ampersand (&&) to represent the logical AND operator. The following expression uses the && operator:

// let result = a && b;
//* The result of the && operator is true only if both values are true, otherwise, it is false. For example:

//! The chain of && operators
// The following expression uses multiple && operators:

// let result = value1 && value2 && value3;
// Code language: JavaScript (javascript)
// The && operator carries the following:

//TODO Evaluates values from left to right.
// For each value, converts it to a boolean. If the result is false, stops and returns the original value.
//TODO If all values are truthy values, returns the last value.
//TODO In other words, The && operator returns the first falsy value or the last value if none were found.

//! If a value can be converted to true, it is so-called a truthy value. If a value can be converted to false, it is a so-called falsy value.

//* 3) The Logical OR operator (||)
// JavaScript uses the double pipe || to represent the logical OR operator. You can apply the || operator to two values of any type:
// let result = a || b;

// The || operator is also short-circuited
// Similar to the && operator, the || operator is short-circuited. It means that if the first value evaluates to true, the && operator doesn’t evaluate the second one.

// The chain of || operators
// The following example shows how to use multiple || operators in an expression:

// let result = value1 || value2 || value3;
// Code language: JavaScript (javascript)
// The || operator does the following:

// Evaluates values from left to right.
// For each value, converts it to a boolean value. If the result of the conversion is true, stops and returns the value.
// If all values have been evaluated to false, returns the last value.
// In other words, the chain of the || operators returns the first truthy value or the last one if no truthy value was found.

//! Summary
// The NOT operator (!) negates a boolean value. The (!!) converts a value into its real boolean value.
// The AND operator (&&) is applied to two Boolean values and returns true if both values are true.
// The OR operator (||) is applied to two Boolean values and returns true if one of the operands is true.
// Both && and || operator are short-circuited. They can be also applied to non-Boolean values.
// The logical operator precedence from the highest to the lowest is !, && and ||.