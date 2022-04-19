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

//topnav.js
//RealTimeRessisanzeige for 2Moons
// @version 1.0
// @copyright 2010 by ShadoX

function resourceTicker(config, init) {

	if (typeof init !== "undefined" && init === true)
		window.setInterval(function () { resourceTicker(config) }, 1000);

	var element = document.querySelector('#' + config.valueElem) //$('#'+config.valueElem);

	if (element.classList.contains('res_current_max')) {
		return false;
	}

	var nrResource = Math.max(0, Math.floor(parseFloat(config.available) + parseFloat(config.production) / 3600 * (serverTime.getTime() - startTime) / 1000));

	if (nrResource < config.limit[1]) {
		if (!element.classList.contains('res_current_warn') && nrResource >= config.limit[1] * 0.9) {
			element.classList.add('res_current_warn');
		}
		if (viewShortlyNumber) {
			element.setAttribute('data-tooltip-content', NumberGetHumanReadable(nrResource));
			element.innerHTML = shortly_number(nrResource);
		} else {
			element.innerHTML = NumberGetHumanReadable(nrResource);
		}
	} else {
		element.classList.add('res_current_max');
	}
}

function getRessource(name) {
	return parseInt(document.querySelector('#current_' + name).getAttribute('data-real')); // $('#current_' + name).data('real')
}