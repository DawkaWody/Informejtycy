---
draft: false
title: 'Vector'
id: 12
nerd: false
---
# Vector
Tablice są bardzo dobrym rozwiązaniem do przechowywania wielu danych, jednak konieczność ścisłego ustalenia ich wielkości, po czym nie wykorzystywania znacznej części, bo np. okazało się że w takim przypadku potrzebujemy mniej miejsca, może czasem być denerwujące. Dlatego możemy używać vectorów zamiast tablic, wiele spośród ich mechanik są analogiczne do tych tablicy, jednak zawiera on również dodatkowe przydatne funkcje.

## Inicjowanie
Aby móc korzystać z `vectorów`, na początku trzeba zaimportować `#include <vector>`, potem tworzymy go poprzez zapisanie nazwy `vector`, następnie typu danych w nawiasach ostrokątnych `<typ_danych>` oraz nazwy na końcu `nazwa`, po której opcjonalnym elementem jest wielkości vectora w nawiasach okrągłych `(wielkość_początkowa)`. :
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector <int> vec; // Stworzenie vectora 0 elementowego
    
    vector <int> wekt(10); // Stworzenie vectora 10 elementowego
    
    int n;
    cin >> n;
    vector <int> wek_2(n); // Stworzenie vectora n elementowego
}
```
## Przypisywanie i odczytywanie danych
Vectorem posługujemy się jak zwykłą tablicą, możemy odwoływać się do komórek, czytać i przypisywać im wartości, ale dodatkowo możemy dodać do vectora nowy element, powiększyć jego rozmiar o jeden za pomocą metody `push_back`, jak również usunąć ostatni element metodą `pop_back`:
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector <int> vec(6); // Stworzenie vectora 6 elementowego
    cin >> vec[4]; // Wczytanie wartości do piątej komórki vectora
    cout << vec[2]; // Wypisanie wartości trzeciej komórki vectora
    vec.push_back(12); // Dodanie liczby 12 do vectora na 7 pozycję
    vec.pop_back(); // Usunięcie ostatniego elementu vectora   
}
```

## Inne metody vectorów
W vectorach możemy używać również innych metod takich jak: `size()` zwraca wielkość vectora oraz `empty()` zwraca wartość typu bool, `true` jeśli vector jest pusty, `false` w przeciwnym wypadku. Vector można również sortować funkcją `sort()`, do korzystania z której konieczne jest zaimportowanie modułu `algorithm`, umieszczając następującą linie na początku kodu: `#include <algorithm>`. Sortowanie rosnąco odbywa się przez podanie jako argumentów funkcji `nazwa_vectora.begin()` oraz `nazwa_vectora.end()` po przecinku. Aby posortować malejąco konieczne jest dodanie trzeciego argumentu `greater<int>()`:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector <int> vec;
    sort(vec.begin(), vec.end()); // Sortowanie rosnące vectora vec
    sort(vec.begin(), vec.end(), greater<int>()); // Sortowanie malejące vectora vec
}
``` 


