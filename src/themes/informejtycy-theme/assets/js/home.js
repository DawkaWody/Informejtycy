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
                stats[0].textContent = data.total_users;
                stats[1].textContent = data.exercises;
                stats[2].textContent = data.views;
                stats[3].textContent = data.code_lines;
            })
            .catch(err => console.error(err));
    }
}