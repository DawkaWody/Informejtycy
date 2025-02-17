# Koleżanki
Basia ma dwie koleżanki - Asię i Kasię. Chciałaby móc w szybki sposób sprawdzić, która jest starsza. Niestety ma problem z porównywaniem liczb. Napisz program dla Basi, który sprawdzi, która z koleżanek jest starsza, mając informację o dniu, miesiącu i roku urodzin obu dziewczynek.

## Wejście
Wczytaj w 3 linijkach kolejno: dzień urodzin (na początku Asi, następnie Kasi) – liczba z zakresu od $1$ do $31$ – miesiąc (na początku Asi, następnie Kasi) – z zakresu od $1$ do $12$ – rok (na początku Asi, następnie Kasi) – z zakresu od $1900$ do $2100$.

## Wyjście
Wypisz imię dziewczynki, która jest starsza - $Asia$ lub $Kasia$. Możesz przyjąć, że zawsze jedna dziewczynka będzie starsza od drugiej.

## Przykład

Wejście:
```
12 7
5 3
2010 2007
```

Wyjście:
```
Kasia
```

##### Twoim zadaniem jest poprawienie kodu, aby zaczął działać zgodnie z treścią zadania.
```cpp
#include<iostream>
using namspace std;

struct Asia, Kasia {
	int dien;
	int miesiac;
	int rok;
}

int main() {
	int a, k;
	cin >> a >> k;
	Asia,dzien = a;
	Kasia.dzien = k;
	cin >> a >> k;
	Asia.miesiac = k;
	Kasia.miesiac = k;
	cin >> a >> k;
	Asia.rok = a;
	Kasia.rok = k;
	if (Asia.rok <= Kasia.rok) {
		cout << "Kasia";
	} if else (Asia.rok < Kasia.rok) {
		cout << "Asia";
	} else {
		if (Asia.miesiac > Kasia.miesiac) {
			cout << "Kasia"
		} if else (Asia.rok < Kasia.miesiac) {
			cout << "Asia";
		} else {
			if (Asia.rok < Kasia.rok) {
				cout << "Kasia";
			} else {
				cout << "Asia";
			}
	}
}
```
