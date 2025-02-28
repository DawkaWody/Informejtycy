---
draft: false
title: 'Podsumowanie'
id: 16
nerd: false
---

# Podsumowanie

Gratulacje, ukończyłeś pierwszy etap nauki :tada:. Tematy podstawowe wprowadziły Cię w świat programowania oraz zaznajomiły Cię z podstawowymi zagadnieniami i algorytmami. Jeżeli programowanie Cię zainteresowało, zachęcamy zagłębić się w tajniki C++, czytając tematy zaawansowane. Zanim to, uporządkujmy sobie jednak świeżo poznane pojęcia.

## Słowniczek

- **Kompilator** - program, który tłumaczy język C++ (zrozumiały dla ludzi), na język zrozumiały dla maszyn (np. komputera);

- **Biblioteka** - plik / program, który tłumaczy kompilatorowi co ma zrobić, gdy natrafi na pewne obiekty, takie jak `std::cout`, `std::string` albo `std::vector`. Jej nazwę podajemy między `<...>`, czyli zarówno `iostream`, jak i `<iostream>`, odnoszą się do tej samej biblioteki `<iostream>`;

- **Przestrzeń nazw** - "folder", dzięki któremu C++ unika ryzyka *konfliktu nazw* (czyli dwóch różnych obiektów o tej samej nazwie). Możemy "wyrzucić na zewnątrz" rzeczy z "folderu" poprzez `using namespace nazwa_przestrzeni`;

- **Wypisywanie** - umieszczanie tekstu na ekranie;

- **Wczytywanie** - ustawianie wartości zmiennych (w czasie wykonania), na podstawie tego, co użytkownik wpisze po uruchomieniu programu;

- **Zmienna** - *komórka pamięci*, która przechowuje wartość o pewnym typie. Jej działanie można porównać do pudełka;

- **Typ danych** - określaja typ wartości oraz sposób jej przechowania w pamięci komputera;

- **Operator** - znak specjalny, który wykonuje operacje (np.: dodaje, odejmuje, łączy warunki), lub pełni funkcje pomocniczą (np. oddziela wyrażenia);

- **Konstrukcja warunkowa** - wykonuje określony kod, jeżeli warunek jest prawdziwy. Może również wykonać inny kod, w przeciwnym wypadku;

- **Pętla** - wykonuje wielokrotnie ten sam kod, dopóki warunek jest spełniony;

- **Iteracja** - (również *obrót pętli*) powtórzenie kodu pętli - np. jeśli pętla wykonała kod pięć razy, powiemy, że wykonała pięć iteracji lub pięć obrotów;

- **Iterowanie się po obiekcie** - uzyskiwanie kolejnych elementów obiektu, przechowywującego wiele wartości, np. tablica;

- **Iterator** - zmienna *wskazująca* na jakiś element np. wektora. Iteratory są dostępne tylko na wybranych typach danych, nie ma ich na tablicach. Na razie, aby uzyskać element tablicy/wektora wystarczy odwołać się do indeksu, lecz niedługo poznasz struktury, w których nie będzie się dało tak zrobić - wtedy iteratory się nam przydadzą;

- **Tablica** - struktura, który przechowywuje wiele wartości;

- **Funkcja** - kod, który może zostać wygodnie wykonany z kilku różnych miejsc w kodzie, poprzez `nazwa()`, oraz przyjmować różne parametry;

- **Metoda** - funkcja, która uruchamiana jest *na obiekcie*, za pomocą `obiekt.metoda()`. Często wiąże się to z modyfikacją obiektu;

- **Zwracanie wartości** - (dotyczy funkcji i metody) obliczanie wartości przez funkcje i *oddawanie/podstawianie* jej w miejsce, gdzie funkcja została uruchomiona;

- **Wywoływanie funkcji/metody** - inne określenie na uruchamianie funkcji/metody. Można używać zamiennie;

- **Wektor** - usprawniona tablica. Zawiera szereg przydatnych metod. Nie ma związku z wektorami z lekcji fizyki;

- **Sortowanie** - porządkowanie elementów, według pewnej reguły - najczęściej rosnąco lub malejąco;

## Zaawansowane zagadnienia C++

Zanim rozpoczniesz czytanie zaawansowanych artykułów, poznajmy kilka nowych zagadnień i nową składnię języka - sposób, w jaki można pewne rzeczy zapisać.

## Usprawnionione przechodzenie po pętli

Jeżeli mamy wektor, o rozmiarze $n$, możemy się po nim iterować za pomocą następującej składni.

```cpp
for (typ zmienna : wektor) {
}
```

Wypiszmy w ten sposób elementy wektora.

```cpp
vector<int> liczby = {5, 4, 3, 2, 1};

for (int liczba : liczby) {
    cout << liczba << ' ';
}
```

W ten sposób zamiast indeksów, jak przy tradycyjnym przechodzeniu, będziemy uzyskiwać wartości.

## Wskaźniki

Załóżmy, że mam zmienną `a` o typie `int`. Ma ona swoje położenie w pamięci komputera, które określa jej *adres*. Adres uzyskujemy za pomocą operatora `&`. C++ chciałby jednak wiedzieć, jaki typ ma wartość znajdująca się pod tym adresem. Do tego celu używamy gwiazdki `*`, np. adres liczby całkowitej to `int*`.

```cpp
int liczba = 5;
int* adres_liczby = &liczba;
```

Jeżeli chcemy uzyskać wartość spod adresu, ponownie używamy gwiazdki. Można powiedzieć, że *ładujemy* adres, czyli uzyskujemy to pole w pamięci, które opisuje.

```cpp
int liczba = 5;
int* adres_liczby = &liczba;
*adres_liczby += 5;
cout << liczba << endl;
```

Co tu się zadziało?

1. Wartość zmiennej `liczba` to `5` (przyjmijmy, że jej adres to `0x15`);

2. Wartość zmiennej `adres_liczby` to `0x15`;

3. Ładujemy wartość zmiennej `adres_liczby` i zwiększamy ją o `5`.
   
   - W ten sposób zwiększyliśmy wartość, która znajdowała się pod adresem `0x15`, czyli wartość zmiennej `liczba`.

4. Wypisujemy wartość zmiennej `liczba`, która wynosi `10`;

## Zastosowanie wskaźników

Po co nam wskaźniki? Wyobraźmy sobie, że chcemy zrobić funkcje, która zwiększa wartość danej zmiennej o `ile`. Na pierwszy rzut oka wydawałoby się, że poniższa funkcja wykona to, co oczekiwaliśmy. **Niestety, czeka nas rozczarowanie.**

```cpp
void zwieksz(int liczba, int ile)
{
    liczba += o_ile;
}
```

Jeżeli wywołamy tę funkcję `zwieksz(jakas_zmienna, 5)`, to wartość `jakas_zmienna` nie zostanie zwiększona o `5` - funkcja `zwieksz` *skopiuje* jej wartość do parametru i utworzy swoją własną, nową zmienną, o takiej samej wartości, jak `jakas_zmienna`. Następnie zwiększy ją o `5`, jednak nie zmieni to wartości `jakas_zmienna`, a jedynie jej kopie, utworzoną na potrzeby funkcji `zwieksz`.

**Rozwiązanie? Wskaźniki!** Utwórzmy sobie funkcję, która przyjmuje *adres* zmiennej typu `int`. Dzięki temu zwiększy się wartość spod adresu parametru, czyli wartość zmiennej, którą podaliśmy (a nie jej kopii).

```cpp
#include<iostream>
using namespace std;

void zwieksz(int* liczba, int ile)
{
    *liczba += ile;
}

// Oto sposób, w jaki należy wywołać tę funkcję
int main()
{
    int liczba = 5;
    zwieksz(&liczba, 5);

    cout << liczba << endl; // wpisze "10"

    // zwieksz(liczba, 5);
    // ^^ BŁĄD ^^
    // Program oczekuje adresu do liczby całkowitej, a nie liczby całkowitej
}
```

>  Trzeba tylko uważać, aby nie napisać `liczba += ile`. Wtedy bowiem zmieni się wartość parametru, czyli adresu, a nie tego, co się pod nim znajduje.

## Wygodne wskaźniki - referencja

Jeżeli nie chcemy pisać gwiazdeczek, możemy utworzyć referencję. Referencja to nic innego jak zmienna, która odnosi się do **dokładnie tej samej wartości, o tym samym położeniu w pamięci.** Innymi słowy, dzięki referencji możemy mieć dwie zmienne, które są dokładnie tym samym, a zmiana jednej z nich modyfikuje drugą.

```cpp
#include<iostream>
using namespace std;

int main()
{
    int liczba = 5;
    int& tez_liczba = liczba;

    liczba++;

    cout << tez_liczba << endl; // wypisze "6"

    tez_liczba++;

    cout << liczba << endl; // wypisze "7"
}
```

Zmienne `liczba` i `tez_liczba` są powiązane - odnoszą się do tego samego adresu w pamięci, a co za tym idzie, możemy zmieniać jedną wartość, a druga też się zmieni.

Referencja jest szczególnie przydatna w przypadku parametrów funkcji, kiedy przekazujemy funkcji np. `vector`, bez jego kopiowania, tak, aby funkcja mogła edytować jego wartości, a po wyjściu z niej, zmienna oryginalna też była zmieniona.

```cpp
#include<iostream>
#include<vector>
using namespace std;

void zwieksz_kazdy_element_wektora_o_1(vector<int>& wektor)
{
    for (int i=0; i<wektor.size(); i++) {
        wektor[i]++;
    }
}

int main()
{
    vector<int> fajny_wektor = {2, 6, 1, 3, 2, 7};
    zwieksz_kazdy_element_wektora_o_1(fajny_wektor);

    for (int element : fajny_wektor) {
        cout << element << ' ';
    }
    cout << endl;
    // wypisze "3 7 2 4 3 8"
}
```
