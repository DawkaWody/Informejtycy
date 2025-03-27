const spisTel = document.getElementById("spis-tel");
const wlasciwySpisTel = document.getElementById("wlasciwy-spis-tel");

spisTel.addEventListener("click", () => {
    if (wlasciwySpisTel.classList.contains("show")) {
        wlasciwySpisTel.style.height = `${wlasciwySpisTel.scrollHeight}px`; // Ustaw na aktualną wysokość
        setTimeout(() => {
            wlasciwySpisTel.style.height = "0"; // Animacja zwijania
            wlasciwySpisTel.style.opacity = "0";
        }, 10);
        wlasciwySpisTel.classList.remove("show");
    } else {
        wlasciwySpisTel.style.height = `${wlasciwySpisTel.scrollHeight}px`; // Ustaw wysokość przed pokazaniem
        wlasciwySpisTel.style.opacity = "1";
        setTimeout(() => {
            wlasciwySpisTel.style.height = "auto"; // Po zakończeniu animacji pozwalamy działać naturalnej wysokości
        }, 500);
        wlasciwySpisTel.classList.add("show");
    }
});

var fakeStats = false;
if (!fakeStats) {
    const stats = document.querySelectorAll(".stat");

if (stats.length === 4) {
    fetch("../stats.json")
        .then(response => response.json())
        .then(data => {
            const formatNumber = (num, precision) => {
                const rounded = Math.floor(num / precision) * precision; // Zaokrąglenie w dół do określonej dokładności
                return rounded.toLocaleString("pl-PL"); // Formatowanie liczby z kropkami
            };

            stats[0].textContent = formatNumber(data.total_users, 200);
            stats[1].textContent = formatNumber(data.exercises, 20);
            stats[2].textContent = formatNumber(data.views, 2000);
            stats[3].textContent = formatNumber(data.code_lines, 1000);
        })
        .catch(err => console.error(err));
}
}
