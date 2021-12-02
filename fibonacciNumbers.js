let n = 20;
var fib = [];
let nThNumber = 0;
if (n == 0 || n == 1) {
  console.log(n);
} else {
  fib[0] = 0;
  fib[1] = 1;
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    nThNumber = fib[i];
  }
  console.log(nThNumber);
}
