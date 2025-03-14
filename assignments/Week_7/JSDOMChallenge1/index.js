const titleAndDescription = document.getElementsByClassName("items");

const onOffButton = document.getElementById("onOff");

const variableColorTags = document.getElementsByClassName("selector");

const statusTag = document.getElementById("status");

const bulb = document.getElementById("realBulb");

let initialStage = "off";


(function(){
   
    for(let i=0; i < titleAndDescription.length; i++){
        const initialValue = titleAndDescription[i].innerText;
        const strInitialValue =  String(initialValue);
        const upperCaseValue = strInitialValue.toUpperCase();
        titleAndDescription[i].innerText = upperCaseValue;      
    }

})();


function changeBackgroundColor(color){
    document.body.style.backgroundColor = color;
}

function changeStatus(status){
    statusTag.innerText = status;
}


onOffButton.addEventListener("click",()=>{
    const initialColor = document.body.style.backgroundColor;

    if(!initialColor || initialColor ==="white"){
        changeBackgroundColor("#2C302E"); 
    }else{
        changeBackgroundColor("white");
    }

    for(let i=0; i< variableColorTags.length; i++){
        let eachElement = variableColorTags[i];
        let hasDarkClass = eachElement.matches(".darkThemeFont");
        let hasLightClass = eachElement.matches(".lightThemeFont");

        if(!hasDarkClass && !hasLightClass){
            eachElement.classList.add("darkThemeFont");
        }else if(hasDarkClass){
            eachElement.classList.remove("darkThemeFont");
            eachElement.classList.add("lightThemeFont");
        }else{
            eachElement.classList.remove("lightThemeFont");
            eachElement.classList.add("darkThemeFont");
        }

    }
        let status = "";
        if(initialStage === "off"){
             status = "Status : On";
            changeStatus(status);
            initialStage = "on";
            bulb.setAttribute("src", "on.png");
            onOffButton.innerText = "Turn Off";

        }else{
            status = "Status : Off";
            changeStatus(status);
            initialStage = "off";
            bulb.setAttribute("src", "off.png");
            onOffButton.innerText = "Turn On";

        }



});



