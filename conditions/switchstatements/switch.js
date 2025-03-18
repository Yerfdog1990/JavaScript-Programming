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