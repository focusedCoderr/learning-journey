function ptaNahi(fn, delay){
    let myId;

    return function(){
        setTimeout(()=>{
            fn();
        }, delay);
    }
}

function greet(name){
    console.log(`Hello ${name}`);  
}

const abc = ptaNahi(greet, 5000);
abc();