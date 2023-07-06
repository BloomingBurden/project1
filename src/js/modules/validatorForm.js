export const onClickSubmitForm = () => {
    const input = document.querySelectorAll('.form-sign__email input');
    let checkValid = true;
    
    if (!input[0]) return;

    input.forEach(item => {
        item.addEventListener('invalid', (evt) => {
            evt.preventDefault();
            item.closest('.form-sign__email').classList.add('form-sign__item--error');
    
            if (!checkValid) return;
    
            checkValid = false;
            
            setTimeout(() => {
                item.closest('.form-sign__email').classList.remove('form-sign__item--error');
                checkValid = true;
            }, 2000);
        });
    });

}