//Infinity is a property of the global object (therefore a global variable) that represents mathematical infinity. It is a
// reference to Number.POSITIVE_INFINITY
// It is greater than any other value, and you can get it by dividing by 0 or by evaluating the expression of a number
// that's so big that overflows. This actually means there is no division by 0 errors in JavaScript, there is Infinity!
// There is also -Infinity which is mathematical negative infinity, and it's lower than any other value.
// To get -Infinity you negate Infinity, or get a reference to it in Number.NEGATIVE_INFINITY.
// - (Infinity); // -Infinity


// Demonstrating Infinity and -Infinity in JavaScript

console.log(Infinity > 123192310293); // true
console.log(-Infinity < -123192310293); // true
console.log(1 / 0); // Infinity
console.log(Math.pow(123123123, 9123192391023)); // Infinity
console.log(Number.MAX_VALUE * 2); // Infinity
console.log(23 / Infinity); // 0
console.log(-Infinity); // -Infinity
console.log(-Infinity === Number.NEGATIVE_INFINITY); // true

// Demonstrating negative zero
console.log(-0); // -0 (yes, JavaScript has a negative zero)
console.log(0 === -0); // true
console.log(1 / -0); // -Infinity
console.log(1 / 0 === 1 / -0); // false

// Arithmetic with Infinity
console.log(Infinity + Infinity); // Infinity

// Demonstrating nuances with 0 and -0
var a = 0, b = -0;
console.log(a === b); // true (0 and -0 are strictly equal)
console.log(1 / a === 1 / b); // false (because 1/0 = Infinity, but 1/-0 = -Infinity)

// Try your own experiments here!
let x = Infinity;
let y = -Infinity;
console.log(x-y); // Infinity
console.log(y-x); // -Infinity
console.log(x/y); // NaN
console.log(y/x); // NaN
console.log(y/y); // NaN
console.log(x/x); // NaN
console.log(x*y); // -Infinity