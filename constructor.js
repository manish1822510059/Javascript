class Person{
    constructor(name,roll,address){
        this.name = name;
        this.roll = roll; 
        this.address = address;
    }
    intrdoce(){
        console.log(`helllo my name is 😊😊😊  ${this.name} and roll no is ${this.roll}`);
    }
    addresses(){
        console.log(`my address is ${this.address}`);
    }
}
 const ottto = new Person('ottto',12,'sec 45 noida');
    ottto.intrdoce();
    ottto.addresses();
