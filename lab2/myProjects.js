document.addEventListener("DOMContentLoaded", () => {
    const projectsSection = document.querySelector(".hero");

    // Отримуємо збережені хакатони
    let savedHackathons = JSON.parse(sessionStorage.getItem("myHackathons")) || [];

    if (savedHackathons.length > 0) {
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");

        savedHackathons.forEach((hackathon) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${hackathon.title}</h3>
                <img src="${hackathon.image}">
                <p>${hackathon.deadline}</p>
                <p>${hackathon.topic}</p>
            `;

            gridContainer.appendChild(card);

            // Ефект наведення на картку
            card.addEventListener("mouseover", () => {
                card.style.transform = "scale(1.05)";
                card.style.transition = "0.3s";
            });

            card.addEventListener("mouseout", () => {
                card.style.transform = "scale(1)";
            });
        });

        projectsSection.appendChild(gridContainer);
    } else {
        projectsSection.innerHTML += "<p>У вас ще немає поданих заявок.</p>";
    }
});



