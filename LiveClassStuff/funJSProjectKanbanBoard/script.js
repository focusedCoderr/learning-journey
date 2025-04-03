const addButtons = document.querySelectorAll(".button-54");

const boards = document.querySelectorAll(".board");

const itemWrapperKaDiv = document.getElementsByClassName("itemWrapperKaDiv");
for (let i = 0; i < itemWrapperKaDiv.length; i++) {}

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
	const boardId = board.getAttribute("id");
	const boardNumber = Number(boardId.slice(5));
	const divId = "div" + boardNumber;
	const divInWhichItemToBeAdded = document.getElementById(divId);

	board.addEventListener("dragover", () => {
		console.log("Something is flying over me");
		const flyingElement = document.querySelector(".flying");

		flyingElement.addEventListener("dragend", () => {
			flyingElement.setAttribute("class", "item");
			addItem(divInWhichItemToBeAdded);
		});
	});
});
