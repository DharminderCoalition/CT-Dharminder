var loader = document.querySelector('.loader');
var main = document.querySelector('.main');

function loading() {

    setTimeout(() => {
        loader.style.display = "none";
        loader.style.opacity = 0;

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 4000);
}
loading();