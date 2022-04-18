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

function OpenBox(Key) {
	var btn = document.querySelector('#open_btn_' + Key) //$('#open_btn_'+Key)
	if (btn.textContent == '+') {
		document.querySelector('#box_' + Key).style.display = 'block'

		btn.textContent = '-'
	}
	else {
		document.querySelector('#box_' + Key).style.display = 'none'

		btn.textContent = '+'
	}
}

function GenerateName() {
	fetch('game.php?page=planet&mode=GenerateName')
		.then(response => response.json())
		.then(data => {
			document.querySelector('#name').value = data.message


		})
		.catch(error => {
			console.log(error)
		});
	// $.getJSON('game.php?page=planet&mode=GenerateName', function (response) {
	// 	$('#name').val(response.message);
	// });
}

function Fild() {
	var Count = document.querySelector('#filds').value // $('#filds').val();
	var type_fields = document.querySelector('#type_fields').value //$('#type_fields').val();
	var purchased_fields = document.querySelector('#purchased_fields').value // $('#purchased_fields').val();
	var power_fields = document.querySelector('#power_fields').value // $('#power_fields').val();

	if (isNaN(Count) || Count < 0) {
		document.querySelector('#filds').value = 0
		// $('#filds').val(0);
		Count = 0;
	}

	var cost_i = 0;
	var cost = 0;

	for (var i = 0; i < Count; i++) {
		cost_i = Math.round(type_fields * Math.pow(power_fields, Number(purchased_fields) + Number(i)));
		cost = Number(cost) + Number(cost_i);
	}
	document.querySelector('#cost_filds').textContent = NumberGetHumanReadable(cost)
	// $('#cost_filds').text(NumberGetHumanReadable(cost));
	cost = 0; step = 0; cost_i = 0;
}

function Diameter() {
	var Count = document.querySelector('#diameters').value // $('#diameters').val();
	var type_diameters = document.querySelector('#type_diameters').value // $('#type_diameters').val();
	var purchased_diameters = document.querySelector('#purchased_diameters').value //$('#purchased_diameters').val();
	var power_diameters = document.querySelector('#power_diameters').value // $('#power_diameters').val();

	if (isNaN(Count) || Count < 0) {
		document.querySelector('#diameters').value = 0
		// $('#diameters').val(0);
		Count = 0;
	}

	var cost_i = 0;
	var cost = 0;

	for (var i = 0; i < Count; i++) {
		cost_i = Math.round(type_diameters * Math.pow(power_diameters, Number(purchased_diameters) + Number(i)));
		cost = Number(cost) + Number(cost_i);
	}

	document.querySelector('#cost_diameters').textContent = NumberGetHumanReadable(cost)
	// $('#cost_diameters').text(NumberGetHumanReadable(cost));
	cost = 0; step = 0; cost_i = 0;
}

function TPort() {
	var galaxy = document.querySelector('#galaxy').value //$('#galaxy').val();
	var system = document.querySelector('#system').value //$('#system').val();
	var planet = document.querySelector('#planets').value //$('#planets').val();
	var galaxy1 = document.querySelector('#galaxy1').value //$('#galaxy1').val();
	var system1 = document.querySelector('#system1').value //$('#system1').val();
	var planet1 = document.querySelector('#planet1').value //$('#planet1').val();

	if (isNaN(galaxy) || galaxy < 0) {
		document.querySelector('#galaxy').value = 1
		// $('#galaxy').val(1);
		galaxy = 1;
	}
	if (isNaN(system) || system < 0) {
		document.querySelector('#system').value = 1
		// $('#system').val(1);
		system = 1;
	}
	if (isNaN(planet) || planet < 0) {
		document.querySelector('#planets').value = 1
		// $('#planets').val(1);
		planet = 1;
	}
	document.querySelector('#planets').textContent = NumberGetHumanReadable(1000 * Math.abs(system1 - system) + 15000 * Math.abs(galaxy1 - galaxy) + 2500 * Math.abs(planet1 - planet))
	// $('#cost_tp').text(NumberGetHumanReadable(1000 * Math.abs(system1 - system) + 15000 * Math.abs(galaxy1 - galaxy) + 2500 * Math.abs(planet1 - planet)));
}