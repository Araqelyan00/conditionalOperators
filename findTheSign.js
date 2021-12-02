let arr = [14, -5, -7]; // You can change the numbers to other
let x = arr[0];
let y = arr[1];
let z = arr[2];

if (x == 0 || y == 0 || z == 0) {
  console.log("unsigned");
} else if (x > 0 && y > 0 && z > 0) {
  console.log("+");
} else if (x < 0 && y > 0 && z > 0) {
  console.log("-");
} else if (x > 0 && y < 0 && z > 0) {
  console.log("-");
} else if (x > 0 && y > 0 && z < 0) {
  console.log("-");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("+");
} else if (x < 0 && y < 0 && z < 0) {
  console.log("-");
} else if (x < 0 && y < 0 && z > 0) {
  console.log("+");
} else {
  console.log("+");
}
