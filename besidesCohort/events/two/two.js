const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const stopSetTimeOut = setTimeout(()=>{
    h1.innerText = "Best JS Series" ;
}, 2000);


button.addEventListener("click", ()=>{
    clearTimeout(stopSetTimeOut);
    console.log("Stopped");
    
}, false);
