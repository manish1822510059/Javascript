// node sets.js
//set (its is iterable)
//Store data
//sets also have its own methods
//No index-based access 
//Order is not guaranteed
//unique items only (no duplicates allowed)

// const numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// console.log(numbers)
// console.log(numbers[2])
/*  const items = ['item1', 'item2', 'item3', 'item4', 'item5']
 const numbers = new Set();
 numbers.add(1);
 numbers.add(2);
 numbers.add(3);
 numbers.add(4);
 numbers.add(5);
 numbers.add(items);
 numbers.add(items);
 console.log(numbers); */
//  if(number.has(1)){
//      console.log("1 is present");
//  }else{
//     console.log("1 is not present");

//  }
// for(let number of numbers){
// console.log(number)
// }
const myArray  = [1,2,3,4,5, 6, 7, 8, 9, 10,6, 7, 8, 9, 10];
const uniqueElement = new Set(myArray);
console.log(uniqueElement)
let length  = 0;
for(let element of uniqueElement){
    length++;
}
console.log(length)

