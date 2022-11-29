// JavaScript static methods in ES6
// In ES6, you define static methods using the static keyword. The following example defines a static method called createAnonymous() for the Person class:

// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	getName() {
// 		return this.name;
// 	}
// 	static createAnonymous(gender) {
// 		let name = gender == "male" ? "John Doe" : "Jane Doe";
// 		return new Person(name);
// 	}
// }
// To invoke the static method, you use the following syntax:

// let anonymous = Person.createAnonymous("male");
// If you attempt to call the static method from an instance of the class, you’ll get an error. For example:

// let person = new Person('James Doe');
// console.log(person);

// let anonymous = person.createAnonymous("male");
// console.log(anonymous);

// Error:

// TypeError: person.createAnonymous is not a function
// Calling a static method from the class constructor or an instance method
// To call a static method from a class constructor or an instance method, you use the class name, followed by the . and the static method:

// className.staticMethodName();
// Alternatively, you can use the following syntax:

// this.constructor.staticMethodName();
// Summary
// JavaScript static methods are shared among instances of a class. Therefore, they are bound to the class.
// Call the static methods via the class name, not the instances of that class.
// Use the className.staticMethodName() or this.constructor.staticMethodName() to call a static method in a class constructor or an instance method.