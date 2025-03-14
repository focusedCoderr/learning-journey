const allInputs = document.getElementsByClassName("inputs");


for(let i=0; i< allInputs.length; i++){
    const eachInput = allInputs[i];
    const idOfTargetElement = eachInput.name;
    const elementInWhichDataIsToBeUpdated = document.getElementById(idOfTargetElement);
    eachInput.addEventListener("keyup",()=>{
        const valueInsideInput = eachInput.value;
        elementInWhichDataIsToBeUpdated.innerText = valueInsideInput;
    });
}