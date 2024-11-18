document.addEventListener("DOMContentLoaded", () => {
const folders = document.querySelectorAll(".folder");

folders.forEach(folder => {
    folder.addEventListener("click", (e) => {
    e.stopPropagation();
    folder.classList.toggle("open");
    });
});
});