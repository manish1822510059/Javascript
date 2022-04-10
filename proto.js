/* // node proto.js
const user ={
    firstName:"manish",
    lastName:"Kumar",
    email:"manishkumar@gmail.com",
    age:22,
    address:"House Number ,Colony ,Pincode,State",
    about: function(){
        return `${this.firstName} is ${this.age}`
    },
    is18: function(){
        return this.age>=18;
    }
} */
// function (that function create object )
//2 .( add key value pair)
//3. (object ke return krega)
function createUser(firstName,lastName,email,age,address){
    const user= {};
    user.firstName = firstName;
    user.lastName  = lastName;
    user.email =    email;
    user.age = age;
    user.address = address
    user.about = function(){
        return `${this.firstName} is ${this.age}`
    },
    user.is18 = function(){
        return this.age>=18;
    }
    return user;
}
const user1 = createUser("manish","kumar","imanish1998@gmail.com",22,"house number ,colony ,pincode,state");
console.log(user1);
const is18= user1.is18();
const about = user1.about();
console.log(about);
console.log(is18);
