// in this tutorial, you will learn how to use the JavaScript if statement to execute a block when a condition is true.Introduction to the JavaScript if statement
// The if statement executes block if a condition is true. The following shows the syntax of the if statement:

// if( condition )
//    statement;
// Code language: JavaScript (javascript)
// The condition can be a value or an expression. Typically, the condition evaluates to a Boolean value, which is true or false.

// If the condition evaluates to true, the if statement executes the statement. Otherwise, the if statement passes the control to the next statement after it.

// The following flowchart illustrates how the if statement works:

// JavaScript if
// If the condition evaluates to a non-Boolean value, JavaScript implicitly converts its result to a Boolean value by calling the Boolean() function.

// If you have more than one statement to execute, you need to use wrap them in a block using a pair of curly braces as follows:

// if (condition) {
// statements to execute
// }
// Code language: JavaScript (javascript)
// However, it’s a good practice to always use curly braces with the if statement. By doing this, you make your code easier to maintain and avoid possible mistakes.

// let age = 16;
// let state = 'CA';

// if (state == 'CA' && age == 16) {
//   console.log('You can drive.');
// }

//! Summary
// Use the JavaScript if statement to execute a statement if a condition is true.
// Avoid using nested if statement as much as possible.