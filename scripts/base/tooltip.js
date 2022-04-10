/**
 * Code based on  2Moons tooltip.js
 *   by Jan-Otto Kröpke 2009-2016
 *
 *  rewrote code to  to be vanilla js by Joe for  XSpace (xspacewars.com)
 * For the full copyright and license information, please view the LICENSE
 *
 * @package XSpace
 * @author joe <joe@xspacewars.com>
 * @copyright 2022 Joe
 * @licence MIT
 * @version 1.0.0
 * @link https://github.com/packet3/spacewars
 */

document.addEventListener('DOMContentLoaded', function () {
    // do something here ...
    console.log('Document Loaded')
    const tooltip = document.getElementsByClassName('tooltip');
    const tooltipSticky = document.getElementsByClassName('tooltip_sticky');



    for (var i = 0; i < tooltip.length; i++) {
        tooltip[i].addEventListener('mouseenter', e => {
            const tip = document.getElementById('tooltip');
            tip.innerHTML = e.target.getAttribute("data_tooltip_content")
            tip.style.display = 'block';

            //console.log(tip)

        });

        tooltip[i].addEventListener('mouseleave', e => {
            const tip = document.getElementById('tooltip');
            tip.style.display = 'none';
            //console.log(tip)

        });

        tooltip[i].addEventListener('mousemove', e => {
            const tip = document.getElementById('tooltip');
            var mousex = e.pageX + 20;
            var mousey = e.pageY + 20;
            var tipWidth = tip.clientWidth;
            var tipHeight = tip.clientHeight;
            var tipVisX = window.innerWidth - (mousex + tipWidth);
            var tipVisY = window.innerHeight - (mousey + tipHeight);
            if (tipVisX < 20) {
                mousex = e.pageX - tipWidth - 20;
            }

            if (tipVisY < 20) {
                mousey = e.pageY - tipHeight - 20;
            }
            tip.style.position = "absolute"
            tip.style.top = mousey + 'px'
            tip.style.left = mousex + 'px'


        });


    }

    // galaxy, buildings, hangar, defenses

    for (var i = 0; i < tooltipSticky.length; i++) {
        tooltipSticky[i].addEventListener('mouseenter', e => {
            const tip = document.getElementById('tooltip');
            tip.innerHTML = e.target.getAttribute("data_tooltip_content")
            tip.classList.add('tooltip_sticky_div')
            var mousex = e.pageX - tip.outerHeight / 2;
            var mousey = e.pageY - tip.outerWidth / 2;

            tip.style.position = "absolute"
            tip.style.top = mousey + 'px'
            tip.style.left = mousex + 'px'

            tip.style.display = 'block';
            //console.log(tip)

        });

        tooltipSticky[i].addEventListener('mouseleave', e => {
            const tip = document.getElementById('tooltip');
            tip.classList.remove('tooltip_sticky_div')
            tip.style.display = 'none';
            //console.log(tip)

        });

    }


}, false);



//     // ??? - OLD Code May not be needed will be removed in due course.
//     $(document).on('submit', ".tooltip_sticky1", function (e) {
//         var tip = $('#tooltip');
//         tip.html($(this).attr('data-tooltip-content'));
//         tip.addClass('tooltip_sticky_div1');
//         tip.css({
//             top: e.pageY - tip.outerHeight() / 2,
//             left: (e.pageX - tip.outerWidth() / 2) + 180
//         });
//         tip.show();
//     });
//     $(document).on('mouseleave', ".tooltip_sticky_div1", function () {
//         var tip = $('#tooltip');
//         tip.removeClass('tooltip_sticky_div1');
//         tip.hide();
//     });
// });