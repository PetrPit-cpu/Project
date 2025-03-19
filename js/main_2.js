document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.game__list-items');
    const items = Array.from(list.children);
    const correctOrder = items.map(item => item.querySelector('img').src); // Правильный порядок

    // Функция для перемешивания массива
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Перемешиваем элементы и заносим их обратно в список
    shuffle(items);
    items.forEach(item => list.appendChild(item));

    let draggedItem = null;

    items.forEach(item => {
        item.draggable = true;

        item.addEventListener('dragstart', () => {
            draggedItem = item;
            setTimeout(() => item.style.opacity = '0.5', 0);
        });

        item.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        item.addEventListener('drop', (event) => {
            event.preventDefault();
            if (draggedItem !== item) {
                let allItems = Array.from(list.children);
                let draggedIndex = allItems.indexOf(draggedItem);
                let droppedIndex = allItems.indexOf(item);

                if (draggedIndex < droppedIndex) {
                    list.insertBefore(draggedItem, item.nextSibling);
                } else {
                    list.insertBefore(draggedItem, item);
                }
            }
            checkPuzzleCompletion();
        });

        item.addEventListener('dragend', () => {
            draggedItem.style.opacity = '1';
            draggedItem = null;
        });
    });

    // Функция проверки, собран ли пазл правильно
    function checkPuzzleCompletion() {
        const currentOrder = Array.from(list.children).map(item => item.querySelector('img').src);
        if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
            list.style.gap = '0px'; // Убираем расстояния
        } else {
            list.style.gap = '15px'; // Возвращаем, если пазл разобран
        }
    }
});