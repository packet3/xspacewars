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
function AJAX() {
	fetch('./json.php', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ 'ataks': ataks, 'spio': spio, 'unic': unic, 'rakets': rakets, 'ajax': 1, 'msg': msg })
	})
		.then(response => response.json())
		.then(data => {
			var indicators = document.getElementById('indicators');
			var newemail = document.getElementById('new_email');
			var beepataks = document.getElementById('beepataks');
			var msgaudio = document.getElementById('msgaudio');
			if (data.ICOFLEET) {
				indicators.innerHTML = data.ICOFLEET;
				if (data.SOUNDATAKS) {
					beepataks.play();
				}
				if (msg < data.msg) {
					if (data.SOUNDMSG) {
						msgaudio.play();
					}
				}
				ataks = data.ataks;
				spio = data.spio;
				unic = data.unic;
				rakets = data.rakets;
				msg = data.msg;
			}
		})

	// jQuery.post("./json.php", { 'ataks': ataks, 'spio': spio, 'unic': unic, 'rakets': rakets, 'ajax': 1, 'msg': msg }, function (data) {
	// 	var indicators = document.getElementById('indicators');
	// 	var newemail = document.getElementById('new_email');
	// 	var beepataks = document.getElementById('beepataks');
	// 	var msgaudio = document.getElementById('msgaudio');
	// 	if (data.ICOFLEET) {
	// 		indicators.innerHTML = data.ICOFLEET;
	// 		if (data.SOUNDATAKS) {
	// 			beepataks.play();
	// 		}
	// 		if (msg < data.msg) {
	// 			if (data.SOUNDMSG) {
	// 				msgaudio.play();
	// 			}
	// 		}
	// 		ataks = data.ataks;
	// 		spio = data.spio;
	// 		unic = data.unic;
	// 		rakets = data.rakets;
	// 		msg = data.msg;
	// 	}
	// }, "json"
	// );
}