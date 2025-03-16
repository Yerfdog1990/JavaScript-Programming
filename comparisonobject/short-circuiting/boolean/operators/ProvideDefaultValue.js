// Example demonstrating the use of the || operator to select "truthy" values or default values.

// Ensuring a nullable value is converted to a non-nullable value
const nullableObj = null;
const obj = nullableObj || {}; // selects {}
console.log("Object 1 (nullableObj || {}):", obj);

const nullableObj2 = {x: 5};
const obj2 = nullableObj2 || {}; // selects { x: 5 }
console.log("Object 2 (nullableObj2 || {}):", obj2);

// Returning the first "truthy" value
const truthyValue = {x: 10};
const result = truthyValue || {}; // will return { x: 10 }
console.log("Truthy value fallback:", result);

// Falling back multiple times to select the first "truthy" value
const envVariable = null;
const configValue = undefined;
const defaultConstValue = "default";

const finalValue = envVariable || configValue || defaultConstValue; // selects "default"
console.log("First truthy value from fallback chain (envVariable || configValue || defaultConstValue):", finalValue);