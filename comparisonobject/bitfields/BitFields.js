// A bit field is a variable that holds various boolean states as individual bits. A bit on would represent true, and oﬀ
// would be false. In the past bit fields were routinely used as they saved memory and reduced processing load.
// Though the need to use bit field is no longer so important they do oﬀer some benefits that can simplify many processing tasks.
// For example user input. When getting input from a keyboard's direction keys up, down, left, right you can encode the various keys into a single variable with each direction assigned a bit.
// Example reading keyboard via bitfield


// Initializing bit field
let bitField = 0; // the value to hold the bits
const KEY_BITS = [4, 1, 8, 2]; // left, up, right, down
const KEY_MASKS = [0b1011, 0b1110, 0b0111, 0b1101]; // left, up, right, down

// Listening for key events
window.onkeydown = window.onkeyup = function (e) {
    if (e.keyCode >= 37 && e.keyCode < 41) { // arrow keys range: 37 (left) to 40 (down)
        if (e.type === "keydown") {
            bitField |= KEY_BITS[e.keyCode - 37]; // Set the bit
        } else {
            bitField &= KEY_MASKS[e.keyCode - 37]; // Clear the bit
        }
        console.log(`Updated bitField: ${bitField.toString(2).padStart(4, '0')}`);
    }
};

// Example reading as an array

let directionState = [false, false, false, false];

window.onkeydown = window.onkeyup = function (e) {
    if (e.keyCode >= 37 && e.keyCode < 41) { // arrow keys range: 37 (left) to 40 (down)
        directionState[e.keyCode - 37] = e.type === "keydown";
        console.log(`Updated directionState: [${directionState.join(', ')}]`);
    }
};