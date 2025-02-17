---
draft: false
title: 'Zmienne i operatory matematyczne'
id: 2
nerd: false
---

# Zmienne i operatory matematyczne

## Czym są zmienne?

*Zmienne* w informatyce można porównać do pudełek. Pudełko ma rozmiar i kształt, toteż mogą się w nim znaleźć tylko pasujące rzeczy. Ma również swoją nazwę, aby język mógł odróżnić je od innych. Kształt i rozmiar określa *typ danych.* Na przykład, do "pudełka" z typem `int`, od angielskiego *integer*, możemy wrzucić tylko liczby całkowite. W C++ tworzymy zmienne w następujący sposób.

```
typ nazwa = wartosc;
```

## Typy danych

| Typ danych       | Opis                                                                                                                                                                                                                                  |
|:----------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `int`            | Przechowuje liczby całkowite w zakresie od $-2^{31}$ do $2^{31}-1$. Na nasze potrzeby wystarczy informacja, że jest to pomiędzy $-10^9$, a $10^9$.                                                                                    |
| `long long`      | Przechowuje liczby całkowite w zakresie od $-2^{63}$ do $2^{63}-1$. Na nasze potrzeby wystarczy informacja, że jest to pomiędzy $-10^{18}$, a $10^{18}$.                                                                              |
| `float`/`double` | Przechowuje liczby rzeczywiste (z przecinkiem). `double` pozwala przechować liczby o wyższej *precyzji* - albo liczby większe, albo z większą ilością cyfr po przecinku. Jeżeli wahasz się przy wyborze jednego z nich, weź `double`. |
| `char`           | Przechowuje znaki (w kodowaniu ASCII, co oznacza między innymi brak polskich znaków). Znaki przechowuje się między znakami `' '` (a ciągi znaków między `" "`).                                                                       |
| `bool`           | Wartość logiczna - zero lub jeden.                                                                                                                                                                                                    |
| `void`           | Z pierwszego artykułu wiesz już że *prawie* każda funkcja coś zwraca. Funkcje, które nic nie zwracają (czyli nie obliczają żadnej wartości), są oznaczane właśnie tym typem.                                                          |

Dla dociekliwych, [pod koniec artykułu](#dla-dociekliwych-nr-1-skąd-pochodzą-nazwy-typów-danych) wyjaśniam również, dlaczego użyto takich nazw.

Dlaczego tak właściwie `int` nie może przechowywać dowolnie dużych liczb? Pamięć przeznaczona na tego typu zmienne działa na zasadzie stosu. Na stos możemy coś położyć, albo coś z niego zdjąć. Wobec tego, jeżeli położymy tam zmienne o typach `int`, `char` i `double`, które mają swój określony rozmiar, to dolnej zmiennej nie możemy zwiększyć. Ma więc ona stały rozmiar, a co za tym idzie, maksymalną wartość jaką można w niej przechować. Ma to jednak pewne zalety, programiści wiedzą, że zmienna typu nie zmieni. Dzięki temu, czytając kod, nie będą się zastanawiać jakim typem jest teraz ta zmienna, co często ułatwia pracę.

## Operatory matematyczne i zmienne w praktyce

Utwórzmy sobie pierwszą zmienną. Niech przechowuje ona liczby całkowite.

```cpp
int liczba = 5;
```

Od razu *przypisałem* do niej wartość `5`. Oznacza to, że pod tą zmienną kryje się wartość `5`. Spróbujmy coś z nią zrobić. W języku C++ mamy pięć operatorów matematycznych: dodawanie `+`, odejmowanie `-`, mnożenie `*`, dzielenie `/` i reszta z dzielenia `%`, tak zwane *modulo*. Dodajmy sobie do naszej zmiennej `3`.

```cpp
int liczba = 5;
liczba = liczba + 3;
```

Samo `liczba + 3` nie zmieniłoby wartości zmiennej `liczba` na `8`, bo program obliczyłby, że `5+3` to `8`, ale nie wiedziałby, co należy z tym zrobić dalej. Istnieje pewna skrócona wersja tego zapisu, z użyciem operatora `+=`.

```cpp
int liczba = 5;
liczba += 3;
```

Język, gdy napotyka operator `+=`, ustawia wartość zmiennej `liczba` na sumę jej i liczby `3`. `a += b` to więc dokładnie to samo co `a = a + b`. To samo zachodzi dla pozostałych operatorów. Przyjrzyjmy się teraz programowi, który wypisze na wyjście wynik mnożenia zmiennej liczba i wartości 5.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int liczba = 5;
    cout << liczba * 5 << endl;
}
```

Pytanie brzmi "po co w tej sytuacji zmienna? Nie wystarczy napisać `cout << 5*5 << endl;` albo `cout << 25 << endl;`?". W tej sytuacji wystarczy. Niekiedy jednak użycie zmiennych jest konieczne. Przyjrzyjmy się *wczytywaniu danych.*

## Wczytywanie danych

Wczytywanie danych to nic innego, jak uzupełnianie wartości zmiennych po uruchomieniu programu. Profesjonalnie mówi się, że są one uzupełniane *w czasie wykonania programu.* Możemy jednak utworzyć zmienną, której domyślna wartość jest nieokreślona (albo równa `0`), a program w pewnym momencie zatrzyma się, czekając aż podamy mu jej wartość. Odpowiada za to `std::cin`.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int liczba; // Jest to zmienna, której wartość jest nieokreślona.
                // Może być równa zero, ale nie musi - może być to każda inna liczba.
    cin >> liczba; // Teraz program będzie czekał, aż podamy mu liczbę.
    cout << liczba * 5 << "\n";
}
```

Dla dociekliwych, [pod koniec artykułu](#dla-dociekliwych-nr-2-czas-wykonania-i-czas-kompilacji-programu) wyjaśniam różnicę między czasem kompilacji, a czasem wykonania.

`std::cin` to słówko, które podobnie jak `std::cout` jest "tłumaczone" językowi przez plik `<iostream>`. C++ spodziewa się po nim operatora `>>` i zmiennej, do której powinien *wczytać* wartość (czyli "wrzucić do pudełka").

## Wczytywanie wielu liczb

Program wczytujący trzy liczby może wyglądać tak:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int liczba1;
    int liczba2;
    double liczba3;
    cin >> liczba1;
    cin >> liczba2;
    cin >> liczba3;
}
```

Zmienne te mogą mieć od razu ustawione pewne wartości, ale nie muszą. `std::cin` je całkowicie nadpisuje. Można też skrócić ten kod, do następującego zapisu.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int liczba1, liczba2;
    double liczba3;
    cin >> liczba1 >> liczba2 >> liczba3;
}
```

Warto zaznaczyć, że `std::cin` po uruchomieniu programu wie, w którym miejscu kończy się pierwsza liczba, a zaczyna druga dzięki spacjom i nowym liniom. Dlatego, niezależnie czy wpiszemy programowi *wejście_1*, czy *wejście_2* (patrz poniżej), to program i tak dobrze załaduje wartości zmiennych.

*wejście_1:*

```
12 56 15.3
```

*wejście_2:*

```
12
56
15.3
```

## Podsumowanie

Oto kod, który powinieneś rozumieć po dzisiejszej lekcji.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int liczba1, liczba2;
    double rzeczywista;

    cout << "Wpisz dwie liczby: ";
    cin >> liczba1 >> rzeczywista;

    liczba2 = liczba1 / 15; // Dzielenie zachodzi na int'ach, więc wynik jest zaokrąglany w dół

    cout << "Pierwsza liczba podzielona na 15: " << liczba2 << "\n";
    cout << "Druga liczba podzielona na 15: " << rzeczywista / 15 << "\n";
}
```

## Dla dociekliwych nr 1: skąd pochodzą nazwy typów danych?

`int` to skrót angielskiego *integer*, czyli liczba całkowita. `float`/`double` pochodzą od formatu liczb "z przecinkiem". Liczby te na komputerze mogą być przechowywane w kilku rozmiarach. Te "krótsze" (zajmujące mniej miejsca w pamięci) to `float` (od angielskiego *floating-point number*), a "dłuższe" (zajmujące więcej miejsca) to `double` (od angielskiego *double precision*). Z długości typów wynikają różnice w precyzji. `char` pochodzi od angielskiego *character*, czyli znak. Są to znaki w kodowaniu [ASCII](https://pl.wikipedia.org/wiki/ASCII) - w późniejszym czasie dowiesz się więcej na temat tego kodowania. `bool` zaś pochodzi od matematyka George'a Boole'a, który opracował taki system i nazwał go *logiką*.

## Dla dociekliwych nr 2: czas wykonania i czas kompilacji programu

W C++ mówimy o *czasie kompilacji* i *czasie wykonania*.

- Czas kompilacji - proces zamiany kod C++ w plik `.exe`. Zmienne i inne wartości w tym procesie fizycznie znajdują się w kodzie C++.

- Czasie wykonania - wykonanie programu, po uruchomieniu pliku `.exe`. Wartości w tym procesie są wyznaczane dopiero po uruchomieniu.

Edytory typu Code::Blocks najczęściej *kompilują* program (czyli tworzą z niego plik `.exe`) automatycznie, zanim zostanie uruchomiony program.
