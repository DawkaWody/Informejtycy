# ASCII
**ASCII**  to standard kodowania znaków, który przypisuje numery literom, cyfrom i symbolom. Innymi słowy, jest to system zapisu znaków poprzez liczby (7-bitowe - od 0 do 127) wykorzystywany między innymi przez C++. Oznacza to, że każda *litera alfabetu łacińskiego/cyfra/biały znak* (i wiele więcej) posiada swój własny numer w systemie ASCII.

Poniższy fragment kodu wczyta dowolny znak i wypisze jego numer w systemie ASCII.
```cpp
char znak;
cin >> znak;
int numer = znak; //znak w zmiennej typu int przyjmuje wartość ASCII
cout << numer;
```
Oczywiście można to zrobić bez użycia zmiennej typu int:
```cpp
char znak;
cin >> znak;
cout << int(znak);
```
Przykładowo, dla wejścia *a* program wypisze *97*, natomiast dla wejścia *4*, program wypisze *52*.

Działa to też w drugą stronę - poniższy fragment kodu wczytuje numer w systemie ASCII i wypisuje odpowiadający mu znak:
```cpp
int numer;
cin >> numer;
cout << char(numer);
```
Dla wejścia *52* program wypisze *4*, natomiast dla wejścia *97* program wypisze *a*.
## Operacje matematyczne na znakach
W c++ możemy wykonywać operacje matematyczne na znakach, a dokładniej ich wartościach w ASCII. 
Przykładowy program wczytujący dwa znaki i wypisujący sumę ich wartości w systemie ASCII:
```cpp
#include <iostream>
using namespace std;
int main()
{
    char znak1, znak2;
    cin >> znak1 >> znak2;
    cout << znak1 + znak2;
    return 0;
}
```
W trzeciej linii kodu program "domyśla się", że skoro używamy operatora `+`, chodzi nam o wartość liczbową. Dla wejścia *a b* program wypisze *195* (*97+98=195*). Możemy używać też operatorów: `-`, `*`, `/`, `%`;

## Konwertowanie cyfr ze zmiennych typu char na zmienne typu int
Operacje matematyczne na znakach możemy wykorzystać do przekształcania cyfry zapisanej jako znak w cyfrę zapisaną jako liczba. Użyjemy operatora `-` - poniższy program wczytuje cyfrę jako znak i przekształca ją w zmienną typu int:
```cpp
#include <iostream>
using namespace std;
int main()
{
    char cyfra_znak;
    int cyfra_liczba;
    cin >> cyfra_znak;
    cyfra_liczba = cyfra_znak - '0';
    cout << cyfra_liczba;
    return 0;
}

```
Kluczową linią w działaniu tego programu jest linia 8: `cyfra_liczba = cyfra_znak - '0';` - w tej linii zmienna *cyfra_liczba* przyjmuje pożądaną wartość. Przykładowo, dla wejścia *7*, zmienna *cyfra liczba* przyjmuje wartośc: `'7' - '0' = 55 - 48 = 7`. (55 i 48 to wartości *7* i *0* w systemie ascii). W ASCII występuje rozróżnienie między wielką i małą literą.
