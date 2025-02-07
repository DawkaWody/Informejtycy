---
draft: false
title: Wyszukiwanie liniowe i binarne
id: 15
nerd: false
---
# Wyszukiwanie liniowe i binarne
## Wyszukiwanie liniowe
Czym jest wyszukiwanie liniowe? Nazwa może przerażać, ale jest to najprostszy sposób na wyszukanie odpowiedzi na nasze zapytanie w danym ciągu. Polega on jedynie na przejściu przez ciąg. Wyobraźmy sobie, że mamy ciąg liczb i dostajemy $k$ zapytań o dane liczby, czy występują one w ciągu. Jak wyglądałby taki kod?
```cpp
#include<iostream>
#include<vector>
using namespace std;

vector <int> ciag;

int main() {
	int n;
	cin >> n;
	int liczba;
	for (int i = 0; i < n; i++) {
		cin >> liczba;
		ciag.push_back(liczba);
	}
	int k, liczba_do_spr;
	cin >> k;
	for (int i = 0; i < k; i++) {
		cin >> liczba_do_spr;
		bool czy_wystepuje = false;
		//to w tej pętli przechodzimy po całym ciągu, czyli stosujemy wyszukiwanie liniowe
		for (int x = 0; x < n; x++) {
			if (ciag[x] == liczba_do_spr) {
				czy_wystepuje = true;
				break;
			}
		}
		if (czy_wystepuje) {
			cout << "TAK" << endl;
		} else {
			cout << "NIE" << endl;
		}
	}
}
```
Ten sposób sprawdza się, kiedy mamy nieposortowany ciąg, a także jak nasze $n$, czyli długość ciągu, jest stosunkowo małe.

## Wyszukiwanie binarne
Co zrobić jeśli długość naszego ciągu jest bardzo duża? Możemy zastosować wyszukiwanie binarne inaczej zwane binsearch'em (ang. binary search). Ważne jest, aby zwrócić uwagę, że ten sposób działa jedynie dla posortowanego ciągu. Aby dobrze to zobrazować wyobraź sobie taką sytuację. Czytasz książkę mającą 120 stron. Zakończyłeś na 49 stronie, ale niestety nie włożyłeś zakładki. Chcesz otworzyć książkę z powrotem jak najszybciej. Optymalnym sposobem będzie, jeśli otworzysz książkę w połowie, czyli na 60 stronie. Wiesz, że 49 jest mniejsze od 60, więc otwierasz książkę na środku przedziału od 0 do 60, czyli na 30 stronie. 49 jest większe od 30, więc teraz otwierasz książkę w połowie, między 30 a 60, czyli na stronie 45. Robisz tak do momentu, w którym natrafisz na stronę 49. Jak widzisz wykonujesz zdecydowanie mniej kroków, niż gdybyś przechodził po kolei po wszystkich stronach. To jest właśnie wyszukiwanie binarne.

## Wykorzystanie wyszukiwania binarnego
Skoro już wiesz czym jest wyszukiwanie binarne, możesz spróbować się zastanowić jak napisać kod, który działałby w taki sposób. Weźmy na tapet zadanie, w którym musimy wypisać, pod którym indeksem znajduje się dana liczba. Kod do tego zagadnienia wygląda w następujący sposób:
```cpp
#include<iostream>
#include<vector>
using namespace std;

vector <int> ciag;

int main() {
	int n;
	cin >> n;
	int liczba;
	for (int i = 0; i < n; i++) {
		cin >> liczba;
		ciag.push_back(liczba);
	}
	int k, liczba_do_spr;
	cin >> k;
	for (int i = 0; i < k; i++) {
		cin >> liczba_do_spr;
		int poc = 0, kon = n, sr;
		while (poc <= kon) {
			sr = (poc + kon) / 2;
			if (ciag[sr] >= liczba_do_spr) {
				kon = sr - 1;
			} else {
				poc = sr + 1;
			}
		}
		cout << kon + 1  << ' ';
	}
}
```
Jak mogłeś zauważyć zmienna $sr$ to nasz środek, czyli ta liczba, z którą porównujemy, czy nasza liczba do sprawdzenia jest większa lub mniejsza. Jeżeli nasza szukana liczba jest mniejsza od liczby pod $ciag[sr]$ to przesuwamy nasz koniec na wartość naszego środka, ale możemy odjąć jeden, gdyż już wiemy, że pod indeksem $sr$ nie ma liczby, której poszukujemy. Natomiast jeżeli nasza szukana liczba jest większa od liczby pod $ciag[sr]$ to przesuwamy nasz początek na wartość naszego środka, ale możemy dodać jeden, gdyż już wiemy, że pod indeksem $sr$ nie ma liczby, której poszukujemy.