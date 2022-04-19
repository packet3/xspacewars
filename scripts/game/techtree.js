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

		let u0 = document.querySelectorAll('.u0')
		let u100 = document.querySelectorAll('.u100')
		let u200 = document.querySelectorAll('.u200')
		let u400 = document.querySelectorAll('.u400')
		let u600 = document.querySelectorAll('.u600')

		for (let i = 0; i < u0.length; i++) {
			u0[i].style.display = 'block'
		}

		for (let i = 0; i < u100.length; i++) {
			u100[i].style.display = 'none'
		}

		for (let i = 0; i < u200.length; i++) {
			u200[i].style.display = 'none'
		}
		for (let i = 0; i < u400.length; i++) {
			u400[i].style.display = 'none'
		}
		for (let i = 0; i < u600.length; i++) {
			u600[i].style.display = 'none'
		}
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

		let u0 = document.querySelectorAll('.u0')
		let u100 = document.querySelectorAll('.u100')
		let u200 = document.querySelectorAll('.u200')
		let u400 = document.querySelectorAll('.u400')
		let u600 = document.querySelectorAll('.u600')

		for (let i = 0; i < u0.length; i++) {
			u0[i].style.display = 'none'
		}

		for (let i = 0; i < u100.length; i++) {
			u100[i].style.display = 'block'
		}

		for (let i = 0; i < u200.length; i++) {
			u200[i].style.display = 'none'
		}
		for (let i = 0; i < u400.length; i++) {
			u400[i].style.display = 'none'
		}
		for (let i = 0; i < u600.length; i++) {
			u600[i].style.display = 'none'
		}
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

		let u0 = document.querySelectorAll('.u0')
		let u100 = document.querySelectorAll('.u100')
		let u200 = document.querySelectorAll('.u200')
		let u400 = document.querySelectorAll('.u400')
		let u600 = document.querySelectorAll('.u600')

		for (let i = 0; i < u0.length; i++) {
			u0[i].style.display = 'none'
		}

		for (let i = 0; i < u100.length; i++) {
			u100[i].style.display = 'none'
		}

		for (let i = 0; i < u200.length; i++) {
			u200[i].style.display = 'block'
		}
		for (let i = 0; i < u400.length; i++) {
			u400[i].style.display = 'none'
		}
		for (let i = 0; i < u600.length; i++) {
			u600[i].style.display = 'none'
		}
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

		let u0 = document.querySelectorAll('.u0')
		let u100 = document.querySelectorAll('.u100')
		let u200 = document.querySelectorAll('.u200')
		let u400 = document.querySelectorAll('.u400')
		let u600 = document.querySelectorAll('.u600')

		for (let i = 0; i < u0.length; i++) {
			u0[i].style.display = 'none'
		}

		for (let i = 0; i < u100.length; i++) {
			u100[i].style.display = 'none'
		}

		for (let i = 0; i < u200.length; i++) {
			u200[i].style.display = 'none'
		}
		for (let i = 0; i < u400.length; i++) {
			u400[i].style.display = 'block'
		}
		for (let i = 0; i < u600.length; i++) {
			u600[i].style.display = 'none'
		}
	}

};
function oficopen() {
	let icoOfficer = document.querySelector('.ico_oficer');
	let recordBtn = document.querySelectorAll('.record_btn');

	if (!icoOfficer.classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}

		icoOfficer.classList.add('record_btn_active')

		let u0 = document.querySelectorAll('.u0')
		let u100 = document.querySelectorAll('.u100')
		let u200 = document.querySelectorAll('.u200')
		let u400 = document.querySelectorAll('.u400')
		let u600 = document.querySelectorAll('.u600')

		for (let i = 0; i < u0.length; i++) {
			u0[i].style.display = 'none'
		}

		for (let i = 0; i < u100.length; i++) {
			u100[i].style.display = 'none'
		}

		for (let i = 0; i < u200.length; i++) {
			u200[i].style.display = 'none'
		}
		for (let i = 0; i < u400.length; i++) {
			u400[i].style.display = 'none'
		}
		for (let i = 0; i < u600.length; i++) {
			u600[i].style.display = 'block'
		}
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

		let u0 = document.querySelectorAll('.u0')
		let u100 = document.querySelectorAll('.u100')
		let u200 = document.querySelectorAll('.u200')
		let u400 = document.querySelectorAll('.u400')
		let u600 = document.querySelectorAll('.u600')

		for (let i = 0; i < u0.length; i++) {
			u0[i].style.display = 'block'
		}

		for (let i = 0; i < u100.length; i++) {
			u100[i].style.display = 'block'
		}

		for (let i = 0; i < u200.length; i++) {
			u200[i].style.display = 'block'
		}
		for (let i = 0; i < u400.length; i++) {
			u400[i].style.display = 'block'
		}
		for (let i = 0; i < u600.length; i++) {
			u600[i].style.display = 'block'
		}
	}

};

