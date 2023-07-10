import { debounce } from "./utils.js";

const removeError = (item) => {
    const elem = item.closest('.form-sign__item');
    const isSpan = elem.querySelector('.span--error');

    if (!isSpan) return;

    isSpan.remove();
    elem.classList.remove('form-sign__item--error');
}

const showErrorValid = (item, text) => {
    const elem = item.closest('.form-sign__item');
    const isSpan = elem.querySelector('.span--error');
    
    if (isSpan) return;

    const span = document.createElement('span');

    span.classList.add('span--error');
    elem.prepend(span);

    elem.classList.add('form-sign__item--error');

    span.textContent = text;
};

const checkData = (input, correct) => {
    const regex = correct;

    if (regex.test(input.value)) {
        return true;
    } else {
        return false;
    }
};


const validatorForm = (evt) => {
    let target = null;

    if (evt.target) {
        evt.preventDefault();
        target = evt.target;
    } else {
        target = evt;
    }

    const data = {
        empty: 'Пожалуйста, введите данные',
        smallName: 'Пожалуйста, введите имя от 3 букв',
        uncorrect: 'Пожалуйста, введите данные правильно',
        numbers: 'Пожалуйста, используйте только латиницу и кириллицу',
        smallNumber: 'Пожалуйста, введите номер полностью',
        groupInvalid: 'Разрешены только символы a-Z, А-Я, 0-9 и дефис',
    };

    if (target.closest('.form-sign__group')) {
        let valid = checkData(target, /^[-a-zA-Z0-9а-яА-Я]+$/);

        if (!valid) {
            removeError(target);
            showErrorValid(target, target.value.length === 0 ? data.empty : data.groupInvalid);
            return false;
        } else {
            removeError(target);
        }
    }

    if (target.closest('.form-sign__email')) {
        let valid = checkData(target, /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

        if (!valid) {
            removeError(target);
            showErrorValid(target, target.value.length === 0 ? data.empty : data.uncorrect);
            return false;
        } else {
            removeError(target);
        }
    }

    if (target.closest('.form-sign__phone')) {
        let valid = null;

        if (target.value.length < 10) valid = 0;
        if (target.value.length > 10) valid = target.value.split('(')[1].length;
        
        if (valid !== 13) {
            removeError(target);
            showErrorValid(target, target.value.length === 0 ? data.empty : data.smallNumber);
            return false;
        } else {
            removeError(target);
        }
    }

    if (target.closest('.form-sign__name')) {
        let valid = checkData(target, /^[a-zA-Zа-яА-Я]+$/);

        if (!valid) {
            removeError(target);
            showErrorValid(target, target.value.length === 0 ? data.empty : target.value.length < 3 ? data.smallName : data.numbers);
            return false;
        } else {
            removeError(target);
        }
    }

    return true;
}

export const onClickSubmitForm = () => {
    const input = document.querySelectorAll('.form-sign__item input');
    const form = document.querySelectorAll('.form-sign');
    
    if (!input[0] || !form[0]) return;

    const debounceValidatorForm = debounce(validatorForm, 600);

    input.forEach(item => {
        item.addEventListener('input', debounceValidatorForm);
        item.addEventListener('invalid', validatorForm);
    });

    form.forEach(item => {
        item.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const submitInput = evt.target.querySelectorAll('input');

            if(!Array.from(submitInput).some(item => validatorForm(item) === false)) {
                item.submit();
            }
        });
    });
}