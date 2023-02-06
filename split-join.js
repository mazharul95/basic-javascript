const lyrics =
  "Tumi bondhu kala pakhi . Ami jeno ki. Bosonto kale tomay. Bolte pari ni. Shada shada kala kala.";

const parts = lyrics.split(" ");
const chars = lyrics.split("");
console.log(chars);

//slice()
const partial = lyrics.slice(5, 8);
console.log(partial);

//substring()
const partial2 = lyrics.substring(5, 8);
//string.at()

const sentences = lyrics.at(2);
console.log(sentences);
const myString = "Every green bus drives fast.";
const atWay = myString.at(-3);
console.log(atWay);

//concat
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"

//Array string join()
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"
console.log(elements.join(""));
// Expected output: "FireAirWater"
console.log(elements.join("-"));
// Expected output: "World, Hello"
