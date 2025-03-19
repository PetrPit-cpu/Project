document.addEventListener("DOMContentLoaded", function () {
    const dressParts = document.querySelectorAll(
        ".dress__block-1 img, .dress__list-items-block-2 img, .dress__list-items-block-3 img, " +
        ".dress__block-4 img, .dress__list-items-block-4 img, .dress__list-items-block-5 img, " +
        ".dress__block-7 img, .dress__list-items-block-6 img, .dress__list-items-block-7 img, " +
        ".dress__block-10 img"
    );

    dressParts.forEach(part => {
        part.addEventListener("click", function () {
            let currentSrc = this.getAttribute("src"); // Получаем текущее изображение элемента
            if (!currentSrc || !nextImageMap[currentSrc]) {
                console.error(`Изображение ${currentSrc} отсутствует в nextImageMap.`);
                return;
            }

            let newImageData = nextImageMap[currentSrc]; // Получаем новое изображение

            if (newImageData) {
                let originalWidth = this.offsetWidth;  // Получаем текущую ширину
                let originalHeight = this.offsetHeight; // Получаем текущую высоту

                this.setAttribute("src", newImageData.src); // Заменяем изображение

                // Устанавливаем размеры заменённого изображения равными оригинальному
                this.style.width = `${originalWidth}px`;
                this.style.height = `${originalHeight}px`;
                this.style.objectFit = "cover"; // Гарантируем, что изображение займёт всю область
            }
        });
    });

    // Параллакс для заднего фона
    document.addEventListener("mousemove", function (event) {
        let x = (event.clientX / window.innerWidth) * 30 - 15; // Двигаем влево-вправо
        let y = (event.clientY / window.innerHeight) * 30 - 15; // Двигаем вверх-вниз

        document.querySelector(".parallax-bg").style.transform = `translate(${x}px, ${y}px)`;
    });

    // Объект соответствий, где каждому изображению назначено следующее
    const nextImageMap = {
        // Первое платье
        "./img/Платье-1/1.svg": { src: "./img/Платье-1.1/1.svg" },
        "./img/Платье-1.1/1.svg": { src: "./img/Платье-1.1/2.svg" },
        "./img/Платье-1.1/2.svg": { src: "./img/Платье-1.1/3.svg" },
        "./img/Платье-1.1/3.svg": { src: "./img/Платье-1.1/4.svg" },
        "./img/Платье-1.1/4.svg": { src: "./img/Платье-1.1/5.svg" },
        "./img/Платье-1.1/5.svg": { src: "./img/Платье-1/1.svg" }, // Возвращаемся к первому

        "./img/Платье-1/2.svg": { src: "./img/Платье-2.1/1.svg" },
        "./img/Платье-2.1/1.svg": { src: "./img/Платье-2.1/2.svg" },
        "./img/Платье-2.1/2.svg": { src: "./img/Платье-2.1/3.svg" },
        "./img/Платье-2.1/3.svg": { src: "./img/Платье-2.1/4.svg" },
        "./img/Платье-2.1/4.svg": { src: "./img/Платье-2.1/5.svg" },
        "./img/Платье-2.1/5.svg": { src: "./img/Платье-1/2.svg" }, // Возвращаемся к первому

        "./img/Платье-1/3.svg": { src: "./img/Платье-3.1/1.svg" },
        "./img/Платье-3.1/1.svg": { src: "./img/Платье-3.1/2.svg" },
        "./img/Платье-3.1/2.svg": { src: "./img/Платье-3.1/3.svg" },
        "./img/Платье-3.1/3.svg": { src: "./img/Платье-3.1/4.svg" },
        "./img/Платье-3.1/4.svg": { src: "./img/Платье-3.1/5.svg" },
        "./img/Платье-3.1/5.svg": { src: "./img/Платье-1/3.svg" }, // Возвращаемся к первому

        "./img/Платье-1/4.svg": { src: "./img/Платье-4.1/1.svg" },
        "./img/Платье-4.1/1.svg": { src: "./img/Платье-4.1/2.svg" },
        "./img/Платье-4.1/2.svg": { src: "./img/Платье-4.1/3.svg" },
        "./img/Платье-4.1/3.svg": { src: "./img/Платье-4.1/4.svg" },
        "./img/Платье-4.1/4.svg": { src: "./img/Платье-4.1/5.svg" },
        "./img/Платье-4.1/5.svg": { src: "./img/Платье-1/4.svg" }, // Возвращаемся к первому

        "./img/Платье-1/5.svg": { src: "./img/Платье-5.1/1.svg" },
        "./img/Платье-5.1/1.svg": { src: "./img/Платье-5.1/2.svg" },
        "./img/Платье-5.1/2.svg": { src: "./img/Платье-5.1/3.svg" },
        "./img/Платье-5.1/3.svg": { src: "./img/Платье-5.1/4.svg" },
        "./img/Платье-5.1/4.svg": { src: "./img/Платье-5.1/5.svg" },
        "./img/Платье-5.1/5.svg": { src: "./img/Платье-1/5.svg" }, // Возвращаемся к первому

        "./img/Платье-1/6.svg": { src: "./img/Платье-6.1/1.svg" },
        "./img/Платье-6.1/1.svg": { src: "./img/Платье-6.1/2.svg" },
        "./img/Платье-6.1/2.svg": { src: "./img/Платье-6.1/3.svg" },
        "./img/Платье-6.1/3.svg": { src: "./img/Платье-6.1/4.svg" },
        "./img/Платье-6.1/4.svg": { src: "./img/Платье-6.1/5.svg" },
        "./img/Платье-6.1/5.svg": { src: "./img/Платье-1/6.svg" }, // Возвращаемся к первому

        // Второе платье
        "./img/Платье-2/1.svg": { src: "./img/Платье-double-2.1/1.svg" },
        "./img/Платье-double-2.1/1.svg": { src: "./img/Платье-double-2.2/1.svg" },
        "./img/Платье-double-2.2/1.svg": { src: "./img/Платье-double-2.3/1.svg" },
        "./img/Платье-double-2.3/1.svg": { src: "./img/Платье-double-2.4/1.svg" },
        "./img/Платье-double-2.4/1.svg": { src: "./img/Платье-2/1.svg" }, // Возвращаемся к первому

        "./img/Платье-2/2.svg": { src: "./img/Платье-double-2.1/2.svg" },
        "./img/Платье-double-2.1/2.svg": { src: "./img/Платье-double-2.2/2.svg" },
        "./img/Платье-double-2.2/2.svg": { src: "./img/Платье-double-2.3/2.svg" },
        "./img/Платье-double-2.3/2.svg": { src: "./img/Платье-double-2.4/2.svg" },
        "./img/Платье-double-2.4/2.svg": { src: "./img/Платье-2/2.svg" }, // Возвращаемся к первому

        "./img/Платье-2/3.svg": { src: "./img/Платье-double-2.1/3.svg" },
        "./img/Платье-double-2.1/3.svg": { src: "./img/Платье-double-2.2/3.svg" },
        "./img/Платье-double-2.2/3.svg": { src: "./img/Платье-double-2.3/3.svg" },
        "./img/Платье-double-2.3/3.svg": { src: "./img/Платье-double-2.4/3.svg" },
        "./img/Платье-double-2.4/3.svg": { src: "./img/Платье-2/3.svg" }, // Возвращаемся к первому

        "./img/Платье-2/4.svg": { src: "./img/Платье-double-2.1/4.svg" },
        "./img/Платье-double-2.1/4.svg": { src: "./img/Платье-double-2.2/4.svg" },
        "./img/Платье-double-2.2/4.svg": { src: "./img/Платье-double-2.3/4.svg" },
        "./img/Платье-double-2.3/4.svg": { src: "./img/Платье-double-2.4/4.svg" },
        "./img/Платье-double-2.4/4.svg": { src: "./img/Платье-2/4.svg" }, // Возвращаемся к первому

        "./img/Платье-2/5.svg": { src: "./img/Платье-double-2.1/5.svg" },
        "./img/Платье-double-2.1/5.svg": { src: "./img/Платье-double-2.2/5.svg" },
        "./img/Платье-double-2.2/5.svg": { src: "./img/Платье-double-2.3/5.svg" },
        "./img/Платье-double-2.3/5.svg": { src: "./img/Платье-double-2.4/5.svg" },
        "./img/Платье-double-2.4/5.svg": { src: "./img/Платье-2/5.svg" }, // Возвращаемся к первому

        "./img/Платье-2/6.svg": { src: "./img/Платье-double-2.5/1.svg" },
        "./img/Платье-double-2.5/1.svg": { src: "./img/Платье-double-2.5/2.svg" },
        "./img/Платье-double-2.5/2.svg": { src: "./img/Платье-double-2.5/3.svg" },
        "./img/Платье-double-2.5/3.svg": { src: "./img/Платье-double-2.5/4.svg" },
        "./img/Платье-double-2.5/4.svg": { src: "./img/Платье-2/6.svg" }, // Возвращаемся к первому

        //третье платье
        "./img/Платье-3/1.svg": { src: "./img/Платье-double-3.1/1.svg" },
        "./img/Платье-double-3.1/1.svg": { src: "./img/Платье-double-3.2/1.svg" },
        "./img/Платье-double-3.2/1.svg": { src: "./img/Платье-double-3.3/1.svg" },
        "./img/Платье-double-3.3/1.svg": { src: "./img/Платье-double-3.4/1.svg" },
        "./img/Платье-double-3.4/1.svg": { src: "./img/Платье-3/1.svg" }, // Возвращаемся к первому

        "./img/Платье-3/2.svg": { src: "./img/Платье-double-3.1/2.svg" },
        "./img/Платье-double-3.1/2.svg": { src: "./img/Платье-double-3.2/2.svg" },
        "./img/Платье-double-3.2/2.svg": { src: "./img/Платье-double-3.3/2.svg" },
        "./img/Платье-double-3.3/2.svg": { src: "./img/Платье-double-3.4/2.svg" },
        "./img/Платье-double-3.4/2.svg": { src: "./img/Платье-3/2.svg" }, // Возвращаемся к первому

        "./img/Платье-3/3.svg": { src: "./img/Платье-double-3.1/3.svg" },
        "./img/Платье-double-3.1/3.svg": { src: "./img/Платье-double-3.2/3.svg" },
        "./img/Платье-double-3.2/3.svg": { src: "./img/Платье-double-3.3/3.svg" },
        "./img/Платье-double-3.3/3.svg": { src: "./img/Платье-double-3.4/3.svg" },
        "./img/Платье-double-3.4/3.svg": { src: "./img/Платье-3/3.svg" }, // Возвращаемся к первому

        "./img/Платье-3/4.svg": { src: "./img/Платье-double-3.1/4.svg" },
        "./img/Платье-double-3.1/4.svg": { src: "./img/Платье-double-3.2/4.svg" },
        "./img/Платье-double-3.2/4.svg": { src: "./img/Платье-double-3.3/4.svg" },
        "./img/Платье-double-3.3/4.svg": { src: "./img/Платье-double-3.4/4.svg" },
        "./img/Платье-double-3.4/4.svg": { src: "./img/Платье-3/4.svg" }, // Возвращаемся к первому

        "./img/Платье-3/5.svg": { src: "./img/Платье-double-3.1/5.svg" },
        "./img/Платье-double-3.1/5.svg": { src: "./img/Платье-double-3.2/5.svg" },
        "./img/Платье-double-3.2/5.svg": { src: "./img/Платье-double-3.3/5.svg" },
        "./img/Платье-double-3.3/5.svg": { src: "./img/Платье-double-3.4/5.svg" },
        "./img/Платье-double-3.4/5.svg": { src: "./img/Платье-3/5.svg" }, // Возвращаемся к первому

        "./img/Платье-3/6.svg": { src: "./img/Платье-double-3.5/1.svg" },
        "./img/Платье-double-3.5/1.svg": { src: "./img/Платье-double-3.5/2.svg" },
        "./img/Платье-double-3.5/2.svg": { src: "./img/Платье-double-3.5/3.svg" },
        "./img/Платье-double-3.5/3.svg": { src: "./img/Платье-double-3.5/4.svg" },
        "./img/Платье-double-3.5/4.svg": { src: "./img/Платье-3/6.svg" }, // Возвращаемся к первому

    }
});

