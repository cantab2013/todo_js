
window.onload = function () {

	var addButton = document.getElementById("add");
	var newToDo = document.getElementById("newToDo");
	var theList = document.getElementById("theList");

	addButton.onclick = function (event) {

		var newLi = document.createElement('li');
		var newButton = document.createElement('button');
  	var newTextNode = document.createTextNode(newToDo.value);

  	newLi.appendChild(newTextNode);
		newButton.onclick = function (event) {
			theList.removeChild(this.parentNode);
		}
  	newButton.innerHTML = "X";  
  	newLi.appendChild(newButton);
  	theList.insertBefore(newLi, theList.firstChild);

  	newToDo.value = "";

	}
	
}