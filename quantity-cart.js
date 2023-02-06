const shoppingCart = [
  { name: "shirt", price: 2200, quantity: 5 },
  { name: "pant", price: 3700, quantity: 4 },
  { name: "Shoe", price: 1500, quantity: 2 },
  { name: "blazer", price: 5500, quantity: 1 },
  { name: "belt", price: 750, quantity: 3 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productTotal = product.price * product.quantity;
    sum = sum + productTotal;
    //console.log(product);
  }
  return sum;
}
const expense = totalCost(shoppingCart);
console.log("total expense in all product quantity:", expense);
