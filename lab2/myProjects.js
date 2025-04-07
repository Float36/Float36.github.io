document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  const savedHackathons = JSON.parse(sessionStorage.getItem("myHackathons")) || [];

  if (savedHackathons.length === 0) {
    // container.innerHTML = "<p>Наразі немає поданих заявок.</p>";
    // container.style.fontSize = "10rem";
    // container.style.display = "box";
    return;
  }

  savedHackathons.forEach((hackathon) => {
    const card = document.createElement("div");
    card.classList.add("meal");

    card.innerHTML = `
      <img class="meal-img" src="${hackathon.image}" alt="Hackathon image">
      <div class="meal-content">
        <div class="meal-tags">
          <span class="tag tag--vegetarian">${hackathon.topic}</span>
        </div>
        <h3 class="meal-title">${hackathon.title}</h3>
        <ul class="meal-attributes">
          <li class="meal-attribute">
            <ion-icon class="meal-icon" name="calendar-outline"></ion-icon>
            <span>${hackathon.deadline}</span>
          </li>
        </ul>
      </div>
    `;

    container.appendChild(card);
  });
});
