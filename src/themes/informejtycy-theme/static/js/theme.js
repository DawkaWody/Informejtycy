function getStyleSheet(file_name) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (sheet.href.includes(file_name)) {
            return sheet;
        }
    }
}

// Funkcja do ustawiania motywu podświetlania kodu
function setCodeHighlightTheme(theme) {
    sheet_light = getStyleSheet("highlight_light.min.css");
    sheet_dark = getStyleSheet("highlight_dark.min.css");

    if (theme === "light") {
        sheet_light.disabled = false;
        sheet_dark.disabled = true;
    } else {
        sheet_light.disabled = true;
        sheet_dark.disabled = false;
    }
}

// Funkcja do ustawiania motywu
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    setCodeHighlightTheme(theme);
    localStorage.setItem("theme", theme); // Zapisanie motywu w localStorage
}

// Pobranie motywu z localStorage przy ładowaniu strony
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    setTheme(savedTheme);
} else {
    // Jeśli brak zapisu, pobierz preferencje przeglądarki
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = prefersDark ? "dark" : "light";
    setTheme(defaultTheme);
}

document.getElementById("theme-toggle").addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
});