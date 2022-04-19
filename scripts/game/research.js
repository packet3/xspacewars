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

var resttime = 0;
var time = 0;
var endtime = 0;
var interval = 0;
var buildname = "";

function Buildlist() {

	var rest = resttime - (serverTime.getTime() - startTime) / 1000;
	if (rest <= 0) {
		window.clearInterval(interval);
		document.querySelector('#time').textContent = Ready //$('#time').text(Ready);
		document.querySelector('#command').remove() //$('#command').remove();
		document.title = Ready + ' | ' + Gamename;
		window.setTimeout(function () {
			window.location.href = 'game.php?page=research';
		}, 1000);
		return true;
	}
	document.title = GetRestTimeFormat(rest) + ' - ' + buildname + ' | ' + Gamename;

	document.querySelector('#time').textContent = GetRestTimeFormat(rest)  //$('#time').text(GetRestTimeFormat(rest));
}


style = "top: 27px;line-height: 43px;"

$(document).ready(function () {
	if (document.getElementById("time") !== null) {
		time = document.getElementById("time").getAttribute('data-time')
		resttime = document.getElementById('progressbar').getAttribute('data-time')
		endtime = document.getElementById("time").getAttribute('data-time')

		if (Number(resttime) > 0) {
			interval = window.setInterval(Buildlist, 1000);

			Buildlist();
		}
	}

});

/*------------------------------------------------------------*/
function counting(id) {
	var Data = DatatList[id];
	var sitem = '#research_' + (String(id));
	var Ellimet = document.getElementById(sitem)
	var it = 1;
	var count = Math.max((1 + Number(Data.level)), Number(Ellimet.querySelector('#b_input_' + (String(id))).value));
	var countMin = Data.level;

	var costResources = 0;
	var res = 0;
	var costResources = Array();
	costResources[901] = 0;
	costResources[902] = 0;//
	costResources[903] = 0;
	costResources[921] = 0;

	var metal = Number(String(document.getElementById('current_metal').textContent).replace(/[.]/g, ''));
	var crystal = Number(String(document.getElementById('current_crystal').textContent).replace(/[.]/g, ''));
	var deuterium = Number(String(document.getElementById('current_deuterium').textContent).replace(/[.]/g, ''));
	var darkmatter = Number(String(document.getElementById('current_darkmatter').textContent).replace(/[.]/g, ''));
	var energy = Number(String(document.getElementById('current_energy').textContent).replace(/[.]/g, ''));



	if (typeof Data.costResources[901] !== "undefined") {
		res = Number(Data.costResources[901]);
		costResources[901] += Math.floor(res);
		for (var i = 2; i <= (count - countMin); i++) {
			costResources[901] += Math.floor(res * Math.pow(Data.factor, i - 1));
		}
	}
	if (typeof Data.costResources[902] !== "undefined") {
		res = Number(Data.costResources[902]);
		costResources[902] += Math.floor(res);
		for (var i = 2; i <= (count - countMin); i++) {
			costResources[902] += Math.floor(res * Math.pow(Data.factor, i - 1));
		}
	}
	if (typeof Data.costResources[903] !== "undefined") {
		res = Number(Data.costResources[903]);
		costResources[903] += Math.floor(res);
		for (var i = 2; i <= (count - countMin); i++) {
			costResources[903] += Math.floor(res * Math.pow(Data.factor, i - 1));
		}
	}
	if (typeof Data.costResources[911] !== "undefined") {
		res = Number(Data.costResources[911]);
		costResources[911] += Math.floor(res);
		for (var i = 2; i <= (count - countMin); i++) {
			costResources[911] = Math.floor(res * Math.pow(Data.factor, i - 1));
		}
	}
	if (typeof Data.costResources[921] !== "undefined") {
		res = Number(Data.costResources[921]);
		costResources[921] += Math.floor(res);
		for (var i = 2; i <= (count - countMin); i++) {
			costResources[921] += Math.floor(res * Math.pow(Data.factor, i - 1));
		}
	}




	if (costResources[901] > 0) {
		let res901TextNodes = Ellimet.querySelectorAll('.res901 .text')
		let res901Nodes = Ellimet.querySelectorAll('.res901');

		let tooltipContent = LNGning + ' ' + LNGtech901 + ' ' + NumberGetHumanReadable(costResources[901] - metal)

		for (i = 0; i < res901TextNodes.length; i++) {
			res901TextNodes[i].innerHTML = NumberGetHumanReadable(costResources[901])
		}


		for (i = 0; i < res901Nodes.length; i++) {
			if (metal < costResources[901]) {
				updateResourceElementDOM(res901TextNodes, res901Nodes, tooltipContent, costResources[901], 'add')

			}
			else {
				updateResourceElementDOM(res901TextNodes, res901Nodes, tooltipContent, costResources[901], 'remove')
			}
		}

	}

	if (costResources[902] > 0) {
		let res902TextNodes = Ellimet.querySelectorAll('.res902 .text')
		let res902Nodes = Ellimet.querySelectorAll('.res902');

		let tooltipContent = LNGning + ' ' + LNGtech902 + ' ' + NumberGetHumanReadable(costResources[902] - crystal)

		for (i = 0; i < res902TextNodes.length; i++) {
			res902TextNodes[i].innerHTML = NumberGetHumanReadable(costResources[902])
		}


		for (i = 0; i < res902Nodes.length; i++) {
			if (crystal < costResources[902]) {
				updateResourceElementDOM(res902TextNodes, res902Nodes, tooltipContent, costResources[902], 'add')

			}
			else {
				updateResourceElementDOM(res902TextNodes, res902Nodes, tooltipContent, costResources[902], 'remove')
			}
		}
	}

	if (costResources[903] > 0) {
		let res903TextNodes = Ellimet.querySelectorAll('.res903 .text')
		let res903Nodes = Ellimet.querySelectorAll('.res903');

		let tooltipContent = LNGning + ' ' + LNGtech903 + ' ' + NumberGetHumanReadable(costResources[903] - deuterium)

		for (i = 0; i < res903TextNodes.length; i++) {
			res903TextNodes[i].innerHTML = NumberGetHumanReadable(costResources[903])
		}


		for (i = 0; i < res903Nodes.length; i++) {
			if (deuterium < costResources[903]) {
				updateResourceElementDOM(res903TextNodes, res903Nodes, tooltipContent, costResources[903], 'add')

			}
			else {
				updateResourceElementDOM(res903TextNodes, res903Nodes, tooltipContent, costResources[903], 'remove')
			}
		}

	}

	if (costResources[911] > 0) {
		let res911TextNodes = Ellimet.querySelectorAll('.res911 .text')
		let res911Nodes = Ellimet.querySelectorAll('.res911');

		let tooltipContent = LNGning + ' ' + LNGtech911 + ' ' + NumberGetHumanReadable(costResources[911] - energy)

		for (i = 0; i < res911TextNodes.length; i++) {
			res911TextNodes[i].innerHTML = NumberGetHumanReadable(costResources[911])
		}


		for (i = 0; i < res911Nodes.length; i++) {
			if (energy < costResources[911]) {
				updateResourceElementDOM(res911TextNodes, res911Nodes, tooltipContent, costResources[911], 'add')

			}
			else {
				updateResourceElementDOM(res911TextNodes, res911Nodes, tooltipContent, costResources[911], 'remove')
			}
		}

	}

	if (costResources[921] > 0) {
		let res921TextNodes = Ellimet.querySelectorAll('.res921 .text')
		let res921Nodes = Ellimet.querySelectorAll('.res921');

		let tooltipContent = LNGning + ' ' + LNGtech921 + ' ' + NumberGetHumanReadable(costResources[921] - darkmatter)

		for (i = 0; i < res921TextNodes.length; i++) {
			res921TextNodes[i].innerHTML = NumberGetHumanReadable(costResources[921])
		}


		for (i = 0; i < res921Nodes.length; i++) {
			if (darkmatter < costResources[921]) {
				updateResourceElementDOM(res921TextNodes, res921Nodes, tooltipContent, costResources[921], 'add')

			}
			else {
				updateResourceElementDOM(res921TextNodes, res921Nodes, tooltipContent, costResources[921], 'remove')
			}
		}

	}


	s = Math.ceil(Data.elementTime);
	for (var i = 2; i <= (count - countMin); i++) {
		s += Math.ceil(Data.elementTime * Math.pow(Data.factor, i - 1));
	}

	//s =  Math.ceil(Data.elementTime * count);

	{ m = Math.floor(s / 60); s = s - m * 60; }
	{ h = Math.floor(m / 60); m = m - h * 60; }
	{ d = Math.floor(h / 24); h = h - d * 24; }
	if (s < 10) { s = '0' + s }
	if (m < 10) { m = '0' + m }
	if (h < 10) { h = '' + h }
	if (s >= 0) { s = s + short_second }
	if (m > 0) { m = m + short_minute } else m = '00' + short_minute;
	if (m == 0 && h > 0) { m = '0' + m + short_minute }
	if (h > 0) { h = h + short_hour } else h = '00' + short_hour;
	if (d > 0) { d = d + short_day } else d = '';

	let timeToEdit = Ellimet.querySelector('.time_build_edit')
	timeToEdit.textContent = d + ' ' + h + ' ' + m + ' ' + s
};
function updateResourceElementDOM(textNodes, cssResClass, tooltipContent, type) {

	for (i = 0; i < cssResClass.length; i++) {
		if (type == "add") {
			console.log('inside add')
			cssResClass[i].classList.add('required')

			textNodes[i].classList.add('tooltip');

			textNodes[i].setAttribute('data-tooltip-content', tooltipContent)
		} else {
			cssResClass[i].classList.remove('required')

			textNodes[i].classList.remove('tooltip');

			textNodes[i].removeAttribute('data-tooltip-content')

		}

	}

}