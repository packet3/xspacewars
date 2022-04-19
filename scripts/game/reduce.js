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

function planet_select(id) {
	let planetID = document.querySelector('#p' + id)
	if (planetID.querySelector('checkbox').checked) {
		planetID.querySelector('checkbox').checked = false
		document.querySelector('#prow_' + id).classList.remove('rd_planet_row_active')
	} else {
		planetID.querySelector('checkbox').checked = true
		document.querySelector('#prow_' + id).classList.add('rd_planet_row_active')
	}
	// if($('#p'+id).prop('checked'))
	// {
	// 	$('#p'+id).prop('checked', false);
	// 	$('#prow_'+id).removeClass('rd_planet_row_active');
	// }
	// else
	// {
	// 	$('#p'+id).prop('checked', true);
	// 	$('#prow_'+id).addClass('rd_planet_row_active');
	// }
};
function planet_select_all() {

	let planetSelectAll = document.querySelectorAll('.rd_checkbox')
	let planetRowSelect = document.querySelectorAll('.rd_planet_row_select')
	for (let i = 0; i < planetSelectAll.length; i++) {
		planetSelectAll[i].querySelector('checkbox').checked = true
	}

	for (let i = 0; i < planetRowSelect.length; i++) {
		planetRowSelect[i].classList.add('rd_planet_row_active')
	}
	// $('.rd_checkbox').prop('checked', true);
	// $('.rd_planet_row_select').addClass('rd_planet_row_active');
}
function planet_reset_all() {
	let planetResetAll = document.querySelectorAll('.rd_checkbox')
	let planetRowSelect = document.querySelectorAll('.rd_planet_row_select')
	for (let i = 0; i < planetResetAll.length; i++) {
		planetResetAll[i].querySelector('checkbox').checked = false
	}

	for (let i = 0; i < planetRowSelect.length; i++) {
		planetRowSelect[i].classList.remove('rd_planet_row_active')
	}

	// $('.rd_checkbox').prop('checked', false);
	// $('.rd_planet_row_select').removeClass('rd_planet_row_active');
}