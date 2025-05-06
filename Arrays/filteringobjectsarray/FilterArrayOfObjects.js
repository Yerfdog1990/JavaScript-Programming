// Filter array of objects (people with age > 35)
const people = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 40 },
    { name: 'Peter', age: 25 },
    { name: 'Anna', age: 35 },
    { name: 'Paul', age: 37 },
    { name: 'Steven', age: 28 },
    { name: 'Kate', age: 32 },
    { name: 'Jane', age: 29 }
];
const filteredPeople = people.filter(person => person.age > 35);
console.log("Filtered people: ", filteredPeople);

// You can search in the whole array for a value like this:
const filteredPeople2 = people.filter(person => person.name === 'John');
console.log("Filtered people: ", filteredPeople2);