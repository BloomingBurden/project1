export const moveCircle = (id) => {
    let canvas = document.querySelector(id);
    const ctx = canvas.getContext('2d');

    // Создаем массив объектов, каждый из которых представляет круг
    const circles = [
        { x: 260, y: 50, radius: 40, color: 'blue', speedX: 0.6, speedY: 0.6 },
        { x: 220, y: 70, radius: 25, color: '#e47d18', speedX: -0.2, speedY: -0.2 },
        { x: 100, y: 20, radius: 25, color: 'red', speedX: -0.5, speedY: -0.5 },
        { x: 50, y: 50, radius: 25, color: '#FFD875', speedX: 1, speedY: 1 }
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
        for (let i = 0; i < circles.length; i++) {
            circles[i].y += circles[i].speedX;
            circles[i].x += circles[i].speedY;
            
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