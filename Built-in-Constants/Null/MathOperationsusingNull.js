
// Example of null with arithmetic operations:
let y1 = null + 2; // null is coerced to 0, result is 2
let y2 = null - 2; // null is coerced to 0, result is -2
let y3 = null * 2; // null is coerced to 0, result is 0
let y4 = null / 2; // null is coerced to 0, result is 0

// Explicitly setting the result to null
let y5 = null; // Explicit example of null being the value

console.log("null + 2 = ", y1);
console.log("null - 2 = ", y2);
console.log("null * 2 = ", y3);
console.log("null / 2 = ", y4);
console.log("Variable explicitly set to null:", y5);
