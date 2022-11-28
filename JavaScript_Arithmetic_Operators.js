//* Addition operator (+)
// console.log(NaN)		//NaN	If either value is NaN, the result is NaN
// console.log(Infinity+Infinity)	//Infinity	Infinity + Infinity = NaN
// console.log(-Infinity-Infinity)	//-Infinity	-Infinity + ( -Infinity) = – Infinity
// console.log(Infinity-Infinity)	//NaN	Infinity + -Infinity = NaN
// +0	+0	+0	+0 + (+0) = +0
// -0	+0	+0	-0 + (+0) = +0
// -0	-0	-0	-0 + (-0) = -0

// let netPrice    = 9.99,
//     shippingFee = 1.99;
// let grossPrice  = netPrice + shippingFee;

// console.log(grossPrice);

// If either value is a string, the addition operator uses the following rules:

// If both values are strings, it concatenates the second string to the first one.
// If one value is a string, it implicitly converts the numeric value into a string and concatenates two strings.
// For example, the following uses the addition operator to add concatenate two strings:

// let x = '10',
//     y = '20';
// let result = x + y;

// console.log(result);

//* Subtraction operator (-)
// let result = 30 - 10;
// console.log(result); // 20

//TODO: ==> diiferent behaviour of string addition and Subtraction
// let add = "20" + 10
// console.log(add) //2010

// let sub = 20 - "10"
// console.log(sub)  //10

//* Multiplication operator (*)
// let result = 2 * 3;
// console.log(result);
//TODO If either value is not a number, the JavaScript engine implicitly converts it into a number using the Number() function and performs the multiplication. For example:
// let result = '5' * 2;

// console.log(result); // 10

// let data = 5 * "2";

// console.log(data); //10

//* Divide operator (/)
// let result = 20 / 10;

// console.log(result); // 2
// If either value is not a number, the JavaScript engine converts it into a number for division. For example:
// let result = "20" / 2;
// console.log(result); // 10;

//* Using JavaScript arithmetic operators with objects
// let energy = {
//     valueOf() {
//       return 100;
//     },
//   };

//   let currentEnergy = energy - 10;
//   console.log(currentEnergy);

//   currentEnergy = energy + 100;
//   console.log(currentEnergy);

//   currentEnergy = energy / 2;
//   console.log(currentEnergy);

//   currentEnergy = energy * 1.5;
//   console.log(currentEnergy);

// TODO value of in objects // function: valueOf()
// let data = {
//     value: 100
// }

// console.log((data.valueOf().value));
// let currentEnergy = data.valueOf().value - 10
// console.log(currentEnergy)

// const box = new Object(123);
// console.log(box + 456); // 579
// console.log(box == 123); // true

let data = {
    apple:120,
    grapes:646,
    lichi:78976,
    mongo:200
}

console.log(data)

let value = data.apple + 210
console.log(value)

//! Summary
// Use the JavaScript arithmetic operators including addition (+), subtraction (-), multiply (*) and divide (/) to perform arithmetic operations.
