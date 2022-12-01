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

function temp(num) {
  return function out(num1) {
    return num1 ** num;
  };
}

let square = temp(2);
// console.log(square)
let cube = temp(3);
console.log(square(2)); //4
console.log(cube(5)); //9

//* In closure function are return with its lexical environment
// *function along with a lexical scope are closure

