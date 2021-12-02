let x = 14; // You can change the number 14 to other
if (x % 3 == 0 && x % 5 == 0 && x % 7 == 0) {
  console.log(x + "is a multiple of 3, 5 and 7.");
} else if (x % 3 == 0 && x % 7 == 0 && x % 5 != 0) {
  console.log(x + "is a multiple of 3 and 7");
} else if (x % 3 != 0 && x % 5 == 0 && x % 7 == 0) {
  console.log(x + "is a multipe of 5 and 7");
} else if (x % 3 == 0 && x % 5 != 0 && x % 7 != 0) {
  console.log(x + "is a multiple of 3");
} else if (x % 3 != 0 && x % 5 != 0 && x % 7 != 0) {
  console.log(x + "is not a multiple of 3,5 or 7");
} else {
  console.log("The number does not meet the requirements");
}
