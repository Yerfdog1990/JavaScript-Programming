
let test1 =(a, b) => {
    return Number(a) == Number(b);
};
console.log("Comparison using \"==\"");
console.log("1 == \"1\": ", test1(1, "1")); // true
console.log("\"\" == 0: ", test1("", 0)); // true
console.log("true == 1: ", test1(true, 1)) // true
console.log("\"1\" == \"1\": ", test1("1", "1")) // true
console.log("0 == \"0\": ", test1(0,"0")); // true
console.log("0 == false: ", test1(0,false)) // true
console.log("\"a\" == \"a\": ", test1("a","a")); // false since there is no type conversion

let test2 =(a, b) => {
    return Number(a) != Number(b);
};
console.log("\nComparison using \"!=\"");
console.log("1 != \"1\": ", test2(1, "1")); // true
console.log("\"\" != 0: ", test2("", 0)); // true
console.log("true != 1: ", test2(true, 1)) // true
console.log("\"1\" != \"1\": ", test2("1", "1")) // true
console.log("0 != \"0\": ", test2(0,"0")); // true
console.log("0 != false: ", test2(0,false)) // true
console.log("\"a\" != \"a\": ", test2("a","a")); // false since there is no type conversion
