function maxOfArray(array) {
  return Math.max.apply(Math, array);
}

let array = [55, 80, 99];
const myMaxArray = maxOfArray(array);
console.log(myMaxArray);


// max without function
let arrayList = [1,2,3,4,5,6];
let max = Math.max(...arrayList);
console.log(max); // 6

