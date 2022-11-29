// Introduction to JavaScript bind() method
// The bind() method returns a new function, when invoked, has its this sets to a specific value.

// The following illustrates the syntax of the bind() method:

// fn.bind(thisArg[, arg1[, arg2[, ...]]])
// In this syntax, the bind() method returns a copy of the function fn with the specific this value (thisArg) and arguments (arg1, arg2, …).

// Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns a new version of the function whose this sets to thisArg argument.