const inputField = document.querySelector("#actualInputField")

const buttonToAdd = document.getElementById("addButton");

const allTasks = document.querySelector("#allTheTasks");


buttonToAdd.addEventListener("click", ()=>{
    const dataInInput  = inputField.value;
    if(dataInInput){
        
        const containerForData = document.createElement("div");
        containerForData.setAttribute("class", "actualDataWrapper");
        
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        
        const dataTag = document.createElement("p");
        dataTag.innerText = dataInInput;

        const deleteButton = document.createElement("button");
        // deleteButton.setAttribute("class", "deleteBtnClass");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", ()=>{
            
        })


        containerForData.appendChild(checkBox);
        containerForData.appendChild(dataTag);
        containerForData.appendChild(deleteButton);
        allTasks.appendChild(containerForData);
        inputField.value = "";
    }
});




// 1. querySelector behaviour


// next task

// -> append container in the div wrapper

// got to know: did not add text in button

// -> next: add button text

// .innerText


// --> remove text from the input field

// .value = ""

// --> add Functionality to the delte button