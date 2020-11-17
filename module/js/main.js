$('.single-item').slick();

document.querySelector('.burger_menu_wrapper').onclick = function(){
    document.querySelector('.burger_menu').classList.toggle('activ');
    document.querySelector('.wrapper_nav').classList.toggle('activ');
    document.querySelector('.body').classList.toggle('activ');
    document.querySelector('.burger_menu_wrapper').classList.toggle('activ');
}