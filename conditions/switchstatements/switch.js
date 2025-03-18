// Switch statements compare the value of an expression against 1 or more values and executes diﬀerent sections of code based on that comparison.
const score = 75;
switch(score) {
    case 90:
        console.log("Score: A");
        break;
    case 80:
        console.log("Score: B");
        break;
    case 70:
        console.log("Score: C");
        break;
        default:
            console.log("Score: F");
}
// The break statement "breaks" out of the switch statement and ensures no more code within the switch statement
// is executed. This is how sections are defined and allows the user to make "fall through" cases.
// Warning: lack of a break or return statement for each case means the program will continue to evaluate
// the next case, even if the case criteria is unmet!
// See example below.

const score2 = 80;
switch(score2) {
    case 90:
        console.log("Score: A");
        case 80:
            console.log("Score: B");
            case 70:
                console.log("Score: C");
                default:
                    console.log("Score: F");
}