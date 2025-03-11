// Repeating a string can be done using the .repeat() method:
const str = "Hello World";
console.log("Repeating a string 3 times: ", str.repeat(3));
console.log("Repeating a string 0 times: ", str.repeat(0));
//console.log("Repeating a string -1 times: ", str.repeat(-1)); // Error

// In the general case, this should be done using a correct polyfill for the ES6 String.prototype.repeat() method.
// Otherwise, the idiom new Array(n + 1).join(myString) can repeat n times the string myString:
const str2 = "Hello World";
console.log("Repeating a string 3 times: ", new Array(3 + 1).join(str2));