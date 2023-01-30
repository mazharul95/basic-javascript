// for (var i = 1; i <= 20; i++) {
//   console.log(i);
//   if (i > 5) {
//     break;
//   }
// }

var i = 1;
while (i <= 5) {
  console.log(i);
  i++;
  if (i > 5) {
    break;
  }
}

var items = [
  "bottle",
  "mouse",
  "sunglass",
  "pen",
  "notebook",
  "pc",
  "man",
  "animal",
];
for (var i = 0; i < items.length; i++) {
  item = items[i];
  if (item == "man") {
    break;
  }
  console.log(item);
}

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98, 75, 19, 155];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 100) {
    break;
  }
  console.log(number);
}
