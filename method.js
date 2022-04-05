//method 
//function inside object 

/* const person = {
    firstName: 'Manish kumar',
    age:18,
    about:function(){
        console.log(`person name is ${this.firstName} and age is${this.age}`);
        console.log(this);
    }

}
person.about(); */
function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
 
}

const person1 = {
    firstName: 'Manish kumar',
    age:18,
    about:personInfo
}
const person2 = {
    firstName: 'Mohit',
    age:17,
    about:personInfo
}
const person3 = {
    firstName: 'Nitin',
    age:22,
    about:personInfo
}

person1.about();
person2.about();
person3.about();


