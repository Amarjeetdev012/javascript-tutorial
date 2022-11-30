// ES6 provides a new collection type called Map that addresses these deficiencies.

// By definition, a Map object holds key-value pairs. Keys are unique in a Map’s collection. In other words, a key in a Map object only appears once.

// Keys and values of a Map can be any values.

// When iterating a Map object, each iteration returns a 2-member array of [key, value]. The iteration order follows the insertion order which corresponds to the order in which each key-value pair was first inserted into the Map by the set() method.

// To create a new Map, you use the following syntax:

// let map = new Map([iterable]);
// Code language: JavaScript (javascript)
// The Map() accepts an optional iterable object whose elements are key-value pairs.

// Useful JavaScript Map methods
// clear() – removes all elements from the map object.
//  delete(key) – removes an element specified by the key. It returns if the element is in the map, or false if it does not.
//  entries() – returns a new Iterator object that contains an array of [key, value] for each element in the map object. The order of objects in the map is the same as the insertion order.
//  forEach(callback[, thisArg]) – invokes a callback for each key-value pair in the map in the insertion order. The optional thisArg parameter sets the this value for each callback.
//  get(key) – returns the value associated with the key. If the key does not exist, it returns undefined.
//  has(key) – returns true if a value associated with the key exists or false otherwise.
//  keys() – returns a new Iterator that contains the keys for elements in insertion order.
//  set(key, value) – sets the value for the key in the map object. It returns the map object itself therefore you can chain this method with other methods.
//  values() returns a new iterator object that contains values for each element in insertion order.

let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

for (let role of userRoles.values()){
  console.log(role);
}