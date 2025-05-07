// Array iteration examples

// 1. Array.prototype.keys() (ES6+)
// Iterates over array indices
let myArray = [1, 2, 3, 4];
for (let i of myArray.keys()) {
    let twoValue = myArray[i] * 2;
    console.log(`2 * ${myArray[i]} = ${twoValue}`);
}

// 2. Array.prototype.forEach() (ES5+)
// Provides value, index, and array reference in callback
[1, 2, 3, 4].forEach(function (value, index, arr) {
    const twoValue = value * 2;
    console.log("2 * value = %d", twoValue);
});

// 3. Traditional for loop
// Works in all JavaScript versions
const myArrayFor = [1, 2, 3, 4];
let i;
for (i = 0; i < myArrayFor.length; ++i) {
    const twoValue = myArrayFor[i] * 2;
    console.log("2 * value is: %d", twoValue);
}

// 4. While loop example
const myArrayWhile = [1, 2, 3, 4];
i = 0;
let sum = 0;
while (i++ < myArrayWhile.length) {
    sum += i;
}
console.log(sum);

// 5. Array.prototype.every() (ES5+)
// Stops iteration when the callback returns false
[2, 4, 7, 9].every(function checkEvenNumber(value, index, arr) {
    console.log(value);
    if (value % 2 !== 0) {
        console.log("Found odd number: %d", value);
        return false;
    }
    return true;
});

// 6. Array.prototype.some() (ES5+)
// Stops iteration when the callback returns true
[2, 4, 7, 9].some(function (value, index, arr) {
    console.log(value);
    return value === 7; // iterate until we find value 7
});

// 7. Library Examples
// jQuery
$.each(myArray, function (key, value) {
    console.log(value);
});

// Underscore.js
_.each(myArray, function (value, key, myArray) {
    console.log(value);
});

// Lodash
_.forEach(myArray, function (value, key) {
    console.log(value);
});
