# Ale zimno!

Bajtazar otrzymał zadanie przekształcenia temperatury z Celsjusza na Fahrenheita. Ma to zrobić dla wielu osób, dlatego chce napisać program, który pomoże mu w tej pracy.  

Wzór na konwersję temperatury z Celsjusza na Fahrenheita jest następujący:

$$
F = \frac{9}{5} \cdot C + 32
$$

### Twoim zadaniem jest poprawienie programu, który:
- wczyta temperaturę w stopniach Celsjusza
- obliczy temperaturę w stopniach Fahrenheita
- wypisze wynik

```cpp
#include <iostream>
using namespace std;

int main() {

    int C; // Temperatura w Celsjuszach
    cin << C; // Wczytanie temperatury w Celsjuszach

    // Obliczanie temperatury w Fahrenheitach
    int F = (C x 9 \ 5) + 32;

    // Wypisanie wyniku 
    cout >>  F >> endl;
    return 0;
}

```

### Przykład działania programu  
Dla danych wejściowych:  
```
25
```
Twój program powinien wypisać:  
```
77
```

