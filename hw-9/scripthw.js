// Задание 1
document.getElementById("toggle-title").addEventListener("click", function () {
    let title = document.getElementById("title");
    if (title.classList.contains("hidden")) {
        title.classList.remove("hidden");
        this.textContent = "Скрыть";
    } else {
        title.classList.add("hidden");
        this.textContent = "Показать";
    }
});

// Задание 2
document.getElementById("change-color").addEventListener("click", function () {
    document.getElementById("text").classList.toggle("blue-text");
});

// Задание 3
document.getElementById("change-text").addEventListener("click", function () {
    document.getElementById("title").textContent = "Привет, мир!";
});

// Задание 4 и 5
document.getElementById("change-descriptions").addEventListener("click", function () {
    document.querySelectorAll(".description").forEach(el => {
        el.textContent = "Новый текст";
    });
});

// Задание 6
document.getElementById("add-paragraph").addEventListener("click", function () {
    let p = document.createElement("p");
    p.textContent = "Новый абзац";
    p.classList.add("new-paragraph");
    document.body.appendChild(p);
});
// Задание 7
document.getElementById("remove-new-paragraph").addEventListener("click", function () {
    let firstNewParagraph = document.querySelector(".new-paragraph");
    if (firstNewParagraph) firstNewParagraph.remove();
});