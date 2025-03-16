/*
The and-operator (&&) and the or-operator (||) employ short-circuiting to prevent unnecessary work if the outcome
of the operation does not change with the extra work.
In x && y, y will not be evaluated if x evaluates to false, because the whole expression is guaranteed to be false.
In x || y, y will not be evaluated if x evaluated to true, because the whole expression is guaranteed to be true.
 */

function T(){
    return true;
}
function F(){
    return false;
}
console.log("T() && F(): ", T() && F());
console.log("F() && T(): ", F() && T());
console.log("T() || F(): ", T() || F());
console.log("F() || T(): ", F() || T());