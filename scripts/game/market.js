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
function open_market(IDblock, IDopen) {

	let btnTopaID = document.querySelectorAll('.gr_btn_top a.' + IDblock)
	let btnTopa = document.querySelectorAll('.gr_btn_top a')
	let markettContainer = document.querySelectorAll('.markett_conteiner')

	if (!btnTopaID[0].classList.contains('active')) {
		for (let i = 0; i < btnTopa.length; i++) {
			btnTopa[i].classList.remove('active')
		}
		btnTopaID[0].classList.add('active')

		for (let i = 0; i < markettContainer.length; i++) {
			markettContainer[i].style.display = 'none'
		}

		document.querySelector('#' + IDblock).style.display = 'block'

		if (IDopen != 'no')
			document.cookie = "open_market=" + IDopen




	}

}