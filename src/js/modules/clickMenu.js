export const clickMenu = () => {
    const burger = document.querySelector('.header__burger');
    const header = document.querySelector('.header');
    const body = header.querySelector('.header__body');
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

    let currentX = 0;
    let step = 0;
    let firstTime = true;

    body.addEventListener('touchmove', (evt) => {
        const moveX = evt.touches[0].clientX;

        if (moveX < currentX) {
            if (firstTime) {
                step = moveX;
                firstTime = false;
            }

            currentX = moveX;
            if (step - currentX > 50) {
                header.classList.remove('header--opened');
                document.documentElement.classList.remove('no-scrolling');
                document.body.classList.remove('no-scrolling');
            }

            return;
        } else {
            currentX = moveX;
        }
    })
}