// node methods.js

// method
// function inside Object

/* const person ={
      firstName: "mohit", 
      age:8,
      about:function(){
          console.log("Person nae is  and person agw is 8")
      }
}
// console.log(person.about);
person.about(); */


const user1 ={
    firstName:"manish",
    age:8,
    about(){
        console.log(this.firstName,this.age);
    }
}

user1.about();