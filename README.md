# javascript-tutorial

for making a new objects using class we can use ES6 class declaration
ES6 introduced a new syntax for declaring a class as shown in this example:

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let john = new Person("John Doe");

Singleton
Singleton is a design pattern that limits the instantiation of a class to a single instance. It ensures that only one instance of a class can be created throughout the system.

Class expressions can be used to create a singleton by calling the class constructor immediately.

To do that, you use the new operator with a class expression and include the parentheses at the end of class declaration as shown in the following example:

let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App');

app.start(); // Starting the Awesome App...
