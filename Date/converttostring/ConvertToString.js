// Example demonstrating different Date conversions
const date1 = new Date(); // Current date and time

// Convert to String
// Converts the date to a human-readable string format.
console.log("String format:", date1.toString());
// Example output: "Fri Apr 15 2016 07:48:48 GMT-0400 (Eastern Daylight Time)"

// Convert to Time String
// Extracts the time portion of the date as a string.
console.log("Time string:", date1.toTimeString());
// Example output: "07:48:48 GMT-0400 (Eastern Daylight Time)"

// Convert to Date String
// Returns a string representation of the date without the time.
console.log("Date string:", date1.toDateString());
// Example output: "Thu Apr 14 2016"

// Convert to UTC String
// Converts the date to a string in UTC format.
console.log("UTC string:", date1.toUTCString());
// Example output: "Fri, 15 Apr 2016 11:48:48 GMT"

// Convert to ISO String
// Converts the date to an ISO 8601 string format.
console.log("ISO string:", date1.toISOString());
// Example output: "2016-04-14T23:49:08.596Z"

// Convert to GMT String (Deprecated)
// Outputs the date in GMT format (similar to UTC string).
console.log("GMT string (deprecated):", date1.toGMTString());
// Example output: "Thu, 14 Apr 2016 23:49:08 GMT"

// Convert to Locale Date String
// Provides a localized string version of the date. Using default locale.
console.log("Locale date string:", date1.toLocaleDateString());
// Example output: "4/14/2016"

// Example with specific locale and options
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
// Returns the date formatted based on local conventions.
console.log("Formatted locale date string:", date1.toLocaleDateString([], options));
// Example output: "Thursday, April 14, 2016"