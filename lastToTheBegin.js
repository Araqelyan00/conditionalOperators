let num1 = 367; // You can change the number 367 to other
let x = num1 % 10;
if (x == 0) {
  console.log(num1);
} else {
  num1 = num1 - x;
  let y = num1 / 10;
  let u = x.toString();
  num1 = u + y;
  console.log(num1);
}
