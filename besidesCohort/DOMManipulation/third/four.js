function addLanguage(langName){
    const li = document.createElement("li");
    li.innerText = langName;
    document.querySelector(".language").appendChild(li);

}
// addOptiLanguage is optimized because a textNode is created
// and appended at the end. although in this code the difference
// of performance cannot be visualized. this code is just to 
// tell that the second approach is more optimized and 
// it is preferred. in innerText tree traversal will happen
// and will reduce performance in bigger projects.

// I have not understood it completely. I am moving on
// right now and will come back to it later. I hate to do 
// this but sometimes..I have to meet the target.


function addOptiLanguage(langName){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langName));
    document.querySelector(".language").appendChild(li);
}

addOptiLanguage("c sharp");
addLanguage("Python");


//Edit

const secondLang = document.querySelector("li:nth-child(2)");

// secondLang.innerText = "Mojo";

const newLi = document.createElement("li");
newLi.appendChild(document.createTextNode("Mojo"));
secondLang.replaceWith(newLi);

// Edit

// const firstLang = document.querySelector("li:first-child");
// firstLang.outerHTML = "<p>hello</p>";
// console.log(firstLang.textContent);
// the above line gives output "javascript" because
// firstLang.outerHTML creates a new element and old one is
// destroyed. firstLang still hold reference to the old element
// and gives result javascript.

//Edit

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>Java</li>";
console.log(firstLang.textContent);

// Remove

const lastLang = document.querySelector("li:last-child");
lastLang.remove();



// all the above code is self-explanatory
// so i am not writing explanation