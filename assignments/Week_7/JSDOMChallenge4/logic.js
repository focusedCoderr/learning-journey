const inputField = document.querySelector("#actualInputField")

const buttonToAdd = document.getElementById("addButton");

const allTasks = document.querySelector("#allTheTasks");

const totalTasks =  document.querySelector("#totalTasks");

const completedTasks = document.querySelector("#completedTasks");

let completedTasksCounter = 0;

function checkIfNoTasks(){
    const totalTasksPresent = allTasks.childElementCount;
    if(!totalTasksPresent){
        const noTasksDiv = document.createElement("div");
        noTasksDiv.setAttribute("id", "noTasksPresent");
        const noTaskP = document.createElement("p");
        noTaskP.innerText = "No tasks yet. Add one above!";
        noTasksDiv.appendChild(noTaskP);
        allTasks.appendChild(noTasksDiv);
    }
}

checkIfNoTasks();


function addTaskFunctionality(){
    const noTasksPresentDiv = document.getElementById("noTasksPresent");
    const dataInInput  = inputField.value;

    if(noTasksPresentDiv && dataInInput){
        noTasksPresentDiv.remove();
    }

    
    if(dataInInput){
        
        const containerForData = document.createElement("div");
        containerForData.setAttribute("class", "actualDataWrapper");
        
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");

        checkBox.addEventListener("click", ()=>{
            if(checkBox.checked){
                completedTasksCounter++;
                completedTasks.innerText = completedTasksCounter;
                dataTag.style.textDecoration = "line-through";
                dataTag.style.color = "grey";
                
            }else{
                completedTasksCounter--;
                completedTasks.innerText = completedTasksCounter; 
                dataTag.removeAttribute("style");
            }

        });


        
        const dataTag = document.createElement("p");
        dataTag.innerText = dataInInput;

        const div1 = document.createElement("div");
        div1.appendChild(checkBox);
        div1.appendChild(dataTag);
        const div2 = document.createElement("div");


        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        div2.appendChild(deleteButton);
        deleteButton.addEventListener("click", ()=>{
            containerForData.remove();
            const totalTasksInTheApp = document.getElementsByClassName("actualDataWrapper").length;
            if(checkBox.checked){
                completedTasksCounter--;
                completedTasks.innerText = completedTasksCounter;

            }
            totalTasks.innerText = totalTasksInTheApp;
            checkIfNoTasks();
        })


        containerForData.appendChild(div1);
        containerForData.appendChild(div2);
        allTasks.appendChild(containerForData);
        inputField.value = "";

        const totalTasksInTheApp =  document.querySelectorAll(".actualDataWrapper").length;
        totalTasks.innerText = totalTasksInTheApp;

        
    }
}

function identifyKeydownEvent(e){
    if(e.key === "Enter"){
        addTaskFunctionality();
    }
}

buttonToAdd.addEventListener("click", addTaskFunctionality);
inputField.addEventListener("keydown", identifyKeydownEvent);






