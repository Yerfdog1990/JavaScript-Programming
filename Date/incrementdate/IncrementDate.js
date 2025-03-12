// Increment a Date Object
const date = new Date();
console.log("Without increment:", date.toString());
date.setDate(date.getDate() + 1);
console.log("With increment:", date.toString());

// It is possible to use setDate to change the date to a day in the following month by using a value larger than the
// number of days in the current month -
const date2 = new Date();
date2.setDate(date2.getDate() + 12);
console.log("Date 12:", date2.toString());

// The same applies to other methods such as getHours(), getMonth(),etc.
// Adding Work Days
// If you wish to add work days (in this case I am assuming Monday - Friday) you can use the setDate function
// although you need a little extra logic to account for the weekends (obviously this will not take account of national
// holidays) -

// Adding Work Days
function addWorkDays(startDate, days) {
    console.log("Start Date:", startDate.toString());

    // Get the day of the week as a number (0 = Sunday, 1 = Monday, .... 6 = Saturday)
    const dow = startDate.getDay();
    let daysToAdd = days;

    console.log("Initial Day of Week (0=Sunday, 6=Saturday):", dow);
    console.log("Days to Add:", daysToAdd);

    // If the current day is Sunday, add one day
    if (dow === 0) {
        daysToAdd++;
        console.log("Adjusted Days to Add for Sunday:", daysToAdd);
    }

    // If the start date plus the additional days falls on or after the nearest Saturday, calculate weekends
    if (dow + daysToAdd >= 6) {
        // Subtract days in current working week from work days
        const remainingWorkDays = daysToAdd - (5 - dow);

        // Add current working week's weekend
        daysToAdd += 2;

        console.log("Remaining Work Days after current week:", remainingWorkDays);
        console.log("Days to Add after including the first weekend:", daysToAdd);

        if (remainingWorkDays > 5) {
            // Add two days for each working week by calculating how many weeks are included
            daysToAdd += 2 * Math.floor(remainingWorkDays / 5);

            console.log("Days to Add after calculating full working weeks:", daysToAdd);

            // Exclude final weekend if remainingWorkDays resolves to an exact number of weeks
            if (remainingWorkDays % 5 === 0) {
                daysToAdd -= 2;
                console.log("Adjusted Days to Add after excluding final weekend:", daysToAdd);
            }
        }
    }

    startDate.setDate(startDate.getDate() + daysToAdd);
    console.log("Final Adjusted Date:", startDate.toString());
    return startDate;
}

// Example Usage
const exampleDate = new Date("2023-11-01"); // Example: Start date
const updatedDate = addWorkDays(exampleDate, 10); // Add 10 workdays
console.log("Updated Date after Adding Work Days:", updatedDate.toString());
