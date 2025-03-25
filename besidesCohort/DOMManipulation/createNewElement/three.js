const div = document.createElement("div");
div.className = "firstDiv";
div.style.backgroundColor = "green";
div.style.color = "white"
div.setAttribute("id", "one");
// set attribute is efficient because it sets the value directly
// it does not brings the value already existing in the attribute
// and then sets the value and puts it again.

// div.innerText = "Hello"

// innerText first brings the existing innerText value and then 
// sets the new value and puts it in the innerText value. 
// So, some people consider createTextNode approach 
// as given below. However people argue that first you create a 
// text node and then place it, it is also not very efficient.
// we can argue about these issues but right now, this is given 
// for knowledge that this type of talks are present
const textNode = document.createTextNode("this is text node");
div.appendChild(textNode);
document.body.appendChild(div);
