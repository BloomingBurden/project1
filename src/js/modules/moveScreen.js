export const moveScreen = () => {
    const moveScreen = document.querySelectorAll('[data-move-screen]');

    if (!moveScreen[0]) return;

    moveScreen.forEach(item => {
        item.addEventListener('click', (evt) => {
            const current = document.querySelector(item.dataset.moveScreen);
            const top = current.getBoundingClientRect().top;

            window.scrollTo({
                top: top - 20,
                behavior: "smooth",
              });
        });
    });
};