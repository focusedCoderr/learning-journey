function ptaNahi(fn, delay){
    console.log(arguments)
    let myId;

    return function(){
        console.log(this);
        myId = setTimeout( ()=>{

            fn();
        }, delay)
    }
}
const user = {
    name : "Amit",
    greet(){
        console.log(`Hello my name is ${this.name}`);
    }
};

const retFun =  ptaNahi(user.greet, 5000);
retFun();``