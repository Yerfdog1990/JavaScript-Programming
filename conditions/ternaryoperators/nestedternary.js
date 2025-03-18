// Example demonstrating nested ternary operators
const mathScore = 85;
let grade = (mathScore >= 90) ? "A"
    : (mathScore >= 80) ? "B"
        : (mathScore >= 70) ? "C"
            : "F";
console.log("Maths' grade: ", grade);
// Explanation in plain if/else structure for clarity:
const scienceScore = 75;
if(scienceScore >= 90) {
    console.log("Science's grade: A");
}else if(scienceScore >= 80) {
    console.log("Science's grade: B");
}else if(scienceScore >= 70) {
    console.log("Science's grade: C");
}else{
    console.log("Science's grade: F");}
