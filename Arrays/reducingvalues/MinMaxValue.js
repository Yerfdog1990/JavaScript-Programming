// Find maximum value
const originalArray = [1, -2, 3, 4, 5, 6, 7, 8, 9, 10];
const max = originalArray.reduce((max, current) => {
    return Math.max(max, current);
})
console.log("Maximum number: ", max);
// Find minimum value
const min = originalArray.reduce((min, current) => {
    return Math.min(min, current);
})
console.log("Minimum number: ", min);