function numberGameInputChanged() {
	var gameInput = document.getElementsByClassName("numberGame")[0].getElementsByTagName("input")[0];
	gameInput.value = gameInput.value.split('').filter(x => x >= "0" && x <= "9").join('').substr(0, 4);
}

function numberGameInputSubmit() {
	alert("尚未完成");
}
