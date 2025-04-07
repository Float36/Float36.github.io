document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".meal");
  let savedHackathons = JSON.parse(sessionStorage.getItem("myHackathons")) || [];

  cards.forEach((card) => {
    const title = card.querySelector(".meal-title").textContent;
    const image = card.querySelector(".meal-img").src;
    const deadlineText = card.querySelector(".meal-attribute span").textContent.replace("Дедлайн:", "").trim();
    const topic = card.querySelector(".tag").textContent;

    // Обробка дати
    const deadlineDate = new Date(deadlineText.split('.').reverse().join('-')); // з "dd.mm.yyyy" у "yyyy-mm-dd"
    const now = new Date();
    const timeDiff = deadlineDate - now;

    let timeRemaining = "";

    if (timeDiff > 0) {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      timeRemaining = `${days}д ${hours}г ${minutes}х до дедлайну`;
    } else {
      timeRemaining = "Дедлайн минув";
    }

    // Додаємо текст зворотного відліку
    const countdown = document.createElement("li");
    countdown.classList.add("meal-attribute");

    const icon = document.createElement("ion-icon");
    icon.classList.add("meal-icon");
    icon.setAttribute("name", "time-outline");

    const text = document.createElement("span");
    text.textContent = timeRemaining;

    countdown.appendChild(icon);
    countdown.appendChild(text);

// Додаємо як ще один пункт списку
card.querySelector(".meal-attributes").appendChild(countdown);


    // Кнопка
    const button = document.createElement("button");
    button.textContent = "Подати заявку";
    button.classList.add("apply-btn");
    button.style.marginTop = "3rem";
    button.style.marginLeft = "6rem";
    button.style.padding = "0.5rem 1rem";
    button.style.borderRadius = "5px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#f08a24";
    button.style.color = "#fff";
    button.style.fontWeight = "600";

    card.querySelector(".meal-content").appendChild(button);

    const hackathon = { title, image, deadline: deadlineText, topic };

    if (savedHackathons.some(h => h.title === hackathon.title)) {
      button.textContent = "Заявка подана";
      button.style.backgroundColor = "green";
      button.disabled = true;
    }

    button.addEventListener("click", () => {
      if (!savedHackathons.some(h => h.title === hackathon.title)) {
        savedHackathons.push(hackathon);
        sessionStorage.setItem("myHackathons", JSON.stringify(savedHackathons));

        button.textContent = "Заявка подана";
        button.style.backgroundColor = "green";
        button.disabled = true;
      }
    });

    // Hover ефект
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.03)";
      card.style.transition = "0.3s";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});

