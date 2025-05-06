/*
The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to
reduce it to a single value.
 */

// Array Sum
// This method can be used to condense all values of an array into a single value:
originalArray1 = [1, 2, 3];
console.log("Original array: ", originalArray1);
reducedArray1 = [1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Reduced array: ", reducedArray1);

//An optional second parameter can be passed to reduce(). Its value will be used as the first argument (specified as a)
// for the first call to the callback (specified as function(a, b)).
originalArray2 = [2];
console.log("Original array: ", originalArray2);
reducedArray2 = [2].reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 1);
console.log("Reduced array: ", reducedArray2);