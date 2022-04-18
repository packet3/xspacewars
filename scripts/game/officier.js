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
function GetOfficerTime(Element, Time) {
	if (Time == 0)
		return;

	document.querySelector('#time_' + Element).textContent = GetRestTimeFormat(Time)
	// $('#time_'+Element).text(GetRestTimeFormat(Time));
	Time--;
	window.setTimeout("GetOfficerTime(" + Element + ", " + Time + ")", 1000)
}