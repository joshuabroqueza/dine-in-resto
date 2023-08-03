let products = [
  {
    name: "Apple",
    price: 0.99,
    description: "An apple a day keeps the doctor away.",
    available: 10,
  },
  {
    name: "Orange",
    price: 0.99,
    description: "An apple a day keeps the doctor away.",
    available: 5,
  },
  {
    name: "Grapes",
    price: 0.99,
    description: "An apple a day keeps the doctor away.",
    available: 2,
  },
];

//FILTER METHOD
const getAvailableProducts = products.filter(
  (products) => products.available > 3
);

console.log(getAvailableProducts);
