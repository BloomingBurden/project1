export const parallax = (elem) => {
    const wrapper = document.querySelector(elem);
    
    if (!wrapper) return;
    
    const target = wrapper.querySelector('.parallax-inner');
    let center = 0;
    const SPEED = +wrapper.dataset.parallaxSpeed;


    if (isNaN(SPEED)) return;

    const requestParallax = () => {
        target.style.transform = `translateY(${center / SPEED}px) translateZ(0)`;

        requestAnimationFrame(requestParallax);
    }

    requestParallax();

    center = wrapper.getBoundingClientRect().top;

    window.addEventListener('scroll', () => {
        if (window.innerHeight > wrapper.getBoundingClientRect().top && 0 < wrapper.getBoundingClientRect().top + wrapper.getBoundingClientRect().height) {
            center = wrapper.getBoundingClientRect().top;
        }
    });
};