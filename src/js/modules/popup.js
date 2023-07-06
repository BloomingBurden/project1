import { buyItem } from "./buyItem.js";

let myTimeout = null;
let isFirstTime = true;
let anotherForm = false;

const showChance = () => {
    const chance = document.querySelector('.chance-popup');

    if (!chance) return;
    
    chance.classList.add('popup--active');
    document.documentElement.classList.add('no-scrolling');
    document.body.classList.add('no-scrolling');

    anotherForm = true;
}

const showDiscount = () => {
    const discount = document.querySelector('.discount-popup');
    
    if (!discount || anotherForm) return;

    isFirstTime = false;

    discount.classList.add('popup--active');
    document.documentElement.classList.add('no-scrolling');
    document.body.classList.add('no-scrolling');
};

const popupClose = () => {
    const popupList = document.querySelectorAll('.popup__close');

    if (!popupList[0]) return;


    popupList.forEach(item => {
        item.addEventListener('click', (evt) => {
            item.closest('.popup').classList.remove('popup--active');
            document.documentElement.classList.remove('no-scrolling');
            document.body.classList.remove('no-scrolling');
            anotherForm = false;
        });
    });
};

function setInactive() {
    showDiscount();
}

function resetTimer() {
    if (!isFirstTime) return;
    
    clearTimeout(myTimeout);
    myTimeout = setTimeout(setInactive, 30000);
}


const onClickAnyBtn = (evt) => {
    const target = evt.target;

    if (target.closest('.discount__button')) {
        showDiscount();
    }

    if (target.closest('.button-chance')) {
        showChance();
    }

    if (target.closest('[data-shop-id]')) {
        buyItem(target);
        anotherForm = true;
    }

};

export const popup = () => {
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('touchstart', resetTimer);
    document.addEventListener('keypress', resetTimer);
    document.addEventListener('click', onClickAnyBtn);
    
    resetTimer();
    popupClose();
}