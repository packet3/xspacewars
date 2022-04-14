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

function CheckArg() {

	r901 = document.getElementById('r901').value //$('#r901').val();
	r902 = document.getElementById('r902').value //$('#r902').val();
	r903 = document.getElementById('r903').value //$('#r903').val();


	if (r901 + r902 + r903 > 0) {
		document.getElementById('form').submit();
		//$('#form').submit();
	} else {
		alert('???');
	}
	return false;
}



var ContentDOM = document.getElementById('ally_content'),
	CountPlanet = 0,
	CostOne = 0,
	r901 = 0,
	r902 = 0,
	r903 = 0
	// DOMr901 = document.getElementById('r901'),
	// DOMr902 = document.getElementById('r902'),
	// DOMr903 = document.getElementById('r903'),
	// DOMs901 = document.getElementById('s901'),
	// DOMs902 = document.getElementById('s902'),
	// DOMs903 = document.getElementById('s903')
	;

$(document).ready(function () {
	DOMr901 = document.getElementById('r901'),
		DOMr902 = document.getElementById('r902'),
		DOMr903 = document.getElementById('r903'),
		DOMs901 = document.getElementById('s901'),
		DOMs902 = document.getElementById('s902'),
		DOMs903 = document.getElementById('s903')
	DOMs922 = document.getElementById('cost') //ContentDOM.find('#cost');

	DOMr901.addEventListener('keyup', function () {

		return CalculatorResources()
	})

	DOMr902.addEventListener('keyup', function () {
		return CalculatorResources()
	})

	DOMr903.addEventListener('keyup', function () {
		return CalculatorResources()
	})


});

function CalculatorResources() {
	var Max901 = Number(getRessource('metal'));
	var Max902 = Number(getRessource('crystal'));
	var Max903 = Number(getRessource('deuterium'));
	var Max922 = Number(getRessource('antimatter'));

	var Val901 = Number(DOMr901.value.replace(/[^[0-9]|\.]/g, ''));
	var Val902 = Number(DOMr902.value.replace(/[^[0-9]|\.]/g, ''));
	var Val903 = Number(DOMr903.value.replace(/[^[0-9]|\.]/g, ''));

	var sVal901 = Val901 * CountPlanet;
	var sVal902 = Val902 * CountPlanet;
	var sVal903 = Val903 * CountPlanet;
	var sVal922 = CostOne * CountPlanet;

	if (sVal901 > Max901) {
		DOMs901.textContent = NumberGetHumanReadable(sVal901)
		DOMs901.style.color = '#DC2E31'

	} else {
		DOMs901.textContent = NumberGetHumanReadable(sVal901)
		DOMs901.style.color = '#a47d7a'

	}


	if (sVal902 > Max902) {
		DOMs902.textContent = NumberGetHumanReadable(sVal902)
		DOMs902.style.color = '#DC2E31'

	} else {
		DOMs902.textContent = NumberGetHumanReadable(sVal902)
		DOMs902.style.color = '#5ca6aa'

	}


	if (sVal903 > Max903) {
		DOMs903.textContent = NumberGetHumanReadable(sVal903)
		DOMs903.style.color = '#DC2E31'

	} else {
		DOMs903.textContent = NumberGetHumanReadable(sVal903)
		DOMs903.style.color = '#339966'

	}


	DOMr901.value = NumberGetHumanReadable(Val901);
	DOMr902.value = NumberGetHumanReadable(Val902);
	DOMr903.value = NumberGetHumanReadable(Val903);

	if (sVal922 > Max922) {
		DOMs922.textContent = NumberGetHumanReadable(sVal922)
		DOMs922.style.color = '#DC2E31'

	} else {
		DOMs922.textContent = NumberGetHumanReadable(sVal922)
		DOMs922.style.color = '#76C400'

	}


}

function planet_select(id) {
	let pElm = document.getElementById('p' + id)
	let pRow = document.getElementById('prow_' + id)
	if (pElm.checked) {
		if (CountPlanet > 0)
			CountPlanet--;

		CalculatorResources();
		pElm.checked = false
		pRow.classList.remove('rd_planet_row_active')

	} else {
		CountPlanet++;
		CalculatorResources();
		pElm.checked = true
		pRow.classList.add('rd_planet_row_active')
	}
	// if ($('#p' + id).prop('checked')) {

	// 	if (CountPlanet > 0)
	// 		CountPlanet--;

	// 	CalculatorResources();
	// 	$('#p' + id).prop('checked', false);
	// 	$('#prow_' + id).removeClass('rd_planet_row_active');
	// }
	// else {
	// 	CountPlanet++;
	// 	CalculatorResources();
	// 	$('#p' + id).prop('checked', true);
	// 	$('#prow_' + id).addClass('rd_planet_row_active');
	// }
};

function planet_select_all() {
	CountPlanet = MaxPlanet;
	CalculatorResources();

	let rdCheckBox = document.getElementsByClassName('rd_checkbox')
	let rdPlanet = document.getElementsByClassName('rd_planet_row_select')


	for (let i = 0; i < rdCheckBox.length; i++) {
		rdCheckBox[i].checked = true
		rdPlanet[i].classList.add('rd_planet_row_active')
	}
	// $('.rd_checkbox').prop('checked', true);
	// $('.rd_planet_row_select').addClass('rd_planet_row_active');
}

function planet_reset_all() {
	CountPlanet = 0;
	CalculatorResources();
	let rdCheckBox = document.getElementsByClassName('rd_checkbox')
	let rdPlanet = document.getElementsByClassName('rd_planet_row_select')


	for (let i = 0; i < rdCheckBox.length; i++) {
		rdCheckBox[i].checked = false
		rdPlanet[i].classList.remove('rd_planet_row_active')
	}
	// $('.rd_checkbox').prop('checked', false);
	// $('.rd_planet_row_select').removeClass('rd_planet_row_active');
}
function delivery_send() {
	console.log('dlivery send')
	DOMr901.value.replace(/[^[0-9]|\.]/g, '');
	DOMr902.value.replace(/[^[0-9]|\.]/g, '');
	DOMr903.value.replace(/[^[0-9]|\.]/g, '');

	// DOMr901.val(function (i, old) {
	// 	return old.replace(/[^[0-9]|\.]/g, '');
	// });
	// DOMr902.val(function (i, old) {
	// 	return old.replace(/[^[0-9]|\.]/g, '');
	// });
	// DOMr903.val(function (i, old) {
	// 	return old.replace(/[^[0-9]|\.]/g, '');
	// });

	return true;
}