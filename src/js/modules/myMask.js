import IMask from 'imask';

let firstMask = null;

const setMaskForm = (code) => {
    let element = document.querySelectorAll('.form-sign__phone input');

    if (!element[0]) return;

    element.forEach(item => {
        let maskOptions = {
            mask: `+{${code}} (000)000-00-00`,
        };
    
        firstMask = IMask(item, maskOptions);
    });
};

export {setMaskForm, firstMask};
