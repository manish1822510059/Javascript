class classWithInitializationBlock{
    static staticProperty1 = ' property 1';
    static staticProperty2;
    static {
        this.staticProperty2 = ' property 2';
    } 
}
console.log(classWithInitializationBlock.staticProperty1);
console.log(classWithInitializationBlock.staticProperty2);