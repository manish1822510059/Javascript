// node block-scope-function-scope.js

// let and const are Block scope

// var is function scope


// {
// var firstName = "Manish"
// }
// console.log(firstName)

if(true){
    let firstName = "Manish";
    console.log(firstName)

}
console.log(firstName)