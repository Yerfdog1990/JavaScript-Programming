// When both operands are numeric, they are compared normally:
console.log("Compare numeric operands:")
console.log("1 > 2 = ", 1>2); // false
console.log("2 <= 2 = ", 2 <= 2); // true
console.log("3 >= 5 = ", 3 >= 5); // false
console.log("true < false = ", true < false); // false (implicitly converted to numbers, 1 > 0)

// When both operands are strings, they are compared lexicographically (according to alphabetical order):
console.log("\nCompare string operands:")
console.log("'a' < 'b' = ", 'a' < 'b'); // true
console.log("'1' < '2' = ", '1' < '2'); // true
console.log("'100' > '12' = ", '100' > '12'); // false ('100' is less than '12' lexicographically!)

// When one operand is a string and the other is a number, the string is converted to a number before comparison:
console.log("\nCompare string and number operands:")
console.log("'1' < 2 = ", '1' < 2); // true
console.log("'3' > 2 = ", '3' > 2); // true
console.log("true > '2' = ", true > '2'); // false (true is implicitly converted to number, 1 < 2)

// But be careful when comparing a numeric value with null, undefined or empty strings:
// Comparing a numeric value with an empty string, null, or undefined:
console.log("\nCompare numeric value with empty string, null, or undefined:")
console.log("1 > '' = ", 1 > ''); // true ('' is converted to 0, 1 > 0)
console.log("1 < '' = ", 1 < ''); // false ('' is converted to 0, 1 > 0)
console.log("1 > null = ", 1 > null); // true (null is converted to 0, 1 > 0)
console.log("1 < null = ", 1 < null); // false (null is converted to 0, 1 > 0)
console.log("1 > undefined = ", 1 > undefined); // false (undefined is always NaN, comparison with NaN is always false)
console.log("1 < undefined = ", 1 < undefined); // false (undefined is always NaN, comparison with NaN is always false)

// When one operand is a object and the other is a number, the object is converted to a number before
// comparison.So null is particular case because Number(null);//0

// Examples covering different cases:
console.log("\nOther interesting comparisons:")
console.log("new Date(2015) < 1479480185280 = ", new Date(2015) < 1479480185280); // true (Date object is converted to timestamp)
console.log("null > -1 = ", null > -1); // true (null is converted to 0, 0 > -1)
console.log("({toString:function(){return 123}}) > 122 = ", ({
    toString: function () {
        return 123
    }
}) > 122); // true (object is converted to number via toString, 123 > 122)