// let counter = 120; // counter is a number
// counter = false;   // counter is now a boolean
// counter = "foo";   // counter is now a string

// let counter = 120;
// console.log(typeof(counter)); // "number"

// counter = false; 
// console.log(typeof(counter)); // "boolean"

// counter = "Hi";
// console.log(typeof(counter)); // "string"

// let counter;
// console.log(counter);        // undefined
// console.log(typeof counter); // undefined

// console.log(typeof undeclaredVar); // undefined

// let obj = null;
// console.log(typeof obj); // object

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324

// console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
// console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

// console.log('a'/2); // NaN;

// console.log(NaN/2); // NaN
// console.log(NaN == NaN); // false
//TODO  type when you can use single or double quotes like postoffice s
// let data = 'I\'m also a valid string'; // use \ to escape the single quote (')
// let message = "i am a good listener\"and also a hard working person"
// console.log(message)
// console.log(data)

// let str = 'JavaScript';
// str = str + ' String';
// console.log(str)

//! JavaScript strings are immutable. This means that it cannot be modified once created. However, you can create a new string from an existing string. For example:
// let s = 'JavaScript';
// s[0] = 'j';
// console.log(s)

// let inProgress = true;
// let completed = false;

// console.log(typeof completed); // boolean

// console.log(Boolean('Hi'));// true
// console.log(Boolean(''));  // false

// console.log(Boolean(20));  // true
// console.log(Boolean(Infinity));  // true
// console.log(Boolean(0));  // false

// console.log(Boolean({foo: 100}));  // true on non-empty object
// console.log(Boolean(null));// false
// console.log(Boolean(undefined));// false
// console.log(Boolean(false));// false


//? Why do we use the new keyword in JavaScript?


// These are the following features to use the new keyword:

//! The new keyword creates a new empty object, with a type of object.
// The new keyword sets the internal prototype property of the constructing function.
// The new keyword binds this variable to the newly created object.
// The new keyword returns the new object.

// let x = false;
// let y = new Boolean(false);
// console.log(typeof x);
// console.log(typeof y);

// function message(name) {
//     this.greeting = "Hey " + name;
// }
// name = "Vikash";
// var m = new message(name);

// console.log(m.greeting);

// !Symbol()
// let s1 = Symbol();
// console.log(s1)
// console.log(Symbol() == Symbol()); // false
// let hello = "message"
// let s1 = Symbol(hello)
// let s2 = Symbol("hello")

// console.log(s1.description)
// console.log(s2.description)

// ! Bigint
// let pageView = 9007199254740991n;
// console.log(typeof(pageView)); // 'bigint'

// let x = Number.MAX_SAFE_INTEGER;
// x = x + 1; // 9007199254740992
// x = x + 1; // 9007199254740992 (same as above)
// console.log(x)

// let x = 9007199254740992n;
// console.log(x)
// x = x + 1n; // 9007199254740992n
// x = x + 1n; // 9007199254740993n (correct now)
// console.log(x)


// console.log(typeof BigInt(1212121)); // bigint
// console.log(typeof BigInt(100) === 'bigint'); // true
// console.log(typeof 'bigint'); // true
// console.log(typeof BigInt(100)); // true

// let result = 3n / 2n;
// console.log(result); // 1n, not 1.5n

// let count = 0n;
// console.log(count)

// if(count) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// output false

// Summary BigInt()
// The BigInt is a new primitive type that can represent whole numbers bigger than 253 - 1, which is the largest number Javascript can reliably represent with the number type.
// Append n to a literal integer or use BigInt() function to create a bigint.

// Object Property types
// JavaScript specifies the characteristics of properties of objects via internal attributes surrounded by the two pairs of square brackets, e.g., [[Enumerable]].

// Objects have two types of properties: data and accessor properties.

// let person = {};

// Object.defineProperty(person, 'ssn', {
//     configurable: false,
//     value: '012-38-9119'
// });

// delete person.ssn;

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     gender:"male"
// }

// Object.defineProperty(person, 'fullName', {
//     get: function () {
//         return this.firstName + " " + this.lastName + " " + this.gender;
//     },
//     set: function (value) {
//         let parts = value.split(' ');
//         if (parts.length == 2) {
//             this.firstName = parts[0];
//             this.lastName = parts[1];
//         } else {
//             throw 'Invalid name format';
//         }
//     }
// });

// console.log(person.fullName);


//! Summary
// JavaScript has the primitive types: number, string, boolean, null, undefined, symbol and bigint and a complex type: object.