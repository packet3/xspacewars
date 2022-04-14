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

$(document).ready(function () {
	document.querySelector('#count_calculator input[type=text]').addEventListener('keyup', function () {

		countDots();
	})

	const form = document.getElementsByTagName('form')

	form[0].addEventListener('submit', function (e) {
		e.preventDefault()
		DotsToCount();
	})

});

function DotsToCount() {
	var element = document.querySelector('#count_calculator input[type=text]')
	element.value.replace(/[^[0-9]|\.]/g, '');

}

function countDots() {
	var element = document.querySelector('#count_calculator input[type=text]')
	let updateValue = NumberGetHumanReadable(element.value.replace(/[^[0-9]|\.]/g, ''));
	element.value = updateValue

}

function updateVars(ID) {
	var shipID = ID;

	document.getElementById('shipID').value = shipID

	var imgPath = document.getElementById('img').getAttribute('data-src')
	document.getElementById('img').setAttribute('src', imgPath + shipID + '.gif')

	try {
		document.getElementById('traderHead').textContent = CostInfo[shipID][1]
	} catch (err) {
		//to avoid type error above is undefined when document first loaded
	}

	document.getElementById('batn').style.display = 'block'

	Reset();

}

function MaxShips() {
	var shipID = document.querySelector('#shipID') // $('#shipID').val();
	var count = document.querySelector('#count')

	try {
		count.value = CostInfo[shipID][0]
	} catch (err) {
		//to avoid type error above is undefined when document first loaded
	}
	Total();
}

function Total() {
	DotsToCount();
	var Count = document.getElementById('count').value// $('#count').val();

	if (isNaN(Count) || Count < 0) {
		document.getElementById('count').value = 0
		// $('#count').val(0);
		Count = 0;
	}
	countDots();
	var shipID = document.getElementById('shipID').value //$('#Element').val();

	try {
		let totalMetal = NumberGetHumanReadable(CostInfo[shipID][2][901] * Count * (1 - Charge / 100))
		let totalCrystal = NumberGetHumanReadable(CostInfo[shipID][2][902] * Count * (1 - Charge / 100))
		let totalDeuterium = NumberGetHumanReadable(CostInfo[shipID][2][903] * Count * (1 - Charge / 100))
		let totalDarkMatter = NumberGetHumanReadable(CostInfo[shipID][2][921] * Count * (1 - Charge / 100))

		document.querySelector('#total_metal').textContent = totalMetal
		document.querySelector('#total_crystal').textContent = totalCrystal
		document.querySelector('#total_deuterium').textContent = totalDeuterium
		document.querySelector('#total_darkmatter').textContent = totalDarkMatter
	} catch (err) {
		// silent fail
	}

}
function Reset() {
	document.getElementById('count').value = 0
	document.getElementById('total_metal').textContent = 0
	document.getElementById('total_crystal').textContent = 0
	document.getElementById('total_deuterium').textContent = 0
	document.getElementById('total_darkmatter').textContent = 0

}

$(document).ready(function () {
	updateVars();
});