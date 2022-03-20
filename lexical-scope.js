//node lexical-scope.js
const myVar = "Value1";

function myapp(){

    function myFunc(){
        // const myVar = "Value87";
        const myvar = ()=>{
            console.log("inside function",myVar)
        }
        myvar();
    }
    console.log(myVar);
    myFunc();
}
myapp();