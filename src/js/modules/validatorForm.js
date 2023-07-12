
let myValidateTimer = null;

const showErrorValid = (item, text) => {
    const elem = item.closest('.form-sign__item');
    const isSpan = elem.querySelector('.span--error');
    
    if (isSpan) return;

    const span = document.createElement('span');

    span.classList.add('span--error');
    elem.prepend(span);

    elem.classList.add('form-sign__item--error');

    span.textContent = text;

    setTimeout(() => {
        elem.classList.remove('form-sign__item--error');
        span.remove();
    }, 3000);
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
    clearTimeout(myValidateTimer);

    if (evt.target) {
        evt.preventDefault();
        target = evt.target;
    } else {
        target = evt;
    }

    const data = {
        name: 'Пожалуйста, введите имя минимум из 3 букв',
        nameCorrect: 'Пожалуйста, не используйте лишние символы',
        phoneLength: 'Пожалуйста, введите номер телефона',
        phoneFull: 'Пожалуйста, введите номер телефона полностью',
        emailLen: 'Пожалуйста, введите Ваш email@адрес.правильно',
        email: 'Пожалуйста, не вводите киррилицу',
    };

    if (target.closest('.form-sign__group')) {
        let valid = target.value.length === 0;

        if (valid) {
            showErrorValid(target, 'Пожалуйста, введите группу');
            return false;
        }
    }

    if (target.closest('.form-sign__email')) {
        let valid = checkData(target, /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
        let keyCode = evt.data;
        let regex = /[а-яА-ЯЁё]/;

        if (regex.test(keyCode)) {
            target.value = target.value.slice(0, -1);
            if (!valid) {
                showErrorValid(target, data.email);
                return false;
            }
        }

        if (!valid) {
            if (evt.type === 'invalid') {
                showErrorValid(target, data.emailLen);
            } else {
                myValidateTimer = setTimeout(() => {
                    showErrorValid(target, data.emailLen);
                }, 800);
            }

            return false;
        }
    }

    if (target.closest('.form-sign__phone')) {
        let valid = null;

        if (target.value.length < 10) valid = 0;
        if (target.value.length > 10) valid = target.value.split('(')[1].length;
        
        if (valid !== 13) {
            if (evt.type === 'invalid') {
                showErrorValid(target, data.phoneLength);
            } else {
                myValidateTimer = setTimeout(() => {
                    showErrorValid(target, target.value.length === 0 ? data.phoneLength : data.phoneFull);
                }, 800);
            }
            return false;
        }
    }

    if (target.closest('.form-sign__name')) {
        let valid = checkData(target, /^[а-яА-Яa-zA-Z]{3,}$/);
        let keyCode = evt.data;
        var regex =/^[а-яА-Яa-zA-Z\b]+$/;

        if (!regex.test(keyCode)) {
            target.value = target.value.slice(0, -1);
            if (!valid) {
                showErrorValid(target, data.nameCorrect);
                return false;
            }
        }

        if (!valid) {
            if (evt.type === 'invalid') {
                showErrorValid(target, data.name);
            } else {
                myValidateTimer = setTimeout(() => {
                    showErrorValid(target, data.name);
                }, 800);
            }
            return false;
        }
    }

    return true;
}

export const onClickSubmitForm = () => {
    const input = document.querySelectorAll('.form-sign__item input');
    const form = document.querySelectorAll('.form-sign');
    
    if (!input[0] || !form[0]) return;

    input.forEach(item => {
        item.addEventListener('input', validatorForm);
        item.addEventListener('invalid', validatorForm);
        item.addEventListener('focusout', validatorForm);
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