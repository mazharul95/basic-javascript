function factorial(number) {
  let i = number;
  let result = 1;
  while (i >= 1) {
    result = result * i;
    i--;
  }
  return result;
}
const output = factorial(7);
//const fact = factorial(output);
// console.log("factorial of:", output, fact);
