function getStyleSheet(file_name) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (sheet.href && sheet.href.includes(file_name)) {
            return sheet;
        }
    }
    return null;
}

// Funkcja do ustawiania motywu podświetlania kodu
function setCodeHighlightTheme(theme) {
    var sheet_light = getStyleSheet("highlight_light");
    var sheet_dark = getStyleSheet("highlight_dark");

    if (sheet_light && sheet_dark) {
        if (theme === "light") {
            sheet_light.disabled = false;
            sheet_dark.disabled = true;
        } else {
            sheet_light.disabled = true;
            sheet_dark.disabled = false;
        }
    }
}

// Funkcja do ustawiania motywu
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    setCodeHighlightTheme(theme);
    localStorage.setItem("theme", theme); // Zapisanie motywu w localStorage
}

window.setTheme = setTheme;

// Wczytanie motywu z localStorage przy załadowaniu strony
document.addEventListener("DOMContentLoaded", function () {
    var savedTheme = localStorage.getItem("theme") || "light"; // Domyślnie jasny
    setTheme(savedTheme);
});
