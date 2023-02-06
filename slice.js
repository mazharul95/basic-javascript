//------ Array.slice()
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
//array theke jodi kono ekta part nite chai tahole ***slice marbo***amra,

//Syntax
// slice()
// slice(start)
// slice(start, end)

const friends = [12, 19, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.slice(2, 5); // slice means cuts(array index hisabe 2 & 5 er index dhore age theke kete nibo)
console.log(partial);

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
