/*
Abstract Equality (==)
Operands of the abstract equality operator are compared after being converted to a common type. How this conversion happens is based on the specification of the operator:
Specification for the == operator:
Abstract Equality Comparison
The comparison x == performed as follows:
1. If Type(x) is the same as Type(y), then: a. Return the result of performing Strict Equality Comparison x
2. If x is null and y is undefined, return true.
3. If x is undefined and y is null, return true.
4. If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) y. == y.
5. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y). ==
6. If Type(x) is Boolean, return the result of the comparison ToNumber(x)
7. If Type(y) is Boolean, return the result of the comparison x == ToNumber(y). comparison x == ToPrimitive(y).
8. If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the
9. If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
10. Return false.
Examples:
1 == 1; // true
1 == true; // true (operand converted to number: true => 1)
1 == '1'; // true (operand converted to number: '1' => 1 )
1 == '1.00'; // true
1 == '1.00000000001'; // false
1 == '1.00000000000000001'; // true (true due to precision loss)
null == undefined; // true (spec #2)
1 == 2; // false
0 == false; // true
0 == undefined; // false
0 == ""; // true
 */