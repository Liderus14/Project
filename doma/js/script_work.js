// Получение элементов слайдеров
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.sliders-container img');

let currentIndex = 0; // Индекс текущего активного слайда

// Функция для отображения следующего слайда
function showNextSlide() {
    slides[currentIndex].classList.remove('active-slide'); // Убираем класс active у текущего слайда
    currentIndex++; // Переходим к следующему слайду

    if (currentIndex > slides.length - 1) { // Если достигли конца массива, возвращаемся к первому слайду
        currentIndex = 0;
    }

    slides[currentIndex].classList.add('active-slide'); // Добавляем класс active новому слайду
}

// Функция для отображения предыдущего слайда
function showPrevSlide() {
    slides[currentIndex].classList.remove('active-slide'); // Убираем класс active у текущего слайда
    currentIndex--; // Переходим к предыдущему слайду

    if (currentIndex < 0) { // Если достигли начала массива, переходим к последнему слайду
        currentIndex = slides.length - 1;
    }

    slides[currentIndex].classList.add('active-slide'); // Добавляем класс active новому слайду
}

// Обработчики событий на кнопки
nextBtn.addEventListener('click', showNextSlide); // Кнопка "Следующий"
prevBtn.addEventListener('click', showPrevSlide); // Кнопка "Предыдущий"