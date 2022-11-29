// ES6 simplified these steps by using the extends and super keywords.

// The following example defines the Animal and Bird classes and establishes the inheritance through the extends and super keywords.

// class Animal {
//     constructor(legs) {
//         this.legs = legs;
//     }
//     walk() {
//         console.log('walking on ' + this.legs + ' legs');
//     }
// }

// class Bird extends Animal {
//     constructor(legs) {
//         super(legs);
//     }
//     fly() {
//         console.log('flying');
//     }
// }


// let bird = new Bird(2);

// bird.walk();
// bird.fly();

// Inheriting static members
// Besides the properties and methods, the child class also inherits all static properties and methods of the parent class. For example:

// class Animal {
//     constructor(legs) {
//         this.legs = legs;
//     }
//     walk() {
//         console.log('walking on ' + this.legs + ' legs');
//     }
//     static helloWorld() {
//         console.log('Hello World');
//     }
// }

// class Bird extends Animal {
//     fly() {
//         console.log('flying');
//     }
// }
// In this example, the Animal class has the helloWorld() static method and this method is available as Bird.helloWorld() and behaves the same as the Animal.helloWorld() method:

// Bird.helloWorld(); // Hello World

//! Summary
// Use the extends keyword to implement the inheritance in ES6. The class to be extended is called a base class or parent class. The class that extends the base class or parent class is called the derived class or child class.
// Call the super(arguments) in the child class’s constructor to invoke the parent class’s constructor.
// Use super keyword to call methods of the parent class in the methods of the child class.