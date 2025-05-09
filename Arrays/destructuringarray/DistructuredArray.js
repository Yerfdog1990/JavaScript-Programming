// An array can be destructured when being assigned to a new variable.
const triangle = [3, 4, 5];
const [length, height, hypotenuse] = triangle;

// Elements can be skipped
const [, b, , c] = [1, 2, 3, 4];
console.log(b, c);

// Rest operator example
const [b2, c2, ...xs] = [2, 3, 4, 5];
console.log(b2, c2, xs);

// Destructuring in function arguments
function area([length, height]) {
    return (length * height) / 2;
}

// Remove duplicates using a filter
const uniqueArray = ['a', 1, 'a', 2, '1', 1].filter((value, index, self) => {
    return self.indexOf(value) === index;
});

// Remove duplicates using Set
const uniqueArrayWithSet = [...new Set(['a', 1, 'a', 2, '1', 1])];
console.log(uniqueArrayWithSet);