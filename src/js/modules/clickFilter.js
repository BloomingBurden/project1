export const clickFilter = () => {
    const categoryLink = document.querySelectorAll('.category__link');
    
    categoryLink.forEach(item => {
        
        item.addEventListener('click', () => {
            categoryLink.forEach(item => item.closest('.category__item').classList.remove('category__item-current'));
            item.closest('.category__item').classList.add('category__item-current');
        });
    })
};