const shoppingCart = [
  { name: "shirt", price: 2200 },
  { name: "pant", price: 3700 },
  { name: "Shoe", price: 1500 },
  { name: "blazer", price: 5500 },
  { name: "belt", price: 750 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
    //console.log(product);
  }
  return sum;
}
const expense = totalCost(shoppingCart);
console.log("total expense today:", expense);

total cost of the products in a shopping cart