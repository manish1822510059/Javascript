// node param-destructuring.js

// object 
// mainly use react Application 

const person ={
    firstName:"Manish",
    gender:"male",
    age:23
}

// function printDetails(obj) {
//     console.log(obj.firstName)
//     console.log(obj.gender)
//     // console.log(obj.age) 
// }

//destructuring
function printDetails({firstName,gender,age}) {
    console.log(firstName)
    console.log(gender)
    console.log(age)
 
}

printDetails(person);