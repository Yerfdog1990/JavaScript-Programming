function func() {
  let sum = 321;
  console.log(sum);
}

let total = sum;
let left = 10;
let right = 20;
{
  let x = left;
  left = right;
}
console.log(left);
console.log(right);
console.log(x);
