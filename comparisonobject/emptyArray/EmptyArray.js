// When [].toString() is executed it calls [].join() if it exists, or Object.prototype.toString() otherwise. This
// comparison is returning true because [].join() returns '' which, coerced into 0, is equal to false ToNumber.
/* ToNumber(ToPrimitive([])) == ToNumber(false) */
console.log("[] == false: ", [] == false); // true

// Beware though, all objects are truthy and Array is an instance of Object:
// Internally this is evaluated as ToBoolean([]) === true ? 'truthy' : 'falsy'
console.log("[] ? 'truthy' : 'falsy': ", [] ? 'truthy' : 'falsy'); // 'truthy'