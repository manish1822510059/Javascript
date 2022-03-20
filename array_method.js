// node array_method.js

//important Array Method
//forEach
//Map
//filter
//reduce
 

const number = [4,3,6,7,8,9,10,11,12,13];
/* 
function multiplyBy2(number ,index) {
  console.log(`index is ${index} number is ${number}`);
//   console.log(`${number}*2 = ${number*2}`);
} */
// multiplyBy2(number[0],0)
// multiplyBy2(number[1],1)

// for(let i=0;i<number.length;i++) {
//     multiplyBy2(number[i],i);
// }

// number.forEach(multiplyBy2)

// number.forEach(function(number,index) {
//     console.log(number*3,"index",index)
// })


// Array of object Application

const users = [
    {firstName: 'John', age: 22},
    {firstName: 'Arun', age: 28},
    {firstName: 'Sonu', age: 24},
    {firstName: 'Raman', age: 26},
    {firstName: 'M.kumar', age: 25}
]

// users.forEach(function(user){
//     console.log(user.firstName)
//     console.log(user.age)
// });

//Arrow function
users.forEach((user,index)=>{
    console.log(index,user.firstName)
})

// for(let user of users){
//   console.log(user.firstName)
//   console.log(user.age);
// }

// for(let i = 0; i < users.length; i++){
//     console.log(users[i].firstName)
//     console.log(users[i].age)
// }