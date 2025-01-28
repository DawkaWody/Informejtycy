+++
title = 'Nwd i nww'
date = 2023-01-01T08:00:00-07:00
draft = true
id = 6
+++
## NWD

Zapewne spotkałeś się już z takim skrótem jak NWD. Oznacza on Największy Wspólny Dzielnik, czyli największą możliwą liczbę, która dzieli liczbę $a$ i liczbę $b$ bez reszty. Czy zastanawiałeś się już, jak można znaleźć NWD pisząc program w C++? Można to zrobić w bardzo prosty sposób. Już wiesz, jak znaleźć dzielniki liczby $a$, dlatego teraz wystarczy sprawdzić, czy dzielniki $a$ dzielą także $b$. Warto zauważyć, że jeśli $a$ jest większe od $b$ to niektóre dzielniki $a$ mogą być większe od $b$, dlatego warto jest sprawdzać dzielniki liczby mniejszej.
``` cpp
#include<iostream>
using namespace std;

int main() {
	int a, b;
	cin >> a >> b;
	int mniejsza = min(a, b);
	int nwd = 1;
	for (int i = 1; i * i <= mniejsza; i++) { // asdfasdgadgsagsdasdsafsdfgdfsadadgsagdsadgsdddffffd
		if (a % i == 0 && b % i == 0) {
			if (b % (a / i) == 0 && a / i > nwd) {
				nwd = a / i;
			}
			if (a % (b / i) == 0 && b / i > nwd) {
				nwd = b / i;
			}
			if (i > nwd) {
				nwd = i;
			}
		}
	}
	cout << nwd << endl;
}
```

## Algorytm Euklidesa
Jeśli chcielibyśmy napisać program, który znajduje NWD dla miliona par liczb, okazałoby się, że nasz program będzie działał bardzo długo. Czy jest sposób, aby dokonać tego szybciej? Tak i odkrył go grecki matematyk Euklides z Aleksandrii. Pierwsze wzmianki na temat tego algorytmu pochodzą z około trzysetnego roku przed naszą erą, z dzieła Euklidesa zatytułowanego "Elementy". Chociaż jego działanie może wydawać się trudne, wcale takie nie jest. Polega na tym, że od liczby $a$ odejmujemy liczbę $b$ tyle razy, ile to możliwe. Kiedy już nie będziemy mogli dalej odejmować tych liczb w taki sposób, to od liczb $b$ odejmujemy liczbę $a$. Następnie od $a$ odejmujemy $b$ itd. Robimy tak do momentu, w którym obie liczby będą takie same.
```cpp
#include<iostream>
using namespace std;

int nwd(int a, int b) {
	while (a != b) {
		if (a > b) { //ten warunek sprawdza, która liczba jest większa
			a -= b; //jeśli większa jest liczba a, to od a odejmujemy b
		} else {
			b -= a; //jeśli większa jest liczba b, to od b odejmujemy a
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
Ale czy ten kod naprawdę będzie szybszy? No nie do końca, bo gdy dostaniemy taki przykład: 1000000 i 1, wykonamy 999999 kroków. To dlaczego wspominamy o tym algorytmie? Dlatego, że możemy go zastosować, używając reszty z dzielenia. Przy takim przykładzie wykonamy zaledwie jeden krok.
```cpp
#include<iostream>
using namespace std;

int nwd(int a, int b) {
	int pom;
	while (b != 0) {
		pom = b;
		b = a % b;
		a = pom;
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
$$itd.$$
Jak wygląda taki kod? Oto on:
```cpp
#include<iostream>
using namespace std;

int nwd(int a, int b) {
	int pom;
	while (b != 0) {
		pom = b;
		b = a % b;
		a = pom;
	}
	return a;
}

int main() {
	int n; //wczytujemy z ilu liczb będziwmy obliczać NWD
	int wynik, a;
	cin >> n;
	cin >> wynik; //wczytujemy pierwszą liczbę
	for (int i = 1; i < n; i++) {
		cin >> a; //wczytujemy drugą liczbę
		wynik = nwd(wynik, a);
	}
	cout << wynik;
	return 0;
}
```

## NWW
Przy zagadnieniach związanych z NWD pojawia się NWW, czyli Najmniejsza Wspólna Wielokrotność dwóch liczb. Jak to policzyć? Wystarczy zapamiętać, że tak naprawdę:
$$NWW(a, b) = a * b / NWD(a, b)$$
Wynika to z rozkładu liczb na czynniki pierwsze. Jak wyglądałby taki kod?
```cpp
#include<iostream>
using namespace std;

int nwd(int a, int b) {
	int pom;
	while (b != 0) {
		pom = b;
		b = a % b;
		a = pom;
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
#include<iostream>
using namespace std;

int nwd(int a, int b) {
	int pom;
	while (b != 0) {
		pom = b;
		b = a % b;
		a = pom;
	}
	return a;
}

int main() {
	int n; //wczytujemy z ilu liczb będziwmy obliczać NWW
	int wynik, a;
	cin >> n;
	cin >> wynik; //wczytujemy pierwszą liczbę
	for (int i = 1; i < n; i++) {
		cin >> a; //wczytujemy drugą liczbę
		wynik = a / nwd(wynik, a) * wynik;
	}
	cout << wynik;
	return 0;
}
```