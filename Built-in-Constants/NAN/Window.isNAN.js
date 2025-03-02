// window.isNaN()
// The global function isNaN() can be used to check if a certain value or expression evaluates to NaN. This function (in
// short) first checks if the value is a number, if not tries to convert it (*), and then checks if the resulting value is NaN.
// For this reason, this testing method may cause confusion.

console.log(isNaN(NaN)); // true
console.log(isNaN(1)); // false: 1 is a number
console.log(isNaN(-2e-4)); // false: -2e-4 is a number (-0.0002) in scientific notation
console.log(isNaN(Infinity)); // false: Infinity is a number
console.log(isNaN(true)); // false: converted to 1, which is a number
console.log(isNaN(false)); // false: converted to 0, which is a number
console.log(isNaN(null)); // false: converted to 0, which is a number
console.log(isNaN("")); // false: converted to 0, which is a number
console.log(isNaN(" ")); // false: converted to 0, which is a number
console.log(isNaN("45.3")); // false: string representing a number, converted to 45.3
console.log(isNaN("1.2e3")); // false: string representing a number, converted to 1.2e3
console.log(isNaN("Infinity")); // false: string representing a number, converted to Infinity
console.log(isNaN(new Date())); // false: Date object, converted to milliseconds since epoch
console.log(isNaN("10$")); // true: conversion fails, the dollar sign is not a digit
console.log(isNaN("hello")); // true: conversion fails, no digits at all
console.log(isNaN(undefined)); // true: converted to NaN
console.log(isNaN()); // true: converted to NaN (implicitly undefined)
console.log(isNaN(function () {
})); // true: conversion fails
console.log(isNaN({})); // true: conversion fails
console.log(isNaN([1, 2])); // true: converted to "1,2", which can't be converted to a number

//This last one is a bit tricky: checking if an Array is NaN. To do this, the Number() constructor first converts the array to a string, then to a number; this is the reason why isNaN([]) and isNaN([34]) both return false, but isNaN([1,
// 2]) and isNaN([true]) both return true: because they get converted to ""
// , "34", "1,2" and "true" respectively. In
// general, an array is considered NaN by isNaN() unless it only holds one element whose string representation
// can be converted to a valid number.