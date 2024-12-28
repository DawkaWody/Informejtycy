const themeToggleButton = document.getElementById("theme-toggle");

// Funkcja do ustawiania motywu
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Zapisanie motywu w localStorage
}

// Pobranie motywu z localStorage przy ładowaniu strony
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    setTheme(savedTheme);
} else {
    // Jeśli brak zapisu, ustaw domyślny motyw
    const defaultTheme = "light";
    setTheme(defaultTheme);
}

themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
});
