import IMask from 'imask';

let firstMask = [];

const setMaskForm = (code) => {
    let element = document.querySelectorAll('.form-sign__phone input');

    if (!element[0]) return;

    element.forEach(item => {
        let maskOptions = {
            mask: `+{${code}} (000)000-00-00`,
        };
    
        firstMask = [...firstMask, [item, IMask(item, maskOptions)]];
    });
};

export {setMaskForm, firstMask};
