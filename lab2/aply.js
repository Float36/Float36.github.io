document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card"); // Отримуємо всі картки

    let savedHackathons = JSON.parse(sessionStorage.getItem("myHackathons")) || []; // Отримуємо вже збережені хакатони

    cards.forEach((card) => {
        const button = document.createElement("button"); // Створюємо кнопку
        button.textContent = "Подати заявку";
        button.classList.add("apply-btn");

        card.appendChild(button); // Додаємо кнопку до картки

        // Отримуємо дані хакатону
        const hackathon = {
            title: card.querySelector("h3").textContent,
            image: card.querySelector("img").src,
            deadline: card.querySelectorAll("p")[0].textContent,
            topic: card.querySelectorAll("p")[1].textContent
        };

        // Перевіряємо, чи хакатон вже додано
        if (savedHackathons.some(h => h.title === hackathon.title)) {
            button.textContent = "Заявка подана";
            button.style.backgroundColor = "green";
            button.style.color = "white";
            button.disabled = true;
        }

        // Обробник натискання на кнопку
        button.addEventListener("click", () => {
            if (!savedHackathons.some(h => h.title === hackathon.title)) {
                savedHackathons.push(hackathon);
                sessionStorage.setItem("myHackathons", JSON.stringify(savedHackathons));

                button.textContent = "Заявка подана";
                button.style.backgroundColor = "green";
                button.style.color = "white";
                button.disabled = true;

                // alert(`Ви подали заявку на хакатон: ${hackathon.title}`);
            }
        });

        // Ефект наведення на картку
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});
