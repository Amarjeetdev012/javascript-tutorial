// Creating symbols
// ES6 added Symbol as a new primitive type. Unlike other primitive types such as number, boolean, null, undefined, and string, the symbol type doesn’t have a literal form.

// To create a new symbol, you use the global Symbol() function as shown in this example:

// let s = Symbol('foo');
// Code language: JavaScript (javascript)
// The Symbol() function creates a new unique value each time you call it:

// console.log(Symbol() === Symbol()); // false
// Code language: JavaScript (javascript)
// The Symbol() function accepts a description as an optional argument. The description argument will make your symbol more descriptive.

// The following example creates two symbols: firstName and lastName.

// let firstName = Symbol('first name'),
//     lastName = Symbol('last name');
// Code language: JavaScript (javascript)
// You can access the symbol’s description property using the toString() method. The console.log() method calls the toString() method of the symbol implicitly as shown in the following example:

// console.log(firstName); // Symbol(first name)
// console.log(lastName); // Symbol(last name)
// Code language: JavaScript (javascript)
// Since symbols are primitive values, you can use the  typeof operator to check whether a variable is a symbol. ES6 extended  typeof to return the symbol string when you pass in a symbol variable:

// console.log(typeof firstName); // symbol
// Code language: JavaScript (javascript)
// Since a symbol is a primitive value, if you attempt to create a symbol using the new operator, you will get an error:

// let s = new Symbol(); // error


// JavaScript Symbol
// In this tutorial, you will learn about JavaScript Symbol with the help of examples.

// JavaScript Symbol
// The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique. For example,

// two symbols with the same description

// const value1 = Symbol('hello');
// const value2 = Symbol('hello');

// console.log(value1 === value2); // false
// Though value1 and value2 both contain the same description, they are different.

// Creating Symbol
// You use the Symbol() function to create a Symbol. For example,

// creating symbol
// const x = Symbol()

// typeof x; // symbol
// You can pass an optional string as its description. For example,

// const x = Symbol('hey');
// console.log(x); // Symbol(hey)
// Access Symbol Description
// To access the description of a symbol, we use the . operator. For example,

// const x = Symbol('hey');
// console.log(x.description); // hey
// Add Symbol as an Object Key
// You can add symbols as a key in an object using square brackets []. For example,

// let id = Symbol("id");

// let person = {
//     name: "Jack",

    // adding symbol as a key
//     [id]: 123 // not "id": 123
// };

// console.log(person); // {name: "Jack", Symbol(id): 123}
// Symbols are not included in for...in Loop
// The for...in loop does not iterate over Symbolic properties. For example,

// let id = Symbol("id");

// let person = {
//     name: "Jack",
//     age: 25,
//     [id]: 12
// };

// using for...in
// for (let key in person) {
//     console.log(key);
// }
// Output

// name
// age
// Benefit of Using Symbols in Object
// If the same code snippet is used in various programs, then it is better to use Symbols in the object key. It's because you can use the same key name in different codes and avoid duplication issues. For example,

// let person = {
//     name: "Jack"
// };

// creating Symbol
// let id = Symbol("id");

// adding symbol as a key
// person[id] = 12;
// In the above program, if the person object is also used by another program, then you wouldn't want to add a property that can be accessed or changed by another program. Hence by using Symbol, you create a unique property that you can use.

// Now, if the other program also needs to use a property named id, just add a Symbol named id and there won't be duplication issues. For example,

// let person = {
//     name: "Jack"
// };

// let id = Symbol("id");

// person[id] = "Another value";
// In the above program, even if the same name is used to store values, the Symbol data type will have a unique value.

// In the above program, if the string key was used, then the later program would have changed the value of the property. For example,

// let person = {
//     name: "Jack"
// };

// using string as key
// person.id = 12;
// console.log(person.id); // 12

// Another program overwrites value
// person.id = 'Another value';
// console.log(person.id); // Another value
// In the above program, the second user.id overwrites the previous value.

// Symbol Methods
// There are various methods available with Symbol.

// Method	Description
// for()	Searches for existing symbols
// keyFor()	Returns a shared symbol key from the global symbol registry.
// toSource()	Returns a string containing the source of the Symbol object
// toString()	Returns a string containing the description of the Symbol
// valueOf()	Returns the primitive value of the Symbol object.
// Example: Symbol Methods
// get symbol by name
// let sym = Symbol.for('hello');
// let sym1 = Symbol.for('id');

// get name by symbol
// console.log( Symbol.keyFor(sym) ); // hello
// console.log( Symbol.keyFor(sym1) ); // id
// Symbol Properties
// Properties	Description
// asyncIterator	Returns the default AsyncIterator for an object
// hasInstance	Determines if a constructor object recognizes an object as its instance
// isConcatSpreadable	Indicates if an object should be flattened to its array elements
// iterator	Returns the default iterator for an object
// match	Matches against a string
// matchAll	Returns an iterator that yields matches of the regular expression against a string
// replace	Replaces matched substrings of a string
// search	Returns the index within a string that matches the regular expression
// split	Splits a string at the indices that match a regular expression
// species	Creates derived objects
// toPrimitive	Converts an object to a primitive value
// toStringTag	Gives the default description of an object
// description	Returns a string containing the description of the symbol
// Example: Symbol Properties Example
// const x = Symbol('hey');

//  description property
// console.log(x.description); // hey

// const stringArray = ['a', 'b', 'c'];
// const numberArray = [1, 2, 3];

// isConcatSpreadable property
// numberArray[Symbol.isConcatSpreadable] = false;

// let result = stringArray.concat(numberArray);
// console.log(result); // ["a", "b", "c", [1, 2, 3]]