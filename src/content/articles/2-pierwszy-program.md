---
date: '2025-01-25T12:20:00+01:00'
draft: false
title: 'Pierwszy Program w C++'
id: 2
---

# Pierwszy program w C++

## Pierwsze kroki

Spróbujmy najpierw napisać program, który coś wypisze. Mówi się, że komputer *wypisuje coś na wyjście*, czyli, że tekst pojawi się na ekranie. Oto linijka, która to robi:

```cpp
std::cout << "Witaj uzytkowniku!";
```

> Na ten moment nie przejmuj się tym `std::`, zaraz wyjaśni się, dlaczego jest to potrzebne i jak tego uniknąć.

Każda linijka musi się kończyć znakiem `;` - tak został stworzony język, żeby jasno oddzielić od siebie linie. `cout` to z angielskiego *character output*, czyli wyjście znaków. Komputer oczekuje po nim znaku `<<`, po którym powinna znaleźć się wartość do wypisania. Z racji tego, że program ma wypisać słowo (albo zdanie), a nie na przykład liczbę, musi ona znaleźć się między znakami `" "`. Co istotne, na razie dopuszczane są tylko litery alfabetu łacińskiego.

Jest jeden problem, komputer nie wie co robi `std::cout`. Po prostu, ta instrukcja jest mu nie znana - musimy mu to wytłumaczyć. Robi to za nas `<iostream>`. Jest to plik, który mówi komputerowi: "Jak natrafisz na znaki `std::cout`, to oczekuj *operatora* `<<`, a wtedy wypisz to, co się po nim znajduje". No dobrze, teraz trzeba tylko dodać te "wytłumaczenie" do naszego pliku. Robi to instrukcja `#include`.

```cpp
#include <iostream>

std::cout << "Witaj uzytkowniku!";
```

## Po co `std::`?

Wyobraź sobie pulpit, na którym jest plik o nazwie o nazwie "cout". Nie możesz tam zrobić drugiego pliku, o tej samej nazwie. Żeby tego uniknąć, można zrobić folder i w nim umieścić plik "cout". Tyle, że teraz za każdym razem muszę wejść ów folder, żeby uzyskać zawartość pliku "cout". Tym gorzej, jeśli na pulpicie nie ma żadnego pliku "cout" i nic by się nie stało, gdyby znajdował się poza folderem.

To samo dzieje się w naszym programie. Programiści, w obawie przed tworzeniem dwóch różnych obiektów o tej samej nazwie, umieścili `cout` w przysłowiowym "folderze", o nazwie `std`. Za każdym razem, gdy chcę z niego skorzystać, muszę pisać `std::cout`. Możemy przyjąć, że `std::` to otworzenie tego "folderu". Żeby tego uniknąć, można wyciągnąć `cout` poza "folder". Robi to instrukcja `using namespace std`. Co istotne, gdy raz "wyciągniemy" `cout`, nie musimy więcej tego robić! Każde kolejne `cout` możemy pisać bez `std::`.

```cpp
#include <iostream>
using namespace std;

cout << "Witaj uzytkowniku!";
```

## Funkcja główna

Pozostała ostatnia kwestia. Komputery nie wiedzą gdzie zacząć wykonanie programu! Z tego też powodu, programiści wiele lat temu postanowili, że od teraz każdy program będzie zaczynał się w bloczku `main`, który profesjonalnie nosi nazwę *funkcja*. Funkcja ta wygląda następująco:

```cpp
int main()
{
    // Program do wykonania.
    return 0;
}
// A to swoją drogą są komentarze.
// Nie wpływają one na działanie programu.
// Są tutaj tylko do wytłumaczenia kodu.
```

Co to `int` i po co `return 0`? Gdy program się zakończy, komputer chciałby wiedzieć, czy program wykonał się prawidłowo. Uzyskuję tą wartość poprzez tak zwane *zwracanie*. Programiści założyli, że `0` oznacza "udało się", a inne wartości "nie udało się". Typ wartości zwrotnej w tym wypadku to `int`, z angielskiego *integer*, bo skoro chcemy zwrócić `0` to jest to liczba całkowita. Połączmy więc nowo nabytą wiedzę z instrukcją wypisującą coś na wyjście.

```cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "Witaj uzytkowniku!";
    return 0;
}
```

Tak oto napisałeś swój pierwszy program w języku C++!

## Wielokrotne wypisywanie

Gdy wypisujemy wiele lini tekstu, musimy oznajmić językowi, że ma "wypisać" tą nową linię, pomiędzy zdaniami, które chcemy oddzielić (tak, można *wypisać* nową linię, jest za to odpowiedzialny znak `\n` (*znak*, nie znaki), albo `std::endl`) .

```cpp
```cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "Witaj uzytkowniku\n";
    cout << "Ten tekst bedzie umieszczony w nowej lini, "
    cout << "ale ten nie" << endl << "Moge rowniez 'dwukrotnie' cos wypisac, z jednej lini w kodzie\n";
    return 0;
}
```

Należy pamiętać, że gdy w późniejszych artykułach omawiane będą słówka zaczynające się na `std::`, znaczy to, że oryginalnie były w tym "folderze" `std`, ale skoro używamy `using namespace std`, to już się tam nie znajdują.

## Uruchomienie programu

Jeżeli korzystasz z kompilatora online (*kompilator* - narzędzie, które zamienia kod C++ na taki, rozumiany przez komputer), poszukaj przycisku `run` albo `uruchom`, w zależności od strony. Jeżeli korzystasz z Code::Blocks kliknij `F9` aby uruchomić program.
