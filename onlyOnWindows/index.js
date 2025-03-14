console.log("Start of program");

function callbackfns(a,b){
    console.log(a+b);
}
sum(2,3, callbackfns);
// console.log(add);

function sum(a, b, fns){

    for(let i=0; i <=10000; i++){
        // console.log("hi");
    }
    fns(a,b);
}


console.log("End of program");

