# Wiadomość do siostry
Stefan planuje wysłać swojej siostrze zaszyfrowaną wiadomość. Chce do tego wykorzystać program, który dostaje litery użyte przez Stefana w jego tekście i przypisuje im liczby, zaczynając od 1. Każda kolejna litera ma wartość +1 w porównaniu do poprzedniej. Następnie dostaje tekst do zaszyfrowania i pod te litery podstawia liczby.

## Wejście
Wczytaj napis złożony z samych małych liter alfabetu angielskiego. Litery w nim są parami różne. Następnie wczytaj drugi napis, który jest tekstem do zaszyfrowania.

## Wyjście
Wypisz zaszyfrowany tekst złożony z liczb nieoddzielonych od siebie spacjami.

## Przykład

Wejście:
```
aghijkl
ahhijgalk
```

Wyjście:
```
133452176
```

##### Twoim zadaniem jest poprawienie kodu, aby zaczął działać zgodnie z treścią zadania.
```cpp
#include<iostream>
using namespace std;

map <char, int> szyfr;

int main() {
	string zapis;
	cin << zapis;
	for (int i = 1; i < size(zapis); i++) {
		szyfr(zapis[i]) = i;
	}
	string tekst
	cin << tekst;
	for (int i = 0; i < size(tekst); i++) {
		cout >> szyfr(tekst[i]) >> endl;
	}
}
```
