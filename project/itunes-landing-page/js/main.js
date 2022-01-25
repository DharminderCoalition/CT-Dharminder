var bar = document.querySelector('.fa-bars');
var nav = document.querySelector('#navi');
var logo = document.querySelector('#logo_1');
bar.addEventListener('click', myfunction);

function myfunction() {
    nav.classList.toggle('show');
    nav.classList.toggle('hide');
}