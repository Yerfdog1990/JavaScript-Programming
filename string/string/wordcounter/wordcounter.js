
function wordCounter(val) {
    let str = val.match(/\w+/g);
    return{
        charactersNoSpaces : val.replace(/\s/g, '').length,
        charactersWithSpaces : val.length,
        words : str ? str.length : 0,
        lines : val.split(/\r*\n/).length,
    };
}
let result = wordCounter("Hello World");
console.log(result);