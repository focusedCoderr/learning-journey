function ptaNahi(fn, delay){
    
    let myId;

    return function(...arguementsWhichWillBePassedWhenThisFunctionIsReturnedAndCalled){
        clearTimeout(myId);
        myId = setTimeout(()=>{
            fn.apply(this, arguementsWhichWillBePassedWhenThisFunctionIsReturnedAndCalled);
            console.log(arguementsWhichWillBePassedWhenThisFunctionIsReturnedAndCalled);
        },delay);
    }
}

const user = {
    aname:"Gaurav",
    greet(){
        console.log(`Hello ${this.aname}`);
        
    }
};

// const returnFunction =  ptaNahi(greet, 5000);

const debouncedGreet = ptaNahi(user.greet, 3000);

debouncedGreet.call(user);
debouncedGreet.call(user);
debouncedGreet.call(user);
debouncedGreet.call(user);
debouncedGreet.call(user);