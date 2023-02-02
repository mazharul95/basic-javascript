var shoppingCart = {
  books: 3,
  sunglass: 1,
  Keyboard: 5,
  mouse: 1,
  pen: 25,
};
//when you know the property name,use dot notation to get the property value
var penCount = shoppingCart.pen;

//altranative system
//when you know the property name,use dot notation to get the property value
var penCount2 = shoppingCart["pen"];

var propertyName = "books";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);
// Object property name showing an array
var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCart);

//set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart["mouse"] = 30;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart);
