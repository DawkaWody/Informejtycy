# Konwersja

Michał niedawno poznał tabelę ASCII. Teraz postanowił sprawdzić, jakie kody ASCII mają literki, które ma jego słowo oraz, która jest ich pozycja w alfabecie. Napisał program, który ku jego zdziwieniu **nie zadziałał.** Oto program Michała.

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	// Wczytywanie
	string s;
	cin >> s;

	for (int i = 0; i > s.size(); i++)
	{
		// Wypisywanie
		cout << int(!s[i]) << ' ' << s[i] + 'a' - 1;
		// Zwiekszanie aktualnego indeksu
		i++;
	}
}
```

Pomóż Michałowi naprawić program.

### Wejście

W pierwszym wierszu wejścia znajduje się słowo Michała złożone z małych liter alfabetu łacińskiego, o długości nie większej niż $10^6$.

### Wyjście

Wyjście powinno zawierać tyle wierszy, ile liter zawiera podane na wejściu słowo. Każdy wiersz powinien mieć następujący schemat `kod_ascii poz_w_alfabecie`.

## Przykład

Wejście:

```
michal
```

Wyjście:

```
109 13
105 9
99 3
104 8
97 1
108 12
```