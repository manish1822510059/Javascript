//Normal function
// const singleHappyBirthday =function(){
//     console.log("Happy Birthday to ypu :) ");
// }

// Arrow function
const singleHappyBirthday = () => {
  console.log("Happy Birthday to ypu :) ");
};

singleHappyBirthday();

//Normal function
//  const sumofThreeNumbers = function(num1,num2,num3){
//      return num1+num2+num3;
//  }

//arrow Functions
const sumofThreeNumbers = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

console.log(sumofThreeNumbers(2, 3, 5));

//Normal function
//  const isEven = function(number){
//      return number%2==0;
//  }
//  const ans  = isEven(29);
//  console.log(ans);

// Arrow function
// const isEven = (number) => {
//   return number % 2 == 0;
// };
// const ans = isEven(29);
// console.log(ans); 

const isEven = (number) =>  number % 2 == 0;

const ans = isEven(295654641);
console.log(ans);
