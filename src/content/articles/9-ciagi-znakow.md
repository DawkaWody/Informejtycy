---
draft: false
title: 'Napisy'
id: 9
nerd: false
---

# Napisy

## Czym są napisy?

W komputerze wszystko to liczby. Pytanie więc brzmi, jak przechować słowo albo zdanie? Zdanie to nic innego jak *ciąg znaków.* Potrafimy przechować ciąg, za pomocą tablicy. Mamy typ `char`, który pozwala przechować znaki. Więc możemy przechować ciąg, za pomocą tablicy znaków.

```cpp
char slowo[6] = "Witaj";
```

Podobnie jak w przypadku tablicy, możemu uzyskiwać kolejne literki poprzez kwadratowe nawiasy. Na przykład `slowo[2]` zwróci `t` (pamiętamy o indeksowaniu od zera). Zwróćmy uwagę na jedną rzecz, chociaż słowo "Witaj" ma długość pięciu znaków, tablica ma rozmiar `6`. Dlaczego? 

## Jak komputer oddziela ciągi znaków?

W pamięci komputera trzeba odróżnić od siebie ciągi znaków. Dlatego, ktoś wpadł na pomysł, by robić to znakiem *null* `\0` (chociaż są to dwa znaki `\` i `0`, to komputer traktuje je jako jeden znak). Oczywiście, jest to tylko konwencja i można by wprowadzić zasadę, że od teraz robi to znak spacji. Byłoby to jednak mało praktyczne - spacja bowiem może być częścią zdania.

## String

Niestety, tablica znaków ma wady każdej innej tablicy - między innymi ma stałą długość, ustawianą w czasie kompilacji. Jest jednak znacznie prostsze rozwiązanie - typ `std::string`. Jest to element pliku `<string>` - musimy więc zawrzeć linijkę `#include <string>`.

```cpp
#include <string>
using namespace std;

int main()
{
    string napis = "Taki fajny ciag!"; // słówko "string" podajemy jako typ zmiennej
}
```

To rozwiązuje nasz problem stałej długości tablicy. Jest pewien operator, który powinieneś już dobrze znać - mowa o `+=`. W tym wypadku, zamiast zwiększyć wartość zmiennej, dodaje on słowo/zdanie do ciągu. Oto przykład.

```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string napis = "Taki fajny ciag!";
    napis += " Dlaczego?";
    napis += "\nBo moge dodac do niego literki!";

    cout << napis << endl; // Wypisze:
    // Taki fajny ciag! Dlaczego?
    // Bo moge dodac do niego literki!
}
```

Mogę również usunąć elementy, korzystając z *metody* `erase`. Metody to funkcje, które są uruchamiane na jakiejś zmiennej, np. takiej o typie `std::string`. Piszemy wtedy `nazwa_obiektu.nazwa_metody()` - w tym wypadku `napis.erase`. Metoda przyjmuje parametry, tak samo jak zwykła funkcja. `erase` przyjmuje dwa parametry - pierwszy indeks usunięcia i długość usunięcia.

```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string napis = "Taki fajny ciag!";
    napis += " Dlaczego?";
    napis += "\nBo moge dodac do niego literki!";

    napis.erase(5, 6); // literka 'f' w słowie "fajny" jest na indeksie piątym,
    // a słowo "fajny" wraz ze spacją, którą też chcemy usunąć, ma długość 6 
    cout << napis << endl; // Wypisze:
    // Taki ciag! Dlaczego?
    // Bo moge dodac do niego literki!
}
```

## Metoda `size`

Przydatną okazuje się metoda `size`, która pozwala uzyskać długość ciągu. Możemy jej użyć do *przejścia* po ciągu, czyli do uzyskiwania kolejnych elementów ciągu.

```cpp
#include <string>
#include <iostream>
using namespace std;

int main()
{
    string napis = "Domek na drzewie";
    for (int i=0; i<napis.size(); i++) {
        cout << napis[i] << endl;
    }
}
```

Program *podstawi* zmienną `i` za kolejne wartości od `0` do długości słowa i dla każdej ów zmiennej, wypisze znak spod jej indeksu, ze zmiennej `napis`.
