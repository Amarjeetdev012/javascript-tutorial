// let str = "javaScript"
// // let result = str.substring(4)
//  str.data = "hello world"
// console.log(str.data)

// Introduction to primitive wrapper types
// JavaScript provides three primitive wrapper types: Boolean, Number, and String types.

// The primitive wrapper types make it easier to use primitive values including booleans, numbers, and strings.

// See the following example:

// let language = 'JavaScript';
// let s = language.substring(4);

// console.log(s);  // Script
// Code language: JavaScript (javascript)
// In this example, The variable language holds a primitive string value. It doesn’t have any method like substring(). However, the above code works perfectly.

// When you call a method on a variable that holds a number, a string, or a boolean, JavaScript performs the following steps behind the scenes:

// Create an object of a corresponding type.
// Call a specific method on the instance.
// Delete the instance immediately.
// So the following code

// let language = 'JavaScript';
// let str = language.substring(4);
// Code language: JavaScript (javascript)
// is technically equivalent to the following code:

// let language = 'JavaScript';
// // behind the scenes of the language.substring(4);
// let tmp = new String(language);
// str = temp.substring(4);
// temp = null;