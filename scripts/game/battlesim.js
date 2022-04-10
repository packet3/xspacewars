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

function add() {
	document.getElementById('form').setAttribute('action', 'game.php?page=battleSimulator&action=moreslots');
	document.getElementById('form').setAttribute('method', 'POST');
	document.getElementById('form').submit();
	return true;
}


document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.getElementsByClassName('tab-links');
	var parent = document.querySelector('.tab-content');


	//set firstTab to active
	const firsttab = document.getElementById('tabs-0')
	firsttab.className += " active";


	//load first tab content
	const firstTabPanelContent = parent.querySelector("#tabs-0")
	firstTabPanelContent.className += " active";




	for (let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', function () {
			//console.log(tabs[i].id)
			const id = '#' + tabs[i].id
			var tab = parent.querySelector(id);

			//remove active class from previous tabs
			for (let j = 0; j < tabs.length; j++) {
				tabs[j].classList.remove("active")
			}

			tabs[i].classList.add("active");

			parent.querySelectorAll(".active").forEach(e => e.classList.remove("active"));

			tab.classList.add("active");

		})
	}

	var rexx20 = document.getElementsByClassName("rexx20");

	for (var i = 0; i < rexx20.length; i++) {
		rexx20[i].addEventListener('click', function (e) {
			e.preventDefault();


			let datasetname = 'data-' + e.target.id

			document.querySelectorAll(`[${datasetname}]`).forEach(function (element) {
				element.value = 0
			})

		})
	}


	var form = document.getElementById("form")
	form.querySelectorAll("input").forEach(function (element) {
		element.addEventListener('keyup', function (e) {
			e.target.value = NumberGetHumanReadable(e.target.value.replace(/[^[0-9]|\.]/g, ''));
		})

	})

})




function check() {

	var kb = window.open('about:blank', 'kb', 'scrollbars=yes,statusbar=no,toolbar=no,location=no,directories=no,resizable=no,menubar=no,width=' + screen.width + ',height=' + screen.height + ', screenX=0, screenY=0, top=0, left=0');

	var http = new XMLHttpRequest();
	var form = document.querySelector("form");
	var data = new FormData(form)
	http.open("POST", "game.php?page=battleSimulator&mode=send", true);
	http.send(data);
	http.onreadystatechange = function () {
		if (http.readyState === 4) {
			if (http.status === 200) {
				kb.focus();
				kb.location.href = 'CombatReport.php?raport=' + JSON.parse(http.responseText);
			} else {
				kb.window.close();
				Dialog.alert(http.statusText);
			}

		}
	};
	return true;
}
