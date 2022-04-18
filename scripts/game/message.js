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
Message = {
	MessID: 0,

	MessageCount: function () {
		if (Message.MessID == 100) {
			try {
				document.querySelector('#unread_0').textContent = 0
				document.querySelector('#unread_1').textContent = 0
				document.querySelector('#unread_2').textContent = 0
				document.querySelector('#unread_3').textContent = 0
				document.querySelector('#unread_4').textContent = 0
				document.querySelector('#unread_5').textContent = 0
				document.querySelector('#unread_15').textContent = 0
				document.querySelector('#unread_99').textContent = 0
				document.querySelector('#unread_100').textContent = 0
				document.querySelector('#newmes').textContent = ''
			} catch (err) {

			}


		} else {
			try {
				var count = parseInt(document.querySelector('#unread_' + Message.MessID).textContent);
				var lmnew = parseInt(document.querySelector('#newmesnum').textContent);
				// var count = parseInt($('#unread_' + Message.MessID).text());
				// var lmnew = parseInt($('#newmesnum').text());

				document.querySelector('#unread_' + Message.MessID).textContent = 0
				// $('#unread_' + Message.MessID).text('0');
				if (Message.MessID != 999) {
					document.querySelector('#unread_100').textContent = document.querySelector('#unread_100').textContent - count
					// $('#unread_100').text($('#unread_100').text() - count);
				}

				if (lmnew - count <= 0)
					document.querySelector('#newmes').textContent = ''
				// $('#newmes').text('');
				else
					document.querySelector('#newmesnum').textContent = lmnew - count
				// $('#newmesnum').text(lmnew - count);
			} catch (err) {

			}

		}
	},

	getMessages: function (MessID, page) {
		if (typeof page === "undefined") {
			page = 1;
		}
		Message.MessID = MessID;
		Message.MessageCount(MessID);

		document.querySelector('#loading').style.display = 'inline-block'


		fetch('game.php?page=messages&mode=view&messcat=' + MessID + '&site=' + page + '&ajax=1')
			.then(response => response.text())
			.then(data => {

				document.querySelector('#loading').style.display = 'none'
				// $('#messagestable').remove();
				document.querySelector('#mes_viw').innerHTML = data

			})
			.catch(error => {
				console.log(error)
			});

	},

	stripHTML: function (string) {
		return string.replace(/<(.|\n)*?>/g, '');
	},

	CreateAnswer: function (Answer) {
		var Answer = Message.stripHTML(Answer);
		if (Answer.substr(0, 3) == "Re:") {
			return 'Re[2]:' + Answer.substr(3);
		} else if (Answer.substr(0, 3) == "Re[") {
			var re = Answer.replace(/Re\[(\d+)\]:.*/, '$1');
			return 'Re[' + (parseInt(re) + 1) + ']:' + Answer.substr(5 + parseInt(re.length))
		} else {
			return 'Re:' + Answer
		}
	},

	getMessagesIDs: function (Infos) {
		var IDs = [];
		$.each(Infos, function (index, mess) {
			if (mess.value == 'on')
				IDs.push(mess.name.replace(/delmes\[(\d+)\]/, '$1'));
		});
		return IDs;
	}
}