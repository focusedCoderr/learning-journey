const start = document.getElementById("start");
const stop = document.getElementById("stop");

start.addEventListener("click", startLogging);
stop.addEventListener("click", stopLogging);

let intervalId;

function startLogging(){
    if(!intervalId){
        intervalId =  setInterval((name)=>{
            console.log(`${name} : ${Date.now()}`);
        }, 1000, "Gaurav Yadav");
    }
  
    console.log("Clicked Start");
    
}

function stopLogging(){
    clearInterval(intervalId);
    intervalId = null;
    console.log("clicked Stopped");
}