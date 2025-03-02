// 1. Regular Arrays: Dynamically typed arrays
const regularArray = [1, "text", true, null, undefined, {key: "value"}];
console.log("Regular Array:", regularArray);

// 2. Multidimensional Arrays: Arrays containing other arrays
const multiDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, [8, 9], 10],
];
console.log("Multidimensional Array:", multiDimensionalArray);

// 3. Associative Arrays (Object/Map): Used for key-value pairs
const associativeArrayAsObject = {key1: "value1", key2: "value2"}; // Using objects
console.log("Associative Array as Object:", associativeArrayAsObject);

const associativeArrayAsMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
]); // Using Map
console.log("Associative Array as Map:", Array.from(associativeArrayAsMap));

// 4. Sparse Arrays: Arrays with missing indices
const sparseArray = [];
sparseArray[0] = 1;
sparseArray[5] = 6; // Indices 1-4 are empty
console.log("Sparse Array:", sparseArray);
console.log("Sparse Array length:", sparseArray.length);

// 5. Typed Arrays: For binary data manipulation
const typedArray = new Uint8Array([1, 2, 3, 255]); // Uint8Array for 8-bit unsigned integers
console.log("Typed Array (Uint8Array):", typedArray);

// 6. Array-Like Objects: Objects with a `length` property
const arrayLikeObject = {
    0: "value1",
    1: "value2",
    length: 2, // Acts like an array
};
console.log("Array-Like Object:", Array.from(arrayLikeObject)); // Convert to a true array

// 7. Immutable Arrays: Functional copies of arrays to avoid mutation
const originalArray = [1, 2, 3];
const immutableArrayCopy = [...originalArray, 4]; // Creates a new immutable copy
console.log("Original Array:", originalArray);
console.log("Immutable Array Copy:", immutableArrayCopy);

// 8. Custom Arrays: Array objects with custom behaviors
class CustomArray extends Array {
    findGreaterThan(value) {
        return this.filter((item) => item > value);
    }
}

const customArray = new CustomArray(1, 2, 3, 4, 5);
console.log("Custom Array:", customArray);
console.log("Custom Array - Numbers greater than 3:", customArray.findGreaterThan(3));
