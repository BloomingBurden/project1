import { firstMask } from "./myMask.js";

const setNewMask = (target) => {
    const selectLink = target.closest('.countries__link')
    const currentCode = selectLink.dataset.countryCode;
    const selectImg = selectLink.querySelector('.countries__img img');
    const elem = target.closest('.form-sign__phone');
    const input = elem.querySelector('input');
    const img = elem.querySelector('.countries__img-current img');

    let zeros = '';
    let result = [];

    if (currentCode.includes('0')) {
        currentCode.split('').forEach((item) => {
            if(+item === 0) {
                zeros += '\\0';
            } else {
                result.push(item);
            }
        });

        result = result.join('');

        result = `+{${result}${zeros}} (000)000-00-00`;
    } else {
        result = `+{${currentCode}} (000)000-00-00`;
    }

    input.placeholder = `+${currentCode} (000)000-00-00`;
    img.src = selectImg.src;
    
    firstMask.forEach(item => {
        const currentInput = item[0];
        const currentMask = item[1];

        if (currentInput === input) {
            currentMask.updateOptions({
                mask: result, // обновляем формат маски с учетом выбранного кода страны
            });
        }
    });
}

export const onClickPhoneForm = () => {
    const elem = document.querySelector('.form-sign__phone');
    
    if (!elem) return;
    
    document.addEventListener('click', (evt) => {
        const target = evt.target;
        const targetBtn = target.closest('.form-sign__country-btn');
        const targetPhone = target.closest('.form-sign__phone');

        if (targetBtn && targetPhone) {
            targetPhone.classList.toggle('form-sign__phone-active');
        } else {
            if (!targetPhone) return;
            
            targetPhone.classList.remove('form-sign__phone-active');
        }

        if (target.closest('.countries__link')) {
            evt.preventDefault();
            setNewMask(target);
        }
    });
};