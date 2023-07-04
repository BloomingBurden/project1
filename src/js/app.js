import './modules/swiper.js';
import './modules/functions.js';
import { clickMenu } from './modules/clickMenu.js';
import { onScrollMenu } from './modules/onScrollMenu.js';
import { moveCircle } from './modules/moveCircle.js';
import { setCustomVideoPlayer } from './modules/setCustomVideoPlayer.js';
import { parallax } from './modules/parallax.js';
import { onMouseRotate } from './modules/onMouseRotate.js';
import { onClickPhoneForm } from './modules/clickPhoneForm.js';
import { setMaskForm } from './modules/myMask.js';

window.addEventListener('load', () => {
    setMaskForm('7');
    clickMenu();
    onScrollMenu();
    setCustomVideoPlayer();
    parallax('.preview__bg');
    onMouseRotate('.courses', '.course__inner');
    onMouseRotate('.shop__list', '.shop__inner');
    onClickPhoneForm();

    moveCircle('.my-circle-1');
    moveCircle('.my-circle-2');
    moveCircle('.my-circle-3');
    moveCircle('.my-circle-4');

    if (document.body.classList.contains('index-body')) {
        const swiper = new Swiper('.swiper-1', {       
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

          const swiper4 = new Swiper('.swiper-4', {       
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                // when window width is >= 320px
                375: {
                  slidesPerView: 1.8,
                  spaceBetween: 10
                },

                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                }
              },
          }); 
    };

    if (document.body.classList.contains('shop-body')) {
        const swiper5 = new Swiper('.swiper-shop', {       
            slidesPerView: 1,
            spaceBetween: 10,

            pagination: {
                el: '.swiper-pagination',
            },
          }); 
    }
});