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
  itemWrapper.addEventListener("dragstart", () => {
    itemWrapper.setAttribute("class", "itemWrapper flying");
  });

  itemWrapper.addEventListener("dragend", () => {
    itemWrapper.setAttribute("class", "itemWrapper");
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
  board.addEventListener("dragover", () => {
    const whatIsFlying = document.querySelector(".flying");
    const parentOfFlyingId = whatIsFlying.parentNode.getAttribute("id");
    const boardId = board.getAttribute("id");
    if (parentOfFlyingId !== boardId) {
      const boardNumber = boardId.slice(5);
      const divId = "div" + boardNumber;
      const divInWhichItemToBeAdded = document.getElementById(divId);
      divInWhichItemToBeAdded.appendChild(whatIsFlying);
    }
  });
});