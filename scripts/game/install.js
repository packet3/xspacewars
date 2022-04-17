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
function submitftp() {
	let ftpForm = document.getElementById('ftpCred');
	let formData = new FormData(ftpForm);
	fetch('?mode=ajax&action=ftp&lang=' + location.search.split('&')[1].substr('-2') + '&' + formData)
		.then(response => response.json())
		.then(data => {
			if (data == "")
				document.location.reload();
			else
				Dialog.alert(data);
		})
	// $.get('?mode=ajax&action=ftp&lang=' + location.search.split('&')[1].substr('-2') + '&' + $('#ftp').serialize(), function (data) {
	// 	if (data == "")
	// 		document.location.reload();
	// 	else
	// 		Dialog.alert(data);
	// });
}

//not sure if below is used??
// function submitinstall() {
// 	$.getJSON('?mode=ajax&action=install&lang=' + location.search.split('&')[2].substr('-2') + '&' + $('#install').serialize(), function (data) {
// 		alert(data.msg);
// 		if (!data.error)
// 			document.location.href = '?mode=ins&page=2&lang=' + location.search.split('&')[2].substr('-2');
// 	});
// 	return false;
// }