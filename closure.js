// Introduction to JavaScript closures
// In JavaScript, a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

// To understand the closures, you need to know how the lexical scoping works first.

// Lexical scoping
// Lexical scoping defines the scope of a variable by the position of that variable declared in the source code. For example:

// let name = 'John';

// function greeting() { 
//     let message = 'Hi';
//     console.log(message + ' '+ name);
// }
// Code language: JavaScript (javascript)
// In this example:

// The variable name is a global variable. It is accessible from anywhere including within the greeting() function.
// The variable message is a local variable that is accessible only within the greeting() function.
// If you try to access the message variable outside the greeting() function, you will get an error.

// So the JavaScript engine uses the scope to manage the variable accessibility.

// According to lexical scoping, the scopes can be nested and the inner function can access the variables declared in its outer scope. For example:

// function greeting() {
//     let message = 'Hi';

//     function sayHi() {
//         console.log(message);
//     }

//     sayHi();
// }

// greeting();
// Code language: JavaScript (javascript)
// The greeting() function creates a local variable named message and a function named sayHi().

// The sayHi() is the inner function that is available only within the body of the greeting() function.

// The sayHi() function can access the variables of the outer function such as the message variable of the greeting() function.

// Inside the greeting() function, we call the sayHi() function to display the message Hi.


function greeting(message) {
    return function(name){
         return message + ' ' + name;
    }
 }
 let sayHi = greeting('Hi');
 let sayHello = greeting('Hello');
 
 console.log(sayHi('John')); // Hi John
 console.log(sayHello('John')); // Hello John

//!  Summary
// Lexical scoping describes how the JavaScript engine uses the location of the variable in the code to determine where that variable is available.
// A closure is a combination of a function and its ability to remember variables in the outer scope.