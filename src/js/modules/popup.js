import { buyItem } from "./buyItem.js";

let myTimeout = null;
let isFirstTime = true;
let anotherForm = false;
let currentPopup = null;

const resetQuest = (item) => {
    currentPopup.querySelectorAll('.quest-popup__item').forEach(item => item.classList.remove('quest-popup__item--active'));
};

const expandTextQuest = (target) => {
    const item = target.closest('.quest-popup__item');

    item.classList.toggle('quest-popup__item--active');
};

const showQuest = () => {
    const quest = document.querySelector('.quest-popup');

    if (!quest) return;
    
    currentPopup = quest;

    quest.classList.remove('d-none');
    quest.classList.add('popup--active');
    document.documentElement.classList.add('no-scrolling');
    document.body.classList.add('no-scrolling');

    anotherForm = true;
}

const showCourse = (target) => {
    const course = target.closest('.course__item');
    const coursePopup = document.querySelector('.course-popup');

    if (!coursePopup || !course) return;

    currentPopup = coursePopup;

    
    const selectedName = course.querySelector('.course__subtitle');
    const selectedAge = course.querySelector('.course__age');
    const popupName = coursePopup.querySelector('.form-sign__course-name');
    const popupAge = coursePopup.querySelector('.form-sign__course-age');

    popupName.value = selectedName.textContent;
    popupAge.value = selectedAge.textContent;

    coursePopup.classList.remove('d-none');
    coursePopup.classList.add('popup--active');
    document.documentElement.classList.add('no-scrolling');
    document.body.classList.add('no-scrolling');

    anotherForm = true;
}

const showChance = () => {
    const chance = document.querySelector('.chance-popup');

    if (!chance) return;

    currentPopup = chance;
    
    chance.classList.remove('d-none');
    chance.classList.add('popup--active');
    document.documentElement.classList.add('no-scrolling');
    document.body.classList.add('no-scrolling');

    anotherForm = true;
}

const showDiscount = () => {
    const discount = document.querySelector('.discount-popup');
    
    if (!discount || anotherForm) return;

    currentPopup = discount;

    isFirstTime = false;

    discount.classList.remove('d-none');
    discount.classList.add('popup--active');
    document.documentElement.classList.add('no-scrolling');
    document.body.classList.add('no-scrolling');
};

const popupClose = () => {
    if (!currentPopup) return;

    currentPopup.classList.remove('popup--active');
    currentPopup.querySelectorAll('input').forEach(item => {
        item.value = '';
    });
    const isSpan = currentPopup.querySelectorAll('.span--error');

    if (isSpan[0]) {
        isSpan.forEach(item => {
            item.closest('.form-sign__item').classList.remove('form-sign__item--error');
            item.remove();
        });
    }

    document.documentElement.classList.remove('no-scrolling');
    document.body.classList.remove('no-scrolling');

    if (currentPopup.classList.contains('quest-popup')) {
        resetQuest(currentPopup);
    }

    setTimeout(()=> {
        currentPopup.classList.add('d-none');
        currentPopup = null;
    },200)

    anotherForm = false;
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

    if(target.closest('.button-course')) {
        showCourse(target);
    }

    if(target.closest('.quest-popup__subtitle')) {
        expandTextQuest(target);
    }

    if (target.closest('.button-buy')) {
        const buy = document.querySelector('.buy-popup');
        if (!buy) return;
        
        currentPopup = buy;

        buyItem(target);
        anotherForm = true;
    }

    if (!target.closest('.popup__wrap') && target.closest('.popup') || target.closest('.popup__close')) {
        popupClose();
    }

};

export const popup = () => {
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('touchmove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    document.addEventListener('click', onClickAnyBtn);
    document.addEventListener('keydown', (evt) => {
        const target = evt.key;

        if (target === 'Escape') {
            popupClose();
        }
    });
    
    resetTimer();
}