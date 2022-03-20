// node callback-function.js

function myFunc2(c,name) {
  let s = c * 22;
  console.log("inside my func 2");
  console.log(s);
  console.log(`your name is ${name}`);
}

function myFunc(callback) {
  let a = 19,
    b = 44;
  console.log((c = a + b));
  console.log("Hello there i  am working of no");
  callback(c,"Manish");
}
// myFunc([3,2,2,3,4,5,6,7,8,9,10])
// myFunc({firstName :"Manish"})

myFunc(myFunc2);
