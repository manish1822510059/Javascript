// node function-return-function.js

function myFunc(){
    // return "a";
    // return [4,3,2,1,1,8];
    // return {name:"Manish",age:66};
    function hello(){
        //   console.log("inside function");
        return "hello Manish"
    }
    return hello;
}
const  ans = myFunc();
console.log(ans());
ans();
