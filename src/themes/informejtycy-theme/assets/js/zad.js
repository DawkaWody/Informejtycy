function pokazPanel() {
	pokazWaiting();
	pokazWynik();
	pokazWerdykt();
	pokazFF();
}

function ukryjPanel() {
	ukryjWaiting();
	ukryjWynik();
	ukryjWerdykt();
	ukryjFF();
}

function pokazWaiting() {
	var waiting = document.getElementById("waiting");
	waiting.style.display = "block";
	waiting.style.marginBottom = "20px";
}

function ukryjWaiting() {
	var waiting = document.getElementById("waiting");
	waiting.style.display = "none";
}

function pokazWynik() {
	var wynik = document.getElementById("receive-score");
	wynik.style.display = "block";
}

function ukryjWynik() {
	var wynik = document.getElementById("receive-score");
	wynik.style.display = "none";
}

function pokazWerdykt() {
	var werdykt = document.getElementById("receive-verdict");
	werdykt.style.display = "block";
	werdykt.style.marginBottom = "20px";
}

function ukryjWerdykt() {
	var werdykt = document.getElementById("receive-verdict");
	werdykt.style.display = "none";
}

function pokazFF() {
	var ff = document.getElementById("rec-ff");
	ff.style.display = "block";
}

function ukryjFF() {
	var ff = document.getElementById("rec-ff");
	ff.style.display = "none";
}

var scores = {};

// Funkcja do wczytania scores z localStorage
function loadScoresFromLocalStorage() {
	const savedScores = localStorage.getItem("scores");
	if (savedScores) {
		scores = JSON.parse(savedScores);
	}
}

// Funkcja do zapisania scores do localStorage
function saveScoresToLocalStorage() {
	localStorage.setItem("scores", JSON.stringify(scores));
}

// Zaktualizowanie wyników na stronie
function updateScores() {
	for (var key in scores) {
		var score = scores[key];
		var element = document.getElementById("zad-" + key);
		element.innerHTML = score;
	}

	// Zapisz scores do localStorage po każdej zmianie
	saveScoresToLocalStorage();
}

document.addEventListener("DOMContentLoaded", function () {
	loadScoresFromLocalStorage();
	ukryjPanel();
	updateScores();

	var submitButton = document.getElementById("submit-button");

	submitButton.addEventListener("click", function () {
		var problem = document.getElementById("problem").value;
		var code = document.getElementById("code").value;

		const option = document.querySelector('option[value="' + problem + '"]');
		const problemId = option ? option.getAttribute("problem-id") : null;
		console.log('Problem ID:', problemId);

		if (!problemId) {
			console.error('Nie znaleziono problem ID!');
			return;
		}

		fetch('http://127.0.0.1:5000/checker/submit', {
			method: 'POST',
			headers: {
				'Problem': problemId,
				'Content-Type': 'text/plain'
			},
			body: code
		})
			.then(response => response.json())
			.then(data => {
				console.log('Sukces:', data);

				const auth_code = data.authorization;
				console.log('Authorization:', auth_code);
				ukryjPanel();
				pokazWaiting();

				const intervalId = setInterval(() => {
					fetch(`http://127.0.0.1:5000/checker/status/${auth_code}`)
						.then(response => response.json())
						.then(statusData => {
							console.log('Status:', statusData);

							if (statusData.unauthorized === false) {
								var score = statusData.percentage;
								var memlimit = statusData.memory_limit_exceeded;
								var timelimit = statusData.time_limit_exceeded;
								var compErr = statusData.compilation_error;
								var invalidID = statusData.invalid_problem_id;
								var ff = statusData.first_failed;

								pokazPanel();
								ukryjWaiting();
								ukryjFF();

								var wynik = document.getElementById("receive-score");
								wynik.innerHTML = "Wynik zgłoszenia: " + score + "/100";
								var werdykt = document.getElementById("receive-verdict");

								if (compErr) werdykt.innerHTML = "Werdykt: Błąd kompilacji";
								else if (memlimit) werdykt.innerHTML = "Werdykt: Przekroczono limit pamięci";
								else if (timelimit) werdykt.innerHTML = "Werdykt: Przekroczono limit czasu";
								else if (invalidID) werdykt.innerHTML = "Werdykt: Nieprawidłowy problem";
								else if (score === 100) werdykt.innerHTML = "Werdykt: OK";
								else {
									werdykt.innerHTML = "Werdykt: Zła odpowiedź";
									pokazFF();
									var ffpole = document.getElementById("receive-ff");
									ffpole.innerHTML = ff;
								}

								scores[problemId] = Math.max(score, scores[problemId] || 0);
								updateScores();

								clearInterval(intervalId);
							}
						})
						.catch(error => console.error('Błąd przy sprawdzaniu statusu:', error));
				}, 1000);
			})
			.catch(error => console.error('Błąd:', error));
	});
});