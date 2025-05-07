// Demonstrating for...in and for...of loops in JavaScript

// for...in loop iterates over enumerable properties of an object
console.log("FOR...IN DEMONSTRATION:");
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let property in person) {
    console.log(`${property}: ${person[property]}`);
}

// for...in with an array (not recommended for arrays)
console.log("\nFOR...IN WITH ARRAY (not recommended):");
const numbers = [1, 2, 3];
numbers.customProperty = 'test';

for (let index in numbers) {
    console.log(`Index ${index}: ${numbers[index]}`);
}

// for...of loop iterates over iterable values (recommended for arrays)
console.log("\nFOR...OF DEMONSTRATION:");
const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
    console.log(fruit);
}

// Demonstrating the difference between for...in and for...of
console.log("\nDIFFERENCE DEMONSTRATION:");
const myArray = [3, 5, 7];
myArray.customProperty = 'hello';

console.log("Using for...in (shows indices and properties):");
for (let i in myArray) {
    console.log(i);
}

console.log("\nUsing for...of (shows only values):");
for (let value of myArray) {
    console.log(value);
}
/*
Important things to note:
1.for...in iterating over the enumerable properties of an object, while for...of iterates over the values of an iterable object.
2.This custom property:
    - Doesn't affect the length of the array (it remains 3)
    - Won't be included when iterating over the array using loop `for...of`
    - Will be included when iterating using loop `for...in`
    - Won't appear in array methods like `map()`, `filter()`, etc.

 */
