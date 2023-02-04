// function getSumOfAnArray(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     sum = sum + element;
//     console.log(index, element, sum);
//   }
//   return sum;
// }
// const myNumber = [8, 71, 13, 25, 48, 55, 63, 32, 91];
// getSumOfAnArray(myNumber);

//  another way

// function sumArray(array) {
//   let sum = 0; // the sum is initialed to 0
//   for (let i = 0; i < array.length; i++) {
//     // take every item in the array and add it to sum variable
//     const index = i;
//     const element = array[index];
//     sum = sum + element;
//     console.log(sum);
//     // initial: sum = 0
//     // iteration 1: 0 + 15 => sum = 15
//     // iteration 2: 15 + 34 => sum = 49
//     // iteration 3: 49 + 50 => sum = 99
//     // iteration 4: 99 + 5 => sum = 104
//     // iteration 5: 104 + 17 => sum = 121
//     // iteration 5: 121 + -9 => sum = 111
//   }
//   return sum;
// }
// const myArray = [15, 34, 50, 5, 17, -9];
// // call the function and give it our array
// sumArray(myArray);

//total sum with single output
function sumArray(array) {
  const ourArray = [15, 34, 50, 5, 17, -9];
  let sum = 0;

  for (let i = 0; i < ourArray.length; i += 1) {
    sum += ourArray[i];
  }

  return sum;
}

console.log(sumArray([15, 34, 50, 5, 17, -9]));
