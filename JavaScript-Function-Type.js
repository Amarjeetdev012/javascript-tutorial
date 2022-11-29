//todo Function methods: apply, call, and bind

// The apply() and call() methods call a function with a given this value and arguments.

// The difference between the apply() and call() is that you need to pass the arguments to the apply() method as an array-like object, (line no 16,17) whereas you pass the arguments to the call() function individually.

let cat = { type: "Cat", sound: "Meow" };
let dog = { type: "Dog", sound: "Woof" };

const say = function (message) {
  console.log(message);
  console.log(this.type + " says " + this.sound);
};

say.apply(cat, ["What does a cat say?"]);
say.apply(dog, ["What does a dog say?"]);

// The call() method like the apply() method except for the way you pass the arguments to the function:

// say.call(cat, 'What does a cat say?');

// The bind() method
// The bind() method creates a new function instance whose this value is bound to the object that you provide. For example:

// First, define an object named car:

// let car = {
//     speed: 5,
//     start: function() {
//         console.log('Start with ' + this.speed + ' km/h');
//     }
// };
// Then, define another object named aircraft:

// let aircraft = {
//     speed: 10,
//     fly: function() {
//         console.log('Flying');
//     }
// };
// The aircraft has no start() method. To start an aircraft, you can use the bind() method of the start() method of the car object:

// let taxiing = car.start.bind(aircraft);
// In this statement, we change the this value inside the start() method of the car object to the  aircraft object.  The bind() method returns a new function that is assigned to the taxiing variable.

// Now, you can call the start() method via the taxiing variable:

// taxiing();
// It will show the following message:

//  Start with 10 km/h

//! As you can see, the bind() method creates a new function that you can( execute later) while the call() method executes the function immediately. This is the main difference between the bind() and call() methods.

//! Technically, the aircraft object borrows the start() method of the car object via the bind(), call() or apply() method.

//! For this reason, the bind(), call(), and apply() methods are also known as borrowing functions.
