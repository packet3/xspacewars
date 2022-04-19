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
	// if(!$('.ico_builds').hasClass('record_btn_active'))
	// {
	//     $('.record_btn').removeClass('record_btn_active');	
	//     $('.ico_builds').addClass('record_btn_active');
	// 	$('.u0').show();
	// 	$('.u100').hide();
	// 	$('.u200').hide();
	// 	$('.u400').hide();
	// 	$('.u600').hide();
	// }
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
	// if(!$('.ico_tech').hasClass('record_btn_active'))
	// {
	//     $('.record_btn').removeClass('record_btn_active');	
	//     $('.ico_tech').addClass('record_btn_active');
	// 	$('.u0').hide();
	// 	$('.u100').show();
	// 	$('.u200').hide();
	// 	$('.u400').hide();
	// 	$('.u600').hide();
	// }
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
	// if(!$('.ico_fleet').hasClass('record_btn_active'))
	// {
	//     $('.record_btn').removeClass('record_btn_active');	
	//     $('.ico_fleet').addClass('record_btn_active');
	// 	$('.u0').hide();
	// 	$('.u100').hide();
	// 	$('.u200').show();
	// 	$('.u400').hide();
	// 	$('.u600').hide();
	// }
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
	// if(!$('.ico_shield').hasClass('record_btn_active'))
	// {
	//     $('.record_btn').removeClass('record_btn_active');	
	//     $('.ico_shield').addClass('record_btn_active');
	// 	$('.u0').hide();
	// 	$('.u100').hide();
	// 	$('.u200').hide();
	// 	$('.u400').show();
	// 	$('.u600').hide();
	// }
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
	// if(!$('.ico_oficer').hasClass('record_btn_active'))
	// {
	//     $('.record_btn').removeClass('record_btn_active');	
	//     $('.ico_oficer').addClass('record_btn_active');
	// 	$('.u0').hide();
	// 	$('.u100').hide();
	// 	$('.u200').hide();
	// 	$('.u400').hide();
	// 	$('.u600').show();
	// }
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
	// if(!$('.ico_star').hasClass('record_btn_active'))
	// {
	//     $('.record_btn').removeClass('record_btn_active');	
	//     $('.ico_star').addClass('record_btn_active');
	// 	$('.u0').show();
	// 	$('.u100').show();
	// 	$('.u200').show();
	// 	$('.u400').show();
	// 	$('.u600').show()
	// }
};

