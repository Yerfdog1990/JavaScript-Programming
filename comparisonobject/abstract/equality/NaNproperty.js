/*
NaN ("Not a Number") is a special value defined by the IEEE Standard for Floating-Point Arithmetic, which is used when
a non-numeric value is provided but a number is expected (1 * "two"), or when a calculation doesn't have a valid
number result (Math.sqrt(-1)).
Any equality or relational comparisons with NaN returns false, even comparing it with itself. Because, NaN is
supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other
nonsensical computations.
 */
// Equal comparison with NaN
function compareWithNaN() {
    console.log("1 * \"two\") === NaN: ", (1 * "two") === NaN); // false
    console.log("NaN === 0: ", NaN === 0); // false
    console.log("NaN === NaN: ", NaN === NaN); // false
    console.log("Number.NaN === NaN: ", Number.NaN === NaN); // false
}
console.log("Equal comparison with NaN:");
compareWithNaN();

// Greater and less than comparison with NaN
function compareWithNaNGreaterLess() {
    console.log("NaN < 0: ", NaN < 0); // false
    console.log("NaN > 0: ", NaN > 0); // false
    console.log("NaN >= 0: ", NaN >= 0); // false
    console.log("NaN >= NaN: ", NaN >= NaN); // false
    console.log("NaN >= 'two': ", NaN >= 'two'); // false
}
console.log("\nGreater and less than comparison with NaN:");
compareWithNaNGreaterLess();


// Non-equal comparisons with NaN
function compareWithNaNNotEqual() {
    console.log("NaN !== 0: ", NaN !== 0); // true
    console.log("NaN !== NaN: ", NaN !== NaN); // true
    console.log("Number.NaN !== NaN: ", Number.NaN !== NaN); // true
}

console.log("\nNon-equal comparisons with NaN:");
compareWithNaNNotEqual();

// Checking if a value is NaN
function checkIfValueIsNaN() {
    console.log("isNaN(NaN): ", isNaN(NaN)); // true
    console.log("isNaN(1 * 'two'): ", isNaN(1 * 'two')); // true
    console.log("isNaN('foo'): ", isNaN('foo')); // true
    console.log("Number.isNaN(NaN): ", Number.isNaN(NaN)); // true
    console.log("Number.isNaN(1 * 'two'): ", Number.isNaN(1 * 'two')); // true
    console.log("Number.isNaN('foo'): ", Number.isNaN('foo')); // false
}

console.log("\nChecking if a value is NaN:");
checkIfValueIsNaN();


// Additional examples of using Number.isNaN()
function testNumberIsNaN() {
    console.log("Number.isNaN(NaN): ", Number.isNaN(NaN)); // true
    console.log("Number.isNaN(0 / 0): ", Number.isNaN(0 / 0)); // true
    console.log("Number.isNaN('str' - 12): ", Number.isNaN('str' - 12)); // true
    console.log("Number.isNaN(24): ", Number.isNaN(24)); // false
    console.log("Number.isNaN('24'): ", Number.isNaN('24')); // false
    console.log("Number.isNaN(1 / 0): ", Number.isNaN(1 / 0)); // false
    console.log("Number.isNaN(Infinity): ", Number.isNaN(Infinity)); // false
    console.log("Number.isNaN('str'): ", Number.isNaN('str')); // false
    console.log("Number.isNaN(undefined): ", Number.isNaN(undefined)); // false
    console.log("Number.isNaN({}): ", Number.isNaN({})); // false
}

console.log("\nTesting Number.isNaN with various values:");
testNumberIsNaN();


// Checking if a value is NaN by comparing it with itself
function checkIfValueIsNaNUsingSelfComparison() {
    console.log("NaN !== NaN: ", NaN !== NaN); // true
    console.log("(1 * 'two') !== (1 * 'two'): ", (1 * 'two') !== (1 * 'two')); // true
    console.log("0 !== 0: ", 0 !== 0); // false
    console.log("'string' !== 'string': ", 'string' !== 'string'); // false
    console.log("undefined !== undefined: ", undefined !== undefined); // false
}

// Polyfill for Number.isNaN using self-comparison
Number.isNaN = Number.isNaN || function (value) {
    return value !== value; // true if value is NaN, false otherwise
};

console.log("\nChecking if a value is NaN using self-comparison:");
checkIfValueIsNaNUsingSelfComparison();

/*
ECMAScript defines a “sameness” algorithm called SameValue which, since ECMAScript 6, can be invoked with
Object.is. Unlike the == and === comparison, using Object.is() will treat NaN as identical with itself (and -0 as not identical with +0):
 */

if (!Object.is) {
    Object.is = function (x, y) {
        // SameValue algorithm
        if (x === y) { // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    };
}
console.log("\nUsing Object.is:");
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true
console.log("Object.is(+0, 0):", Object.is(+0, 0)); // false
console.log("NaN === NaN:", NaN === NaN); // false
console.log("+0 === 0:", +0 === 0); // true

// Points to note
// NaN itself is a number, meaning that it does not equal to the string "NaN", and most importantly (though perhaps unintuitively):
console.log("Type of NaN: ", typeof(NaN));
console.log("Type of \"NaN\": ", typeof("NaN"));
console.log("typeof(NaN) === typeof(\"NaN\"): ", typeof(NaN) === typeof("NaN"))