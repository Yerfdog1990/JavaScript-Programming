// To check the equality of Date values:
const date1 = new Date();
const date2 = new Date(date1.valueOf()+10);
console.log("date1 === date2: ", date1.valueOf() === date2.valueOf());

// Note that you must use valueOf() or getTime() to compare the values of Date objects because the equality
// operator will compare if two object references are the same. For example:
const date3 = new Date();
const date4 = new Date();
console.log("date3 === date4: ", date3 === date4);

// Whereas if the variables point to the same object:
const date5 = new Date();
const date6 = date5;
console.log("date5 === date6: ", date5 === date6);

// However, the other comparison operators will work as usual and you can use < and > to compare that one date is
// earlier or later than the other. For example:
const date7 = new Date();
const date8 = new Date(date7.valueOf()+10);
console.log("date7 < date8: ", date7 < date8);

// It works even if the operator includes equality:
const date9 = new Date();
const date10 = new Date(date9.valueOf()+10);
console.log("date9 <= date10: ", date9 <= date10);


