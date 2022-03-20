// node reduce_method.js
const number = [4, 5, 6, 7, 8, 9, 10, 44];

// Aim to sum of all number in Array

const sum = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // zero is an inital value you can set anything
console.log(sum);

const userCart = [
  { productId: 1, productName: "Mobile", price: 120000 },
  { productId: 2, productName: "Laptop", price: 320000 },
  { productId: 3, productName: "Tv"    , price: 160000 },
];


const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);
