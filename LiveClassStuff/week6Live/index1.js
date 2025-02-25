const togBut = document.getElementById("tog");

// function changeBgColor(color){
//     if(color === "white"){
//         document.body.style.backgroundColor = "black";
//     }else{
//         document.body.style.backgroundColor = "white";
//     }
// }

// togBut.addEventListener("click", ()=>{
//     let initialColor = document.body.style.backgroundColor;
//     if(!initialColor){
//         initialColor = "white";
//     }
//     changeBgColor(initialColor);
// });


function changeBackground(color){
    document.body.style.backgroundColor = color;
}

togBut.addEventListener("click", function(){
    const initialColor = document.body.style.backgroundColor;
    if(initialColor === "white" || !initialColor){
        changeBackground("black");
        togBut.innerText = "Light Mode";
    }else{
        changeBackground("white");
        togBut.innerText = "Dark Mode";
    }
});