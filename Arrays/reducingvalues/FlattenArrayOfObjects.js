const originalArray = [
    {key: 'a', value: 1},
    {key: 'b', value: 2},
    {key: 'c', value: 3},
    {key: 'd', value: 4},
    {key: 'e', value: 5}
];
console.log("Original array of object: ", originalArray);
const flattenedArray = originalArray.reduce((acc, obj) => acc.concat(obj), []);
console.log("Flattened array of object: ", flattenedArray);