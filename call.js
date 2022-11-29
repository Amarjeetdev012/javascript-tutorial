// Using the JavaScript call() method to chain constructors for an object
// You can use the call() method for chaining constructors of an object. Consider the following example:
// Using the JavaScript call() method for function borrowing
// The following example illustrates how to use the call() method for borrowing functions:

// const car = {
//   name: 'car',
//   start() {
//     console.log('Start the ' + this.name);
//   },
//   speedUp() {
//     console.log('Speed up the ' + this.name);
//   },
//   stop() {
//     console.log('Stop the ' + this.name);
//   },
// };

// const aircraft = {
//   name: 'aircraft',
//   fly() {
//     console.log('Fly');
//   },
// };

// car.start.call(aircraft);
// car.speedUp.call(aircraft);
// aircraft.fly();
// Code language: JavaScript (javascript)
// Output:

// Start the aircraft
// Speed up the aircraft
// Fly