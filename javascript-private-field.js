//! Summary
// Prefix the field name with # sign to make it private.
// Private fields are accessible only inside the class, not from outside of the class or subclasses.
// Use the in operator to check if an object has a private field.

// Before
// By default, all properties in ES6 classes are public and can be examined or modified outside the class. In the example below, we find that there is nothing in the class to prevent the property from being changed without calling the setter.

// class TimeTracker {
//   name = 'Alice';
//   project = 'blog';
//   hours = 0;

//   set addHours(hour) {
//     this.hours += hour;
//   }

//   get timeSheet() {
//     return `${this.name} works ${this.hours || 'nothing'} hours on ${this.project}`;
//   }
// }

// let person = new TimeTracker();
// person.addHours = 2; // standard setter
// person.hours = 4;    // bypass the hours setter altogether
// person.timeSheet;     // Alice works 4 hours on blog.
// After
// Starting from ECMAScript 2022, private class fields are defined using a hash # prefix, From the above example, we can modify it to include a private class field to prevent the property from being changed outside of the class method.

// class TimeTracker {
//   name = 'Alice';
//   project = 'blog';
//   #hours = 0; //private class field

//   set addHours(hour) {
//     this.#hours += hour;
//   }

//   get timeSheet() {
//     return `${this.name} works ${this.#hours || 'nothing'} hours on ${this.project}`;
//   }
// }

// let person = new TimeTracker();
// person.addHours = 4; // standard setter
// person.timeSheet // Alice works 4 hours on blog
// When we try to modify the private class field outside of the setter method, we get the error -

// person.#hours = 4 // Error Private field '#hours' must be declared in an enclosing class