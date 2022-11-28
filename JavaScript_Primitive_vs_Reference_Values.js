// When you declare variables, the JavaScript engine allocates the memory for them on two memory locations: stack and heap.

//* Static data is the data whose size is fixed at compile time. Static data includes:

//* Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)
// Because static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space to the static data and store it on the stack.

// Unlike the stack, JavaScript stores objects (and functions) on the heap. The JavaScript engine doesn’t allocate a fixed amount of memory for these objects. Instead, it’ll allocate more space as needed.

//! When you assign a reference value from one variable to another, the JavaScript engine creates a reference so that both variables refer to the same object on the heap memory. This means that if you change one variable, it’ll affect the other.

// let person = {
//     name: 'John',
//     age: 25,
//   };
  
//   let member = person;
  
//   member.age = 26;
  
//   console.log(person);
//   console.log(member);
// output :
//  { name: 'John', age: 26 }
// { name: 'John', age: 26 }

//! Summary
// Javascript has two types of values: primitive values and reference values.
// You can add, change, or delete properties to a reference value, whereas you cannot do it with a primitive value.
// Copying a primitive value from one variable to another creates a separate value copy. It means that changing the value in one variable does not affect the other.
// Copying a reference from one variable to another creates a reference so that two variables refer to the same object. This means that changing the object via one variable reflects in another variable.
