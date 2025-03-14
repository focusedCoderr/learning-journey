const allColorButtons = document.getElementsByTagName("button");

const heading = document.getElementById("heading");


// Set initial bgColor to Buttons
for(let i=0; i<allColorButtons.length; i++){
    const nameOfColor = allColorButtons[i].innerText;
    const lowerCaseNameOfColor = nameOfColor.toLowerCase();
    const element = allColorButtons[i];
    let styleName = `background-color: ${lowerCaseNameOfColor}`;

    if(lowerCaseNameOfColor!=="reset"){
        element.setAttribute("style", styleName);
        element.addEventListener("click", ()=>{
            heading.style.color = lowerCaseNameOfColor;
        });
    }else{
    styleName = `background-color: grey`;
    element.setAttribute("style", styleName);
    element.addEventListener("click", ()=>{
        heading.style.color = "black";
    });
    }
    ;
}


