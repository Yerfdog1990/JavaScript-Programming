// To trim whitespace from the edges of a string, use String.prototype.trim:
const str = "   Hello World   ";
console.log("original string: ", str);
console.log("Full trim: ", str.trim());

// Trim left
console.log("Trim left: ", str.trimLeft());

// Trim right
console.log("Trim right: ", str.trimRight());

// Trim start
console.log("Trim start: ", str.trimStart());

// trim end
console.log("Trim end: ", str.trimEnd());