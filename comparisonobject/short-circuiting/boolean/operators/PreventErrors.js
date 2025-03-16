let obj; // Undefined variable

if (obj !== undefined && obj.property) {
    // This block will only execute if "obj" is defined and has a "property"
    console.log("No error: obj is defined and has a property");
}

if (typeof obj === "object" && obj.property) {
    // Safe option: ensures "obj" is an object before accessing its properties
    console.log("No error: obj is an object and has a property");
} else {
    console.log("Safe check: obj is not an object or does not have a property");
}