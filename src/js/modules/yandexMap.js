export const setYandexMap = () => {
    ymaps.ready(init.bind(null, [55.738997, 49.226806], 'map', 'Адрес центра progin в г.Казань'));
    ymaps.ready(init.bind(null, [55.918938, 49.312991], 'map-2', 'Адрес центра progin в с. Высокая Гора'));

    function init(coord, map, text){
        const maps = document.querySelector('#' + map);

        if (!maps) return;

        var myMap = new ymaps.Map(map, {
            center: coord, // координаты центра карты
            zoom: 16,
            controls: [],
        });

        var myPlacemark = new ymaps.Placemark(coord, {
            hintContent: text,
            balloonContent: text,
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
            iconImageOffset: [-20, -50] // смещение изображения
        });

        myMap.geoObjects.add(myPlacemark);
    }
}