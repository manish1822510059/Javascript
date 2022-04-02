const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const ans = numbers.every((number) => number % 2 === 0);

//callBack function ====> true /false (boolean)

//every method  ====> true / false (boolean)

// console.log(ans);

const userCart = [
    { productId: 1, productName: "Mobile", price: 12000 },
    { productId: 2, productName: "Laptop", price: 32000 },
    { productId: 3, productName: "Tv"    , price: 16000 },
  ];


// check price is >400000
const price = userCart.every((cartItem) => cartItem.price<40000)

console.log(price)

