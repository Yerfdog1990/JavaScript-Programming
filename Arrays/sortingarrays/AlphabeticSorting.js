// Sorts the array in alphabetic order.

const unsortedArray1 = ['s', 't', 'a', '34', 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W',
    '-1', '-4'];
console.log("Unsorted array", unsortedArray1);
console.log("Sorted array", unsortedArray1.sort((a, b) => String(a).localeCompare(String(b))));

// Note: The above sort will throw an error if any array items are not a string. If you know that the array
// may contain items that are not strings, use the safe version below.
const unsortedArray2 = ['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W',
    -1, '-4'];
console.log("Unsorted array", unsortedArray2);
console.log("Sorted array", unsortedArray2.sort((a, b) => String(a).localeCompare(String(b))));

//The parameter needs to be wrapped in `String()` in `localeCompare()` for several important reasons:
//
// 1. Type Safety: `localeCompare()` is a string method and only works with strings. If you pass non-string values directly, it could lead to errors. Consider these scenarios:

// Without String() conversion
[1, 2, 10].sort((a, b) => a.localeCompare(b));  // Error: a.localeCompare is not a function

// With String() conversion
[1, 2, 10].sort((a, b) => String(a).localeCompare(String(b))); // Works correctly

// 2. Mixed Data Types: When sorting arrays with mixed data types (numbers, strings, etc.), converting to strings ensures consistent comparison behavior:

const mixedArray = ['2', 1, '10', 3];

// With String() conversion
mixedArray.sort((a, b) => String(a).localeCompare(String(b)));
// Result: ['1', '2', '3', '10'] - proper alphanumeric sorting

// 3.Locale-Aware Sorting: `localeCompare()` provides proper locale-aware string comparison, which is especially important for:
    // - Special characters
    // - Diacritical marks
    // - Different alphabets
