// in this tutorial, you’ll learn about the optional chaining operator (?.) that simplifies the way to access values through connected objects.

//! (?.)

//todo The optional chaining operator (?.) allows you to access the value of a property located deep within a chain of objects without explicitly checking if each reference in the chain is null or undefined.

// If one of the references in the chain is null or undefined, the optional chaining operator (?.) will short circuit and return undefined.

//! Summary
// The optional chaining operator (?.) returns undefined instead of throwing an error if you attempt to access a property of an null or undefined object: obj ?. property.
// Combine the optional chaining operator (?.) with the nullish coalescing operator (??) to assign a default value.
// Use functionName ?. (args) to avoid explicitly checking if the functionName is not undefined or null before invoking it.