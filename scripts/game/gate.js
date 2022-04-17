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
var Gate = {
	max: function (ID) {
		let ship = document.querySelector('#ship' + ID + '_input')
		ship.value = ship.textContent.replace(/\./g, "")
		// $('#ship'+ID+'_input').val($('#ship'+ID+'_value').text().replace(/\./g, ""));
	},

	submit: function () {
		let elm = document.querySelector('.jumpgate').querySelectorAll("input, select")
		let formData = null

		for (let i = 0; i < elm.length; i++) {
			if (formData == null) {
				formData = elm[i].name + '=' + elm[i].value + '&'
			} else {
				formData += elm[i].name + '=' + elm[i].value + '&'
			}

		}
		let stringToBeEncoded = formData.slice(0, -1) //remove the last & at end of stirng

		let data = encodeURIComponent(stringToBeEncoded)
		fetch('?page=information&mode=sendFleet&' + data)
			.then(response => response.json())
			.then(data => {
				alert(data.message);
				if (!data.error) {
					//parent.$.fancybox.close();
				}
			})
		// $.getJSON('?page=information&mode=sendFleet&' + $('.jumpgate').serialize(), function (data) {
		// 	alert(data.message);
		// 	if (!data.error) {
		// 		parent.$.fancybox.close();
		// 	}
		// });
	},
}