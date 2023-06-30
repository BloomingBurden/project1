export const onScrollMenu = () => {
    const header = document.querySelector('.header');
    const HEIGHT = header.getBoundingClientRect().height / 2 + 20;

    window.addEventListener('scroll', () => {
        if (window.scrollY > HEIGHT) {
            header.classList.add('header--scrolling');
        } else {
            header.classList.remove('header--scrolling');
        }
    });
}