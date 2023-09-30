document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.deslizante');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const nextBtns = document.querySelectorAll('.next-btn');

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtns.forEach(btn => {
        btn.addEventListener('click', nextSlide);
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', prevSlide);
    });

    // Iniciar el slider
    showSlide(currentIndex);

    // Slider infinito
    setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos
});



// Secciones de la página


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del objetivo
            const targetElement = document.getElementById(targetId); // Obtiene el elemento objetivo
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
            }
        });
    });
});
