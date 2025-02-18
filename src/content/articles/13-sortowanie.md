---
draft: false
title: 'Sortowanie'
id: 13
nerd: false
---

# Sortowanie

## Sortowanie przez wybieranie (Selection Sort)

**Sortowanie przez wybieranie** polega na znajdowaniu najmniejszego (lub największego) elementu w nieposortowanej części tablicy i zamianie go z pierwszym elementem tej części. Proces ten powtarzamy dla kolejnych pozycji aż cała tablica będzie posortowana.

**Jak to działa?:**

1. Przechodzimy po tablicy, wybierając najmniejszy element z pozostałych.
2. Zamieniamy go z pierwszym elementem w nieposortowanej części.
3. Powtarzamy krok 1 dla pozostałych elementów.


**Kod:**
```cpp
#include <iostream>
using namespace std;

void sortowanie(int tablica[], int n) {

    for (int i = 0; i < n - 1; i++) {

        int najmniejszy = i; // Zakładamy, że obecny element jest najmniejszy

        // Jeśli znajdziemy mniejszy element, zmieniamy indeks najmniejszego
        for (int j = i + 1; j < n; j++) {
            if (tablica[j] < tablica[najmniejszy]) {
                najmniejszy = j;
            }
        }

        // Zamieniamy elementy miejscami
        int a = tablica[i];
        tablica[i] = tablica[najmniejszy];
        tablica[najmniejszy] = a;
    }
}

int main() {
    int tablica[5] = {20, 40, 30, 50, 10};
    int n = 5; // Rozmiar tablicy

    sortowanie(tablica, n);

    for (int i = 0; i < n; i++) {
        cout << tablica[i] << " ";
    }
    // Wypisze: 10 20 30 40 50

    return 0;
}
```

## Sortowanie przez zliczanie (Counting Sort)

**Sortowanie przez zliczanie** działa inaczej niż tradycyjne algorytmy. Zamiast porównywać elementy, liczymy, ile razy występuje każdy element w zbiorze, a potem tworzymy posortowaną vector na podstawie tych zliczeń.

**Jak działa:**

1. Tworzymy vector zliczeń, w którym dla każdej liczby z vectora wejściowego zliczamy, ile razy się ona pojawia.
2. Na podstawie tych zliczeń rekonstruujemy posortowany vector.

**Kod:**
```cpp
#include <iostream>
#include <vector>
using namespace std;

void sortowanie(vector<int>& zbior, int n) {
    int najwiekszy = zbior[0]; // Zakładamy, że pierwszy element jest największym

    // Jeśli bieżący element jest większy od dotychczasowego największego elementu, aktualizujemy jego wartość
    for (int i = 1; i < n; i++) {
        if (zbior[i] > najwiekszy) {
            najwiekszy = zbior[i];
        }
    }

    vector<int> wystapienia; // Tworzymy vector z liczbą wystąpień elementów

    for (int i = 0; i < najwiekszy + 1; i++) {
		wystapienia.push_back(0); // Wypełniamy go zerami, do których dodawać będziemy liczbę wystąpień
	}

    for (int i = 0; i < n; i++) {
        wystapienia[zbior[i]]++; // Zapisujemy liczbę wystąpień elementów
    }

    // Na podstawie liczby wystąpień każdego z elementów układamy je
    int index = 0;
    for (int i = 0; i < najwiekszy + 1; i++) {
        while (wystapienia[i] > 0) {
            zbior[index] = i;
            wystapienia[i]--;
            index++;
        }
    }
}

int main() {
    vector<int> zbior = {4, 2, 2, 8, 3, 3, 1};
    int n = zbior.size();

    sortowanie(zbior, n);

    for (int i = 0; i < n; i++) {
        cout << zbior[i] << " ";
    }
    // Wypisze: 1 2 2 3 3 4 8
    return 0;
}
```


## Sort

Funkcja sortowania jest używana do uporządkowania elementów kontenera (np. tablicy, wektora) w określonym porządku (rosnącym lub malejącym). Najczęściej stosowaną funkcją do sortowania jest funkcja `sort` z nagłówka `<algorithm>`.

**Kod:**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 3, 8, 1, 2};
    
    sort(v.begin(), v.end());

    for (int i = 0; i < v.size(); i++) {
        cout << v[i] << " ";
    }
    // Wypisze: 1 2 3 5 8

    return 0;
}
```

**Parametry:**

- `v.begin()`: Początkowy iterator kontenera (zaczynamy sortowanie od pierwszego elementu).
- `v.end()`: Końcowy iterator kontenera (sortowanie kończy się na ostatnim elemencie).

**Działanie:**

- Funkcja `sort` sortuje elementy w porządku rosnącym przy użyciu algorytmu sortowania szybkim (ang. quicksort) lub innego optymalnego algorytmu.
- Można też podać własny sposób porównywania elementów, by sortować w porządku malejącym lub zgodnie z innymi kryteriami.

**Sortowanie malejące:**

Jeśli chcesz posortować elementy w porządku malejącym, wystarczy dodać trzeci argument w postaci funkcji do porównywania:

```cpp
sort(v.begin(), v.end(), greater<int>());
```

**Własne kryterium porównania:**

Można również przekazać własną funkcję porównującą jako trzeci argument:

```cpp
bool porownanie(int a, int b) {
    return a > b;
}

sort(v.begin(), v.end(), porownanie);
```
