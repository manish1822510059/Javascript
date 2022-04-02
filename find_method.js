// node find_method.js

 const myArray = ["Hello","cat","dog","lion"];

/*  function isLength3(string){
     return string.length===4;
 } */
 const ans = myArray.find((string)=>string.length===3);
//  console.log(ans);


 const users = [
     {userId:1, username:"harshit"},
     {userId:2, username:"manish"},
     {userId:3, username:"nitin"},
     {userId:4, username:"Aman"},
     {userId:5, username:"bhupander"},
     {userId:6, username:"Sagar"}
 ];

 const myUser = users.find((users)=>users.userId ===3);
 console.log(myUser);