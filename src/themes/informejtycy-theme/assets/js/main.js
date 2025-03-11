// Ustawienie motywu na podstawie preferencji użytkownika
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    window.setTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = prefersDark ? "dark" : "light";
    window.setTheme(defaultTheme);
}

// Przełączanie motywu
document.getElementById("theme-toggle")
    .addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        window.setTheme(newTheme);
    });

// Rozwijanie i zwijanie sekcji
document.querySelector('.menu')
    .addEventListener('click', (e) => {
        const el = e.target.parentElement;
        if (el.classList[0] === 'section-dropdown') {
            var submenu = el.nextElementSibling;
            window.rotateArrow(el.children[1]);
            window.expandCollapseSection(submenu);

            var sectionToClose;
            if (el.parentElement.getAttribute('id') === 'basic-section') {
                sectionToClose = document.getElementById('advanced-section').children[0];
            }
            else {
                sectionToClose = document.getElementById('basic-section').children[0];
            }

            if (window.isExpanded(sectionToClose.nextElementSibling)) {
                window.rotateArrow(sectionToClose.children[1]);
                window.expandCollapseSection(sectionToClose.nextElementSibling);
            }
        }
    })

if (window.innerWidth > 1000) {
    let elem = document.getElementById("spis-tel");
    if (elem) elem.remove();
}

window.addEventListener("load", adjustAllImageRows);
window.addEventListener("resize", adjustAllImageRows);

function adjustAllImageRows() {
    document.querySelectorAll(".rzad-zdjec").forEach(adjustImageHeight);
}

function adjustImageHeight(container) {
    const images = container.querySelectorAll("a img");
    if (images.length === 0) return;

    let maxWidth = container.clientWidth;
    let height = 1200; // Początkowa wysokość w px
    let gap = 20; // Odstęp między obrazkami
    let totalWidth;

    do {
        totalWidth = 0;
        images.forEach(img => {
            let aspectRatio = img.naturalWidth / img.naturalHeight;
            totalWidth += height * aspectRatio; // Obliczamy szerokość dla danej wysokości
        });

        totalWidth += (images.length - 1) * gap; // Dodajemy odstępy między zdjęciami
        if (totalWidth > maxWidth) height -= 1; // Zmniejszamy wysokość jeśli za szeroko
    } while (totalWidth > maxWidth && height > 10); // Minimalna wysokość, np. 10px

    images.forEach(img => img.style.height = `${height}px`);
}