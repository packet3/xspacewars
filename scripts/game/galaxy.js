/**
 *   orginal code based on New Star game, 
 *   re-wrote code to not use Jquery - Joe
 *
 *  XSpace (xspacewars.com)
 * For the full copyright and license information, please view the LICENSE
 *
 * @package XSpace
 * @author joe <joe@xspacewars.com>
 * @copyright 2022 Joe
 * @licence MIT
 * @version 1.0.0
 * @link https://github.com/packet3/xspacewars
 */

function doit(missionID, planetID) {

	fetch("game.php?page=fleetAjax&ajax=1&mission=" + missionID + "&planetID=" + planetID)
		.then(response => response.json())
		.then(data => {
			document.querySelector('#slots').textContent = data.slots
			console.log(data)
			if (typeof data.ships !== "undefined") {
				let ships = data.ships
				for (let i = 0; i < ships.length; i++) {
					document.querySelector('#elementID' + ships[i].elementID).textContent = number_format(ships[1].value)
				}

			}

			var statustable = document.querySelector('#fleetstatusrow')
			//below is orginal code as reference
			// var messages = statustable.find("~tr");
			// 	if (messages.length == MaxFleetSetting) {
			// 		messages.filter(':last').remove();
			// 	}
			var messages = statustable.querySelectorAll("tr");
			if (messages.length == MaxFleetSetting) {
				let lastMessage = Array.from(messages).filter(elm => elm.matches(':last'));
				for (let i = 0; i < lastMessage.length; i++) {
					lastMessage[i].remove()
				}
			}
			let newTR = document.createElement("tr")
			newTR.setAttribute('colspan', 8)
			newTR.setAttribute('class', data.code == 600 ? "success" : "error")
			newTR.textContent = data.mess

			statustable.removeAttribute('style')
			statustable.after(newTR)
		})
		.catch(error => {
			// handle the error
			console.log(error)
		});

}

function galaxy_submit(e) {
	document.querySelector('#auto').setAttribute('name', e)
	document.querySelector('#galaxy_form').submit()
	// $("#auto").attr("name", e);
	// $("#galaxy_form").submit()
}

function MovimentoGalassia(e) {
	e = e ? e : evento ? evento : null;
	if (e.keyCode == 37) {
		galaxy_submit("systemLeft")
	}
	if (e.keyCode == 39) {
		galaxy_submit("systemRight")
	}
}

document.onkeydown = MovimentoGalassia;


function showModal(className) {
	let query = document.querySelectorAll(className)
	for (let i = 0; i < query.length; i++) {
		query[i].addEventListener('click', function (e) {
			var elmHtml = e.target.parentElement.getAttribute('data_tooltip_content')

			console.log(elmHtml)
			Swal.fire({
				html: elmHtml,
				showCloseButton: false,
				showConfirmButton: false,
				padding: 0,
				backdrop: true,
				background: 'rgba(0, 0, 0, .0)'

			})

		})
	}
}
