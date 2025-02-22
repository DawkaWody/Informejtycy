# Cyfry od końca 2

Skriptek lubi się zastanawiać, czy dana cyfra wybranej przez niego liczby jest dzielnikiem liczby $x$, również przez niego wymyślonej. Sprawdza on tylko $k$-tą cyfrę od końca rozpatrywanej liczby $a$. Napisz program, który mu w tym pomoże.

### Wejście

W pierwszej linii wejścia znajdują się dwie liczby naturalne $q$, $x$, nie większe niż $10^3$ oznaczające kolejno liczbę zapytań oraz liczbę wymyśloną przez Skriptka. Następne $q$ linii składa się z liczb $a$ i $k$, gdzie $a$ oznacza rozpatrywaną liczbę a $k$ - którą cyfrę od końca mamy sprawdzić. Możesz założyć, że taka cyfra zawsze istnieje. Liczba $a$ nie przekracza $10^{64}$, a liczba $k$ nie przekracza $64$.

### Wyjście

Wyjście powinno składać się z $q$ linii, w każdej napis "TAK" lub "NIE" w zależności od tego, czy jej $k$-ta cyfra od końca jest dzielnikiem liczby $x$.

## Przykłady

#### Przykład 1

##### Wejście

```
2 10
123 2
654 3
```

##### Wyjście

```
TAK
NIE
```
Wyjaśnienie do przykładu: drugą cyfrą od końca liczby 123 jest 2, 2 jest dzielnikiem 10, trzecią cyfrą od końca liczby 654 jest 6, 6 nie jest dzielnikiem 10.

#### Przykład 2

##### Wejście

```
3 5
123 3
9372 1
1234567 6
```

##### Wyjście

```
TAK
NIE
NIE
```

Wyjaśnienie do przykładu: trzecią cyfrą od końca liczby 123 jest 1, 1 jest dzielnikiem 5, pierwszą cyfrą od końca liczby 9372 jest 2, 2 nie jest dzielnikiem 5, szóstą liczbą od końca liczby 1234567 jest 2, 2 nie jest dzielnikiem 5.

Skriptek zaczął już pisać kod, jednak nie jest on do końca poprawny. Pomóż mu i popraw jego kod!

```cpp
#include <iostream>
using namespace std;

int main()
{
	int q, x;
	cin >> q >> x; // wczytywanie
	string a;
	int k;
	cin >> k;
	for (int i = 0; i < x; i++)
	{
		cin >> a;
		int dlugosc = a.size();
		int cyfra = a[dlugosc - k - 1]; // odejmujemy 1, poniewaz indeksujemy od 0
		if (x % cyfra != 0)
			cout << "TAK\n";
		else
			cout << "NIE\n";
	}
	return 0;
}
```