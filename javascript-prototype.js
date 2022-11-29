//! Summary
// The Object() function has a property called prototype that references a Object.prototype object.
// The Object.prototype object has all properties and methods which are available in all objects such as toString() and valueOf().
// The Object.prototype object has the constructor property that references the Object function.
// Every function has a prototype object. This prototype object references the Object.prototype object via [[prototype]] linkage or __proto__ property.
// The prototype chain allows one object to use the methods and properties of its prototype objects via the [[prototype]] linkages.
// The Object.getPrototypeOf() method returns the prototype object of a given object. Do use the Object.getPrototypeOf() method instead of __proto__.