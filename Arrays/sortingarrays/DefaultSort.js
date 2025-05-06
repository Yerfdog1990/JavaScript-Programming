// Sorting Arrays
// The .sort() method sorts the elements of an array. The default method will sort the array according to string
// Unicode code points. To sort an array numerically the .sort() method needs to have a compareFunction passed to it.
// Note: The .sort() method is impure. .sort() will sort the array in-place, i.e., instead of creating a
// sorted copy of the original array, it will re-order the original array and return it.

// Sorts the array in UNICODE order.
const unsortedArray = ['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W',
    -1, '-4'];
console.log("Unsorted array", unsortedArray);
console.log("Sorted array", unsortedArray.sort());

// Note: The uppercase characters have moved above lowercase. The array is not in alphabetical order, and
//  the numbers are not in numerical order.