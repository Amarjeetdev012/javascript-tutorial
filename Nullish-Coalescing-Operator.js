// : in this tutorial, you’ll learn about the JavaScript nullish coalescing operator (??) that accepts two values and returns the second value if the first one is null or undefined.

// Introduction to the JavaScript nullish coalescing operator
// ES2020 introduced the nullish coalescing operator denoted by the double question marks (??). The nullish coalescing operator is a logical operator that accepts two values:

// value1 ?? value2
// The nullish coalescing operator returns the second value (value2) if the first value (value2) is null or undefined. Technically, the nullish coalescing operator is equivalent to the following block:

// const result = value1;
// if(result === null || result === undefined) {
//    result = value2;
// }
// Code language: JavaScript (javascript)
// A nullish value is a value that is either null or undefined.


// Why nullish coalescing operator
// When assigning a default value to a variable, you often use the logical OR operator (||). For example:

// let count;
// let result = count || 1 ;
// console.log(result); // 1
// Code language: JavaScript (javascript)
// In this example, the count variable is undefined, it is coerced to false. Therefore, the result is 1.

// However, the logical OR operator (||) sometimes is confusing if you consider 0 or empty strings '' as a valid value like this:

// let count = 0;
// let result = count || 1;
// Code language: JavaScript (javascript)
// The result is 1, not 0, which you may not expect.

// The nullish coalescing operator helps you to avoid this pitfall. It only returns the second value when the first one is either null or undefined.


//! Summary
// The nullish coalescing operator (??) is a logical operator that accepts two values and returns the second value if the first one is null or undefined.
// The nullish coalescing operator is short-circuited and cannot directly combine with the logical AND or OR operator