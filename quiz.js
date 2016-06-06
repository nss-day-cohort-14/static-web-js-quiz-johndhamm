var treeHeightBox = document.getElementById("heightInput");
var treeCharBox = document.getElementById("charInput");

treeHeightBox.addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key === 13) { // 13 is enter
    	checkBoxes();// code for enter
    }
});

treeCharBox.addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key === 13) {
    	checkBoxes();	
    }
});


var button = document.getElementById("growButton");
button.addEventListener("click", tree);



function tree () {
	var treeHeight = document.getElementById("heightInput").value;
	var treeChar = document.getElementById("charInput").value;
	if (treeHeight === "" || treeChar ===""){
		alert("You forgot to enter a value! (dumbass)");
		return;
	};

	for (var line = 1; line <= treeHeight; line++) { //current line loop

		var currentLine = ""; //clear the current line

		var numSpaces = treeHeight - line;    // loop to add spaces
		for (var i = 1; i <= numSpaces; i++) {
			currentLine += " ";
		}

		var width = (treeHeight * 2) - 1;    		
		var numChars = width - (numSpaces * 2);
		for (var j = 1; j <= numChars; j++) {			// loop to add chars
			currentLine += treeChar
		}

		console.log(currentLine);
	}
};


function checkBoxes () {
	var treeHeight = document.getElementById("heightInput").value;
	var treeChar = document.getElementById("charInput").value;
	if (treeHeight === "" || treeChar ===""){
		alert("You forgot to enter a value! (dumbass)")
	} else {
		tree();
	}
};



