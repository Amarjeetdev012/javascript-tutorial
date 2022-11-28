//! Introduction to the JavaScript remainder operator
// JavaScript uses the % to represent the remainder operator. The remainder operator returns the remainder left over when one value is divided by another value.

// Here’s the syntax of the remainder operator:

// dividend % divisor
// The following shows the equation for the remainder:

// dividend = divisor * quotient + remainder
// where |remainder| < |divisor|
// In this equation, the dividend, divisor, quotient, and remainder are all integers. The sign of the remainder is the same as the sign of the dividend.

// The sign of the remainder is the same as the sign of the dividend.

//! Remainder vs Modulo operator
// In JavaScript, the remainder operator (%) is not the modulo operator.

// If you have been working with Python, you may find the % represents the modulo operator in this language. However, it is not the case in JavaScript.

// To get a modulo in JavaScript, you use the following expression:

// ((dividend % divisor) + divisor) % divisor
// Or wrap it in a function:

//* const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

//! Summary
// Use the JavaScript remainder operator (%) get the the remainder of a value divided by another value.

let arr = []