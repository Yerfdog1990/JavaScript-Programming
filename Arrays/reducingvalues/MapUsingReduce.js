// Map Using Reduce
// As another example of using the initial value parameter, consider the task of calling a function on an array of items,
// returning the results in a new array. Since arrays are ordinary values and list concatenation is an ordinary function,
// we can use reduction to accumulate a list, as the following example demonstrates:

function map(list, fn) {
    return list.reduce(function (newList, item) {
        return newList.concat(fn(item));
    }, []);
}

// Usage:
console.log(map([1, 2, 3], function (n) {
    return n * n;
}));
// → [1, 4, 9]

// Note: This is for illustration (of the initial value parameter) only, 
// use the native map for working with list transformations.

