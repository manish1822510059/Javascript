// node call_in_javascript.js

/* function hello(){
    console.log('hello World');
}
hello.call(); */

//  call , Apply, Bind
function about(hobbies,favMusic){
    console.log(this.firstName,this.age,hobbies,favMusic);
}

const user1 ={
    firstName: 'Manish',
    age: 18,
}

const user2 = {
    firstName: 'John',
    age: 8,
}
// call()

// about.call(user2 ,"guitar","moazrt") // when use call define this is important and also pass values use in about Function
// apply

// about.apply(user1,['guitar','bach'])  // ek saat array pass kar sakta ha
//bind()

console.log(about.bind(user1,"guitar","moazrt"))
const func = about.bind(user1,"guitar","moazrt")
func()