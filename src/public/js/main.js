// Ustawienie motywu na podstawie preferencji użytkownika
console.log("Hello from main.js");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    setTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = prefersDark ? "dark" : "light";
    setTheme(defaultTheme);
}

// Przełączanie motywu
document.getElementById("theme-toggle").addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
});

// Rozwijanie i zwijanie sekcji
document.querySelector('.menu')
.addEventListener('click', (e) => {
    const el = e.target.parentElement;

    if (el.classList[0] === 'section-dropdown') {
        var sec = el.nextElementSibling;
        rotateArrow(el.children[1]);
        expandCollapseSection(sec);
    }
})