export const moveCircle = (id) => {
    
    let canvas = document.querySelector(id);
    
    if (!canvas) return;

    const SPEED = +canvas.dataset.circleSpeed ? +canvas.dataset.circleSpeed : 1;
    const RAD = +canvas.dataset.circleRad ? +canvas.dataset.circleRad : 30;
    const QUANTITY = +canvas.dataset.circleQuantity ? +canvas.dataset.circleQuantity : 5;
    const ctx = canvas.getContext('2d');

    if (QUANTITY > 16) return;

    // Создаем массив объектов, каждый из которых представляет круг
    const circles = [
        { x: 55, y: 90, radius: RAD, color: '#B9A3F8', speedX: 0.1, speedY: 0.1 },
        { x: 150, y: 45, radius: RAD, color: '#FF8D8F', speedX: -0.2, speedY: -0.2 },
        { x: 50, y: 50, radius: RAD, color: '#7234F6', speedX: -0.3, speedY: -0.3 },
        { x: 84, y: 100, radius: RAD, color: '#FFC773', speedX: 0.5, speedY: 0.5 },
        { x: 200, y: 80, radius: RAD, color: '#B9A3F8', speedX: 0.2, speedY: 0.2 },
        { x: 254, y: 50, radius: RAD, color: '#FFC773', speedX: -0.1, speedY: -0.1 },
        { x: 80, y: 90, radius: RAD, color: '#7234F6', speedX: -0.3, speedY: -0.3 },
        { x: 42, y: 100, radius: RAD, color: '#FF8D8F', speedX: 0.5, speedY: 0.5 },
        { x: 200, y: 50, radius: RAD, color: '#B9A3F8', speedX: 0.2, speedY: 0.2 },
        { x: 213, y: 65, radius: RAD, color: '#FFE8D2', speedX: -0.1, speedY: -0.1 },
        { x: 80, y: 28, radius: RAD, color: '#7234F6', speedX: -0.3, speedY: -0.3 },
        { x: 50, y: 11, radius: RAD, color: '#B9A3F8', speedX: 0.5, speedY: 0.5 },
        { x: 260, y: 15, radius: RAD, color: '#E0FFDB', speedX: 0.2, speedY: 0.2 },
        { x: 225, y: 7, radius: RAD, color: '#FFE8D2', speedX: -0.1, speedY: -0.1 },
        { x: 55, y: 4, radius: RAD, color: '#7234F6', speedX: -0.3, speedY: -0.3 },
        { x: 60, y: 70, radius: RAD, color: '#FF8D8F', speedX: 0.5, speedY: 0.5 }
    ];

    // Функция для отрисовки круга
    function drawCircle(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    // Функция для анимации плавающих кругов
    function animate() {
        // Очищаем экран
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Проходимся по всем кругам и изменяем их координаты
        for (let i = 0; i < QUANTITY; i++) {
            circles[i].y += circles[i].speedX * SPEED;
            circles[i].x += circles[i].speedY * SPEED;
            
            // Если круг достиг верхней или нижней границы, меняем направление его движения
            if (circles[i].y + circles[i].radius > canvas.height || circles[i].y - circles[i].radius < 0) {
                circles[i].speedX = -circles[i].speedX;
            }

            if (circles[i].x + circles[i].radius > canvas.width || circles[i].x - circles[i].radius < 0) {
                circles[i].speedY = -circles[i].speedY;
            }
            
            // Отрисовываем круг
            drawCircle(circles[i].x, circles[i].y, circles[i].radius, circles[i].color);
        }
    
        // Вызываем функцию анимации на следующем кадре
        requestAnimationFrame(animate);
    }

    // Начинаем анимацию
    animate();
}