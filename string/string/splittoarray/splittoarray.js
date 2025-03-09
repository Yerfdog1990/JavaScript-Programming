// Use .split to go from strings to an array of the split substrings:
let str = "One,Two,Three, Four";
console.log("original string: ", str);
console.log("split string: ", str.split(","));

// Use the array method .join to go back to a string:
console.log("joined string: ", str.split(",").join(","));