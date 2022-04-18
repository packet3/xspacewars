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
	var Amount = parseInt(document.querySelector('#amount' + Element).value) //$('#amount'+Element).val());
	var metal = parseInt(document.querySelector('#res_901').textContent.replace((/\./g, ''))); //$('#res_901').text().replace(/\./g, ''));
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element) //$('#price'+Element);

	if (TotalPrice <= metal)
		PriceE.style.color = 'lime'
	// PriceE.css('color','lime');
	else
		PriceE.style.color = 'red'
	// PriceE.css('color','red');

	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)
	// PriceE.html(NumberGetHumanReadable(TotalPrice));
}

function Price902(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value) //$('#amount'+Element).val());
	var crystal = parseInt(document.querySelector('#res_902').textContent.replace((/\./g, ''))); //$('#res_901').text().replace(/\./g, ''));
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element) //$('#price'+Element);

	if (TotalPrice <= crystal)
		PriceE.style.color = 'lime'
	// PriceE.css('color','lime');
	else
		PriceE.style.color = 'red'
	// PriceE.css('color','red');

	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)


}

function Price903(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value) //$('#amount'+Element).val());
	var deuterium = parseInt(document.querySelector('#res_903').textContent.replace((/\./g, ''))); //$('#res_901').text().replace(/\./g, ''));
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element) //$('#price'+Element);

	if (TotalPrice <= deuterium)
		PriceE.style.color = 'lime'
	// PriceE.css('color','lime');
	else
		PriceE.style.color = 'red'
	// PriceE.css('color','red');

	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)


}

function Price921(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value) //$('#amount'+Element).val());
	var darkmatter = parseInt(document.querySelector('#res_921').textContent.replace((/\./g, ''))); //$('#res_901').text().replace(/\./g, ''));
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element) //$('#price'+Element);

	if (TotalPrice <= darkmatter)
		PriceE.style.color = 'lime'
	// PriceE.css('color','lime');
	else
		PriceE.style.color = 'red'
	// PriceE.css('color','red');

	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)


}

function Price922(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value) //$('#amount'+Element).val());
	var antimatter = parseInt(document.querySelector('#res_922').textContent.replace((/\./g, ''))); //$('#res_901').text().replace(/\./g, ''));
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element) //$('#price'+Element);

	if (TotalPrice <= antimatter)
		PriceE.style.color = 'lime'
	// PriceE.css('color','lime');
	else
		PriceE.style.color = 'red'
	// PriceE.css('color','red');

	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)


}

function Price923(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value) //$('#amount'+Element).val());
	var stardust = parseInt(document.querySelector('#res_923').textContent.replace((/\./g, ''))); //$('#res_901').text().replace(/\./g, ''));
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element) //$('#price'+Element);

	if (TotalPrice <= stardust)
		PriceE.style.color = 'lime'
	// PriceE.css('color','lime');
	else
		PriceE.style.color = 'red'
	// PriceE.css('color','red');

	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)


}

function Price924(Element, Price) {
	var Amount = parseInt(document.querySelector('#amount' + Element).value) //$('#amount'+Element).val());
	var contein = parseInt(document.querySelector('#res_924').textContent.replace((/\./g, ''))); //$('#res_901').text().replace(/\./g, ''));
	var TotalPrice = Price * Amount;

	var PriceE = document.querySelector('#price' + Element) //$('#price'+Element);

	if (TotalPrice <= contein)
		PriceE.style.color = 'lime'
	// PriceE.css('color','lime');
	else
		PriceE.style.color = 'red'
	// PriceE.css('color','red');

	PriceE.innerHTML = NumberGetHumanReadable(TotalPrice)


}