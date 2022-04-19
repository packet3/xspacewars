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

function buildsopen() {
	let icoBuilds = document.querySelector('.ico_builds');
	let recordBtn = document.querySelectorAll('.record_btn');

	if (!icoBuilds.classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}

		icoBuilds.classList.add('record_btn_active')

		document.querySelector('#u000').style.display = 'block'
		document.querySelector('#u100').style.display = 'none'
		document.querySelector('#u200').style.display = 'none'
		document.querySelector('#u400').style.display = 'none'
	}

};
function techopen() {

	let icoTech = document.querySelector('.ico_tech');
	let recordBtn = document.querySelectorAll('.record_btn');

	if (!icoTech.classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}

		icoTech.classList.add('record_btn_active')

		document.querySelector('#u000').style.display = 'none'
		document.querySelector('#u100').style.display = 'block'
		document.querySelector('#u200').style.display = 'none'
		document.querySelector('#u400').style.display = 'none'
	}

};

function fleetopen() {
	let icoFleet = document.querySelector('.ico_fleet');
	let recordBtn = document.querySelectorAll('.record_btn');

	if (!icoFleet.classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}

		icoFleet.classList.add('record_btn_active')

		document.querySelector('#u000').style.display = 'none'
		document.querySelector('#u100').style.display = 'none'
		document.querySelector('#u200').style.display = 'block'
		document.querySelector('#u400').style.display = 'none'
	}


};
function defopen() {
	let icoShield = document.querySelector('.ico_shield');
	let recordBtn = document.querySelectorAll('.record_btn');

	if (!icoShield.classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}

		icoShield.classList.add('record_btn_active')

		document.querySelector('#u000').style.display = 'none'
		document.querySelector('#u100').style.display = 'none'
		document.querySelector('#u200').style.display = 'none'
		document.querySelector('#u400').style.display = 'block'
	}


};
function allopen() {
	let icoStar = document.querySelector('.ico_star');
	let recordBtn = document.querySelectorAll('.record_btn');

	if (!icoStar.classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}

		icoStar.classList.add('record_btn_active')

		document.querySelector('#u000').style.display = 'block'
		document.querySelector('#u100').style.display = 'block'
		document.querySelector('#u200').style.display = 'block'
		document.querySelector('#u400').style.display = 'block'
	}


};

