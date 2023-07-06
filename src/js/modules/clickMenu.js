export const clickMenu = () => {
    const burger = document.querySelector('.header__burger');
    const header = document.querySelector('.header');
    const closeBtn = document.querySelector('.header__close');

    burger.addEventListener('click', () => {
        header.classList.add('header--opened');
        document.documentElement.classList.add('no-scrolling');
        document.body.classList.add('no-scrolling');
    });

    closeBtn.addEventListener('click', () => {
        header.classList.remove('header--opened');
        document.documentElement.classList.remove('no-scrolling');
        document.body.classList.remove('no-scrolling');
    });
}