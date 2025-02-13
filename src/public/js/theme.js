(() => {
  // <stdin>
  function getStyleSheet(file_name) {
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if (sheet.href.includes(file_name)) {
        return sheet;
      }
    }
  }
  function setCodeHighlightTheme(theme) {
    sheet_light = getStyleSheet("highlight_light.css");
    sheet_dark = getStyleSheet("highlight_dark.css");
    if (sheet_light === null && sheet_dark === null) {
      sheet_light = getStyleSheet("highlight_light.min.css");
      sheet_dark = getStyleSheet("highlight_dark.min.css");
    }
    if (theme === "light") {
      sheet_light.disabled = false;
      sheet_dark.disabled = true;
    } else {
      sheet_light.disabled = true;
      sheet_dark.disabled = false;
    }
  }
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    setCodeHighlightTheme(theme);
    localStorage.setItem("theme", theme);
  }
  window.setTheme = setTheme;
})();
