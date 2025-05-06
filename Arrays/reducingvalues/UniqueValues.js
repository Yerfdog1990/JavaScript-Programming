
const originalArray = [1, 2, 1, 5, 9, 5];
console.log("Original array: ", originalArray);
const uniqueArray = originalArray.reduce((acc, curr) => {
    if(acc.indexOf(curr) === -1) {
        acc.push(curr);
        return acc;
    }
    return acc;
}, []);
console.log("Unique array: ", uniqueArray);
