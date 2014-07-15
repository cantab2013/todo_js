
window.onload = function () {

	// var allButtons = document.querySelectorAll(".button");
	// allButtons.onclick = function (event) {
	// 	console.log(event.target);
	// }


	var addButton = document.getElementById("add");
	// var rmButton = document.querySelectorAll("rm");
	var rmButton = document.getElementsByClassName("rm");
	var newToDo = document.getElementById("newToDo");
	var theList = document.getElementById("theList");

	addButton.onclick = function (event) {

		var newLi = document.createElement('li');
		var newButton = document.createElement('button');
  	var newTextNode = document.createTextNode(newToDo.value);

  	newLi.appendChild(newTextNode);
  	newButton.className = "rm";
  	rmButton.push(newButton);
  	newButton.innerHTML = "X";  
  	newLi.appendChild(newButton);
  	theList.insertBefore(newLi, theList.firstChild);

  	newToDo.value = "";

	}
	
	console.log(rmButton);
	// debugger;

	for (var i = 0; i < rmButton.length; i++) {
	console.log("dsfsd");
		rmButton[i].onclick = function (event) {
			theList.removeChild(this.parentNode);
			console.log(this.parentNode);
		}
	}

	// rmButton.onclick = function (event) {
	// 		theList.removeChild(this.parentNode);
	// 		console.log(this.parentNode);
	// }

}