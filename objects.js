const nayok = {
  name: "sakib khan",
  id: 121,
  address: "move cinema",
  isSingle: true,
  movies: [
    { name: "no.1", year: 2015 },
    { name: "king khan", year: 2018 },
    { name: "bir", year: 2022 },
  ],
  friend: ["Apu", "raaz", "salman", "aamir"],
  act: function () {
    console.log("acting like sakib khan");
  },
  car: {
    brand: "tesla",
    price: 5000000,
    made: 2022,
    manufacturer: {
      name: "tesla",
      ceo: "Elon mask",
      model: 3,
      leasing_starting: "$349/month",
      country: "USA",
    },
  },
};
// console.log(nayok.friend);
// console.log(nayok.car);
nayok.act();
