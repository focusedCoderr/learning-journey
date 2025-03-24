// get an element by id

const title = document.getElementById("title");
 

//get attribute

const classAttributeValue = title.getAttribute('class');

console.log(classAttributeValue); // heading


//set Attribute- It will overwrite the existing 
// attribute 

title.setAttribute("class", "AddedViaJS previousDeleted");


// add style to title

title.style.backgroundColor = "green";

// extract content from h1 tag
// three methods to extract text
    // innerHTML
    // innerText
    // textContent

// if suppose there is a span inside h1 tag whose display has been
// set to none, textContent will display that as well but not 
// innerText

const textUsingInnerText =  title.innerText;
const textUsingtextContent =  title.textContent;
const textUsingInnerHTML =  title.innerHTML;

console.log(textUsingInnerText); 
//DOM learning on Chai aur Code

console.log(textUsingtextContent); 
//DOM learning on Chai aur Code Testing Text

console.log(textUsingInnerHTML); 
// DOM learning on Chai aur Code <span style="display: none;">Testing Text</span>

// ******************
// getElementByClassName will give an HTML Collection
const getByClassName = document.getElementsByClassName("AddedViaJS");

console.log(getByClassName);
 
//  HTMLCollection [h1#title.AddedViaJS.previousDeleted, 
// title: h1#title.AddedViaJS.previousDeleted]

const title2 = getByClassName[0];
console.log(title2);

title2.setAttribute("class",  "newAttribute");

console.log(title2);

//Observation : first I selected by class "AddedViaJS", and stored
// in title2, then I replaced the existing class by setAttribute
// and added a new class newAttribute, then i logged title2 again,
// it still has the same element because the address of that element
// was stored in title2...any changes in that element won't affect
// the address

// ******************

// behaviour of querySelector()
// it will return the first element found in the dom tree by
// using the selector provided in the parameter

const firstH2 = document.querySelector(".heading2");
console.log(firstH2);


const inputPass =  document.querySelector('input[type:"password"]');
console.log("Hello");
