// node clone.js

//clone using Object.assign 

const  obj ={
    key1:"value1",
    key2:"value2",
}
const obj2 = {...obj}  // use spread operater ....
 
obj.key3 = "value3"
console.log(obj)
console.log(obj2)