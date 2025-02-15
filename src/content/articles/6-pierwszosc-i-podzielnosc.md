---
draft: false
title: Pierwszość i podzielność liczb
id: 6
nerd: false
---
# Sprawdzanie pierwszości, podzielności i liczby dzielników liczb

## Podzielność
Aby sprawdzić, czy liczba $a$ dzieli się przez liczbę $b$, możemy użyć operatora `%`. Sprawdzimy więc, czy reszta z dzielenia liczby $a$ przez liczbę $b$ jest równa 0.
```cpp
bool czy_a_dzieli_sie_przez_b = false; //poczatkowo ustawiamy falsz
if (a % b == 0) czy_a_dzieli_sie_przez_b = true; //uzywamy operatora %
```
Powyższy fragment kodu sprawdza, czy liczba
## Sprawdzanie pierwszości
Korzystając z pętli while możemy sprawdzić, czy dana liczba jest pierwsza. Liczba pierwsza to taka, która ma dokładnie 2 różne dzielniki (1 i samą siebie). Dla przykładu, liczby 2, 3, 5, 7 są liczbami pierwszymi, a liczby 0, 1, 4, 8, 9 nie są. Więcej o liczbach pierwszych można wyczytać na https://pl.wikipedia.org/wiki/Liczby_pierwsze.
Spróbujmy się zastanowić, jak by miał działać prosty program, który wczytuje jedną liczbę naturalną $a$, taką, że $0 \leq a \leq 10^6$ i wypisuje TAK jeśli liczba jest pierwsza lub NIE w przeciwnym wypadku. Oto pomysł na program:
- Wczytywanie liczby $a$
- Liczenie jej dzielników - sprawdzanie wszystkich od 1 do $a$ (jeżeli $a$ jest podzielne przez sprawdzany dzielnik zwiększamy licznik o 1)
- Jeśli liczba dzielników jest równa 2, wypisujemy TAK, w przeciwnym wypadku wypisujemy NIE

```cpp
#include <iostream>
using namespace std;
int main()
{
    // wczytywanie
    int liczba;
    cin >> liczba;
    
    int liczba_dzielnikow = 0;
    int sprawdzany_dzielnik = 1; // dzielniki zaczynamy sprawdzać od 1

    // sprawdzamy od 1 do liczby podanej na wejsciu włącznie
    while (sprawdzany_dzielnik <= liczba)
    {
        // sprawdzamy, czy liczba podana na wejsciu dzieli sie przez obecnie sprawdzana liczbe
        if (liczba % sprawdzany_dzielnik == 0)
            liczba_dzielnikow++; // jesli tak, to znalezlismy kolejny dzielnik
        sprawdzany_dzielnik++; // sprawdzamy kolejny dzielnik
    }
    // wypisywanie TAK lub NIE
    
    if (liczba_dzielnikow == 2) {
        cout << "TAK";
    }
    else {
        cout << "NIE";
    }
    return 0;
}

```
## Optymalizacja
Zauważmy, że można przyspieszyć ten program. Po pierwsze, nie musimy sprawdzać czy liczba dzieli się przez 1 i samą siebie (jest naturalna, więc zawsze się dzieli). To ogranicza program do sprawdzania dzielników od 2 do $a-1$. Teraz w przypadku wykrycia jakiegokolwiek dzielnika będzie wiadomo, że jest to trzeci dzielnik i należy wypisać NIE i zakończyć program (nie działa to jednak dla 0 i 1, więc można przed pętlą *while* użyć instrukcji warunkowej *if*). Dodatkowo, zauważmy, że wystarczy sprawdzać wszystkie możliwe dzielniki do $\sqrt{a}$ (uwzględniając $\sqrt{a}$), ponieważ jeśli jakaś liczba ma dzielnik większy niż $\sqrt a$, to ma też dzielnik mniejszy niż $\sqrt a$, więc na pewno zostanie on wykryty. Tak będzie wyglądał przyspieszony program:
```cpp
#include <iostream>
using namespace std;

int main()
{
    int liczba;
    cin >> liczba;

    // sprawdzamy, czy liczba jest równa 0 lub 1
    if (liczba < 2)
    {
        // jesli tak, wypisujemy NIE i konczymy dzialanie programu
        cout << "NIE";
        return 0;
    }

    int sprawdzany_dzielnik = 2;
    // sprawdzamy do pierwiastka (a * a <= b to dla liczb naturalnych to samo co a<=pierwiastek z b)
    while (sprawdzany_dzielnik * sprawdzany_dzielnik <= liczba)
    {
        if (liczba % sprawdzany_dzielnik == 0)
        {
            // jesli znajdziemy jakikolwiek dzielnik, wypisujemy NIE i konczymy dzialanie programu
            cout << "NIE";
            return 0;
        }
        sprawdzany_dzielnik++;
    }
    // jesli do tej pory nie wykryto zadnych dzielnikow, liczba jest pierwsza
    cout << "TAK";
    return 0;
}

```
Ten program działa poprawnie i dużo szybciej.
## Sprawdzanie liczby dzielników
Aby sprawdzić liczbę dzielników danej liczby, możemy, tak jak w sprawdzaniu pierwszości, skorzystać ze sprawdzania do pierwiastka, ponieważ dla każdego dzielnika mniejszego niż $\sqrt a$ przypada dokładnie jeden dzielnik większy niż $\sqrt a$. Możemy więc po prostu zwiększać wynik o 2 przy wykryciu jakiegoś dzielnika, sprawdzając oczywiście wszystkie dzielniki mniejsze niż $\sqrt a$ - w przeciwnym wypadku pierwiastek mógłby być policzony podwójnie. Sam pierwiastek musi zostać sprawdzony osobno. Oto program wczytujący liczbę $a$, taką, że $1 \leq a \leq 10^6$ i wypisujący jej liczbę dzielników.
```cpp
#include <iostream>
using namespace std;

int main()
{
    int liczba;
    cin >> liczba;

    if (liczba == 1) {
        cout << 1;
        return 0;
    }

    int liczba_dzielnikow = 2; // 1 i liczba na wejsciu
    int sprawdzany_dzielnik = 2; // sprawdzamy dzielniki od 2
    while (sprawdzany_dzielnik * sprawdzany_dzielnik < liczba) {
        if (liczba % sprawdzany_dzielnik == 0) {
            liczba_dzielnikow += 2; // zwiekszamy licznik o dwa
        }
        sprawdzany_dzielnik++;
    }
    if (sprawdzany_dzielnik * sprawdzany_dzielnik == liczba) {
        // sprawdzamy pierwiastek i liczymy go pojedynczo
        liczba_dzielnikow++;
    }
    cout << liczba_dzielnikow;
    return 0;
}
```
