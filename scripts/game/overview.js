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

$(document).ready(function () {
	window.setInterval(function () {
		let fleets = document.querySelectorAll('.fleets')
		for (let i = 0; i < fleets.length; i++) {
			let fleetTime = fleets[i].getAttribute('fleet-time')
			let s = fleetTime - (serverTime.getTime() - startTime) / 1000

			if (s <= 0) {
				fleets[i].textContent = '-'

			} else {
				fleets[i].textContent = GetRestTimeFormat(s)

			}
		}

	}, 1000);

	window.setInterval(function () {
		let timer = document.querySelectorAll('.timer')
		for (let i = 0; i < timer.length; i++) {

			let time = timer[i].getAttribute('data-time')
			let s = time - (serverTime.getTime() - startTime) / 1000

			if (s == 0) {
				window.location.href = "game.php?page=overview";

			} else {
				timer[i].textContent = GetRestTimeFormat(s)

			}
		}

	}, 1000);
});