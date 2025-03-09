// Comparing string using localeCompare()
const str1 = "Hello";
const str2 = "World";
console.log("Comparing string using localeCompare():");
// Scenario 1: Returns a negative value if the reference string is lexicographically (alphabetically) before the compared string (the parameter)
console.log("Returning a negative value:", str1.localeCompare(str2));

// Scenario 2: Returns a positive value if it comes afterwards
console.log("Returning a positive value:", str2.localeCompare(str1));

// Scenario 3: Returns a value of 0 if they are equal.
console.log("Returning a value of 0:", str1.localeCompare(str1));

// Comparing string using the > and < operators
console.log("\nUsing the > and < operators:");
function compare(str1, str2) {
    if (str1 > str2) {
        return 1;
    } else if (str1 < str2) {
        return -1;
    } else {
        return 0;
    }
}
console.log("Returning a negative value:", compare(str1, str2));
console.log("Returning a positive value:", compare(str2, str1));
console.log("Returning a value of 0:", compare(str1, str1));

// Note: using the > and < operators is especially useful when using a sorting function that compares based on the sign of the return value (such as sort).
let arr = ["Hello", "World", "Hello World"];
arr.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(arr);