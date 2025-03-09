// To detect whether a parameter is a primitive string, use typeof:
const aString = "my string";
console.log("Is a string: ", typeof aString === "string");
const anInt = 5;
console.log("Is an int: ", typeof anInt === "string");
const anObj = {};
console.log("Is an object: ", typeof anObj === "string");

// If you ever have a String object, via new String("my string"), then the above will not work. In this instance, we can
// use instanceof:
const aString2 = new String("my string");
console.log("Is a string: ", aString2 instanceof String);
console.log("Is a string: ", typeof aString2 === "string");

// To cover both instances, we can write a simple helper function:
function isString(str) {
    return typeof str === "string" || str instanceof String;
}
console.log("Is a string: ", isString(aString));
console.log("Is a string: ", isString(aString2));

// Or we can make use of toString function of Object.
const pString = "Primitive String";
const oString = new String("Object Form of String");
console.log(Object.prototype.toString.call(pString));//"[object String]"
console.log(Object.prototype.toString.call(oString));//"[object String]"

// A more robust solution is to not detect a string at all, rather only check for what functionality is required.

let aString3 = "Primitive String";
// Generic check for a substring method
if(aString.substring) {
}
// Explicit check for the String substring prototype method
if(aString3.substring === String.prototype.substring) {
    console.log(aString3.substring(0, ));
}