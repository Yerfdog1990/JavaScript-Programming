// Concatenation using the + concatenation operator
const str1 = "Hello " + "World";
console.log(str1);

// Concatenation using built-in concat() method on the String object prototype
const str2 = "Hello ".concat("World");
console.log(str2);

// Concatenation of string with non-string variables but will type-convert the non-string variables into strings
const str3 = "Hello " + 123 + true + {} + [] + undefined + null + NaN + Infinity + -Infinity;
console.log(str3);