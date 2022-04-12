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
	var Element = ID;

	document.getElementById('Element').value = Element

	var imgPath = document.getElementById('img').getAttribute('data-src')
	document.getElementById('img').setAttribute('src', imgPath + Element + '.gif')

	// $('#img').attr('src', $('#img').data('src') + Element + '.gif');
	document.getElementById('price').textContent = NumberGetHumanReadable(CostInfo[Element][2])

	document.getElementById('traderHead').textContent = CostInfo[Element][1]

	document.getElementById('batn').style.display = 'block'

	Reset();
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
	var Element = document.getElementById('Element').value //$('#Element').val();

	var priceFactor = NumberGetHumanReadable(CostInfo[Element][2] * Math.pow(CostInfo[Element][3], (Number(CostInfo[Element][0]) + Number(Count))))
	var priceCount = NumberGetHumanReadable(CostInfo[Element][2] * Count)

	document.getElementById('total_price_factor').textContent = priceFactor

	//No Longer Exsists??
	// document.getElementById('total_price_count').textContent = priceCount

}

function Reset() {
	document.getElementById('count').value = 0
	document.getElementById('total_price_factor').textContent = 0


}