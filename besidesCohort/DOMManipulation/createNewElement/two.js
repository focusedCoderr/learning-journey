const parent = document.querySelector(".parent");


// .children will give a HTML Collection of parent
const children = parent.children;

// for(let i =0; i < children.length; i++){
//     console.log(children[i].innerHTML);
// }

children[1].style.color = "orange";

console.log(parent.firstElementChild);
// console.log(parent.firstChild);
console.log(parent.lastElementChild);

// firstElementChild is preferred because firstChild returns the
// first child of the parent node. 
// suppose 
// <p>
//         <span>this is child node</span>
// </p>

// In the above, since there is whitespace between p opening
// tag and span opening tag, the firstChild will return a text node
// and not span. This can be the required behaviour but 
// if you want first element of parent...use firstElementChild

// Similarly use lastElementChild to get the last child element
// **************

// parentElement
console.log("Hello");

console.log(children[0].parentElement);

// nextElementSibling

console.log(children[1].textContent);
// Tuesday
console.log(children[1].nextElementSibling.innerText);
//Wednesday

// Child Nodes : As mentioned above nodes of a parent contains
// comment, whitespace and elements also.

console.log(parent.childNodes);
// it gives us Nodelist of 9 items in the list
// each whitespace is considered a text node

//***************

