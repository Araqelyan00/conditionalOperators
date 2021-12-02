let arr = [45, 26, 78]; // You can change the numbers to other
let x = 0;
let y = 0;
let z = 0;

x = arr[0];
y = arr[1];
z = arr[2];

if (x > y && x > z && y > z) {
  console.log(z, y, x);
} else if (x > y && x > z && z > y) {
  console.log(y, z, x);
} else if (y > x && y > z && x > z) {
  console.log(z, x, y);
} else if (y > x && y > z && z > x) {
  console.log(x, z, y);
} else if (z > x && z > y && x > y) {
  console.log(y, x, z);
} else {
  console.log(x, y, z);
}
