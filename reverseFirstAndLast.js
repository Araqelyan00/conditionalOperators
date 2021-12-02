// my code is dirty, i know, but it work so good

let number = 367; // You can change the number 367 to other
let sumDigits = 0;
let clon = number;
y = number.toString();
sumDigits = String(number).length;
if (number < 0) {
  console.log("Please write a positive number");
} else if (String(number).length == 2) {
  let struct = clon % 10;
  clon = clon - struct;
  clon = clon / 10;
  clon = clon.toString();
  console.log(struct + clon);
} else if (String(number).length == 1) {
  console.log(clon);
} else {
  for (let index = 1; index < sumDigits; index++) {
    lastDig = number % 10;
    number = number - lastDig;
    number = number / 10;
  }
  let number2 = clon % 10;
  let ver = sumDigits - 1;
  let center = 0;
  let first = number * 10 ** ver;
  center = clon - first - number2;
  center = center / 10;
  center = center.toString();
  console.log(number2 + center + number);
}
