// Demonstrating NaN in JavaScript
//NaN stands for "Not a Number." When a mathematical function or operation in JavaScript cannot return a specific
// number, it returns the value NaN instead.

// Checking if 'NaN' is a property of the global object (window in browsers)
//console.log(window.hasOwnProperty('NaN')); // true

// NaN is a property of the global object and is a reference to Number.NaN
console.log(NaN); // NaN

// Checking the type of NaN
console.log(typeof NaN); // 'number'

// NaN is not equal to itself
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// Use isNaN() for checking if a value is NaN
console.log(isNaN(NaN)); // true
console.log(isNaN("string")); // true (because "string" cannot be converted to a number)

// Use Number.isNaN() for stricter checks
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("string")); // false (because it's not a number at all)

// Examples of operations that result in NaN:
console.log(0 / 0); // NaN
console.log(undefined + 1); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt('abc')); // NaN

// Practical tip: Avoid direct equality checks with NaN and use appropriate functions like isNaN or Number.isNaN