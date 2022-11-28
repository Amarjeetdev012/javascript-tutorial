//* Unary Operators	Name	Meaning
// +x	Unary Plus	Convert a value into a number
// -x	Unary Minus	Convert a value into a number and negate it
// ++x	Increment Operator (Prefix)	Add one to the value
// –x	Decrement Operator (Prefix)	Subtract one from the value
// x++	Increment Operator (Postfix)	Add one to the value
// x–	Decrement Operator (Postfix)	Subtract one from the value

// let x = "10";
// let y = +x;

// console.log(y); // 10

// let x = "10";
// let y = -x;

// console.log(y); // 10

//TODO Unary plus (+)
// The unary plus operator is a simple plus sign (+). If you place the unary plus before a numeric value, it does nothing. For example
//* When you apply the unary plus operator to a non-numeric value, it performs a number conversion using the Number() function with the rules in the following table:

// Value	Result
// boolean	false to 0, true to 1
// string	Convert the string value based on a set of specific rules
// object	Call the valueOf() and/or toString() method to get the value to convert into a number

//TODO Unary minus (-)
// The unary minus operator is a single minus sign (-). If you apply the unary minus operator to a number, it negates the number. For example:

// let x = 10;
// let y = -x;

// console.log(y); // -10
// If you apply the unary minus operator to a non-numeric value, it converts the value into a number using the same rules as the unary plus operator and then negates the value.


//! Summary
// Unary operators work on one value.
// Unary plus (+) or minus (-) converts a non-numeric value into a number. The unary minus negates the value after the conversion.
// The prefix increment operator adds one to a value. The value is changed before the statement is evaluated.
// The postfix increment operator adds one to a value. The value is changed after the statement is evaluated.
// The prefix decrement operator subtracts one from a value. The value is changed before the statement is evaluated.
// The postfix decrement operator subtracts one from a value. The value is changed after the statement is evaluated.
