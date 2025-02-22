# Duże liczby
Zdziś lubi duże liczby. Duże liczby interesują go głównie ze względu na to, że jest wiele liczb od nich mniejszych. Dostał od siostry listę liczb oraz pewną liczbę $x$. Chciałby się dowiedzieć ile jest w liście liczb, które nie są większe od $x$.

## Wejście
Wczytaj $n$ ($1 \le n \le 10^6$) oznaczające ile liczb jest w liście. Następnie wczytaj $n$ liczb  $z_1$, $z_2$, $z_3$... ($1 \le z_i \le 10^6$). W kolejnym wierszu wczytaj liczbę $x$ ($1 \le x \le 10^6$).

## Wyjście
Wypisz liczbę oznaczającą ile wystąpiło w liście liczb nie większych od $x$.

## Przykład

Wejście:
```
10
1 5 2 8 5 6 3 4 9 3
5
```

Wyjście:
```
7
```

##### Twoim zadaniem jest poprawienie kodu, aby zaczął działać zgodnie z treścią zadania.
```cpp
#include<iostream>
using namespace std;

vector <int> v;

int main() {
	int n;
	cin >> n;
	int wczytanie;
	for (int i = 0, i < n, i++) {
		cin >> wczytanie;
		v.pop_back(wczytnie);
	}
	int x;
	cin >> x;
	int wynik = 0;
	for (int x = 0, x < n, x++) {
		if (v[i] > x) {
			wynik++;
		}
	}
	cout << wynik << end;
}
```
