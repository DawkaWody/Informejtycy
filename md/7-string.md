# String i tablica znaków

**String to ciąg znaków zakończony znakiem null `\0`.** Pozwala nam on przechowywać kombinacje liter, liczb i znaków specjalnych. Najprostszym sposobem na przechowanie stringa jest tablica znaków. Tworzymy ją w następujący sposób:

```cpp
char slowo[dlugosc_slowa];
```

> Z poprzedniej lekcji wiesz już, że znaki są kodowane jako liczby – null to po prostu znak odpowiadający liczbie `0`. Nie musisz się tym jednak przejmować, C++ dodaje go za Ciebie.

## Inicjowanie stringa

Ten ciąg na razie jest pusty, ale możemy go zainicjować. Można to zrobić na dwa sposoby:

- **Manualnie:** jak tablicę znaków.
- **Dedykowanie:** zawartość stringa pomiędzy `" "`.
  - Koniecznie musi to być `" "`, a nie `' '`, gdyż `' '` używamy do inicjacji pojedynczego znaku.

```cpp
char przywitanie_1[6] = {'h', 'e', 'l', 'l', 'o', '\0'}; // inicjacja manualna
char przywitanie_2[6] = "witaj";                         // inicjacja dedykowana
```

Przy manualnej inicjacji stringa, należy pamiętać o dodaniu `\0`. Zauważ, że chociaż `witaj` ma 5 liter, ciąg zainicjowany został na 6 – trzeba bowiem zostawić miejsce na znak null, który doda za nas C++.

Być może zadałeś sobie teraz pytanie *"Czemu C++ nie może sam wstawić długości słowa?"* Może, trzeba mu tylko o tym powiedzieć.

```cpp
char slowo[] = "jakis fajny ciag!"; // teraz nie musimy przejmować się długością słowa
```

## String ze standardowej biblioteki

Tablica znaków ma jednak pewną wadę – **jest stałej długości,** nie da się dodać do niej znaków. Istnieje jednak sposób, żeby to obejść: skorzystać z typu `string`. Aby to zrobić, należy dodać do pliku zawartość biblioteki `string` (komendą `#include <string>`) i utworzyć zmienną tego typu.

```cpp
// ... pozostałe include'y ...
#include <string>
using namespace std;
// ^^^ dzięki tej linii kodu piszemy "string", a nie "std::string", gdyż
// typ "string" znajduje się w przestrzeni nazw "std"

int main()
{
    string slowo = "jakies fajne slowo";
    slowo.push_back('!'); // dodaje znak '!' do zmiennej slowo
    slowo += '?';         // dodaje znak '?' do zmiennej slowo
    slowo += " :D";      // dodaje ciąg " :D" do zmiennej slowo
}
```

Oczywiście, dalej możemy korzystać z funkcjonalności, na które pozwalała nam tablica znaków, jak pozyskanie znaku spod indeksu.

```cpp
#include <string>
using namespace std;

int main()
{
    string slowo = "henryk";
    slowo[0]; // zwróci 'h'
    slowo[4] = 'a'; // zmieni literę 'y' na 'a'
}
```

> W reszcie artykułu przyjmijmy konwencję, że string to `std::string`, a ciąg znaków to tablica znaków. Warto dodać, że podanie bezpośrednio `"czesc"` jako np. parametru funkcji oznacza, że będzie on tablicą znaków, a nie typem `string`.

## Funkcje i metody na stringach

`std::string` dostarcza nam wiele przydatnych metod, a biblioteka `<string>` zapewnia szereg funkcji na tym typie. Oto kilka z nich:

| Metoda              | Opis                                           |
| ------------------- | --------------------------------------------- |
| `string.insert()`   | Wkleja znak/ciąg znaków/string do stringa      |
| `string.erase()`    | Usuwa znak/ciąg znaków ze stringa              |
| `string.push_back()`| Dodaje jeden znak do stringa                  |
| `string.append()`   | Dodaje znak/ciąg znaków do stringa            |
| `string.replace()`  | Zastępuje fragment stringa ciągiem znaków   |
| `string += "..."`   | Dodaje znak/ciąg znaków do stringa            |
| `string.substr()`   | Kopiuje i zwraca wycinek stringa             |

```cpp
#include <string>
using namespace std;

int main()
{
    string slowo = "wodociagi kieleckie";
    slowo.insert(10, "nie "); // "wodociagi nie kieleckie"
    //           ^1   ^2
    // 1. indeks, od którego zaczyna się wklejanie
    // 2. ciąg do wklejenia

    slowo.insert(23, 3, '!'); // "wodociagi nie kieleckie!!!"
    //           ^1  ^2  ^3
    // 1. indeks, od którego zaczyna się wklejanie
    // 2. ilość znaków do wklejenia
    // 3. znak do wklejenia

    slowo = "lubie placki";
    slowo.erase(0, 6); // "placki"
    //          ^1 ^2
    // 1. indeks początkowy usunięcia
    // 2. ilość znaków do usunięcia

    slowo = "nie zrobiles";
    slowo.push_back(' '); // "nie zrobiles "
    //               ^1
    // 1. znak do dodania

    // Linijka poniżej jest równoznaczna: slowo += "pracy domowej";
    slowo.append("pracy domowej"); // "nie zrobiles pracy domowej"
    //            ^1
    // 1. ciąg znaków do dodania

    slowo.append(3, '!'); // "nie zrobiles pracy domowej!!!"
    //           ^1  ^2
    // 1. ilość znaków do dodania
    // 2. znak do dodania
	
    slowo = "programowanie jest super";
    slowo.replace(0, 13, "granie"); // "granie jest super"
    //            ^1 ^2   ^3
    // 1. indeks, od ktorego zaczyna sie zastepowanie
    // 2. ilosc znakow do zastapienia
    // 3. ciag znakow, ktorym zastepuje
    
    slowo = "witaj swiecie";
    slowo.substr(6); // zwroci "swiecie"
    //           ^1
    // 1. indeks, od ktorego do konca wyciany jest fragment 
    
    slowo.substr(2, 5); // zwroci "taj s"
    //           ^1 ^2
    // 1. indeks, od ktorego zaczyna sie wycinany fragment
    // 2. ile znakow do wyciecia
}
```

| Funkcja | Opis |
| -------- | ---------- |
| `int stoi()` | Konwertuje **tylko** string na int |
| `long long stoll()` | Konwertuje **tylko** string na long long |
| `string to_string()` | Konwertuje int/long long/float na string |

```cpp
#include <string>
using namespace std;

int main()
{
    string liczba1 = "123456";
    int liczba1_jako_int = stoi(liczba1);
    
    string liczba2 = "99999999999";
    long long liczba2_jako_long_long = stoll(liczba2);
    	
    string liczba3 = to_string(liczba1_jako_int);
    string liczba4 = to_string(liczba2_jako_long_long);
}
```

> `stoi` to skrót od *string to int*, a `stoll` to skrót od *string to long long*. Teraz spróbuj utworzyć nazwy funkcji, które konwertują string na liczby całkowite bez znaku (a takowe istnieją).

### Podsumowanie

Szczegółowo omówiliśmy dwa podejścia do pracy z ciągami znaków w C++: tablice znaków oraz klasę `std::string`. Tablice znaków są prostsze w implementacji, ale ograniczone stałą długością i wymagają ręcznego zarządzania końcem ciągu (`\0`). Z kolei klasa `std::string` zapewnia większą elastyczność i oferuje szeroki zestaw metod do manipulacji tekstem, takich jak `insert`, `erase` czy `replace`. 
