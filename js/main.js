document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.parallax');
    const layers = document.querySelectorAll('.parallax__layer');

    let initialMouseX = null;
    let initialMouseY = null;

    function handleMouseMove(event) {
        const rect = wrapper.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        if (initialMouseX === null && initialMouseY === null) {
            initialMouseX = mouseX;
            initialMouseY = mouseY;
        }

        const deltaX = (mouseX - initialMouseX) * 0.099; // Увеличили множитель с 0.01 до 0.015
        const deltaY = (mouseY - initialMouseY) * 0.099; // Увеличили множитель с 0.01 до 0.015

        layers.forEach(layer => {
            const speed = parseFloat(layer.dataset.speed);
            const moveX = deltaX * speed;
            const moveY = deltaY * speed;
            layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }

    wrapper.addEventListener('mousemove', handleMouseMove);

    // Optional: Reset on mouse leave
    wrapper.addEventListener('mouseleave', () => {
        layers.forEach(layer => {
            layer.style.transform = 'none';
        });
        initialMouseX = null;
        initialMouseY = null;
    });





    //для скрытия прелоадера и параллакса:
    const preloader = document.querySelector(".preloader");
    const images = document.querySelectorAll(".preloader-img");

    // Функция для удаления прелоадера после загрузки страницы
    function hidePreloader() {
        images.forEach(img => {
            const direction = img.classList.contains("preloader-top-left") ? "-300px, -300px" :
                              img.classList.contains("preloader-top-center") ? "0px, -300px" :
                              img.classList.contains("preloader-top-right") ? "300px, -300px" :
                              img.classList.contains("preloader-bottom-left") ? "-300px, 300px" :
                              img.classList.contains("preloader-bottom-center") ? "0px, 300px" :
                              "300px, 300px";

            img.style.transform = `translate(${direction})`;
        });

        setTimeout(() => {
            preloader.classList.add("hidden"); // Плавно скрываем прелоадер
        }, 1500);
    }

    // Запускаем скрытие прелоадера после загрузки контента
    window.addEventListener("load", hidePreloader);

});