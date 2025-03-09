// All JavaScript strings are unicode!
let str = "some ∆≈ƒ unicode ¡™£¢¢¢";
console.log("Character code of the first character in the string: ", str.charCodeAt(0));
console.log("Character code of the second character in the string: ", str.charCodeAt(1));
console.log("Character code of the third character in the string: ", str.charCodeAt(2));
console.log("Character code of the last character in the string: ", str.charCodeAt(str.length - 1));
console.log("Character code of the last character in the string: ", str.charCodeAt(str.length - 1));
// There are no raw byte or binary strings in JavaScript. To eﬀectively handle binary data, use Typed Arrays.