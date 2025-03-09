// Reversing string using str.split('').reverse().join('')
const str = "Hello World";
console.log("Original string: ", str);
console.log("Reversed string: ", str.split('').reverse().join(''));

/*
However, the method above will work only so long as the string being reversed does not contain surrogate pairs. Astral symbols,
i.e. characters outside of the basic multilingual plane, may be represented by two code units, and will lead this
naive technique to produce wrong results. Moreover, characters with combining marks (e.g. diaeresis) will appear
on the logical "next" character instead of the original one it was combined with.
For example, '?????.'.split('').reverse().join(''); //fails
 */

// Explanation
/*
String input: "String"
String.prototype.split(deliminator): Splits string str into an array. The parameter "" means to split between each character to form ["s","t","r","i","n","g"]
Array.prototype.reverse(): Returns the array from the split string with its elements in reverse order to form ["g","n","i","r","t","s"]
Array.prototype.join(deliminator): Joins the elements in the array together into a string. The "" parameter means an empty deliminator (i.e., the elements of the array are put right next to each other) to "gnirts"
 */

// Reversing String using spread operator [...String(str)].reverse().join('')
const str2 = "Hello World";
console.log("\nOriginal string: ", str2);
console.log("Reversed string: ", [...String(str2)].reverse().join(''));

// Reversing string using custom reverse() function
function reverse(str) {
    let strReverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strReverse += str[i];
    }
    return strReverse;
}
console.log("\nOriginal string: ", str2);
console.log("Reversed string: ", reverse(str2));