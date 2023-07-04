import { setMaskForm, firstMask } from "./myMask.js";

const setNewMask = (target) => {
    const currentCode = target.closest('.countries__link').dataset.countryCode;
    const elem = document.querySelector('.form-sign__phone');
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
    img.src = `./img/icons/icons.svg#icon-code-${currentCode}`;

    firstMask.updateOptions({
        mask: result, // обновляем формат маски с учетом выбранного кода страны
    });
}

export const onClickPhoneForm = () => {
    const elem = document.querySelector('.form-sign__phone');
    
    if (!elem) return;
    
    document.addEventListener('click', (evt) => {
        const target = evt.target;

        if (target.closest('.form-sign__country-btn')) {
            elem.classList.add('form-sign__phone-active');
        } else {
            elem.classList.remove('form-sign__phone-active');
        }

        if (target.closest('.countries__link')) {
            evt.preventDefault();
            setNewMask(target);
        }
    });
};