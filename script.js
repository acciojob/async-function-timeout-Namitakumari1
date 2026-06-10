//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btnInput = document.getElementById("btn");
const outputDiv = document.getElementById("output");

function wait(ms){
	return new Promise((resolve) => {
		setTimeout(resolve,ms);
	});
}

async function displayMessage(){
	const text = textInput.value;
	const delay = Number(delayInput.value);

	outputDiv.textContent = "";

	await wait(delay);

	outputDiv.textContent = text;
}
btnInput.addEventListener("click", displayMessage);
