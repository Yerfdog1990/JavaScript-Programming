// Demonstrating the use of `null`
// null is used for representing the intentional absence of an object value and is a primitive value. Unlike undefined,
// it is not a property of the global object.
// Intentional absence of an object value
var exampleNull = null;

console.log('Value of exampleNull:', exampleNull); // null

// Null is equal to undefined but not identical
console.log('null == undefined:', null == undefined); // true
console.log('null === undefined:', null === undefined); // false

// The typeof null is 'object' (this is a known JavaScript quirk)
console.log('typeof null:', typeof null); // 'object'

// Properly checking if a value is null using strict equality
if (exampleNull === null) {
    console.log('exampleNull is null'); // This will be logged
} else {
    console.log('exampleNull is not null');
}
