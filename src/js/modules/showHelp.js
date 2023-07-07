export const showHelp = () => {
    const help = document.querySelector('.program__help');
    let isActive = false;

    if (!help) return;

    document.addEventListener('click', (evt) => {
        const currentElem = evt.target.closest('.data-show-help');
        help.classList.remove('program__help--active');
        isActive = false;

        if(!currentElem) return;

        let target = currentElem;
        isActive = true;

        let posX = target.getBoundingClientRect().left;
        let posY = target.getBoundingClientRect().top;
        let widthTarget = target.getBoundingClientRect().width / 2;
        let height = 130;

        if (posX + widthTarget + 110 > window.innerWidth || posX - 100 < 0) {
            help.style.width = '160px';
            height = 160;
        } else {
            help.style.width = '234px';
            height=  130;
        }
        
        help.classList.add('program__help--active');
        help.style.left = `${posX + widthTarget}px`;
        
        help.style.top = `${posY - height}px`;
    });

    window.addEventListener('scroll', (evt) => {
        if (!isActive) return;
        isActive = false;
        console.log(1);
        help.classList.remove('program__help--active');
    });
}