// node sort_method.js
// const number = [4,22,21,17,38,9,10]  /
// number.sort();  // sort number ko string ma change kar ka sort karta ha.
// console.log("Sortd => " + number);

const number = [4,22,21,17,38,9,10] 
number.sort((a,b)=> a-b); 
console.log(number)

// 1200 ,410
// a-b --------> 790 
// a-b --------> positive (greater than 0 ) --------> b,a
//410 ,1200

//a-b --------> negative --> a,b 
//5,9 --------> -4
