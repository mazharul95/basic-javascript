function getAverage(assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3;
  console.log(total);
  const average = total / 3;
  return average;
}

const assignment1Mark = 29;
const assignment2Mark = 46;
const assignment3Mark = 45;

var myAverage = getAverage(assignment1Mark, assignment2Mark, assignment3Mark);
console.log("my average so far: ", myAverage);
