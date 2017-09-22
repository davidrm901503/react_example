import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu'


import registerServiceWorker from './registerServiceWorker';

var options = {
    background: "black"
}
ReactDOM.render(
    <Menu  name="Name" options ={options} >

    </Menu>,document.getElementById('root')
);

registerServiceWorker();


function run() {
    // variables
    var container = document.getElementById('menurc');
    var menu = container.lastChild;

    var submenus = menu.querySelectorAll(".dropdown, .megamenu");
    if (window.innerWidth > 768) {
        var menu_width = container.offsetWidth;
        submenus.forEach(function(el) {

            el.style.display = 'block';

            if (el.parentNode.offsetLeft + el.offsetWidth > menu_width)
                el.style.right = '0';
            else {
                if (menu_width == el.offsetWidth || (menu_width -el.offsetWidth) < 20)
                    el.style.left = '0px';
                if (el.parentNode.offsetLeft + el.offsetWidth < menu_width)
                    el.style.right = 'auto';
            }
            el.style.display = 'none';
        });

    }

}
function resize() {
    // variables
    var container = document.getElementById('menurc');
    var menu = container.lastChild;

    var submenus = menu.querySelectorAll(".dropdown, .megamenu");

    submenus.forEach(function(el) {
        el.style.display = 'none';
    });



}
window.addEventListener("resize", resize);

// in case the document is already rendered
if (document.readyState != 'loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function() {
        if (document.readyState == 'complete') run();
    });