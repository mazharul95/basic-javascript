//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it.
//array er majkhan theke jodi element delete korete hoy then splice use korte heb,
//surute delete korte shift use korte hoy &&
//shes delete korte hole pop use korbo.

const friends = [12, 19, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.splice(2, 6, 75, 150, 555, 750, 99); // i = 6-1
console.log(partial);
console.log(friends);

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
console.log(myFish, removed);
