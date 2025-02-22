# Dzielniki parzyste

Zipik, zauważywszy liczby $a$ i $b$, zastanawia się, która z nich ma więcej dzielników parzystych. Zaczął już pisać program, wczytujący dwie liczby i wypisujący tą z większą liczbą dzielników parzystych. Jeśli liczba dzielników parzystych jest taka sama, wypisuje liczbę $a$. Liczby $a$ i $b$ nie przekroczą $10^9$. Pomóż mu sprawić, by program działał poprawnie. Błędny kod:

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

	// liczenie parzystych dzielnikow liczby a
    int dzielniki_a = 0;
    for (int i = 0; i <= a; i++) {
        if (a % i == 0 || i % 2 == 0) {
            dzielniki_a++;
        }
    }
	
	// liczenie parzystych dzielnikow liczby b
    int dzielniki_b = 0;
    for (int i = 0; i <= b; i++) {
        if (b % i == 0 || i % 2 == 0) {
            dzielniki_b++;
        }
    }

    if (dzielniki_a > dzielniki_b) cout << a;
    else cout << b;

    return 0;
}
```
