# Skandal 2
Cachek bardzo nie chce, aby Skriptek wpadł w szał (robi to wtedy, gdy zobaczy liczbę podzielną przez 4 i/lub mającą dokładnie 4 dzielniki). Odkrył, że można sprawdzić, czy podana liczba - $a$ jest iloczynem dwóch różnych liczb pierwszych takich, że $p1=a/p2$ i/lub czy dzieli się przez 4. Na razie nie wie, że może to też być sześcian liczby pierwszej.  W związku z tym zaczął pisać program sprawdzający, czy dla liczby podanej na wejściu Skriptek wpadnie w szał. Jego program przyjmuje tylko jedną liczbę $a$, taką, że $1 \leq a \leq 10^9$. Zasady oceniania, czy Skriptek wpadnie w szał są takie same jak w poprzednim zadaniu ("Skandal").
Pomóż Skriptkowi sprawić, aby poniższy program działał poprawnie.
### Wejście

W pierwszej i jedynej linii wejścia znajduje się jedna liczba całkowita opisana w treści zadania.
### Wyjście

W jedynej linii wyjścia ma się znajdować komunikat (TAK/NIE), mówiący o tym, czy Skriptek dostał szału (Szczegóły w zadaniu "Skandal").

Kod z błędami:
```cpp
#include <iostream>
using namespace std;
bool czy_pierwsza (int a) // sprawdzanie, czy liczba jest pierwsza
{
    bool jest_pierwsza = true;
    int i = 2;
    while (i * i < a) {
        if (a % i == 0) {
            return true;
        }
        ++i;
    }
    return false;
}
bool sprawdz (int a) //funkcja zwracajaca informacje: czy Skriptek wpadnie w szał
{
    if(a % 4 != 0) return true; //sprawdzanie, czy liczba jest podzielna przez 4
    for (int i = 1; i * i < a; i++) { //szukanie dzielnikow
        if(a % i == 0) { //sprawdzanie, czy i jest dzielnikiem
            if (czy_pierwsza(i) {//sprawdzanie, czy dzielnik jest liczba pierwsza
	            return false; //jesli tak, zwracamy false
            }
            return true; // w przeciwnym wypadku zwracamy true
        }
    }
    return true; // jesli funkcja nie znalazla zadnych dzielnikow, zwracamy true
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    int a;
    cin >> a; //wczytywanie
    if (sprawdz(a)) cout << "TAK"; //wywolywanie funkcji sprawdz
    else cout << "NIE";
    return 0;
}

```

