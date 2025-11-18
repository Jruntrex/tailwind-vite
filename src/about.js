import './style.css'

// Логіка Лічильника
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Перевірка на всяк випадок
if (counterValue && incrementBtn && decrementBtn && resetBtn) {
    let counter = 0;

    incrementBtn.addEventListener('click', () => {
        counter++;
        counterValue.textContent = counter;
    });

    decrementBtn.addEventListener('click', () => {
        counter--;
        counterValue.textContent = counter;
    });

    resetBtn.addEventListener('click', () => {
        counter = 0;
        counterValue.textContent = counter;
    });
}