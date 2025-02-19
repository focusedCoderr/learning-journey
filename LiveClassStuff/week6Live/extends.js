class A{
    printHello(){
        console.log("Hello");
    }
}

class B{
    printSomething(){
        console.log(`something`);
        return "returned";
    }
}


const objB = new B();


console.log(objB.printSomething());
console.log(objB.printHello());
