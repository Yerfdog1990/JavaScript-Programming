// String sorting by length (longest first)
const animals = ['dog', 'cat', 'elephant', 'zebra'];
animals.sort((a, b) => b.length - a.length);
console.log("Sorting by length (longest first): ", animals);

// String sorting by length (shortest first)
animals.sort((a, b) => a.length - b.length);
console.log("Sorting by length (shortest first): ", animals);
