// node defacult-parameter.js

function addTwo(a,b=0){ // --> new Method
    // if(typeof b  ==="undefined"){    ---
    //     b=0;                            | -> old Method
    // }                                ---
    //   | 
    return a+b;                     
}

const ans  = addTwo(2,23);
console.log(ans);