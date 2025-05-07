// While Loop in JavaScript
// A while loop executes a block of code as long as a specified condition is true.
// Syntax:
// while (condition) {
//     // code block to be executed
// }

// Basic while loop example
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// Using a break statement in a while loop
let i = 0;
while (i < 10) {
    if (i === 5) {
        break; // exits the loop when i equals 5
    }
    console.log("Number is: " + i);
    i++;
}

// Using a continue statement in a while loop
let j = 0;
while (j < 5) {
    j++;
    if (j === 3) {
        continue; // skips the rest of the loop body when j equals 3
    }
    console.log("Value is: " + j);
}

// Do...while loop example
// The do...while loop will execute the code block at least once
// Syntax:
// do {
//     // code block to be executed
// } while (condition);

let k = 0;
do {
    console.log("Do while count is: " + k);
    k++;
} while (k < 3);
