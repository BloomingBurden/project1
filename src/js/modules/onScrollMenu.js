export const onScrollMenu = () => {
    const header = document.querySelector('.header');
    const HEIGHT = header.querySelector('.header__top').getBoundingClientRect().height;

    window.addEventListener('scroll', () => {
        if (window.scrollY > HEIGHT) {
            header.classList.add('header--scrolling');
        } else {
            header.classList.remove('header--scrolling');
        }
    });
}