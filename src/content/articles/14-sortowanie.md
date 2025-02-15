---
draft: false
title: 'Sortowanie'
id: 14
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

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i; // Zakładamy, że najmniejszy element jest na pozycji i
        
        // Pętla do znalezienia najmniejszego elementu w nieposortowanej części tablicy
        for (int j = i + 1; j < n; j++) { 
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Jeśli znaleziono mniejszy element, zamieniamy miejscami elementy i oraz minIndex
        if (minIndex != i) {
            swap(arr[i], arr[minIndex]);
        }
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = 5;
    
    selectionSort(arr, n); // Wywołanie funkcji
    
    cout << "Posortowana tablica: ";
    for (int i = 0; i < n; i++) { // Pętla do wypisania posortowanej tablicy
        cout << arr[i] << " ";
    }
    
    return 0;
}

```

## Sortowanie przez zliczanie (Counting Sort)

**Sortowanie przez zliczanie** działa inaczej niż tradycyjne algorytmy. Zamiast porównywać elementy, liczymy, ile razy występuje każdy element w tablicy, a potem tworzymy posortowaną tablicę na podstawie tych zliczeń.

**Jak działa:**

1. Tworzymy tablicę zliczeń, w której dla każdej liczby z tablicy wejściowej zliczamy, ile razy się ona pojawia.
2. Na podstawie tych zliczeń rekonstruujemy posortowaną tablicę.

**Kod:**
```cpp
#include <iostream>
using namespace std;

void countingSort(int arr[], int n) {
    int max = arr[0]; // Zakłada się, że pierwszy element jest największym (max)
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) { // Jeśli bieżący element jest większy od dotychczasowego max
            max = arr[i]; // Aktualizujemy wartość max
        }
    }

    int count[max + 1] = {0}; // Tworzymy tablicę licznika, która ma rozmiar max + 1 i inicjalizujemy ją zerami

    for (int i = 0; i < n; i++) {
        count[arr[i]]++;
    }

    int index = 0;
    for (int i = 0; i <= max; i++) {
        while (count[i] > 0) {
            arr[index++] = i;
            count[i]--;
        }
    }
}

int main() {
    int arr[] = {4, 2, 2, 8, 3, 3, 1};
    int n = 7;
    
    countingSort(arr, n); // Wywołanie funkcji
    
    cout << "Posortowana tablica: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    
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

    for (int num : v) {
        cout << num << " ";
    }

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
