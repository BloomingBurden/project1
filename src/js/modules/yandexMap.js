export const setYandexMap = () => {
    ymaps.ready(init);

    function init(){
        const maps = document.querySelector('#map');

        if (!maps) return;

        var myMap = new ymaps.Map("map", {
            center: [55.738997, 49.226806], // координаты центра карты
            zoom: 16,
            controls: [],
        });

        var myPlacemark = new ymaps.Placemark([55.738997, 49.226806], {
            hintContent: 'Адрес центра progin в г.Казань',
            balloonContent: 'Адрес центра progin в г.Казань'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/marker.png', // путь к изображению
            // Размеры метки.
            iconImageSize: [64, 64], // размеры изображения
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38] // смещение изображения
        });

        myMap.geoObjects.add(myPlacemark);
    }
}