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
//Арсeнал
function ars() {
	let star = document.querySelectorAll('.ico_star')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!star[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		star[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.ars_elements .build_box')
		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'block'
		}
	}


};

function ars1() {
	let fleet = document.querySelectorAll('.ico_fleet')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!fleet[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		fleet[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.ars_elements .build_box')
		let query2 = document.querySelectorAll('.ars_elements .ars1')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}


};

function ars2() {
	let shield = document.querySelectorAll('.ico_shield')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!shield[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		shield[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.ars_elements .build_box')
		let query2 = document.querySelectorAll('.ars_elements .ars2')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};
//Флот - оборона
function rank() {

	let star = document.querySelectorAll('.ico_star')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!star[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		star[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'block'
		}
	}


};

function rank0() {

	let rank0 = document.querySelectorAll('.ico_rank_0')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!rank0[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		rank0[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .rank0')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}


};

function rank1() {
	let rank1 = document.querySelectorAll('.ico_rank_1')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!rank1[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		rank1[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .rank1')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};

function rank2() {
	let rank2 = document.querySelectorAll('.ico_rank_2')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!rank2[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		rank2[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .rank2')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};

function rank3() {
	let rank3 = document.querySelectorAll('.ico_rank_3')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!rank3[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		rank3[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .rank3')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};
//Постройки
function build() {
	let star = document.querySelectorAll('.ico_star')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!star[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		star[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'block'
		}
	}

};

function build1() {
	let build1 = document.querySelectorAll('.ico_build_1')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!build1[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		build1[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .build1')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};

function build2() {
	let build2 = document.querySelectorAll('.ico_build_2')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!build2[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		build2[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .build2')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};

function build3() {
	let build3 = document.querySelectorAll('.ico_build_3')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!build3[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		build3[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .build3')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};

function build4() {
	let build4 = document.querySelectorAll('.ico_build_4')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!build4[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		build4[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .build4')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};
//Исследования
function tech() {
	let star = document.querySelectorAll('.ico_star')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!star[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		star[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'block'
		}
	}

};

function tech1() {
	let tech1 = document.querySelectorAll('.ico_tech_1')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!tech1[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		tech1[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .tech1')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};

function tech2() {
	let tech2 = document.querySelectorAll('.ico_tech_2')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!tech2[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		tech2[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .tech2')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};

function tech3() {
	let tech3 = document.querySelectorAll('.ico_tech_3')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!tech3[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		tech3[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .tech3')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};

function tech4() {
	let tech4 = document.querySelectorAll('.ico_tech_4')
	let recordBtn = document.querySelectorAll('.record_btn')

	if (!tech4[0].classList.contains('record_btn_active')) {
		for (let i = 0; i < recordBtn.length; i++) {
			recordBtn[i].classList.remove('record_btn_active')
		}
		tech4[0].classList.add('record_btn_active')

		let query = document.querySelectorAll('.build_elements .build_box')
		let query2 = document.querySelectorAll('.build_elements .tech4')

		for (let i = 0; i < query.length; i++) {
			query[i].style.display = 'none'
		}

		for (let i = 0; i < query2.length; i++) {
			query2[i].style.display = 'block'
		}
	}

};