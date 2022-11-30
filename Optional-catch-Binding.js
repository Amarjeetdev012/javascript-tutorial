// Introduction to the optional catch binding
// The try...catch statement is used to handle any errors that may occur. Generally, you place the code that may cause an error in the try block and the code that handles the error in the catch block, like this:

// try {
    // code that may cause an error
// } catch (error) {
    // code that handles the error
// } 
// Code language: JavaScript (javascript)
// In the catch block, you can access the Error object that contains detailed information on the error.

// In practice, you may want to use the try...catch statement to check if a feature is implemented in the web browser. If it isn’t, you want to fall back to a less desirable feature with broader support, for example:

// try {
    // check if a feature is implemented
// } catch (error) {
    // fall back to a less desirable feature
// }


// Use cases  
// There are two general reasons for omitting the catch binding:

// If you want to completely ignore the error.
// You don’t care about the error or you already know what it will be, but you do want to react to it.
// My recommendation is to avoid doing that:

// Instead of completely ignoring an error, at least log it to the console.
// Instead of assuming you know what the error will be, check for unexpected types of exceptions and re-throw them.
// If you can’t and don’t want to avoid it, I suggest encapsulating your code, e.g. inside a function, and to document it well.

// Next, we’ll take a look at use cases for omitting catch bindings and at risks and alternatives.

// Use case: JSON.parse()  
// With JSON.parse(), there is one predictable kind of exception – if the input is not legal JSON:

// > JSON.parse('abc')
// SyntaxError: Unexpected token a in JSON at position 0
// That’s why it can make sense to use it like this:

// let jsonData;
// try {
//     jsonData = JSON.parse(str); // (A)
// } catch {
//     jsonData = DEFAULT_DATA;
// }
// There is one problem with this approach: errors in line A that are not related to parsing will be silently ignored. For example, you may make a typo such as JSON.prase(str). Cases like this have bitten me a few times in the past. Therefore, I now prefer to conditionally re-throw the errors I catch:

// let jsonData;
// try {
//     jsonData = JSON.parse(str);
// } catch (err) {
//     if (err instanceof SyntaxError) {
//         jsonData = DEFAULT_DATA;
//     } else {
//         throw err;
//     }    
// }