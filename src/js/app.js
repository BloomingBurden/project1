import './modules/swiper.js';
import './modules/functions.js';
import { clickMenu } from './modules/clickMenu.js';
import { onScrollMenu } from './modules/onScrollMenu.js';
import { moveCircle } from './modules/moveCircle.js';

window.addEventListener('load', () => {
    clickMenu();
    onScrollMenu();
    moveCircle('.my-circle-1');

    if (document.body.classList.contains('index-body')) {
        const swiper = new Swiper('.swiper', {       
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                // when window width is >= 320px
                375: {
                  slidesPerView: 1.15,
                  spaceBetween: 10
                },

                1000: {
                    slidesPerView: 2,
                    spaceBetween: 24
                }
              },
          });          
    };
});