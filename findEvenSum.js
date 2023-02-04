function getEvenSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    //console.log(index, element, sum);
  }
  return sum;
}

function getEvenNumbersOfAnArray(numbers) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 0) {
      console.log(index, element);
      evenNumbers.push(element);
    }
  }
  return evenNumbers;
}

const myArrayNumbers = [12, 65, 44, 77, 32, 45, 91, 96, 107, 38];
const evenNumbers = getEvenNumbersOfAnArray(myArrayNumbers);
console.log(evenNumbers);
// array total sum
const evenNumberSum = getEvenSum(evenNumbers);
console.log("even number sum", evenNumberSum);
