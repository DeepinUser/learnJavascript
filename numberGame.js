function numberGameInputChanged() {
	var numberGame = document.getElementByClassName("numberGame")[0];
	var gameInput = numberGame.getElementByTagName("input")[0];
	var number = parseInt(gameInput.innerText);
	if (number > 9999) {
		gameInput.innerText = "9999";
		alert("big");
	} else if (number < 0) {
		gameInput.innerText = "0000";
		alert("small");
	}
}
