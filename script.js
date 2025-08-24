// Получаем кнопки и контейнер
const toastContainer = document.getElementById('toastContainer');
const successBtn = document.getElementById('successBtn');
const failBtn = document.getElementById('failBtn');
const warningBtn = document.getElementById('warningBtn');

// Настройка уведомлений (как на изображении)
const toastData = {
    // Уведомление для кнопок 'Success' и 'Fail' (стиль 'success'/'error')
    success: {
        title: "Well done!",
        description: null,
        className: 'success',
        duration: 3000 // 3 секунды
    },
    // Уведомление для кнопки 'Warning'
    warning: {
        title: "Warning!",
        description: null,
        className: 'warning',
        duration: 3000
    },
    // Специальное уведомление 'Oh snap!' (стиль 'error')
    error: {
        title: "Oh snap!",
        description: "Change a few things up - submitting again.",
        className: 'error',
        duration: 5000 // 5 секунд, чтобы успеть прочитать
    }
};

/**
 * Создает и отображает новое уведомление
 * @param {string} type - Тип уведомления ('success', 'warning', 'error')
 */
function createToast(type) {
    const data = toastData[type];
    if (!data) return;

    // 1. Создание элемента уведомления
    const toast = document.createElement('div');
    toast.classList.add('toast', data.className);
    
    // 2. Внутреннее содержимое
    let contentHTML = `<div class="toast-content">
        <p class="toast-title">${data.title}</p>`;

    if (data.description) {
        contentHTML += `<p class="toast-description">${data.description}</p>`;
    }

    contentHTML += `</div>
        <button class="toast-close-btn" aria-label="Закрыть">&times;</button>`;

    toast.innerHTML = contentHTML;

    // 3. Добавление в контейнер
    toastContainer.appendChild(toast);

    // 4. Удаление по клику на кнопку
    toast.querySelector('.toast-close-btn').addEventListener('click', () => {
        toast.remove();
    });

    // 5. Автоматическое удаление
    setTimeout(() => {
        // Добавляем класс для анимации исчезновения, а затем удаляем элемент
        toast.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => toast.remove(), 500); 
    }, data.duration);
}


// --- Обработчики событий для кнопок ---

successBtn.addEventListener('click', () => {
    // Вызывает "Well done!"
    createToast('success'); 
});

failBtn.addEventListener('click', () => {
    // Вызывает "Oh snap!"
    createToast('error'); 
});

warningBtn.addEventListener('click', () => {
    // Вызывает "Warning!"
    createToast('warning'); 
});

// Добавляем вызов для демонстрации уведомлений, как на исходном изображении
// Этот код можно удалить после тестирования
document.addEventListener('DOMContentLoaded', () => {
    // Демонстрационный вызов для начального вида
    setTimeout(() => createToast('warning'), 100);
    setTimeout(() => createToast('success'), 300);
    setTimeout(() => createToast('error'), 500);
    setTimeout(() => createToast('success'), 700);
    setTimeout(() => createToast('warning'), 900);
});