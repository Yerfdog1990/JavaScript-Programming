// Unsorted date array
const unsortedDateArray = [new Date(2022, 11, 12), new Date(2024, 11, 11), new Date(2020, 11, 10), new Date(2021, 11, 9), new Date(2023, 11, 8), new Date(2021, 11, 7)];
console.log("Unsorted dates: ", unsortedDateArray);

// Ascending order
unsortedDateArray.sort((a, b) => a - b);
console.log("Ascending sorted dates: ", unsortedDateArray);

// Descending order
unsortedDateArray.sort((a, b) => b - a);
console.log("Descending sorted dates: ", unsortedDateArray);