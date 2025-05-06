// The filter() method accepts a test function and returns a new array containing only the elements of the original
// array that pass the test provided.

// Suppose we want to get all odd numbers in an array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array: ", numbers);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log("Odd numbers: ", oddNumbers);

// Suppose we want to get all even numbers in an array:
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers: ", evenNumbers);