const listItems = document.querySelectorAll(".rate li");

listItems.forEach((item, index) => {
    // Зміна кольору для призових місць
    if (index === 0) {
        item.style.color = "gold"; // 1 місце
        item.style.fontWeight = "bold";
    } else if (index === 1) {
        item.style.color = "silver"; // 2 місце
    } else if (index === 2) {
        item.style.color = "brown"; // 3 місце
    } else {
        item.style.color = "white"; // Інші місця
    }
});