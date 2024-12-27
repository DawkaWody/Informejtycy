# Pair
## Czym jest para? 
Jak można spodziewać się po samej nazwie, para to struktura danych służąca do przechowywania **dwóch wartości**. Może ona przechowywać zarówno takie same, jak i różne typy danych.

## Inicjowanie pary
Parę tworzymy podając dwa typy zmiennych w nawiasie ostrokątnym oraz jej nazwę:
```cpp
pair <string, int> p1;
```
Co ciekawe w parze możemy przechowywać inne pary, np.:
```cpp
pair <int, pair<long long, string> > p2;
```

## Przypisywanie danych
Mamy dwa sposoby na przypisanie danych. W pierwszym używamy komendy `make_pair()`. Natomiast w drugim nie stosujemy żadnych komend. Musimy jednak pamiętać o nawiasie klamrowym:
```cpp
string imie = "Hela";
int wiek = 12;
pair <string, int> p3 = make_pair(imie, wiek);
pair <string, int> p4 = {imie, wiek};
```

## Odwoływanie się do elementów pary
Odwoływanie się do elementów pary jest bardzo proste. Stosujemy jedynie konstrukcję `nazwa_pary.first` lub `nazwa_pary.second`. Częstym błędem w tej konstrukcji jest dodawanie nawiasów na końcu. Poniżej znajduje się przykład zastosowania tych konstrukcji przy wypisywaniu elementów pary:
```cpp
#include<iostream>
using namespace std;

int main() {
	string produkt = "chleb";
	double koszt = 5.5;
	pair <string, double> p5 = make_pair(produkt, koszt);
	cout << p4.first << endl;
	cout << p4.second << endl;
}
```
## Pary w tablicach i wektorach
Par możemy używać także jako typów zmiennych w tablicach i wektorach.
Tablica par:
```cpp
pair <int, int> t[100];
```
Vector par:
```cpp
vector <pair <int, int>> v;
```
Dzięki temu możemy sortować pary. Funkcja `sort()`, sortując, bierze pod uwagę w pierwszej kolejności wartości pierwszych elementów pary. Jeśli występują co najmniej dwie o takich samych pierwszych wartościach, funkcja ta sortuje po drugich elementach:
```cpp
#include<iostream>
#include<vector>
using namespace std;

int main() {
	vector <pair <int, int> > v = {{1, 2}, {2, 0}, {1, 1}};
	sort(v.begin(), v.end());
    for (int i = 0; i < v.size(); i++) {
        cout << v[i].first << ' ' << v[i].second << endl;
    }
}
```


# Struct

## Do czego służy struct?
Najprościej mówiąc, struct służy do zgrupowania powiązanych ze sobą zmiennych. Aby przedstawić to obrazowo, możemy odnieść się do przykładu z życia. Tworząc listę kontaktów, zapisujemy imię, nazwisko oraz telefon kontaktowy. Pisząc program, możemy to zmieścić w jednym miejscu - jednej strukturze:
```cpp
struct {
	string imie;
	string nazwisko;
	int telefon;
} kontakt;
```
W takiej strukturze możemy przechowywać zmienne o różnych typach (np. char, long long, bool). Pamiętajmy, że nazwę zapisujemy po zamykającym nawiasie klamrowym.

## Jak odwoływać się do elementów structa?
Aby odwołać się do elementów structa, wystarczy zapisać nazwę struktury, postawić kropkę, a następnie podać nazwę elementu, który nas interesuje:
```cpp
#include<iostream>
using namespace std;

struct {
	string imie;
	string nazwisko;
	int telefon;
} kontakt;

int main() {
	kontakt.imie = "Ala";
	kontakt.nazwisko = "Kwadrat";
	kontakt.telefon = 123456789;
}
```
Tutaj warto zaznaczyć, że możemy "powielać tę samą strukturę". Obrazując to na powyższym przykładzie:
```cpp
#include<iostream>
using namespace std;

struct {
	string imie;
	string nazwisko;
	int telefon;
} kontakt_Ala, kontakt_Basia;

int main() {
	kontakt_Ala.imie = "Ala";
	kontakt_Ala.nazwisko = "Kwadrat";
	kontakt_Ala.telefon = 123456789;
	
	kontakt_Basia.imie = "Basia";
	kontakt_Basia.nazwisko = "Kolo";
	kontakt_Basia.telefon = 987654321;
	
	cout << kontakt_Ala.imie << ' ' << kontakt_Ala.telefon << endl;
	cout << kontakt_Basia.imie << ' ' << kontakt_Basia.telefon << endl;
}
```
Reasumując, możemy tego dokonać, nadając wiele nazw naszej strukturze.

## Struct jako typ danych
Jest przypadek, w którym nazwę structa zapisuje się przed otwierającym nawiasem klamrowym. W takiej sytuacji taką strukturę traktujemy jako typ danych. Oznacza to, że tworzymy zmienną i tam, gdzie normalnie stawiamy np. inta, piszemy nazwę struktury. Ważny jest fakt, że po zamykającym nawiasie klamrowym **stawiamy średnik**:
```cpp
#include<iostream>
using namespace std;

struct kontakt {
	string nazwisko;
	int telefon;
};

int main() {
	kontakt Ala;
	Ala.nazwisko = "Kwadrat";
	Ala.telefon = 123456789;
	
	kontakt Basia;
	Basia.nazwisko = "Kolo";
	Basia.telefon = 987654321;

	cout << Ala.nazwisko << ' ' << Ala.telefon << endl;
	cout << Basia.nazwisko << ' ' << Basia.telefon << endl;
}
```