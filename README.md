# javascript-tutorial


// function sayHi(message){
//     return function hello(hi){
//         return message +" " + hi
//     }
// }

// let data = sayHi("good")

// console.log(data("morning"));

// function square(num){
//     return function square1(num1){
//         return num*num1
//     }
// }

// let data = square(2)
// console.log(data(2))

// function temp(num) {
//   return function out(num1) {
//     return num1 ** num;
//   };
// }

// let square = temp(2);
//  console.log(square)
// let cube = temp(3);
// console.log(square(2)); //4
// console.log(cube(5)); //9

//* In closure function are return with its lexical environment


// *function along with a lexical scope are closure


//*what is lexical environment :  lexical environment is created whenever is execution context is created


//* lexical environment : local memory along with lexical environment of the parent


//* lexical environment : local memory + lexical environment of parent

// function outer(){
//     var a = 10
//     function inner(){
//         console.log(a)
//     }
//     return inner;
// }

// let data = outer()
// console.log(data())

// function counter() {
//   let count = 0;
//   return function countIncrease() {
//     count++;
//   return  console.log(count);
//   };
// }

// let result = counter()
// console.log(result())
// console.log(result())
// console.log(result())
// console.log(result())

// function Counter(){
//     let count = 0
//     this.incrementCounter = function() {
//         count++
//         console.log(count)
//     }
//     this.decreaseCounter = function(){
//         count--
//         console.log(count)
//     }
// }

// let data = new Counter()
//  console.log(data)
// data.incrementCounter()
// data.incrementCounter()
// data.incrementCounter()
// data.incrementCounter()
// data.decreaseCounter()
// data.decreaseCounter()
// data.decreaseCounter()

var rom = 66496468548;

function test() {
  console.log(rom);
  console.log(run);
  console.log(hello);
}

var rom = 126464;
let run = 622654;
const hello = 354644964848;

console.log(test());
