function reverseWords(str) {
  const words = str.split(" ");
  const result = [];
  // [ 'Í,'am','a','good','boy' ]
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
    //console.log(element);
  }
  const reversed = result.join(" ");
  return reversed;
}

const myString = "I am a good boy";
const reversed = reverseWords(myString);
console.log("reversed output: ", reversed);
