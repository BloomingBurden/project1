import './modules/swiper.js';
import './modules/mixitup.min.js';
import './modules/functions.js';
import { clickMenu } from './modules/clickMenu.js';
import { onScrollMenu } from './modules/onScrollMenu.js';
import { moveCircle } from './modules/moveCircle.js';
import { setCustomVideoPlayer } from './modules/setCustomVideoPlayer.js';
import { parallax } from './modules/parallax.js';
import { onMouseRotate } from './modules/onMouseRotate.js';
import { onClickPhoneForm } from './modules/clickPhoneForm.js';
import { setMaskForm } from './modules/myMask.js';
import { showHelp } from './modules/showHelp.js';
import { clickFilter } from './modules/clickFilter.js';
import { onClickSubmitForm } from './modules/validatorForm.js';
import { setYandexMap } from './modules/yandexMap.js';
import { elementMove } from './modules/elementMove.js';
import { popup } from './modules/popup.js';
import { setPopupImage } from './modules/popupImage.js';

window.addEventListener('load', () => {
    setPopupImage();
    setMaskForm('7');
    clickMenu();
    onScrollMenu();
    setCustomVideoPlayer();
    parallax('.preview__bg');
    onClickPhoneForm();
    onClickSubmitForm();
    showHelp();
    clickFilter();
    popup();
    
    elementMove('.no-page-body', '.no-page__img');
    elementMove('.discount-popup', '.discount-popup .popup__img');
    elementMove('.chance-popup', '.chance-popup .popup__img');
    elementMove('.buy-popup', '.buy-popup .popup__img');
    elementMove('.quest-popup', '.quest-popup .popup__img');

    moveCircle('.my-circle-1');
    moveCircle('.my-circle-2');
    moveCircle('.my-circle-3');
    moveCircle('.my-circle-4');
    moveCircle('.my-circle-5');
    moveCircle('.my-circle-6');
    moveCircle('.my-circle-7');
    moveCircle('.my-circle-8');
    moveCircle('.my-circle-9');

    onMouseRotate('.courses', '.course__inner');
    onMouseRotate('.shop', '.shop__inner');


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
            loop: true,      
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


          var mixer = mixitup('.shop__list', {
            selectors: {
              control: '.category__link' // Селектор фильтра
            }
        });
    }

    if (document.body.classList.contains('about-body')) {
        const swiper6 = new Swiper('.swiper-about', {       
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            pagination: {
                el: '.swiper-pagination',
            },
          }); 
    }


    if (document.body.classList.contains('courses-body')) {
        var mixer = mixitup('.courses', {
            selectors: {
              control: '.category__link' // Селектор фильтра
            }
        });
    }

    if (document.body.classList.contains('contacts-body')) {
        const swiper7 = new Swiper('.swiper-contacts', {       
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                dynamicMainBullets: 2,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1.3,
                  spaceBetween: 10
                },

                500: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },

                768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                }
              },
        }); 

        let mixer = mixitup('.contacts', {
            selectors: {
              control: '.category__link' // Селектор фильтра
            }
        });

         mixer.filter('.category-a');

        setYandexMap();
    }
});