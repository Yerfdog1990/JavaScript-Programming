//Number.isNaN()
// In ECMAScript 6, the Number.isNaN() function has been implemented primarily to avoid the problem of
// window.isNaN() of forcefully converting the parameter to a number. Number.isNaN(), indeed, doesn't try to
// convert the value to a number before testing. This also means that only values of the type number, that are
// also NaN, return true (which basically means only Number.isNaN(NaN)).
// From ECMA-262 20.1.2.4:
// When the Number.isNaN is called with one argument number, the following steps are taken:
// 1.If Type(number) is not Number, return false.
// 2.If number is NaN, return true.
// 3.Otherwise, return false.


console.log(Number.isNaN(NaN)); // true: NaN is the only value that satisfies the criteria for Number.isNaN
console.log(Number.isNaN(1)); // false: 1 is a valid number
console.log(Number.isNaN(-2e-4)); // false: -2e-4 is a valid number (-0.0002) in scientific notation
console.log(Number.isNaN(Infinity)); // false: Infinity is a valid number
console.log(Number.isNaN(true)); // false: true is not of type Number
console.log(Number.isNaN(false)); // false: false is not of type Number
console.log(Number.isNaN(null)); // false: null is not of type Number
console.log(Number.isNaN("")); // false: an empty string is not of type Number
console.log(Number.isNaN(" ")); // false: a string with a space is not of type Number
console.log(Number.isNaN("45.3")); // false: string representing a number is not of type Number
console.log(Number.isNaN("1.2e3")); // false: string representing a number is not of type Number
console.log(Number.isNaN("Infinity")); // false: string representing a number is not of type Number
console.log(Number.isNaN(new Date())); // false: a Date object is not of type Number
console.log(Number.isNaN("10$")); // false: string with non-number characters is not of type Number
console.log(Number.isNaN("hello")); // false: string with no digits is not of type Number
console.log(Number.isNaN(undefined)); // false: undefined is not of type Number
console.log(Number.isNaN()); // false: undefined (default value) is not of type Number
console.log(Number.isNaN(function () {
})); // false: function is not of type Number
console.log(Number.isNaN({})); // false: object is not of type Number
console.log(Number.isNaN([1, 2])); // false: array is not of type Number