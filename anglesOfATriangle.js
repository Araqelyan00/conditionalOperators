let arr1 = [45, 90];
let arr2 = [30, 30];
let arr3 = [75, 25];

let triangle1 = 180;
let triangle2 = 180;
let triangle3 = 180;

let tirdAngle1;
let tirdAngle2;
let tirdAngle3;

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
tirdAngle1 = triangle1 - sum1;
console.log(tirdAngle1);

for (let n = 0; n < arr2.length; n++) {
  sum2 += arr2[n];
}
tirdAngle2 = triangle2 - sum2;
console.log(tirdAngle2);

for (let d = 0; d < arr3.length; d++) {
  sum3 += arr3[d];
}
tirdAngle3 = triangle3 - sum3;
console.log(tirdAngle3);
