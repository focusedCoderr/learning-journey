const ul = document.getElementById("images");

const owl = document.getElementById("owl");

const googleLink = document.getElementById("google");

// While adding event listeners, in the parameters, first 
// parameter is type of event , second is  a callback 
// fucntion and third is a boolean CSSMathValue, if we do 
// give this, the default is false. it refers to event bubbling,
// true value means event capturing or trickling. below example
// shows its working


// ul.addEventListener("click", (e)=>{
//     console.log("Clicked inside ul");
//     console.log(e);
    
// }, true);

// owl.addEventListener("click",(e)=>{
//     console.log("Owl Clicked");
//     console.log(e);
    
// }, false);


// preventDefault() method prevents the default behaviour 
// of that element and event.defaultPrevented gives a 
// boolean value, whether default behaviour was prevented or not

googleLink.addEventListener("click", (e)=>{
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

ul.addEventListener("click",(e)=>{
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.srcElement, "hello");
    
}, false);

