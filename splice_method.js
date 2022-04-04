//Splice Method 
//start ,delete,insert,

const myArray = ['items1','items2','items3'];

//delete

// myArray.splice(1,1)

//insert
myArray.splice(1,0,'inserted item');
const deleteItem = myArray.splice(1,2,"inserted item1", "inserted item2");
console.log(deleteItem)

console.log(myArray)


