// Maps 
// map is an iterable 

// store data in orderd fashion

// store key value pair (like objects )
// duplicate keys are not allowed  like objects 

// different between maps and objects 

//object can only have string or symbol 
//as key 

// In map you can use anything as key value
//like array ,number ,string  

/* const person = {
    firstName: 'John',
    age: 2,
    1:"one"
}
// console.log(person.firstName);
// console.log(person["firstName"]);
console.log(person['1']) // ==> write [1] javascript automaticaly convert in string.
for(let key in person) {
 console.log(typeof key)
} */



// MAP
 const person  = new Map();
 person.set('firstName','Manish')
 person.set('age',25)
 person.set(1,'one')
//  person.set([1,2,3],'onetwothree')
//  person.set({1:'one'},'onetwothree')

/*  console.log(person);
//  console.log(person['firstName'])  // not acess like this its show umdefined
console.log(person.get(1))
// console.log(person.keys)
for(let key of person.keys()){
    console.log(key,typeof key)
}
 */
/* 
for(let [key,value] of person){
    // console.log(key)
    // console.log(Array.isArray(key))
    console.log(key,value)
}
 */


const  person1 = {
    id:1,
    firstName: 'John'
}

const  person2 = {
    id:2,
    firstName: 'juli'
}
const extraInfo = new Map();
extraInfo.set(person1,{age:8 ,gender: 'male'});
extraInfo.set(person2,{age:28 ,gender: 'female'});
// console.log(person1.id);
console.log(extraInfo.get(person1).gender)
console.log(extraInfo.get(person2).gender)







