// node filter_method.js

const number  = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

const isEven  = function(number){
    return number%2===0;  // ====-> Filter function ka callback hamasa bollen value return kara ga
}

const evenNumber = number.filter(number=>{
    return number%2===0; // ====-> Filter function ka callback hamasa bollen value return kara ga
});
console.log(evenNumber)
