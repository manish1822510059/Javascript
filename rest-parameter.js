// node rest-parameter.js

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is `,c)
// }
// myFunc(4,5,6,7,8,9,10);


function addAll(...numbers){
    // console.log(number);
    // console.log(Array.isArray(number));
    let total  = 0;
    for(let number of numbers){
     total = total + number;
    }
    return total;


}
const ans = addAll(6,4,5,6,7,8,9,10,100);
console.log(ans)