// Math pow
const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;

//math.abs
const gap = Math.abs(num1 - num2);
console.log(gap);
if (gap < 5) {
  console.log("you guys can be friends");
} else {
  console.log("you guys stay apart");
}

//math.round
const number = 2.4598; //(jodi 2.49 soman ba er niche thake float value then round hoye full value hbe 2 and 2.5 er soman ba beshi hole round value hbe 3)
const fullNumber = Math.round(number); //nearest purno sonkhay jabe
console.log(fullNumber);

//---- JavaScript: Math.ceil()
console.log(Math.ceil(0.95));
// Expected output: 1
console.log(Math.ceil(4));
// Expected output: 4
console.log(Math.ceil(7.004));
// Expected output: 8
console.log(Math.ceil(-7.004));
// Expected output: -7

//------ JavaScript:Math.floor()
console.log(Math.floor(5.95));
// Expected output: 5
console.log(Math.floor(5.05));
// Expected output: 5
console.log(Math.floor(5));
// Expected output: 5
console.log(Math.floor(-5.05));
// Expected output: -6

//------ JavaScript: Math.random()

const random = Math.round(Math.random() * 100);
console.log(random);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// console.log(getRandomInt(3));
// // Expected output: 0, 1 or 2
// console.log(getRandomInt(1));
// // Expected output: 0
// console.log(Math.random());
// // Expected output: a number from 0 to <1
