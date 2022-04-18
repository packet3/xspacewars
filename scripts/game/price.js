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

function Price901(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value)
	var metal = parseInt(document.querySelector('#current_metal').textContent.replace(/\./g, ''))
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element)

	if (TotalPrice <= metal)
		PriceE.style.color = 'lime'

	else
		PriceE.style.color = 'red'


	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)

}

function Price902(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value)
	var crystal = parseInt(document.querySelector('#current_crystal').textContent.replace(/\./g, ''))
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element)

	if (TotalPrice <= crystal)
		PriceE.style.color = 'lime'

	else
		PriceE.style.color = 'red'


	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)

	// var Amount = parseInt($('#amount' + Element).val());
	// var crystal = parseInt($('#current_crystal').text().replace(/\./g, ''));
	// var TotalPrice = Price * Amount;

	// var PriceE = $('#price' + Element);

	// if (TotalPrice <= crystal)
	// 	PriceE.css('color', 'lime');
	// else
	// 	PriceE.css('color', 'red');

	// PriceE.html(NumberGetHumanReadable(TotalPrice));
}

function Price903(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value)
	var deuterium = parseInt(document.querySelector('#current_deuterium').textContent.replace(/\./g, ''))
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element)

	if (TotalPrice <= deuterium)
		PriceE.style.color = 'lime'

	else
		PriceE.style.color = 'red'


	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)

	// var Amount = parseInt($('#amount' + Element).val());
	// var deuterium = parseInt($('#current_deuterium').text().replace(/\./g, ''));
	// var TotalPrice = Price * Amount;

	// var PriceE = $('#price' + Element);

	// if (TotalPrice <= deuterium)
	// 	PriceE.css('color', 'lime');
	// else
	// 	PriceE.css('color', 'red');

	// PriceE.html(NumberGetHumanReadable(TotalPrice));
}

function Price921(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value)
	var darkmatter = parseInt(document.querySelector('#current_darkmatter').getAttribute('name').textContent.replace(/\./g, ''))
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element)

	if (TotalPrice <= darkmatter)
		PriceE.style.color = 'lime'

	else
		PriceE.style.color = 'red'


	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)

	// var Amount = parseInt($('#amount' + Element).val());
	// var darkmatter = parseInt(($('#current_darkmatter').attr('name')).text().replace(/\./g, ''));
	// var TotalPrice = Price * Amount;

	// var PriceE = $('#price' + Element);

	// if (TotalPrice <= darkmatter)
	// 	PriceE.css('color', 'lime');
	// else
	// 	PriceE.css('color', 'red');

	// PriceE.html(NumberGetHumanReadable(TotalPrice));
}

function Price922(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value)
	var antimatter = parseInt(document.querySelector('#current_antimatter').textContent.replace(/\./g, ''))
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element)

	if (TotalPrice <= antimatter)
		PriceE.style.color = 'lime'

	else
		PriceE.style.color = 'red'


	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)

	// var Amount = parseInt($('#amount' + Element).val());
	// var antimatter = parseInt($('#current_antimatter').text().replace(/\./g, ''));
	// var TotalPrice = Price * Amount;

	// var PriceE = $('#price' + Element);

	// if (TotalPrice <= antimatter)
	// 	PriceE.css('color', 'lime');
	// else
	// 	PriceE.css('color', 'red');

	// PriceE.html(NumberGetHumanReadable(TotalPrice));
}

function Price923(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value)
	var stardust = parseInt(document.querySelector('#current_stardust').textContent.replace(/\./g, ''))
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element)

	if (TotalPrice <= stardust)
		PriceE.style.color = 'lime'

	else
		PriceE.style.color = 'red'


	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)

	// var Amount = parseInt($('#amount' + Element).val());
	// var stardust = parseInt($('#current_stardust').text().replace(/\./g, ''));
	// var TotalPrice = Price * Amount;

	// var PriceE = $('#price' + Element);

	// if (TotalPrice <= stardust)
	// 	PriceE.css('color', 'lime');
	// else
	// 	PriceE.css('color', 'red');

	// PriceE.html(NumberGetHumanReadable(TotalPrice));
}

function Price924(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value)
	var contein = parseInt(document.querySelector('#current_container').textContent.replace(/\./g, ''))
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element)

	if (TotalPrice <= contein)
		PriceE.style.color = 'lime'

	else
		PriceE.style.color = 'red'


	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)

	// var Amount = parseInt($('#amount' + Element).val());
	// var contein = parseInt($('#current_container').text().replace(/\./g, ''));
	// var TotalPrice = Price * Amount;

	// var PriceE = $('#price' + Element);

	// if (TotalPrice <= contein)
	// 	PriceE.css('color', 'lime');
	// else
	// 	PriceE.css('color', 'red');

	// PriceE.html(NumberGetHumanReadable(TotalPrice));
}