// in this tutorial, you’ll learn about JavaScript logical assignment operators, including the logical OR assignment operator (||=), the logical AND assignment operator (&&=), and the nullish assignment operator (??=).

// ES2021 introduces three logical assignment operators including:

// Logical OR assignment operator (||=)
// Logical AND assignment operator (&&=)
// Nullish coalescing assignment operator (??=)
// The following table shows the equivalent of the logical assignments operator:

// Logical Assignment Operators	Logical Operators
// x ||= y	x || (x = y)
// x &&= y	x && (x = y)
// x ??= y	x ?? (x = y);

//! The nullish coalescing assignment operator
// The nullish coalescing assignment operator only assigns y to x if x is null or undefined:

// x ??= y;
// It’s equivalent to the following statement that uses the nullish coalescing operator:

// x ?? (x = y);
// The following example uses the nullish coalescing assignment operator to add a missing property to an object:

// let user = {
//     username: 'Satoshi'
// };
// user.nickname ??= 'anonymous';

// console.log(user);
// Code language: JavaScript (javascript)
// Output:

// {username: 'Satoshi', nickname:'anonymous'}
// Code language: CSS (css)
//TODO In this example, the user.nickname is undefined, therefore, it’s nullish. The nullish coalescing assignment operator assigns the string 'anonymous' to the user.nickname property.

//! Summary
// The logical OR assignment (x ||= y) operator only assigns y to x if x is falsy.
// The logical AND assignment (x &&= y) operator only assigns y to x if x is truthy.
// The nullish coalescing assignment (x ??= y) operator only assigns y to x if x is nullish.