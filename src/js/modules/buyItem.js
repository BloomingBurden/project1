export const buyItem = (target) => {
    const id = target.closest('[data-shop-id]');
    const wrap = target.closest('.shop__item');
    const selectCategory = wrap.querySelector('.shop__category');
    const selectImg = wrap.querySelector('.shop__img-item img');
    let selectClass = Array.from(selectCategory.classList).find(item => item.startsWith('shop__category-'));
    
    if (!wrap) return;

    const buy = document.querySelector('.buy-popup');

    if (!buy) return;
    
    const img = buy.querySelector('.buy-popup__img img');
    const category = buy.querySelector('.buy-popup__category');
    const inputId = buy.querySelector('.form-sign__id input');

    inputId.value = +id.dataset.shopId;
    img.src = selectImg.src;
    category.textContent = selectCategory.textContent;
    if (selectClass) {
        category.classList.add(selectClass);
    }

    buy.classList.add('popup--active');
    document.documentElement.classList.add('no-scrolling');
    document.body.classList.add('no-scrolling');
};