const ul = document.getElementById("images");

const owl = document.getElementById("owl");

const googleLink = document.getElementById("google");

// While adding event listeners, in the parameters, first 
// parameter is type of event , second is  a callback 
// fucntion and third is a boolean CSSMathValue, if we do 
// give this, the default is false. it refers to event bubbling,
// true value means event capturing or trickling. below example
// shows its working

// e.stopPropagation() will stop propagation


// ul.addEventListener("click", (e)=>{
//     console.log("Clicked inside ul");
//     console.log(e);
    
// }, false);

// owl.addEventListener("click",(e)=>{
//     console.log("Owl Clicked");
//     console.log(e);
    
// }, false);


// preventDefault() method prevents the default behaviour 
// of that element and event.defaultPrevented gives a 
// boolean value, whether default behaviour was prevented or not

googleLink.addEventListener("click", (e)=>{
    e.stopPropagation();
    e.preventDefault();
    console.log(`The default behaviour was prevented : ${e.defaultPrevented}`);
    
}, false);


// target, currentTarget, toElement, srcElement

// target: element that triggered the event, in our case,
// it can be img or googleLink, depends where mouse was clicked
// currentTarget: the element to which event listener is
// attached to, in our case ul element


// srcElement is deprecated, it has the same functionality as target
// toElement : where the mouse cursor went after the event
// usually used with mouseover and mouseout events.

// ul.addEventListener("click",(e)=>{
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(e.srcElement);
// }, false);

const toElementShow = document.getElementById("parent");

toElementShow.addEventListener("mouseout", (e)=>{
    console.log(`Moved to ${e.toElement}`);
}, false);

// clientX, clientY, screenX, screenY

// clientx and y are mouse position with respect to 
// the browser

// screenx and y are mouse position with respect to
// the entire screen

// document.body.addEventListener("mousemove", (e)=>{
//     console.log("reference from browser");
    
//     console.log(`X: ${e.clientX} Y:${e.clientY}`);
//     console.log("reference from window");

//     console.log(`X: ${e.screenX} Y:${e.screenY}`);   
// }, false);

// e.key and e.code
const showData = document.querySelector("#input").nextElementSibling;

document.querySelector("#input").addEventListener("keydown", (e)=>{
    console.log(e.key);
    console.log(e.code);
    console.log(e.shiftKey); // whether shift key was pressed: boolean
    console.log(e.ctrlKey); // whether ctrl key was pressed: boolean
    console.log(e.altKey); // whether alt key was pressed: boolean
    console.log(e);
    
    
    showData.innerText = showData.previousElementSibling.value;
    
    
}, false);

// parentNode, e.target.tagName

ul.addEventListener("click", (e)=>{
    console.log(e);
    
    const toBeRemoved = e.target.parentNode;
    console.log((toBeRemoved));
    if(e.target.tagName === "IMG"){
        // toBeRemoved.remove();
        toBeRemoved.parentNode.removeChild(toBeRemoved);

    }
    
    
}, false);