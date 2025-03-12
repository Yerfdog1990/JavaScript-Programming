// Use new Note that Date() called without arguments is equivalent to new Date(Date.now()).
// Once you have a date object, you can apply any of the several available methods to extract its properties (e.g.
// getFullYear() to get the 4-digits year).
// Below are some common date methods.


// Get the current year
const year = (new Date()).getFullYear();
console.log("Current year: ", year);

// Get the current month
const month = (new Date()).getMonth();
console.log("Current month index: ", month);
// Sample output: 0
// Please note that 0 = January. This is because months range from 0 to 11, so it is often desirable to add +1 to the index.

// Get the current day
const day = (new Date()).getDate();
console.log("Day right now::", day);

// Get the current hour
const hours = (new Date()).getHours();
console.log("Hours right now:", hours);

// Get the current minutes
const minutes = (new Date()).getMinutes();
console.log("Minutes right now: ", minutes);

// Get the current seconds
const seconds = (new Date()).getSeconds();
console.log("Seconds right now: ", seconds);

// Get the current milliseconds
const milliseconds = (new Date()).getMilliseconds();
console.log("Milliseconds right now: ", milliseconds);

// Convert the current time and date to a human-readable string
const now = new Date();
// convert date to a string in UTC timezone format:
console.log(now.toUTCString());

// get milliseconds using static method now of Date
console.log(Date.now());
// get milliseconds using method getTime of Date instance
console.log((new Date()).getTime());