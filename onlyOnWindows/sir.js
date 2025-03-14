console.log("Start of program");

sum(2,3, (value)=>{console.log(value)});

function sum(a,b, cb){
     let i = a+b;
     setTimeout(()=>{
        cb(i);
     }, 5*1000);
}




console.log("End of program");

