// Demonstrating Number constants in JavaScript

console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
// The largest possible number in JavaScript
// Output: 1.7976931348623157e+308

console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
// The smallest positive number in JavaScript
// Output: 5e-324

console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
// The largest integer that can safely be represented in JavaScript
// Output: 9007199254740991

console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
// The smallest integer that can safely be represented in JavaScript
// Output: -9007199254740991

console.log("Number.EPSILON:", Number.EPSILON);
// The smallest difference between two numbers greater than 1
// Output: 2.220446049250313e-16

console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
// Value representing positive infinity
// Output: Infinity

console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
// Value representing negative infinity
// Output: -Infinity

console.log("Number.NaN:", Number.NaN);
// A special NaN ("Not-a-Number") value
// Output: NaN

// Key note about handling Number constants:
// - Always use Number.EPSILON when comparing two floating-point numbers for equality to avoid precision errors.
// - Be cautious with numbers outside the range of Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER, as they may lose precision.
// - Remember that Infinity and -Infinity might occur naturally during mathematical operations (e.g., division by 0). Always handle these cases properly in your logic.