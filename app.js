const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav--container');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const banner = document.querySelector('.header--img');
const logo = document.querySelector('.header__title--container');
const list_item=document.querySelector('.header__nav__menu--liste');

burger.addEventListener('click', function () {
    menu.classList.toggle('menu--open')
    body.classList.toggle('body--open')
    main.classList.toggle('hidden')
    banner.classList.toggle('hidden')
    logo.classList.toggle('hidden')
});
list_item.addEventListener('click',function(){
    menu.classList.toggle('menu--open')
    body.classList.toggle('body--open')
    main.classList.toggle('hidden')
    banner.classList.toggle('hidden')
    logo.classList.toggle('hidden')
})