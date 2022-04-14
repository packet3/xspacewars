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

//need elements
let icoBuilds = document.getElementsByClassName('ico_builds')
let icoFleet = document.getElementsByClassName('ico_fleet')
let icoShield = document.getElementsByClassName('ico_shield')
let icoStar = document.getElementsByClassName('ico_star')

let u000 = document.getElementsByClassName('u000')
let u200 = document.getElementsByClassName('u200')
let u400 = document.getElementsByClassName('u400')



function buildsopen() {
	modifyDOM(icoBuilds)
	for (let i = 0; i < u000.length; i++) {
		u000[i].style.display = 'block'
		u200[i].style.display = 'none'
		u400[i].style.display = 'none'
	}


};
function fleetopen() {
	modifyDOM(icoFleet)
	for (let i = 0; i < u000.length; i++) {
		u000[i].style.display = 'none'
		u200[i].style.display = 'block'
		u400[i].style.display = 'none'
	}

};
function defopen() {
	modifyDOM(icoShield)
	for (let i = 0; i < u000.length; i++) {
		u000[i].style.display = 'none'
		u200[i].style.display = 'none'
		u400[i].style.display = 'block'
	}

};
function allopen() {
	modifyDOM(icoStar)
	for (let i = 0; i < u000.length; i++) {
		u000[i].style.display = 'block'
		u200[i].style.display = 'block'
		u400[i].style.display = 'block'
	}

};

function modifyDOM(icoElm) {
	let recordBtn = document.getElementsByClassName('record_btn')


	for (let j = 0; j < recordBtn.length; j++) {

		recordBtn[j].classList.remove('record_btn_active')
		icoElm[0].classList.add('record_btn_active')
	}
}
/*Filtrs*/
function filtrsall() {
	filtersModifyDOm('filtrsall', '.imper_table .imper_f', 'all')

};
function filtrsplanet() {
	filtersModifyDOm('filtrsplanet', '.imper_table .imper_planet')

};
function filtrsmoon() {
	filtersModifyDOm('filtrsmoon', '.imper_table .imper_moon')

};

function filtersModifyDOm(filterElm, querySelectorElm, filterType = null) {
	let filter = document.getElementById(filterElm)
	let imperBTN = document.getElementsByClassName('imper_btn_filtrs')
	let imperTable = document.querySelectorAll('.imper_table .imper_f')
	let queryElm = document.querySelectorAll(querySelectorElm)
	console.log(filter)
	if (!filter.classList.contains('imper_btn_filtrs_activ')) {
		console.log('inside contains')
		for (let i = 0; i < imperBTN.length; i++) {
			imperBTN[i].classList.remove('imper_btn_filtrs_activ')
		}
		filter.classList.add('imper_btn_filtrs_activ')

		for (let i = 0; i < imperTable.length; i++) {
			if (filterType == 'all') {
				imperTable[i].style.display = 'inline-block'
			} else {
				imperTable[i].style.display = 'none'
			}


		}

		for (let i = 0; i < queryElm.length; i++) {
			queryElm[i].style.display = 'inline-block'


		}

	}
}
//---navigation
function goleft() {
	const left = document.getElementById('ipper_planets')
	left.scrollLeft += 161


};
function goright() {
	const right = document.getElementById('ipper_planets')
	right.scrollLeft -= 161

}
function goleftMAX() {
	const leftMax = document.getElementById('ipper_planets')
	leftMax.scrollLeft += 9999

};
function gorightMAX() {
	const rightMax = document.getElementById('ipper_planets')
	rightMax.scrollLeft -= 9999

}