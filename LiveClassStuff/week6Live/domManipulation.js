Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

function printMyName(yourName){
    console.log(`My name is ${yourName}`);
    // function nothing(){

    // }
    // return nothing;
    return 2;
}

// printMyName.describe();
printMyName("Gaurav").describe();