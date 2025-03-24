document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const deadlineText = card.querySelector("p").textContent; // Отримуємо текст дедлайну
        const deadlineDate = extractDate(deadlineText); // Конвертуємо у Date

        if (!deadlineDate) return; // Якщо не вдалося визначити дату, виходимо

        // Додаємо контейнер для таймера
        const timerElement = document.createElement("p");
        timerElement.classList.add("timer");
        card.appendChild(timerElement);

        // Запускаємо таймер
        updateTimer(timerElement, deadlineDate);
        setInterval(() => updateTimer(timerElement, deadlineDate), 1000);
    });
});


// Функція для конвертації тексту в об'єкт Date.
 
function extractDate(text) {
    const match = text.match(/(\d{2})\.(\d{2})\.(\d{4})/); // Пошук формату dd.mm.yyyy
    if (!match) return null;
    
    const [, day, month, year] = match;
    return new Date(`${year}-${month}-${day}T00:00:00`);
}


// Функція для оновлення таймера.

function updateTimer(element, deadline) {
    const now = new Date();
    const timeLeft = deadline - now;

    if (timeLeft <= 0) {
        element.textContent = "Хакатон завершено!";
        element.style.color = "red";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    element.textContent = `Залишилось: ${days}д ${hours}г ${minutes}хв ${seconds}с`;
}
