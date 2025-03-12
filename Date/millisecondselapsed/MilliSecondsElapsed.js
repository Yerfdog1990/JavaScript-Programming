// The static method Date.now returns the number of milliseconds that have elapsed since 1 January 1970 00:00:00
// UTC. To get the number of milliseconds that have elapsed since that time using an instance of a Date object, use its
// getTime method.

// get milliseconds using static method now of Date
const staticMethod = Date.now();
console.log("Using static method: ", staticMethod);
// get milliseconds using method getTime of Date instance
const instanceMethod = (new Date()).getTime();
console.log("Using instance method: ", instanceMethod);

// Even though both methods are fetching the current timestamp, **additional time is spent creating the `Date` object** in `(new Date()).getTime()`.
// This small delay can result in slightly different results.
console.log(("Using static method: " + staticMethod) === ("Using instance method: " + instanceMethod));
console.log("Time difference: ", staticMethod - instanceMethod);