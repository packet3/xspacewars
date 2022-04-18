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


// $(function() {
// 	$('#tabs').tabs();
// });

function checkrename() {
	let nameID = document.querySelector('#name')
	if (nameID.value.length <= 1) {
		return false
	} else {
		fetch('game.php?page=overview&mode=rename&name=' + nameID.value)
			.then(response => response.json())
			.then(data => {
				alert(data.message);
				if (!data.error) {
					location.reload();
					console.log(data)
				}
			})
			.catch(error => {
				console.log(error)
			});
	}

	// if ($.trim($('#name').val()) == '') {
	// 	return false;
	// } else {
	// 	$.getJSON('game.php?page=overview&mode=rename&name=' + $('#name').val(), function (response) {
	// 		alert(response.message);
	// 		if (!response.error) {
	// 			parent.location.reload();
	// 		}
	// 	});
	// }
}

function checkcancel() {
	let passwordID = document.querySelector('#password')
	if (passwordID.value.length = 0) {
		return false
	} else {
		fetch('game.php?page=overview', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 'mode': 'delete', 'password': passwordID })
		})
			.then(response => response.json())
			.then(data => {
				if (data.ok) {
					parent.location.reload();
				}
			})
			.catch(error => {
				console.log(error)
			});
	}
	// var password = $('#password').val();
	// if (password == '') {
	// 	return false;
	// } else {
	// 	$.post('game.php?page=overview', { 'mode': 'delete', 'password': password }, function (response) {
	// 		alert(response.message);
	// 		if (response.ok) {
	// 			parent.location.reload();
	// 		}
	// 	}, "json");
	// }
}