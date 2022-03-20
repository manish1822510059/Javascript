// node function-inside-function.js
function app(){
    const myFunc=()=>{console.log("hello from myFunc")};
    const add=(num1,num2)=>{return num1+num2;};
    const mul=(num1,num2)=> num1*num2; 
    console.log("inside app function");
    myFunc();
    console.log(add(6,76));
    console.log(mul(6,76));
}
app();