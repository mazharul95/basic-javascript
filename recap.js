// 1. variable
var myName = "piyash";
var number = 123458;
console.log(myName);
console.log(number);

//math operation: +, -, *, /
//shorthand: +=, --, *=, /=
// ++, --

// 2. array
var friends = ["mi", "piyash", "raju", "dibbyo", "robiul"];

var friends = friends[2];
friends[4] = "bappy";
console.log(friends);

//3.conditionals
// >, <, >=, <=, ==, ===, !=, !==

if (friends.length < 2) {
  console.log("raju tr kono bondhu nai");
} else {
  console.log("raju tr onek bondhu ache");
}
// 4.loop
var number = 4;
while (number <= 6) {
  console.log(number);
  number++;
}

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

//function
function animal() {
  console.log("My dog name are:German-Sefard");
}
animal();
//
//function with parameter
function isMoonUp(time) {
  if (time > 7) {
    return true;
  }
  console.log(isMoonUp);
}

// 6. object

var hospital = {
  doctor: 16,
  nurse: 20,
  lab: 15,
  chamber: 20,
  bloodBoth: 4,
  operationTheater: 12,
  labTechnician: 4,
};
console.log(hospital);
