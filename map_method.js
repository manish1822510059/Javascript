// node map_method.js

 

const numbers = [3,4,6,7,8,9,10,11];

// const square = function(number){
//     return number*number;
// }

//***** Normal function *******
/* 
const squareNumber = numbers.map(function(number){
    return number*number;                                                       // ---> Map Returning New Array

}); */

//Arrow function 
/* const squareNumber = numbers.map((number,index)=>{
    // return number*number;
    return `index: ${index}, ${number*number}`
});  
                                                     // ---> Map Returning New Array
console.log(squareNumber);
 */


const users = [
    {firstName: 'John', age: 22},
    {firstName: 'Arun', age: 28},
    {firstName: 'Sonu', age: 24},
    {firstName: 'Raman', age: 26},
    {firstName: 'M.kumar', age: 25}
]

const userFirstname = users.map((user)=>{
    return user.firstName;  //return an Array
})
console.log(userFirstname);
const age = users.map((user)=>{
    return user.age;  //return an Array
})

console.log(age);