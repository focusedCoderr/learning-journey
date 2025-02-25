const inputField = document.getElementById("inputText");

const addButton = document.getElementById("addButton");

const ourList = document.getElementById("ourList");

const containerDiv = document.getElementById("listContainer");


addButton.addEventListener("click",()=> {
    const task =  inputField.value;
    if(task !== ""){
        const liTag = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.addEventListener("click", ()=>{
            liTag.remove();
        });
    liTag.innerText = task;
    liTag.appendChild(deleteBtn);
    ourList.appendChild(liTag);
    inputField.value = "";

    const allChildrenOfContainerDiv = containerDiv.children;
    
    if(allChildrenOfContainerDiv.length<2){
        const deleteAll = document.createElement("button");
        deleteAll.innerText = "Delete All";
        deleteAll.addEventListener("click", ()=>{
            while(ourList.hasChildNodes()){
                ourList.removeChild(ourList.firstChild);
            }
            deleteAll.remove();
        });
        containerDiv.appendChild(deleteAll);
    }
   
    
    
    }
});