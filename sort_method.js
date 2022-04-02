// node sort_method.js
// const number = [4,22,21,17,38,9,10]  /
// number.sort();  // sort number ko string ma change kar ka sort karta ha.
// console.log("Sortd => " + number);

// const number = [4,22,21,17,38,9,10]
// number.sort((a,b)=> a-b);
// console.log(number)

// 1200 ,410
// a-b --------> 790
// a-b --------> positive (greater than 0 ) --------> b,a
//410 ,1200

//a-b --------> negative --> a,b
//5,9 --------> -4

const products = [
    { productId: 1, productName: "p1", price: 300 },
    { productId: 2, productName: "p2", price: 3000 },
    { productId: 3, productName: "p3", price: 400 },
    { productId: 4, productName: "p4", price: 500 },
    { productId: 5, productName: "p5", price: 5400 },
    { productId: 6, productName: "p6", price: 100 }
];

// products.sort((a,b)=>{return a.price-b.price;});
// console.log(products);

const lowToHigh = products.slice(0).sort((a,b)=>{return a.price-b.price})
console.log(lowToHigh);

const HighlowTo = products.slice(0).sort((a,b)=>{return b.price-a.price})
console.log(HighlowTo);