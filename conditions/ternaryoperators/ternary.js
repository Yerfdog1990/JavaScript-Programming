// Ternary operators
// Can be used to shorten if/else operations. This comes in handy for returning a value quickly (i.e. in order to assign it to another variable).
let x = 1;
let y = 3
let result = (x + y) % 2 ===0 ? "The sum is even." : "the sum is odd.";
console.log(result);

// Converting to if-else condition
let z = 1;
let w = 3;
if ((z + w) % 2 === 0) {
    console.log("The sum is even.");
}else{
    console.log("The sum is odd.");
}
