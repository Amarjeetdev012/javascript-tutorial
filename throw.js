
//! error handling type 1
// function add(x, y) {
//     if (typeof x !== 'number') {
//       throw ('The first argument must be a number');
//     }
//     if (typeof y !== 'number') {
//       throw 'The second argument must be a number';
//     }
  
//     return x + y;
//   }
  
//   const result = add('a', 10);
//   console.log(result);
  

//! error handling type 2
// function add(x, y) {
//     if (typeof x !== 'number') {
//       throw 'The first argument must be a number';
//     }
//     if (typeof y !== 'number') {
//       throw 'The second argument must be a number';
//     }
  
//     return x + y;
//   }
  
//   try {
//     const result = add('a', 10);
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
  


//! error handling type 3
// function add(x, y) {
//     if (typeof x !== 'number') {
//       throw new Error('The first argument must be a number');
//     }
//     if (typeof y !== 'number') {
//       throw new Error('The second argument must be a number');
//     }
  
//     return x + y;
//   }
  
//   try {
//     const result = add('a', 10);
//     console.log(result);
//   } catch (e) {
//     console.log(e.name, ':', e.message);
//   }
  