// indexOf() will return the index of the first occurrence of searchString in the string.
// If searchString is not found, then -1 is returned.
const str1 = "Hello World";
console.log("The first occurrence of 'l' is: ", str1.indexOf("l"));
console.log("The first occurrence of 'o' is: ", str1.indexOf("o"));
console.log("The first occurrence of 'z' is: ", str1.indexOf("z")); // If not found it returns -1

// lastIndexOf() will return the index of the last occurrence of searchstring or -1 if not found.
const str2 = "Hello JavaScripts"
console.log("The last occurrence of 's' is: ", str2.lastIndexOf("s"));
console.log("The last occurrence of 'a' is: ", str2.lastIndexOf("a"));
console.log("The last occurrence of 'z' is : ", str2.lastIndexOf("z")); // If not found it returns -1")

// includes() will return a boolean that tells whether searchString exists in the string, starting from index start (defaults to 0).
// This is better than indexOf() if you simply need to test for existence of a substring.
const str3 = "Hello world";
console.log("Does 'Hello' exist in str3: ", str3.includes("Hello"));
console.log("Does 'Hello' exist in str3: ", str3.includes("Hello", 6));
console.log("Does 'Hello' exist in str3: ", str3.includes("Hello", 10));

// replace() will return a string that has all occurrences of substrings matching the RegExp regexp or string
// substring with a string replacement or the returned value of replaceFunction.
const str4 = "Hello JavaScripts";
console.log("The string after replacing 's' with 'z': ", str4.replace("s", "z"));
console.log("The string after replacing 's' with 'z' and 's' with 'a': ", str4.replace("s", "z").replace("s", "a"));
let string = "heLlo, woRlD!";
string = string.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
});
console.log( string ); // "Hello, World!"