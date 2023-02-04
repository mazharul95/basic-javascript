function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
    //console.log();
  }
  return result;
}

const result = factorial(7);
console.log(result);

//----------------

// function factorialize(num) {
//   if (num === 0 || num === 1) return 1;
//   for (var i = num - 1; i >= 1; i--) {
//     num = num * i;
//   }
//   return num;
// }
// const factorial = factorialize(4);
// console.log(factorial);
