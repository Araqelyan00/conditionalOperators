let prime = 63;

for (let i = 2; i < prime; i++) {
  if (prime % i != 0) {
    console.log("yes");
  } else {
    console.log("no");
    break;
  }
}

// let x = 25;
// let y = x % 5;
// console.log(y);
