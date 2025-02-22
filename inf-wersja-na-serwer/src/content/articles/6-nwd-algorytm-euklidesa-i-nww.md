---
draft: false
title: 'NWD, NWW i algorytm Euklidesa'
id: 6
nerd: false
---
# NWD, NWW i algorytm Euklidesa
## NWD
Zapewne spotkałeś się już z takim skrótem jak NWD. Oznacza on Największy Wspólny Dzielnik, czyli największą możliwą liczbę, która dzieli liczbę $a$ i liczbę $b$ bez reszty. Czy zastanawiałeś się już, jak można znaleźć NWD pisząc program w C++? Można to zrobić w bardzo prosty sposób. Już wiesz, jak znaleźć dzielniki liczby $a$, dlatego teraz wystarczy sprawdzić, czy dzielniki $a$ dzielą także $b$. Warto zauważyć, że jeśli $a$ jest większe od $b$ to niektóre dzielniki $a$ mogą być większe od $b$, dlatego warto jest sprawdzać dzielniki liczby mniejszej.
```cpp
#include <iostream>
using namespace std;

int main() {
	int a, b;
	cin >> a >> b;
	int mniejsza = min(a, b);
	int nwd = 1;
	for (int i = 1; i * i <= mniejsza; i++) {
		// sprawdzamy czy i jest dzielnikiem a oraz b
		if (a % i == 0 && b % i == 0) { 
			// sprawdzamy czy iloraz a / i dzieli b oraz czy iloraz a / i jest większy od nwd
			if (b % (a / i) == 0 && a / i > nwd) {
				nwd = a / i;
			}
			// sprawdzamy czy iloraz b / i dzieli a oraz czy iloraz b / i jest większy od nwd
			if (a % (b / i) == 0 && b / i > nwd) {
				nwd = b / i;
			}
			// sprawdzamy czy i jest większe od nwd
			if (i > nwd) {
				nwd = i;
			}
		}
	}
	cout << nwd << endl;
}
```

## Algorytm Euklidesa
Jeśli chcielibyśmy napisać program, który znajduje NWD dla miliona par liczb, okazałoby się, że nasz program będzie działał bardzo długo. Czy jest sposób, aby dokonać tego szybciej? Tak i odkrył go grecki matematyk Euklides z Aleksandrii. Pierwsze wzmianki na temat tego algorytmu pochodzą z około trzysetnego roku przed naszą erą, z dzieła Euklidesa zatytułowanego "Elementy". Chociaż jego działanie może wydawać się trudne, wcale takie nie jest. Polega na tym, że przy każdym uruchomieniu pętli od większej liczby odejmujemy mniejszą do momentu, w którym obie liczby będą równe.
```cpp
#include <iostream>
using namespace std;

int nwd(int a, int b) {
	while (a != b) {
		// ten warunek sprawdza, która liczba jest większa
		if (a > b) {
			// jeśli większa jest liczba a, to od a odejmujemy b
			a -= b;
		} else {
			// jeśli większa jest liczba b, to od b odejmujemy a
			b -= a;
		}
	}
	return a;
}

int main() {
	int a, b;
	cin >> a >> b;
	cout << nwd(a, b) << endl;
	return 0;
}
```
Ale czy ten kod naprawdę będzie szybszy? No nie do końca, bo gdy dostaniemy taki przykład: 1000000 i 1, wykonamy 999999 kroków. To dlaczego wspominamy o tym algorytmie? Jak można zauważyć, odejmowanie pierwszej liczby od drugiej do momentu, w którym pierwsza liczba będzie większa od drugiej to tak naprawdę dzielenie z resztą. Dlatego odejmowanie możemy zamienić na modulo. Powinniśmy także zmienić warunek w pętli `while`. Tutaj, zamiast powtarzania czynności do momentu, w którym dwie liczby będą takie same, wykonujemy je dopóki druga z liczb jest różna od zera. W taki sposób pierwsza liczba, mająca wartość różną od zera, jest naszym NWD.
```cpp
#include <iostream>
using namespace std;

int nwd(int a, int b) {
	int stareB;
	while (b != 0) {
		// zmienna stareB przechowuje nam b, abyśmy potem mogli ustawić a na b sprzed zmian
		stareB = b;
		b = a % b;
		a = stareB;
	}
	return a;
}

int main() {
	int a, b;
	cin >> a >> b;
	cout << nwd(a, b);
	return 0;
}
```
W ten oto sposób mamy naprawdę bardzo szybki sposób na znajdowanie NWD dwóch wybranych liczb.

## NWD więcej niż dwóch liczb
Czy znalezienie NWD więcej niż dwóch liczb jest trudne? Wcale nie. Należy obliczyć 

$$a = NWD(pierwsza, druga)$$
$$b = NWD(a, trzecia)$$
$$c = NWD(b, czwarta)$$
$$\cdots$$
Jak wygląda taki kod? Oto on:
```cpp
#include <iostream>
using namespace std;

int nwd(int a, int b) {
	int stareB;
	while (b != 0) {
		stareB = b;
		b = a % b;
		a = stareB;
	}
	return a;
}

int main() {
	int n;
	int wynik, a;
	// wczytujemy z ilu liczb będziemy obliczać NWD
	cin >> n;
	// wczytujemy pierwszą liczbę
	cin >> wynik;
	// pętla idzie od jedynki, ponieważ pierwszą liczbę wczytujemy już przed pętlą
	for (int i = 1; i < n; i++) {
		// wczytujemy drugą liczbę
		cin >> a;
		// modyfikujemy naszą pierwszą liczbę
		wynik = nwd(wynik, a);
	}
	cout << wynik;
	return 0;
}
```

## NWW
Przy zagadnieniach związanych z NWD pojawia się NWW, czyli Najmniejsza Wspólna Wielokrotność dwóch liczb. Jak to policzyć? Wystarczy zapamiętać, że tak naprawdę:

$$\text{NWW}(a, b) = \frac{a \cdot b}{\text{NWD}(a, b)}$$

Wynika to z rozkładu liczb na czynniki pierwsze. Jak wyglądałby taki kod?
```cpp
#include <iostream>
using namespace std;

int nwd(int a, int b) {
	int stareB;
	while (b != 0) {
		stareB = b;
		b = a % b;
		a = stareB;
	}
	return a;
}

int main() {
	int a, b;
	cin >> a >> b;
	cout << a * b / nwd(a, b);
	return 0;
}
```

## NWW więcej niż dwóch liczb
NWW więcej niż dwóch liczb można obliczyć analogicznie do NWD wielu liczb.
```cpp
#include <iostream>
using namespace std;

int nwd(int a, int b) {
	int stareB;
	while (b != 0) {
		stareB = b;
		b = a % b;
		a = stareB;
	}
	return a;
}

int main() {
	int n;
	int wynik, a;
	// wczytujemy z ilu liczb będziemy obliczać NWW
	cin >> n;
	// wczytujemy pierwszą liczbę
	cin >> wynik;
	// pętla idzie od jedynki, ponieważ pierwszą liczbę wczytujemy już przed pętlą
	for (int i = 1; i < n; i++) {
		// wczytujemy drugą liczbę
		cin >> a;
		// modyfikujemy naszą pierwszą liczbę
		wynik = a / nwd(wynik, a) * wynik;
	}
	cout << wynik;
	return 0;
}
```