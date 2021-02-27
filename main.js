document.addEventListener('DOMContentLoaded', function(){
    const nav  = document.querySelector('.header-nav');
    // === МЕНЮ БУРГЕР ===
    function navMenu() {
        const burger = nav.lastElementChild, // КНОПКА БУРГЕР
            links  = burger.previousElementSibling.childNodes, // ЭЛЕМЕНТЫ МЕНЮ
            active = () => !nav.classList.contains('active')?nav.classList.add('active'):nav.classList.remove('active')
        burger.addEventListener('click', active);
        links.forEach(el => el.addEventListener('click', active));
    }
    navMenu();
    // === / МЕНЮ БУРГЕР ===
    
    // === ЗАЛИПАЛКА МЕНЮ ===
    function fixedNav() {
        const pointStart = nav.parentElement.parentElement.nextElementSibling;
        let scrollStart = pointStart.offsetTop;
        function scroll() {
            let scrolled = window.pageYOffset;
            scrolled > scrollStart ? nav.classList.add('fixed') :
            nav.classList.remove('fixed');
        }
        window.onscroll = scroll;
        window.onresize = scroll;
    }
    fixedNav();
        function parallax(selector){
        let w = window.scrollY;
        const bg = document.querySelector(selector);
        bg.style.transform = `translateY(${w/1.75}px)`;
    }
    window.onscroll = ()=>parallax('.header__bg img');
    // === / ЗАЛИПАЛКА МЕНЮ ===
});
