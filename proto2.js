// function (that function create object )
//2 .( add key value pair)
//3. (object ke return krega)
const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age}`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); // {} and chaining
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
const user1 = createUser(
  "manish",
  "kumar",
  "imanish1998@gmail.com",
  22,
  "house number ,colony ,pincode,state"
);
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
console.log(is18);
