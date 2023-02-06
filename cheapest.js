//the cheapest phone from an array of phone objects

const phones = [
  {
    name: "samsung",
    camera: 16,
    storage: "64gb",
    color: "silver",
    price: 36000,
  },
  {
    name: "iphone",
    camera: 32,
    storage: "128gb",
    color: "silver",
    price: 82000,
  },
  {
    name: "walton",
    camera: 16,
    storage: "64gb",
    color: "silver",
    price: 18000,
  },
  {
    name: "realme",
    camera: 16,
    storage: "64gb",
    color: "silver",
    price: 52000,
  },
  { name: "oppo", camera: 16, storage: "64gb", color: "silver", price: 20000 },
  { name: "nokia", camera: 16, storage: "64gb", color: "silver", price: 44000 },
  { name: "htc", camera: 16, storage: "64gb", color: "silver", price: 62000 },
  {
    name: "wePhone",
    camera: 12,
    storage: "32gb",
    color: "gold",
    price: 11000,
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
