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

function openV(IDblock, IDopenV) {
	let achMenuLiID = document.querySelector('.ach_menu li.' + IDblock)
	let achMenuLi = document.querySelectorAll('.ach_menu li')
	let settingLeft = document.querySelectorAll('.settingleft')
	if (!achMenuLiID.classList.contains('active')) {
		for (let i = 0; i < achMenuLi.length; i++) {
			achMenuLi[i].classList.remove('active')

		}
		achMenuLiID.classList.add('active')

		for (let i = 0; i < settingLeft.length; i++) {
			settingLeft[i].style.display = 'none'
		}

		document.querySelector('#' + IDblock).style.display = 'block'

		if (IDopenV != 'no')
			document.cookie = "openV=" + IDopenV

	}

}