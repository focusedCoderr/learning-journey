const addInDiv1 = document.getElementById("div1");
const addInDiv2 = document.getElementById("div2");
const addInDiv3 = document.getElementById("div3");

const addButtons = document.querySelectorAll(".button-54");

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
