//* To compare two values, you use a comparison operator. The following table shows the comparison operators in JavaScript:

// Operator	Meaning
// <	less than
// >	greater than
// <=	less than or equal to
// >=	greater than or equal to
// ==	equal to
// !=	not equal to

//* Compare strings
// If the operands are strings, JavaScript compares the character codes numerically one by one in the string.
//TODO its only check first letter on string 

// let name1 = 'alice',
//     name2 = 'bob';    

// let result = name1 < name2;
// console.log(result); // true
// console.log(name1 == 'alice'); // true
// Because JavaScript compares the character codes in the strings numerically, you may receive an unexpected result, for example:

// let f1 = 'apple',
//     f2 = 'Banana';
// let result = f2 < f1;
// console.log(result); // true
// In this example, f2 is less than f1 because the letter B has the character code 66 while the letter a has the character code 97.

// To fix this, you need to:

// First, convert the strings into a common format, either lowercase or uppercase
// Second, compare the converted values
// For example:

// let f1 = 'apple',
//     f2 = 'Banana';

// let result = f2.toLowerCase() < f1.toLowerCase();
// console.log(result); // false
// Note that the toLowerCase() is a method of the String object that converts the string to lowercase.

// Compare a number with a value of another type
// If a value is a number and the other is not, the comparison operator will convert the non-numeric value into a number and compare them numerically. For example:

// console.log(10 < '20'); // true
// In this example, the comparison operator converts the string '20' into the number 20 and compares with the number 10. Here is an example:

// console.log(10 == '10'); // true
// console.log(10 === '10'); // false

// In this example, the comparison operator converts the string '10' into the number 10 and compares them numerically.

// Compare a Boolean with another value
// If a value is a Boolean value, JavaScript converts it to a number and compares the converted value with the other value; true is converted to 1 and false is converted to 0. For example:

// console.log(true > 0); // true
// console.log(false < 1); // true
// console.log(true > false); // true
// console.log(false > true); // false
// console.log(true >= true); // true
// console.log(true <= true); // true
// console.log(false <= false); // true
// console.log(false >= false); // true

//* Compare null and undefined
// In JavaScript, null equals undefined. It means that the following expression returns true.

// console.log(null == undefined); // true
// console.log(null === undefined); // false
// Compare NaN with other values
// If either value is NaN, then the equal operator(==) returns false.

// console.log(NaN == 1); // false
// Even

// console.log(NaN == NaN); // false
//* The not-equal (!=) operator returns true when comparing the NaN with another value:

// console.log(NaN != 1); // true
// And also

// console.log(NaN != NaN); // true
// Strict equal (===) and not strict equal (!==)
// Besides the comparison operators above, JavaScript provides the strict equal ( ===) and not strict equal  ( !==) operators.

// Operator	Meaning
// ===	strict equal
// !==	not strict equal
// The strict equal and not strict equal operators behave like the equal and not equal operators except that they don’t convert the operand before comparison. See the following example:

// console.log("10" == 10); // true
// console.log("10" === 10); // false
// In the first comparison, since we use the equality operator, JavaScript converts the string into the number and performs the comparison.

// However, in the second comparison, we use the strict equal operator ( ===), JavaScript doesn’t convert the string before comparison, therefore the result is false.

// In this tutorial, you have learned how to use the JavaScript comparison operators to compare values.