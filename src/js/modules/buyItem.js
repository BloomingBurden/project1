export const buyItem = (target) => {
    const id = target.closest('[data-shop-id]');
    const wrap = target.closest('.shop__item');
    const selectCategory = wrap.querySelector('.shop__category');
    const selectImg = wrap.querySelector('.shop__img-item img');
    const selectName = wrap.querySelector('.shop__subtitle');
    const selectPrice = wrap.querySelector('.shop__price');
    let selectClass = Array.from(selectCategory.classList).find(item => item.startsWith('shop__category-'));

    if (!wrap) return;

    const buy = document.querySelector('.buy-popup');

    if (!buy) return;
    
    const img = buy.querySelector('.buy-popup__img img');
    const category = buy.querySelector('.buy-popup__category');

    const inputId = buy.querySelector('.form-sign__id');
    const inputName = buy.querySelector('.form-sign__product-name');
    const inputCategory = buy.querySelector('.form-sign__category');
    const inputPrice = buy.querySelector('.form-sign__price');

    inputId.value = +id.dataset.shopId;
    inputName.value = selectName.textContent;
    inputCategory.value = selectCategory.textContent;
    inputPrice.value = parseFloat(selectPrice.textContent);

    img.src = selectImg.src;
    category.textContent = selectCategory.textContent;

    if (selectClass) {
        const strFromClass = selectClass.split('-');

        category.classList.forEach((item, i) => {
            if (item.includes(strFromClass[0])) category.classList.remove(item);
        });

        category.classList.add(strFromClass[0] + '-' + strFromClass[1]);
    }

    buy.classList.remove('d-none');
    buy.classList.add('popup--active');
    document.documentElement.classList.add('no-scrolling');
    document.body.classList.add('no-scrolling');
};