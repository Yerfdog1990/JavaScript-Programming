/*
Beware that numbers can accidentally be converted to strings or NaN (Not a Number).
JavaScript is loosely typed. A variable can contain diﬀerent data types, and a variable can change its data type:
var x = "Hello"; // typeof x is a string
x = 5; // changes typeof x to a number
When doing mathematical operations, JavaScript can convert numbers to strings:
var x = 5 + 7; // x.valueOf() is 12, typeof x is a number
var x = 5 + "7"; // x.valueOf() is 57, typeof x is a string
var x = "5" + 7; // x.valueOf() is 57, typeof x is a string
var x = 5 - 7; // x.valueOf() is -2, typeof x is a number
var x = 5 - "7"; // x.valueOf() is -2, typeof x is a number
var x = "5" - 7; // x.valueOf() is -2, typeof x is a number
var x = 5 - "x"; // x.valueOf() is NaN, typeof x is a number
Subtracting a string from a string, does not generate an error but returns NaN (Not a Number):
"Hello" - "Dolly" // returns NaN
 */

// Logical OR (||), reading left to right, will evaluate to the first truthy value.
// If no truthy value is found, the last value is returned.


console.log("Demonstrating Logical OR (||) behavior:");

const a = 'hello' || ''; // 'hello' is the first truthy value
console.log("'hello' || '' =", a); // Output: 'hello'

const b = '' || []; // [] is the first truthy value
console.log("'' || [] =", b); // Output: []

const c = '' || undefined; // undefined is the first truthy (or last available) value
console.log("'' || undefined =", c); // Output: undefined

const d = 1 || 5; // 1 is the first truthy value
console.log("1 || 5 =", d); // Output: 1

const e = 0 || {}; // {} is the first truthy value
console.log("0 || {} =", e); // Output: {}

const f = 0 || '' || 5; // 5 is the first truthy value
console.log("0 || '' || 5 =", f); // Output: 5

const g = '' || 'yay' || 'boo'; // 'yay' is the first truthy value
console.log("'' || 'yay' || 'boo' =", g); // Output: 'yay'


// Logical AND (&&), reading left to right, will evaluate to the first falsy value.
// If no falsy value is found, the last value is returned.
console.log("\nDemonstrating Logical AND (&&) behavior:");

const h = 'hello' && 'world'; // Both are truthy, so the last value is returned
console.log("'hello' && 'world' =", h); // Output: 'world'

const i = 'hello' && ''; // '' is the first falsy value
console.log("'hello' && '' =", i); // Output: ''

const j = 0 && 'hello'; // 0 is the first falsy value
console.log("0 && 'hello' =", j); // Output: 0

const k = 1 && 5; // Both are truthy, so the last value is returned
console.log("1 && 5 =", k); // Output: 5

const l = true && false; // false is the first falsy value
console.log("true && false =", l); // Output: false

const m = undefined && 'hello'; // undefined is the first falsy value
console.log("undefined && 'hello' =", m); // Output: undefined

const n = 'yay' && 'boo' && 'hooray'; // All are truthy, so the last value is returned
console.log("'yay' && 'boo' && 'hooray' =", n); // Output: 'hooray'

const o = null && 'something' && 42; // null is the first falsy value
console.log("null && 'something' && 42 =", o); // Output: null


// Demonstrating setting default values using Logical OR (||)
console.log("\nDemonstrating setting default values using Logical OR (||):");
const foo = function (val) {
    // If val evaluates to falsy, 'default' will be returned instead.
    return val || 'default';
};
console.log("'burger' || 'default' = ", foo('burger')); // Output: 'burger'
console.log("100 || 'default' = ", foo(100)); // Output: 100
console.log("[] || 'default' = ", foo([])); // Output: []
console.log("0 || 'default' = ", foo(0)); // Output: 'default'
console.log("undefined || 'default' = ", foo(undefined)); // Output: 'default'

console.log("\nDemonstrating setting default values using Logical AND (&&):");
const foo1 = function (val1) {
    // If val1 evaluates to falsy, it will return the first falsy value. 
    // If all are truthy, the last value will be returned.
    return val1 && 'default';
};

console.log("false && 'default' = ", foo1(false && 'default')); // Output: false
console.log("'' && 'default' = ", foo1('' && 'default')); // Output: ''
console.log("null && 'default' = ", foo1(null && 'default')); // Output: null
console.log("undefined && 'default' = ", foo1(undefined && 'default')); // Output: undefined
console.log("'value' && 'default' = ", foo1('value' && 'default')); // Output: 'default'
console.log("true && 'default' = ", foo1(true && 'default')); // Output: 'default'

// Just keep in mind that for arguments, 0 and (to a lesser extent) the empty string are also often valid values that
// should be able to be explicitly passed and override a default, which, with this pattern, they won’t (because they are falsy).