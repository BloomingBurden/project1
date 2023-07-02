import './modules/swiper.js';
import './modules/functions.js';
import { clickMenu } from './modules/clickMenu.js';
import { onScrollMenu } from './modules/onScrollMenu.js';
import { moveCircle } from './modules/moveCircle.js';

window.addEventListener('load', () => {
    clickMenu();
    onScrollMenu();
    moveCircle('.my-circle-1', 35, 5);
    moveCircle('.my-circle-2', 30, 4);
    moveCircle('.my-circle-3', 20, 3);

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

          const swiper2 = new Swiper('.swiper-2', {       
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            slidesPerView: 1,
            spaceBetween: 20
          }); 

          const swiper3 = new Swiper('.swiper-3', {       
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            slidesPerView: 1,
            spaceBetween: 20
          }); 
    };
});