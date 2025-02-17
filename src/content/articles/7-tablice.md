---
draft: false
title: 'Tablice'
id: 7
nerd: false
---
# Tablice
Nadszedł czas poznać pierwszą strukturę pozwalającą przechowywać wiele wartości. Jest nią tablica, czyli wiele zmiennych tego samego typu, które są zebrane pod jedną nazwą, a do konkretnej zmiennej tj. komórki tablicy uzyskujemy dostęp poprzez wskazanie jej numeru. Na pierwszy rzut oka nietypowym zjawiskiem jest numeracja komórek tablicy od zera, jednak jak się niedługo dowiecie w wielu przypadkach jest to naprawdę przydatne.

## Inicjowanie
Tworzenie tablicy jest bardzo podobne do tworzenia zmiennej, jednak dodatkowym elementem jest to że musimy napisać po jej nazwie, w nawiasach kwadratowych liczbę naturalnej oznaczającej wielkość tablicy.

```cpp
#include <iostream>
using namespace std;

int main() {
    int a; // Przypomnienie, tak tworzymy zmienną
    int a[10]; // Nowość, tak wygląda tworzenie tablicy dziesięcio elementowej, liczb całkowitych
    double b[5]; // To samo tylko że liczb zmiennoprzecinkowych
    bool c[2]; // Wartości logicznych bool
}
```

Warto zaznaczyć, że aby program zadziałał prawidłowo musi wiedzieć jak duża będzie tablica, już przed kompilacją, dlatego nie można pisać kodu w sposób jak ten poniżej:
```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[n]; // Podczas wykonywania kodu może wystąpić błąd
}
```

Okazuje się, że C++ jest trochę leniwy, ponieważ jeśli tablica zostanie zadeklarowana w głównej funkcji $main$ to c++ nie wysili się aby ją posprzątać, przez co jej komórki będą miały przeróżne dowolne wartości. Aby zmusić program do wyzerowania tablicy należy zadeklarować ją poza funkcją $main$:
```cpp
#include <iostream>
using namespace std;

int a[7]; // Wyzerowana tablica siedmio elementowa

int main() {

}
```

## Przypisywanie i odczytywanie danych
Wszystko fajnie, ale nadal nie umiemy używać tablicy tj. wpisywać do komórek jakieś wartości i je z nich odczytywać. Przypisanie wartość do komórki jest identyczne jak do zmiennej, z takim wyjątkiem, że przy nazwie tablicy trzeba podać w nawiasach prostokątnych numer komórki do której mają być przypisane dane, tak samo przy odczycie:

```cpp
#include <iostream>
using namespace std;

int main() {
    int tab[10];
    tab[0] = 3; // Przypisanie wartości 3 do pierwszej komórki tablicy tab
    int a;
    a = tab[3]; // Odczytanie wartości czwartej komórki do zmiennej a 
    cin >> tab[2]; // Wczytanie danych do trzeciej komórki tablicy tab
    cout << tab[6]; // Odczytanie danych z siódmej komórki tablicy
}
```

Możemy również od razu przy tworzeniu tablicy podać jej jakieś dane, wypisując je w nawiasach klamrowych po znaku równości np.:
```cpp
#include <iostream>
using namespace std;

int main() {
    int tablica[5] = {1, 4, 2, 5, 3}; // Stworzenie i jednocześnie zapisanie do tablicy pięciu elementów
}
```

Łatwym sposobem wczytania wielu danych do tablicy jest użycie pętli:
```cpp
#include <iostream>
using namespace std;

int main() {
    int x[10];
    for(int i = 0; i < 10; i++) {
        cin >> x[i];
    }
}
```

