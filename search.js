//includes
const lyrics =
  "Tumi bondhu kala pakhi . Ami jeno ki. Bosonto kale tomay. Bolte parini. Shada shada kala kala . Rong jomeche shada kala . Shada shada kala kala . Rong jomeche shada";

const searchString = "PaKhi";
// const doesExist = lyrics.includes("Pakhi");
//const doesExist = lyrics.includes("pakhi");
//const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString.toLowerCase());

const doesExistOneLine = lyrics
  .toLowerCase()
  .includes(searchString.toLowerCase());
console.log(doesExist);
console.log(doesExistOneLine);

// indexOf
console.log(lyrics.indexOf("kailla"));
console.log(lyrics.indexOf("Tumi"));
console.log(lyrics.indexOf("Tumi"));

//indexOf if condition
if (lyrics.indexOf("shada") !== -1) {
  console.log("exist inside the string");
} else {
  console.log("cannot find it");
}

// startsWith
const Cricketer = "Tamim Mash Rahim Sakib";
console.log(Cricketer.startsWith("Tamim"));
const anthem = "amr_sonar bangla ami tomay valo bashi";
console.log(anthem.startsWith("amr_sonar"));
//endswith
const fileName = "mybiodata.pdf";
const otherFile = "mypic.png";
fileName.endsWith(".pdf");
console.log(fileName.endsWith(".xpdf"));
console.log(otherFile.endsWith("mypic.png"));
