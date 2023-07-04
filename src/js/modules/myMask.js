import IMask from 'imask';

let firstMask = null;

const setMaskForm = (code) => {
    let element = document.querySelector('.form-sign__phone input');

    if (!element) return;
    
    let maskOptions = {
        mask: `+{${code}} (000)000-00-00`,
    };

    firstMask = IMask(element, maskOptions);
};

export {setMaskForm, firstMask};
