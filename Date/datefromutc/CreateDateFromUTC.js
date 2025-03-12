// By default, a Date object is created as local time. This is not always desirable, for example when communicating a
// date between a server and a client that do not reside in the same timezone. In this scenario, one doesn't want to
// worry about timezones at all until the date needs to be displayed in local time, if that is even required at all.
// The problem
// In this problem we want to communicate a specific date (day, month, year) with someone in a diﬀerent timezone.
// The first implementation naively uses local times, which results in wrong results. The second implementation uses
// UTC dates to avoid timezones where they are not needed.


function formatDate(dayOfWeek, day, month, year) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return daysOfWeek[dayOfWeek] + " " + months[month] + " " + day + " " + year;
}
// Foo lives in a country with timezone GMT + 1
const birthday = new Date(Date.UTC(2025, 2, 12));

// Naive approach with WRONG results
console.log("Foo was born on: " + formatDate(birthday.getDay(), birthday.getDate(),
    birthday.getMonth(), birthday.getFullYear()));

// Correct approach to print birthday correctly
console.log("Foo was born on: " + formatDate(birthday.getUTCDay(), birthday.getUTCDate(),
    birthday.getUTCMonth(), birthday.getUTCFullYear()));


// Creating a Date from UTC
// If one wants to create a Date object based on UTC or GMT, the Date.UTC(...) method can be used. It uses the
// same arguments as the longest Date constructor. This method will return a number representing the time that has
// passed since January 1, 1970, 00:00:00 UTC.
const urcDate = new Date(Date.UTC(2016, 2, 14, 11, 48, 48));
console.log("UTC date: ", urcDate);

// Local time
const localDate = new Date(2016,2,14,11,48,48);
console.log("Local date: ", localDate.toLocaleString());

// Unsurprisingly, the diﬀerence between UTC time and local time is, in fact, the timezone oﬀset converted to
// milliseconds.
console.log("Timezone offset: ", urcDate.getTimezoneOffset());
console.log("Timezone offset in milliseconds: ", urcDate.getTimezoneOffset() * 60 * 1000);
console.log(localDate - urcDate === urcDate.getTimezoneOffset() * 60 * 1000);

// Current UTC time and local time
const now = new Date();

// Current local time
console.log("Current UTC time: ", now.toUTCString());

// Current UTC time
console.log("Current local time: ", now.toString());

// All Date object modifiers, such as setDate(...) and setFullYear(...) have an equivalent takes an argument in
// UTC time rather than in local time.
const date = new Date();
date.setUTCFullYear(2000,0,1);
date.setUTCHours(1,0,0,0);
console.log("Date in UTC: ", date);

// Avoiding ambiguity with getTime() and setTime()
const day = new Date(Date.UTC(2016, 2, 14, 11, 48, 48));
const temp1 = day.getTime();

//Alternatively
const temp2 = Date.UTC(2016, 2, 14, 11, 48, 48);
console.log(temp1 === temp2);

// And when constructing a date from it elsewhere...
const day2 = new Date(temp1);
//Represented as a universal date
console.log(day2.toUTCString());
//Represented as a local date
console.log(day2)


