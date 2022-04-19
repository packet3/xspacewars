function instant(event) {

	if (event.keyCode === 13) { //13 => is the ENTER key
		event.preventDefault();
	}
	const keyCodes = [91, // WINDOWS
		18, // ALT
		20, // CAPS_LOCK
		188, // COMMA
		91, // COMMAND
		91, // COMMAND_LEFT
		93, // COMMAND_RIGHT
		17, // CONTROL
		40, // DOWN
		35, // END
		13, // ENTER
		27, // ESCAPE
		36, // HOME
		45, // INSERT
		37, // LEFT
		93, // MENU
		107, // NUMPAD_ADD
		110, // NUMPAD_DECIMAL
		111, // NUMPAD_DIVIDE
		108, // NUMPAD_ENTER
		106, // NUMPAD_MULTIPLY
		109, // NUMPAD_SUBTRACT
		34, // PAGE_DOWN
		33, // PAGE_UP
		190, // PERIOD
		39, // RIGHT
		16, // SHIFT
		32, // SPACE
		9, // TAB
		38, // UP
		91 // WINDOWS
	];

	if (keyCodes.includes(event.keyCode)) {
		return;
	}

	document.querySelector('#loading').style.display = 'block'
	// $('#loading').show();

	let typeValue = document.querySelector('#type').value;
	let searchtext = document.querySelector('#searchtext').value;
	let searchData = document.querySelector('#searchresults')

	fetch('game.php?page=search&mode=result&type=' + typeValue + '&search=' + searchtext + '&ajax=1')
		.then(response => response.text())
		.then(data => {
			if (searchtext == "") {
				searchData.style.display = 'none'
				document.querySelector('#loading').style.display = 'none'
			} else {
				searchData.style.display = 'block'
				if (document.querySelector('#resulttable') != null) {
					document.querySelector('#resulttable').remove();

				}
				searchData.innerHTML = data

				document.querySelector('#loading').style.display = 'none'
			}



		})


}

$(document).ready(function () {
	document.querySelector('#searchtext').addEventListener('keyup', instant)
	document.querySelector('#type').addEventListener('change', instant)

});