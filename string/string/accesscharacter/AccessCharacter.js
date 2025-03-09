// Using charAt() to get a character at the specified index in the string.
let str = "Hello World";
console.log(`First character in ${str} is: ${str.charAt(0)}`);
// Treat string like arrays, then use the index via bracket notation
console.log(`Second character in ${str} is: ${str[1]}`);
// To get the character code of the character at a specified index, use charCodeAt().
console.log(`Character code of the first character in ${str} is: ${str.charCodeAt(0)}`);

/*
Note;
Note that these methods are all getter methods (return a value). Strings in JavaScript are immutable.
In other words, none of them can be used to set a character at a position in the string.
 */