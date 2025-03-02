
let stringVar1 = "Hello"
let stringVar2 = "World"
let intVar = 5
let floatVar = 1.2
let boolVar = true
let charVar = 'c'
let singleNumArray = [1, 2, 3];
let singleElementArray1 = [5]
let singleElementArray2 = [5.5]
let doubleNumArray = [1.2, 2.3, 3.4]
let multiNumArray = [[1, 2], [3, 4], [5, 6]]
let stringNumArray = ["1", "2", "3"]
let mixedNumArray = [1, "2", 3.4]
let emptyArray = []
let emptyObject = {}
let nullVar = null
let undefinedVar = undefined
let NaNVar = NaN
let infinityVar = Infinity

// Multiplication of a string and string
console.log("Hello * World  = ", stringVar1 * stringVar2);

// Division of a string and a string
console.log("Hello / World  = ", stringVar1 / stringVar2);

// Subtraction of a string and a string
console.log("Hello - World  = ", stringVar1 - stringVar2);

// Multiplication of a string and integer
console.log("Hello * 5  = ", stringVar1 * intVar);

// Division of a string and integer
console.log("Hello / 5  = ", stringVar1 / intVar);

// Subtraction of a string and integer
console.log("Hello - 5  = ", stringVar1 - intVar);

// Multiplication of a string and float
console.log("Hello * 1.2  = ", stringVar1 * floatVar);

// Division of a string and float
console.log("Hello / 1.2  = ", stringVar1 / floatVar);

// Subtraction of a string and float
console.log("Hello - 1.2  = ", stringVar1 - floatVar);

// Multiplication of a string and boolean
console.log("Hello * true  = ", stringVar1 * boolVar);

// Division of a string and boolean
console.log("Hello / true  = ", stringVar1 / boolVar);

// Subtraction of a string and boolean
console.log("Hello - true  = ", stringVar1 - boolVar);

// Multiplication of a string and character
console.log("Hello * 'c'  = ", stringVar1 * charVar);

// Division of a string and character
console.log("Hello / 'c'  = ", stringVar1 / charVar);

// Subtraction of a string and character
console.log("Hello - 'c'  = ", stringVar1 - charVar);

// Multiplication of a string and null
console.log("Hello * null  = ", stringVar1 * nullVar);

// Division of a string and null
console.log("Hello / null  = ", stringVar1 / nullVar);

// Subtraction of a string and null
console.log("Hello - null  = ", stringVar1 - nullVar);

// Multiplication of a string and undefined
console.log("Hello * undefined  = ", stringVar1 * undefinedVar);

// Division of a string and undefined
console.log("Hello / undefined  = ", stringVar1 / undefinedVar);

// Subtraction of a string and undefined
console.log("Hello - undefined  = ", stringVar1 - undefinedVar);

// Multiplication of a string and NaN
console.log("Hello * NaN  = ", stringVar1 * NaNVar);

// Division of a string and NaN
console.log("Hello / NaN  = ", stringVar1 / NaNVar);

// Subtraction of a string and NaN
console.log("Hello - NaN  = ", stringVar1 - NaNVar);

// Multiplication of a string and Infinity
console.log("Hello * Infinity  = ", stringVar1 * infinityVar);

// Division of a string and Infinity
console.log("Hello / Infinity  = ", stringVar1 / infinityVar);

// Subtraction of a string and Infinity
console.log("Hello - Infinity  = ", stringVar1 - infinityVar);

// Multiplication of a numerical array and integer
console.log("[1, 2, 3] * 5  = ", singleNumArray * intVar);

// Division of a numerical array and integer
console.log("[1, 2, 3] / 5  = ", singleNumArray / intVar);

// Subtraction of a numerical array and integer
console.log("[1, 2, 3] - 5  = ", singleNumArray - intVar);

// Multiplication of a numerical float array and float
console.log("[1.2, 2.3, 3.4] * 1.2  = ", doubleNumArray * floatVar);

// Division of a numerical float array and float
console.log("[1.2, 2.3, 3.4] / 1.2  = ", doubleNumArray / floatVar);

// Subtraction of a numerical float array and float
console.log("[1.2, 2.3, 3.4] - 1.2  = ", doubleNumArray - floatVar);

// Multiplication of a multidimensional numerical array and string
console.log("[[1, 2], [3, 4], [5, 6]] * 'Hello'  = ", multiNumArray * stringVar1);

// Division of a multidimensional numerical array and string
console.log("[[1, 2], [3, 4], [5, 6]] / 'Hello'  = ", multiNumArray / stringVar1);

// Subtraction of a multidimensional numerical array and string
console.log("[[1, 2], [3, 4], [5, 6]] - 'Hello'  = ", multiNumArray - stringVar1);

// Multiplication of a numerical string array and boolean
console.log('["1", "2", "3"] * true  = ', stringNumArray * boolVar);

// Division of a numerical string array and boolean
console.log('["1", "2", "3"] / true  = ', stringNumArray / boolVar);

// Subtraction of a numerical string array and boolean
console.log('["1", "2", "3"] - true  = ', stringNumArray - boolVar);

// Multiplication of a mixed numerical array and null
console.log("[1, '2', 3.4] * null  = ", mixedNumArray * nullVar);

// Division of a mixed numerical array and null
console.log("[1, '2', 3.4] / null  = ", mixedNumArray / nullVar);

// Subtraction of a mixed numerical array and null
console.log("[1, '2', 3.4] - null  = ", mixedNumArray - nullVar);

// Multiplication of an empty array and undefined
console.log("[] * undefined  = ", emptyArray * undefinedVar);

// Division of an empty array and undefined
console.log("[] / undefined  = ", emptyArray / undefinedVar);

// Subtraction of an empty array and undefined
console.log("[] - undefined  = ", emptyArray - undefinedVar);

// Multiplication of a single-element array and undefined
console.log("[5] * undefined  = ", singleElementArray1 * undefinedVar);

// Division of a single-element array and undefined
console.log("[5] / undefined  = ", singleElementArray1 / undefinedVar);

// Subtraction of a single-element array and undefined
console.log("[5] - undefined  = ", singleElementArray1 - undefinedVar);

// Multiplication of a single-element array and NaN
console.log("[5] * NaN  = ", singleElementArray1 * NaNVar);

// Division of a single-element array and NaN
console.log("[5] / NaN  = ", singleElementArray1 / NaNVar);

// Subtraction of a single-element array and NaN
console.log("[5] - NaN  = ", singleElementArray1 - NaNVar);

// Math library functions that return NaN
console.log("Math.log(-1)  = ", Math.log(-1));
console.log("Math.log(NaN) = ", Math.log(NaN));
console.log("Math.log(-Infinity) = ", Math.log(-Infinity));
console.log("Math.floor('a')  = ", Math.floor('a'));
console.log("Math.floor(\"Hello\")  = ", Math.floor("Hello"));
console.log("Math.ceil('a')  = ", Math.ceil('a'));
console.log("Math.ceil(\"Hello\")  = ", Math.ceil("Hello"));
console.log("Math.sqrt('a')  = ", Math.sqrt('a'));
console.log("Math.sqrt(-1)  = ", Math.sqrt(-1));
console.log("Math.sin('a')  = ", Math.sin('a'));
console.log("Math.sin(\"Hello\")  = ", Math.sin("Hello"));
console.log("Math.cos('a')  = ", Math.cos('a'));
console.log("Math.cos(\"Hello\")  = ", Math.cos("Hello"));
console.log("Math.tan('a')  = ", Math.tan('a'));
console.log("Math.tan(\"Hello\")  = ", Math.tan("Hello"));
console.log("Math.asin(2)  = ", Math.asin(2)); // Outside valid input range for asin
console.log("Math.acos(2)  = ", Math.acos(2)); // Outside valid input range for acos
console.log("Math.atan2(0, 0)  = ", Math.atan2(0, 0)); // Indeterminate form for atan2
console.log("Math.pow(-1, 0.5)  = ", Math.pow(-1, 0.5)); // Negative base with fractional exponent