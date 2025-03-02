//undefined is a global value that represents the absence of an assigned value.
// typeof undefined === 'undefined'
// null is an object that indicates that a variable has been explicitly assigned "no value".
// typeof null === 'object'


// A variable when it is declared but not assigned a value (i.e. defined)
let variable;
console.log('is undefined?', variable === undefined); // is undefined? true

// Accessing the value of a property that doesn't exist
let obj = {a: 'a'};
console.log('is undefined?', obj.b === undefined); // is undefined? true

// The return value of a function that doesn't return a value
function exampleFunction() {
    return;
}

console.log('is undefined?', exampleFunction() === undefined); // is undefined? true

// The value of a function argument that is declared but has been omitted from the function call
function checkParam(param) {
    console.log('is undefined?', param === undefined);
}

checkParam('a'); // is undefined? false
checkParam();    // is undefined? true

// undefined is also a property of the global window object (in browsers)
console.log(window.undefined); // undefined
console.log(window.hasOwnProperty('undefined')); // true