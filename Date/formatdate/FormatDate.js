/*
Formatting a JavaScript date in modern browsers
In modern browsers (*), Date.prototype.toLocaleDateString() allows you to define the formatting of a Date in a
convenient manner.
It requires the following format :
dateObj.toLocaleDateString([locales [, options]])
The locales parameter should be a string with a BCP 47 language tag, or an array of such strings.
The options parameter should be an object with some or all of the following properties:

fit"; the default is "best localeMatcher : possible values are "lookup" and "best fit"
timeZone : the only value implementations must recognize is "UTC"; the default is the runtime's default time zone.
hour12 :possible values are true and false; the default is locale dependent
formatMatcher : possible values are "basic" and "best weekday : possible values are "narrow", "short" & "long"
era : possible values are "narrow", "short" & "long"
year : possible values are "numeric" & "2-digit"
month : possible values are "numeric", "2-digit", "narrow", "short" & "long"
day : possible values are "numeric" & "2-digit"
hour : possible values are "numeric" & "2-digit"
minute : possible values are "numeric" & "2-digit"
second : possible values are "numeric" & "2-digit"
timeZoneName : possible values are "short" & "long"
fit"; the default is "best fit"
 */

// How to use
const today = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
});
console.log(today);

// Going custom
// If Date.prototype.toLocaleDateString() isn't flexible enough to fulfill whatever need you may have, you might
// want to consider creating a custom Date object that looks like this:


const DateObject = (function () {
    // Array of month names for reference
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Constructor function to initialize a DateObject
    const date = function (str) {
        this.set(str); // Sets the date properties based on the input string or defaults to current date
    };

    date.prototype = {
        /**
         * Sets the date properties (day, month, year, etc.) based on the provided date string
         * If no string is given, the current date is used
         * @param {string} str - A date string in a recognized format (e.g., "2023-01-20")
         */
        set: function (str) {
            const dateDef = str ? new Date(str) : new Date(); // Initialize the date object
            this.day = dateDef.getDate(); // Extract day
            this.dayPadded = this.day < 10 ? `0${this.day}` : `${this.day}`; // Zero-padded day for formatting
            this.month = dateDef.getMonth() + 1; // Extract month (adjusting index from 0-based to 1-based)
            this.monthPadded = this.month < 10 ? `0${this.month}` : `${this.month}`; // Zero-padded month
            this.monthName = monthNames[this.month - 1]; // Get the full month name
            this.year = dateDef.getFullYear(); // Extract year
        },
        /**
         * Returns a formatted string combining the requested date properties
         * @param {Array} properties - List of date properties to include (e.g., ['dayPadded', 'monthPadded', 'year'])
         * @param {string} [separator='-'] - The separator to use between properties
         * @returns {string} - Formatted string based on selected properties and separator
         */
        get: function (properties, separator) {
            const sep = separator || '-'; // Default separator is '-'
            const ret = properties.map(prop => this[prop]); // Map each property name to its corresponding value
            return ret.join(sep); // Join the property values into a single string, separated by the chosen separator
        }
    };

    return date;
})();

// Example usage of DateObject
const exampleDate = new DateObject("2019-01-20");

console.log(exampleDate); // Logs the entire object with all the date properties

// Retrieving a formatted string from the DateObject
const formattedDate1 = exampleDate.get(['dayPadded', 'monthPadded', 'year']);
console.log(formattedDate1) // 20-01-2019
const formattedDate2 = exampleDate.get(['dayPadded', 'monthName', 'year']);
        console.log(formattedDate2) // 20-January-2019