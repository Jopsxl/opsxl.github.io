document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    heart.addEventListener('click', () => {
        heart.classList.add('pulse');
    });
    setTimeout(() => {
        alert('¡Haz clic en el corazón para ver algo especial!');
    }, 5000);

    // Animación de flores
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const flowers = [];
    const flowerImage = new Image();
    flowerImage.src = 'flower.png'; // Reemplazar con la imagen de flor

    flowerImage.onload = () => {
        for (let i = 0; i < 50; i++) {
            flowers.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: Math.random() * 3 + 1,
                size: Math.random() * 30 + 20
            });
        }
        animate();
    };

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        flowers.forEach(flower => {
            flower.y -= flower.speed;
            if (flower.y < -flower.size) {
                flower.y = canvas.height + flower.size;
                flower.x = Math.random() * canvas.width;
            }
            ctx.drawImage(flowerImage, flower.x, flower.y, flower.size, flower.size);
        });
        requestAnimationFrame(animate);
    }
});

setTimeout(() => {
    const heart = document.querySelector('.heart');
    heart.style.transform = "scale(2)";
    heart.style.transition = "transform 1s";
}, 10000);
