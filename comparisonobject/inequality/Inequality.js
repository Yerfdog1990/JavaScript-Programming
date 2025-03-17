/*
Operator != is the inverse of the == operator.
Will return true if the operands aren't equal.
The JavaScript engine will try and convert both operands to matching types if they aren't of the same type. Note: if
the two operands have diﬀerent internal references in memory, then false will be returned.
Sample:
1 != '1' // false
1 != 2 // true
In the sample above, 1 != '1' is false because, a primitive number type is being compared to a char value.
Therefore, the JavaScript engine doesn't care about the datatype of the R.H.S value.
Operator: !== is the inverse of the === operator. Will return true if the operands are not equal or if their types do
not match.
Example:
1 !== '1' // true
1 !== 2 // true
1 !== 1 // false
 */