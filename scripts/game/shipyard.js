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

var v = new Date();
var auftr = {};
var bx = {};
var valShip = {};

$(document).ready(function () {
	console.log('the shipyeard')
	let countShipDots = document.querySelectorAll('.count_ships_dots input[type=text]')
	for (let i = 0; i < countShipDots.length; i++) {
		countShipDots[i].addEventListener('keyup', function () {
			countDots();
		})
	}
	// $('.count_ships_dots input[type=text]').keyup(function() {
	// 	countDots();		
	// });

	const form = document.getElementsByTagName('form')
	form[0].addEventListener('submit', function (e) {
		e.preventDefault()
		DotsToCount();
	})

	// $('form').submit(function() {
	// 	DotsToCount();
	// });
	console.log(data.Queue)
	if (data.Queue != undefined)
		ShipyardInit();
});

function ShipyardInit() {
	Shipyard = data.Queue;
	Amount = new DecimalNumber(Shipyard[0][1], 0);
	hanger_id = data.b_hangar_id_plus;
	document.querySelector('#timeleft').textContent = data.pretty_time_b_hangar  //$('#timeleft').text(data.pretty_time_b_hangar);
	BuildlistShipyard();
	ShipyardInterval = window.setInterval(BuildlistShipyard, 3000);
}

function BuildlistShipyard() {
	console.log('Build List')
	var n = new Date();
	var s = Shipyard[0][2] - hanger_id - Math.round((n.getTime() - v.getTime()) / 1000);
	var s = Math.round(s);
	var m = 0;
	var h = 0;
	var perSec = Math.floor(1 / Shipyard[0][2]);

	if (s <= 0) {
		Amount.sub(perSec);
		let valShipyeardID = document.querySelector('#val_' + Shipyard[0][3])
		valShipyeardID.textContent = ' (' + bd_available + NumberGetHumanReadable(parseInt(valShipyeardID.textContent.replace(/.* (.*)\)/, '$1').replace(/\./g, '')) + (perSec)) + ')'
		// $('#val_' + Shipyard[0][3]).text(function (i, old) {
		// 	return ' (' + bd_available + NumberGetHumanReadable(parseInt(old.replace(/.* (.*)\)/, '$1').replace(/\./g, '')) + (perSec)) + ')';
		// })
		if (parseInt(Amount) <= 0) {
			Shipyard.shift();
			if (Shipyard.length == 0) {
				document.querySelector('#bx').innerHTML = Ready //$("#bx").html(Ready);
				document.querySelector('#auftr0').innerHTML = Ready //$("#auftr0").html(Ready);
				document.location.href = document.location.href;
				window.clearInterval(ShipyardInterval);
				return;
			}
			Amount = Amount.reset(Shipyard[0][1]);
		} else {
			document.querySelector('#auftr0').textContent = Amount.toString()
			// $("#auftr0").text(Amount.toString());
		}
		hanger_id = 0;
		v = new Date();
		s = 0;
	}
	document.querySelector('#bx').textContent = GetRestTimeFormat(s)
	// $("#bx").text(GetRestTimeFormat(s));
}

/*------------------------------------------------------------*/
function counting(id) {
	var Data = DatatList[id];
	var sitem = '#s_' + (String(id));
	var Ellimet = document.getElementById(sitem)
	var it = 1;
	var count = Math.max(0, Number(Ellimet.querySelector('#input_' + (String(id))).value));
	//var countMin = Data.level;

	if (count > MaxCount) {
		count = MaxCount;
		Ellimet.querySelector('#input_' + (String(id))).value = MaxCount;
	}

	var costResources = 0;
	var res = 0;
	var costResources = Array();
	costResources[901] = 0;
	costResources[902] = 0;//
	costResources[903] = 0;
	costResources[921] = 0;
	costResources[922] = 0;

	var metal = Number(String(document.getElementById('current_metal').textContent).replace(/[.]/g, ''));
	var crystal = Number(String(document.getElementById('current_crystal').textContent).replace(/[.]/g, ''));
	var deuterium = Number(String(document.getElementById('current_deuterium').textContent).replace(/[.]/g, ''));
	var darkmatter = Number(String(document.getElementById('current_darkmatter').textContent).replace(/[.]/g, ''));
	var energy = Number(String(document.getElementById('current_energy').textContent).replace(/[.]/g, ''));
	var antimatter = Number(String(document.getElementById('current_antimatter').textContent).replace(/[.]/g, ''));
	DotsToCount();

	// var Data = DatatList[id];
	// var sitem = '#s_' + (String(id));
	// var Ellimet = $(sitem);
	// var it = 1;
	// var count = Math.max(0, Number(Ellimet.find('#input_' + (String(id))).val()));



	// var costResources = 0;
	// var res = 0;
	// var costResources = Array();
	// costResources[901] = 0;
	// costResources[902] = 0;
	// costResources[903] = 0;
	// costResources[921] = 0;
	// costResources[922] = 0;

	// var metal = Number(String($('#current_metal').text()).replace(/[.]/g, ''));
	// var crystal = Number(String($('#current_crystal').text()).replace(/[.]/g, ''));
	// var deuterium = Number(String($('#current_deuterium').text()).replace(/[.]/g, ''));
	// var darkmatter = Number(String($('#current_darkmatter').text()).replace(/[.]/g, ''));
	// var energy = Number(String($('#current_energy').text()).replace(/[.]/g, ''));
	// var antimatter = Number(String($('#current_antimatter').text()).replace(/[.]/g, ''));



	//

	if (typeof Data.costResources[901] !== "undefined") {
		res = Number(Data.costResources[901]);
		costResources[901] += Math.round(res * count);
	}
	if (typeof Data.costResources[902] !== "undefined") {
		res = Number(Data.costResources[902]);
		costResources[902] += Math.round(res * count);
	}
	if (typeof Data.costResources[903] !== "undefined") {
		res = Number(Data.costResources[903]);
		costResources[903] += Math.round(res * count);
	}
	if (typeof Data.costResources[911] !== "undefined") {
		res = Number(Data.costResources[911]);
		costResources[911] += Math.round(res * count);
	}
	if (typeof Data.costResources[921] !== "undefined") {
		res = Number(Data.costResources[921]);
		costResources[921] += Math.round(res * count);
	}
	if (typeof Data.costResources[922] !== "undefined") {
		res = Number(Data.costResources[922]);
		costResources[922] += Math.round(res * count);
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

	if (costResources[922] > 0) {
		let res922TextNodes = Ellimet.querySelectorAll('.res922 .text')
		let res922Nodes = Ellimet.querySelectorAll('.res922');

		let tooltipContent = LNGning + ' ' + LNGtech921 + ' ' + NumberGetHumanReadable(costResources[922] - antimatter)

		for (i = 0; i < res922TextNodes.length; i++) {
			res922TextNodes[i].innerHTML = NumberGetHumanReadable(costResources[922])
		}


		for (i = 0; i < res922Nodes.length; i++) {
			if (antimatter < costResources[922]) {
				updateResourceElementDOM(res922TextNodes, res922Nodes, tooltipContent, costResources[922], 'add')

			}
			else {
				updateResourceElementDOM(res922TextNodes, res922Nodes, tooltipContent, costResources[922], 'remove')
			}
		}

	}


	//



	s = Math.ceil(Data.elementTime * count);

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
	//
	countDots();

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

// $(function () {
// 	$('.count_ships_dots input[type=text]').keyup(function () {
// 		countDots();
// 	});
// 	$('form').submit(function () {
// 		DotsToCount();
// 	});
// });
function DotsToCount() {
	var element = document.querySelector('.count_ships_dots input[type=text]')
	for (let i = 0; i < element.length; i++) {
		element[i].value.replace(/[^[0-9]|\.]/g, '');
	}


}

function countDots() {
	var element = document.querySelector('.count_ships_dots input[type=text]')
	for (let i = 0; i < element.length; i++) {
		let updateValue = NumberGetHumanReadable(element[i].value.replace(/[^[0-9]|\.]/g, ''));
		element.value = updateValue
	}


}
// function DotsToCount() {
// 	$('.count_ships_dots input[type=text]').val(function (i, old) {
// 		return old.replace(/[^[0-9]|\.]/g, '');
// 	});
// }

// function countDots() {
// 	$('.count_ships_dots input[type=text]').val(function (i, old) {
// 		return NumberGetHumanReadable(old.replace(/[^[0-9]|\.]/g, ''));
// 	});
// }