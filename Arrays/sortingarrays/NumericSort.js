const unsortedArray = [1, 23, -2, 6, 15, 6, -7, 8, -9, 10];
console.log("Unsorted array: ", unsortedArray);
// Numerical Sort (ascending)
const ascendingSorting = unsortedArray.sort((a, b) => a - b);
console.log("Ascending sorting: ", ascendingSorting);
// Numerical Sort (descending)
const descendingSorting = unsortedArray.sort((a, b) => b - a);
console.log("Descending sorting: ", descendingSorting);
// Sorting an array by even and odd numbers
const evenOddSorting = unsortedArray.sort((a, b) => (a & 1) - (b & 1) || a - b);
console.log("Even and odd sorting: ", evenOddSorting);
