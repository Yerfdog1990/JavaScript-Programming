// With no arguments
const date1 = new Date();
console.log("Using a constructor with no arguments: ", date1);

// With one integer argument
const date2 = new Date(1598051715000);
console.log("Using a constructor with one integer argument: ", date2);
// With a string argument
const date3 = new Date("2020-08-19T13:48:35.000Z");
console.log("Using a constructor with a string argument: ", date3);
// With two or more integer arguments
const date4 = new Date(2020, 7, 19, 13, 48, 35, 0);
console.log("Using a constructor with two or more integer arguments: ", date4);

// Exploring dates
console.log("Exploring Dates");

// Creates a Date object with the current date and time from the
// user's browser
const now = new Date();
console.log("Current date and time: ", now);

// Creates a Date object at the Unix Epoch (i.e., '1970-01-01T00:00:00.000Z')
const epoch = new Date(0);
console.log("Date at Unix Epoch: ", epoch);

// Creates a Date object with the date and time 2,012 milliseconds
// after the Unix Epoch (i.e., '1970-01-01T00:00:02.012Z').
const date2012 = new Date(2012); // Corrected the variable name from "ms" to "date2012"
console.log("Date 2012 milliseconds after Unix Epoch: ", date2012);

// Creates a Date object with the first day of February of the year 2012
// in the local timezone.
const one = new Date(2012, 1);
console.log("First day of February 2012: ", one);

// Creates a Date object with the first day of the year 2012 in the local
// timezone.
// (Months are zero-based)
const zero = new Date(2012, 0);
console.log("First day of the year 2012 in local timezone: ", zero);

// Creates a Date object with the first day of the year 2012, in UTC.
const utc = new Date(Date.UTC(2012, 0));
console.log("First day of the year 2012 in UTC: ", utc);
console.log("First day of the year 2012 in UTC (ISO): ", utc.toISOString());

// Parses a string into a Date object (ISO 8601 format added in ECMAScript 5.1)
// Implementations should assume UTC because of ISO 8601 format and Z designation
const iso = new Date('2012-01-01T00:00:00.000Z');
console.log("Parsed ISO string into a date: ", iso);

// Parses a string into a Date object (RFC in JavaScript 1.0)
const local = new Date('Sun, 01 Jan 2012 00:00:00 -0600');
console.log("Parsed RFC string into a date: ", local);

// Parses a string in no particular format, most of the time. Note that parsing
// logic in these cases is very implementation-dependent, and therefore can vary
// across browsers and versions.
const anything = new Date('11/12/2012');
console.log("Parsed arbitrary string into a date: ", anything);

// Rolls values outside of a specified range to the next value.
const rollover = new Date(2012, 12, 32, 25, 62, 62, 1023);
console.log("Rolled over to a valid date: ", rollover);

// Special dates for years in the range 0-99
const special1 = new Date(12, 0);
console.log("Special date with year 12 interpreted as 1912: ", special1);

// If you actually wanted to set the year to the year 12 CE, you'd need to use the
// setFullYear() method:
special1.setFullYear(12);
console.log("Special date with year explicitly set to 12 CE: ", special1);