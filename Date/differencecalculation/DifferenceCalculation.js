// To compare the diﬀerence of two dates, we can do the comparison based on the timestamp.
let date1 = new Date();
let date2 = new Date(date1.valueOf()+10);
let dateDiff = date2.valueOf() - date1.valueOf();
console.log("Date difference: ", dateDiff);
let dateDiffInYears = dateDiff / (1000 * 60 * 60 * 24 * 365);
console.log("Date difference in years: ", dateDiffInYears);