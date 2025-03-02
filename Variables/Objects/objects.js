// Create an empty object
let myObject = {};

// Create objects for John and Billy with their properties
let john = {
    firstname: "John",
    lastname: "Doe",
    fullname: "John Doe"
};

let billy = {
    firstname: "Billy",
    lastname: undefined, // No lastname provided
    fullname: "Billy"
};
//Logging object properties in the console
console.log(john);
console.log(billy);
// Demonstrate accessing properties of the objects
window.alert(john.fullname); // Output: "John Doe"
window.alert(billy.firstname); // Output: "Billy"

// Explanation:
// Instead of creating an array like ["John Doe", "Billy"] to access names,
// we are using objects where `fullname` and other properties
// can be directly accessed using keys like `john.fullname` or `billy.firstname`.