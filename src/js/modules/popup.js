import { buyItem } from "./buyItem.js";

let myTimeout = null;
let isFirstTime = true;
let anotherForm = false;

const resetQuest = (item) => {
    const questPopup = item.closest('.quest-popup');
    if (questPopup) {
        questPopup.querySelectorAll('.quest-popup__item').forEach(item => item.classList.remove('quest-popup__item--active'));
    }
};

const expandTextQuest = (target) => {
    const item = target.closest('.quest-popup__item');

    item.classList.toggle('quest-popup__item--active');
};

const showQuest = () => {
    const quest = document.querySelector('.quest-popup');

    if (!quest) return;
    
    quest.classList.add('popup--active');
    document.documentElement.classList.add('no-scrolling');
    document.body.classList.add('no-scrolling');

    anotherForm = true;
}

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
            const currentPopup = item.closest('.popup');
            currentPopup.classList.remove('popup--active');
            currentPopup.querySelectorAll('input').forEach(item => {
                item.value = '';
            });
            document.documentElement.classList.remove('no-scrolling');
            document.body.classList.remove('no-scrolling');

            resetQuest(item);
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

    if(target.closest('.button-quest')) {
        showQuest();
    }

    if(target.closest('.quest-popup__subtitle')) {
        expandTextQuest(target);
    }

    if (target.closest('.button-buy')) {
        buyItem(target);
        anotherForm = true;
    }

};

export const popup = () => {
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('touchmove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    document.addEventListener('click', onClickAnyBtn);
    
    resetTimer();
    popupClose();
}