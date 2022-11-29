// Introduction to JavaScript rest parameters
// ES6 provides a new kind of parameter so-called rest parameter that has a prefix of three dots (...). A rest parameter allows you to represent an indefinite number of arguments as an array. See the following syntax:

// function fn(a,b,...args) {
//    //...
// }
// Code language: JavaScript (javascript)
// The last parameter (args) is prefixed with the three-dots ( ...). It’s called a rest parameter ( ...args).

// All the arguments you pass to the function will map to the parameter list. In the syntax above, the first argument maps to a, the second one maps to b, and the third, the fourth, etc., will be stored in the rest parameter args as an array. For example:

// fn(1, 2, 3, "A", "B", "C");
// Code language: JavaScript (javascript)
// The args array stores the following values:

// [3,'A','B','C']
// Code language: JSON / JSON with Comments (json)
// If you pass only the first two parameters, the rest parameter will be an empty array:

// fn(1,2);
// The args will be:

// []
// Code language: JSON / JSON with Comments (json)
// Notice that the rest parameters must appear at the end of the argument list. The following code will result in an error:

// function fn(a,...rest, b) {
//  // error
// }
// Code language: JavaScript (javascript)
// Error:

// SyntaxError: Rest parameter must be last formal parameter