# Trapezy, trapezy, trapezy...

W królestwie Bajtocji Bajtazar pomaga budowniczym w obliczaniu pola różnych kształtów. Tym razem musi pomóc w obliczeniu pola trapezu. Trapez ma dwie podstawy: większą i mniejszą, oraz wysokość, a jego pole można obliczyć według wzoru:  

$$
P = \frac{(a + b) \cdot h}{2}
$$

Gdzie:

- $a$ – długość większej podstawy,
- $b$ – długość mniejszej podstawy,
- $h$ – wysokość trapezu.

### Twoim zadaniem jest napisanie programu, który:

- wczyta trzy liczby: $a$, $b$ i $h$.
- obliczy pole trapezu na podstawie podanych wartości.
- wypisze wynik z dokładnością do 2 miejsc po przecinku.

### Przykład działania programu:

Dla danych wejściowych:
```
4.2 3.5 3.2
```
Twój program powinien wypisać:
```
12.32
```

#### Podpowiedź:
Aby wypisać liczbę zmiennoprzecinkową z dokładnością do 2 miejsc po przecinku, wystarczy po `iostream` napisać także:
```cpp
#include <iomanip>
```
a później:
```cpp
cout << fixed << setprecision(2) << wynik << endl;
```