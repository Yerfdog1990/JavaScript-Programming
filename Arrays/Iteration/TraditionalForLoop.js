/*
A traditional for loop has three parts:
1.The initialization: executed before the look block is executed the first time
2.The condition: checks a condition every time before the loop block is executed, and quits the loop if false
3.The afterthought: performed every time after the loop block is executed,
These three parts are separated from each other by a ; symbol. Content for each of these three
components is optional, which means that the following is the most minimal for loop possible:
for (;;) {
// Do stuff
}
Of course, you will need to include an if(condition === true) { break; } or an if(condition === true) {
return; } somewhere inside that for-loop to get it to stop running.
Usually, though, the initialization is used to declare an index, the condition is used to compare that index with a
minimum or maximum value, and the afterthought is used to increment the index:
for (var i = 0, length = 10; i < length; i++) {
console.log(i);
}
 */

// Using a traditional for loop to loop through an array
// 1. Forward loop
console.log("Forward loop");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < array.length; i++) {

    if ((array[i] % 2) === 0) {
        console.log(`${array[i]} is an even number`);
    } else {
        console.log(`${array[i]} is an odd number`);
    }

}
// 2. Backward loop
console.log("\nBackward loop");
for (let i = array.length - 1; i >= 0; i--) {
    if ((array[i] % 2) === 0) {
        console.log(`${array[i]} is an even number`);
    } else {
        console.log(`${array[i]} is an odd number`);
    }
    
}

// 3. Multiple initialization with value tracking
console.log("\nMultiple initialization loop");
for (let key = 0, value = array[key], length = array.length; key < length; value = array[++key]) {
    console.log(`Current value: ${value}`);
}

// 4. Initialization outside the loop
console.log("\nInitialization outside loop");
let i = 0;
const length = array.length;
for (; i < length;) {
    console.log(`Value at index ${i}: ${array[i]}`);
    i++;
}

// 5. Using array value in a condition
console.log("\nArray value in condition loop");
let index = 0;
let currentValue;
for (; currentValue === array[index++];) {
    console.log(`Current value: ${currentValue}`);
}