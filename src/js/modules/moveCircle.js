export const moveCircle = (id, rad, quantity=16) => {
    let canvas = document.querySelector(id);
    const ctx = canvas.getContext('2d');

    // Создаем массив объектов, каждый из которых представляет круг
    const circles = [
        { x: 260, y: 20, radius: rad, color: '#B9A3F8', speedX: 0.2, speedY: 0.2 },
        { x: 220, y: 25, radius: rad, color: '#FFE8D2', speedX: -0.1, speedY: -0.1 },
        { x: 75, y: 30, radius: rad, color: '#1C86E2', speedX: -0.3, speedY: -0.3 },
        { x: 56, y: 60, radius: rad, color: '#FF8D8F', speedX: 0.5, speedY: 0.5 },
        { x: 132, y: 80, radius: rad, color: '#B9A3F8', speedX: 0.2, speedY: 0.2 },
        { x: 254, y: 32, radius: rad, color: '#FFE8D2', speedX: -0.1, speedY: -0.1 },
        { x: 80, y: 90, radius: rad, color: '#1C86E2', speedX: -0.3, speedY: -0.3 },
        { x: 14, y: 1, radius: rad, color: '#FF8D8F', speedX: 0.5, speedY: 0.5 },
        { x: 200, y: 50, radius: rad, color: '#B9A3F8', speedX: 0.2, speedY: 0.2 },
        { x: 213, y: 65, radius: rad, color: '#FFE8D2', speedX: -0.1, speedY: -0.1 },
        { x: 80, y: 28, radius: rad, color: '#1C86E2', speedX: -0.3, speedY: -0.3 },
        { x: 50, y: 11, radius: rad, color: '#B9A3F8', speedX: 0.5, speedY: 0.5 },
        { x: 260, y: 15, radius: rad, color: '#E0FFDB', speedX: 0.2, speedY: 0.2 },
        { x: 225, y: 7, radius: rad, color: '#FFE8D2', speedX: -0.1, speedY: -0.1 },
        { x: 55, y: 4, radius: rad, color: '#1C86E2', speedX: -0.3, speedY: -0.3 },
        { x: 60, y: 70, radius: rad, color: '#FF8D8F', speedX: 0.5, speedY: 0.5 }
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
        for (let i = 0; i < quantity; i++) {
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