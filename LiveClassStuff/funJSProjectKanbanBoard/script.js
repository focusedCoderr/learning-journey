const addButtons = document.querySelectorAll(".button-54");

const boards = document.querySelectorAll(".board");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.getAttribute("id");
    const buttonNumber = Number(buttonId.slice(3));
    const divId = "div" + buttonNumber;
    const divInWhichItemToBeAdded = document.getElementById(divId);
    addItem(divInWhichItemToBeAdded);
  });
});

function addItem(divInWhichToBeAdded) {
  // create wrapper Div
  const itemWrapper = document.createElement("div");
  itemWrapper.setAttribute("class", "itemWrapper");
  itemWrapper.setAttribute("draggable", true);

  // add event listeners for drag start and drag end events
  itemWrapper.addEventListener("dragstart", (e) => {
    console.log("I have started flying");
    console.log(e);
  });

  itemWrapper.addEventListener("dragend", () => {
    console.log("I have ended flying");
  });

  // create item
  const item = document.createElement("p");
  item.setAttribute("class", "item");

  // Insert Text in p tag
  const textNode = document.createTextNode(Math.ceil(Math.random() * 2));
  // textNode.textContent = ;

  // append Text Node in item p tag
  item.appendChild(textNode);

  // append item in wrapperDiv
  itemWrapper.appendChild(item);

  // add wrapperDiv in the element
  divInWhichToBeAdded.appendChild(itemWrapper);
}

boards.forEach((board) => {
  board.addEventListener("dragover", (e) => {
    console.log("Hello, something flew over me");
    console.log(e);
  });
});
