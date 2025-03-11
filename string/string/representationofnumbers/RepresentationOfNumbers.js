// In order to convert a Number from decimal (base 10) to its hexadecimal (base 16) String representation the toString
// method can be used with radix 16.
const toHexDecimal1 = (10).toString(16);
console.log("Hexadecimal representation of 12: ", toHexDecimal1);
const toHexDecimal2 = (10).toString(16);
const toHexDecimal3 = (11).toString(16);
console.log("Hexadecimal representation of 11: ", toHexDecimal3);
const toHexDecimal4 = (12).toString(16);
console.log("Hexadecimal representation of 12: ", toHexDecimal4);
const toHexDecimal5 = (13).toString(16);
console.log("Hexadecimal representation of 13: ", toHexDecimal5);
const toHexDecimal6 = (14).toString(16);
console.log("Hexadecimal representation of 14: ", toHexDecimal6);
const toHexDecimal7 = (15).toString(16);
console.log("Hexadecimal representation of 15: ", toHexDecimal7);

// Conversion from hexadecimal to decimal can be done with parseInt and the radix 16
const toDecimal1 = parseInt("a", 16);
console.log("Decimal representation of a: ", toDecimal1);
const toDecimal2 = parseInt("b", 16);
console.log("Decimal representation of b: ", toDecimal2);
const toDecimal3 = parseInt("c", 16);
console.log("Decimal representation of c: ", toDecimal3);
const toDecimal4 = parseInt("d", 16);
console.log("Decimal representation of d: ", toDecimal4);
const toDecimal5 = parseInt("e", 16);
console.log("Decimal representation of e: ", toDecimal5);
const toDecimal6 = parseInt("f", 16);
console.log("Decimal representation of f: ", toDecimal6);

// To convert an arbitrary number (i.e. non-integer) from its String representation into a Number, the operation must be
// split into two parts; the integer part and the fraction part.
let b16 = '3.243f3e0370cdc';
// Split into integer and fraction parts
let [i16, f16] = b16.split('.');
// Calculate base 10 integer part
let i10 = parseInt(i16, 16); // 3
// Calculate the base 10 fraction part
let f10 = parseInt(f16, 16) / Math.pow(16, f16.length); // 0.14158999999999988
// Put the base 10 parts together to find the Number
let b10 = i10 + f10; // 3.14159
console.log("\nNumber representation of \"3.243f3e0370cdc\": ", b10);

// Note 1: Be careful as small errors may be in the result due to diﬀerences in what is possible to be represented in diﬀerent bases. It may be desirable to perform some kind of rounding afterwards.
// Note 2: Very long representations of numbers may also result in errors due to the accuracy and maximum values of Numbers of the environment the conversions are happening in.