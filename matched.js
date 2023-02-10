const numbers = [45, 65, 23, 98, 19];

// for (i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

// //for Of loop
// for (const number of numbers) {
//   console.log(number);
// }

const products = [
  { id: 1, name: "xiomi phone", price: 19000 },
  { id: 2, name: "iphone", price: 19000 },
  { id: 3, name: "mac book air", price: 19000 },
  { id: 5, name: "samsung Phone", price: 19000 },
  { id: 6, name: "dell insprion laptop", price: 19000 },
  { id: 7, name: "lenovo yoga laptop", price: 19000 },
  { id: 2, name: "nokia Phone", price: 19000 },
  { id: 8, name: "one Phone", price: 19000 },
  { id: 8, name: "M1 chip LapTOP", price: 19000 },
];

// for (const product of products) {
//   console.log(product);
// }

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, "laptop");
console.log(result);
