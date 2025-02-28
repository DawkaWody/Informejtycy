# Choinka

Wiesz już czym są fraktale, teraz czas na choinkę. Choinka ma pięć poziomów i jest zbudowana ze znaków `*`. Oto choinka:

```
*
**
***
****
*****
```

Przyjmijmy, że choinka zbudowana właśnie ze znaków `*` to $choinka(1)$. W takim razie $choinka(2)$ będzie choinką zbudowaną ze... znaków $choinka(1)$, zamiast z `*`. $choinka(3)$ to choinka z $choinka(2)$ itd. Generalna reguła mówi, że $choinka(n)$ jest zbudowana z $choinka(n-1)$. Oto program, który miał generować takie rysunki.

```cpp
#include <iostream>
#include <cmath>
#include <cstring> // funkcja memset()
using namespace std;

const unsigned int MAKS_SZEROKOSC = 3125;
const unsigned int MAKS_WYSOKOSC = 3125;

// Matryca, na której narysowana zostanie choinka
char matryca[MAKS_WYSOKOSC][MAKS_SZEROKOSC] = {{' '}};

// Rysuje choinka(n) na matrycy, w pozycji (x,y) gdzie (x,y) to lewy górny róg choinki
void choinka(int n, int x, int y)
{
	if (n == 1) {
		for (int w=0; w<5; w++) {
			for (int k=0; w<k+1; k++) {
				matryca[y+w][x+k] = '*';
			}
		}
		return;
	}
	
	for (int w=0; w<5; w++) {
		for (int k=0; k<w+1; k++) {
			choinka(n-1, (x+k)*5, (y+w)*5);
		}
	}
}

int main()
{
	// memset to funkcja wypełniająca tablice i przyjmuje 3 parametry
	// -> Adres tablicy (czyli &nazwa)
	// -> Wypełnienie (czym ma wypełnić tablicę)
	// -> Rozmiar (w tym wypadku, szerokość*wysokość)
	memset(&matryca, ' ', MAKS_SZEROKOSC*MAKS_WYSOKOSC);
	
	int n;
	cin >> n;
	
	choinka(n, 0, 0);
	
	int potega = pow(5,n);
	for (int wiersz=0; wiersz<potega; wiersz++) {
		for (int kolumna=0; kolumna<potega; kolumna++) {
			cout << matryca[wiersz][kolumna];
		}
		cout << endl;
	}
}
```

Niestety coś poszło nie tak i fraktale nie chcą się rysować. Napraw przedstawiony program

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta stopień choinki;
- Wypisze choinke podanego stopnia.

### Wejście

Na wejściu znajdzie się liczba $1 \le n \le 5$.

### Wyjście

Na wyjściu powinien znaleźć się rysunek $choinka(n)$. **UWAGA:** choinka musi być wypełniona dookoła spacjami. Innymi słowy, $choinka(n)$ musi być narysowana w prostokącie $5*5$ spacji, co, o ile bazuje się na rozwiązaniu z matrycą, powinno dziać się automatycznie.

## Przykład

Wejście:

```
1
```

Wyjście:

```
*
**
***
****
*****
```

## Podpowiedź

Pamiętaj, że $x \ne w$ i $y \ne k$, gdy $w$ to wiersz, a $k$ to kolumna. Ma to szczególne znaczenie przy odwołaniach do tablicy dwuwymiarowej. Tablica dwuwymiarowa to bowiem *tablica tablic*, a więc gdy odwołujesz się do `matryca[v]` uzyskujesz tablicę, która reprezentuje wiersz matrycy.