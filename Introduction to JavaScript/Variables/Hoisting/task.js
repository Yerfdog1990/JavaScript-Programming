func();
console.log("[global] a:", a);

function func() {
    let b;
    console.log("[func] a:", a);
    console.log("[func] b:", b);
    b = 20;
}
b = 20;

let a = 10;

let b;

console.log("[global] b:", b);
