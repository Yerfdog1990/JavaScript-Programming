//It is often necessary to generate a new array based on the values of an existing array.
// For example, to generate an array of string lengths from an array of strings:
const originalArray = ['one', 'two', 'three'];
console.log("Original array: ", originalArray);
const newArray = originalArray.map(item => item.length);
console.log("New array: ", newArray);

// In this example, an anonymous function is provided to the map() function, and the map function will call it for every
// element in the array, providing the following parameters, in this order:
// The element itself
// The index of the element (0, 1...)
// The entire array
// Additionally, map() provides an optional second parameter in order to set the value of this in the mapping
// function. Depending on the execution environment, the default value of this might vary:
// In a browser, the default value of this is always window:

const newArray2 = originalArray.map(function(item, index, array) {
    console.log(this); // window (the default value in browsers)
    return item.length;
})