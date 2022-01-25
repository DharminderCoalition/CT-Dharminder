document.querySelector('.btn_signin').addEventListener('click', addclass);
document.querySelector('.btn_signup').addEventListener('click', removeclass);

// adding function
function addclass() {
    document.querySelector('#slider').classList.add("anime");
    document.querySelector('#signup').style.transform = ('translatey(100%)')
    document.querySelector('#signin').style.transform = ('translatey(100%)')
    document.querySelector('.left_text').style.transform = ('translatex(-100%)')
    document.querySelector('.right_text').style.transform = ('translatex(0)')
}
// removing
function removeclass() {
    document.querySelector('#slider').classList.remove("anime");
    document.querySelector('#signup').style.transform = ('translatey(0)')
    document.querySelector('#signin').style.transform = ('translatey(0)')
    document.querySelector('.left_text').style.transform = ('translatex(0)')
    document.querySelector('.right_text').style.transform = ('translatex(100%)')


}