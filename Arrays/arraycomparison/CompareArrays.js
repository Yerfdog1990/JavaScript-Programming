/**
 * This file demonstrates different methods for comparing arrays in JavaScript,
 * including simple JSON.stringify comparison and recursive deep comparison.
 */

// Simple array comparison using JSON.stringify
function compareArraysSimple(array1, array2) {
    try {
        return JSON.stringify(array1) === JSON.stringify(array2);
    } catch (e) {
        console.error('Error comparing arrays:', e.message);
        return false;
    }
}

// Recursive deep array comparison
function compareArrays(array1, array2) {
    let i, isA1, isA2;
    isA1 = Array.isArray(array1);
    isA2 = Array.isArray(array2);

    if (isA1 !== isA2) {
        return false;
    }
    if (!(isA1 && isA2)) {
        return array1 === array2;
    }
    if (array1.length !== array2.length) {
        return false;
    }

    for (i = 0; i < array1.length; i += 1) {
        if (!compareArrays(array1[i], array2[i])) {
            return false;
        }
    }
    return true;
}

// Example usage
const arr1 = [1, 2, [3, 4]];
const arr2 = [1, 2, [3, 4]];
const arr3 = [1, 2, [3, 5]];

console.log('Simple comparison:', compareArraysSimple(arr1, arr2));  // true
console.log('Simple comparison:', compareArraysSimple(arr1, arr3));  // false
console.log('Recursive comparison:', compareArrays(arr1, arr2));     // true
console.log('Recursive comparison:', compareArrays(arr1, arr3));     // false

// Cyclic reference example
try {
    const a = [0];
    a[1] = a;
    const b = [0, a];
    console.log('Comparing cyclic arrays:', compareArrays(a, b));
} catch (e) {
    console.error('Error with cyclic reference:', e.message);
}
