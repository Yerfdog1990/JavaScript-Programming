function myMethod(cb) {
    // Ensure the callback is a function before calling
    typeof cb === 'function' && cb();
}

// Example usage
myMethod(() => {
    console.log('Callback function executed.');
});

myMethod('Not a function'); // Does nothing as cb is not a function