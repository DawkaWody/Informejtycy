---
draft: false
title: 'Pętle'
id: 5
nerd: false
---

# Pętle

## While

**Pętla** `while` służy do wielokrotnego wykonywania bloku kodu, dopóki warunek pętli jest spełniony (czyli dopóki warunek jest prawdziwy). Pętla ta jest używana, gdy nie znamy z góry liczby iteracji, a raczej zależy nam na wykonywaniu kodu, aż spełniony zostanie określony warunek.

**Składnia pętli `while`:**

```cpp
while (warunek) {
	// kod do wykonania
}
```

1. **Warunek**: Przed każdą iteracją pętla sprawdza warunek. Jeśli warunek jest **prawdziwy**, blok kodu wewnątrz pętli jest wykonywany. Jeśli warunek jest **fałszywy**, pętla kończy działanie.
    
2. **Kod do wykonania**: Blok kodu wewnątrz pętli, który będzie wykonywany wielokrotnie, dopóki warunek będzie prawdziwy.
    

**Przykład pętli `while` :**

```cpp
#include <iostream>
using namespace std;

int main(){
	int i = 1;

	// Pętla, która wypisuje liczy od 1 do 5
	while (i <= 5){
		cout << i << " ";
		i++;
	}
	// Wypisze: 1 2 3 4 5

	return 0;
}
```

**Wyjaśnienie:**

- **Warunek**: `i <= 5` – pętla będzie wykonywana, dopóki zmienna `i` będzie mniejsza lub równa 5.
    
- **Kod do wykonania**: `cout << i << " ";` – wypisuje wartość `i`, a następnie `++i` zwiększa ją o 1 po każdej iteracji.
    
**Zastosowanie:**

Pętla `while` jest użyteczna, gdy chcesz, aby kod wykonywał się tak długo, jak spełniany jest określony warunek, ale nie masz wcześniej określonej liczby iteracji. Często stosuje się ją w przypadkach, gdy warunek zatrzymania pętli zależy od danych w czasie wykonywania programu (np. od wyników obliczeń, wczytywania danych czy interakcji użytkownika).

## For

Funkcję `for` można traktować jako skróconą wersję pętli `while`, której używamy, gdy znamy z góry liczbę powtórzeń. W praktyce, pętla `for` składa się z trzech głównych części:

1. **Inicjalizacja** — wykonywana tylko raz, przed rozpoczęciem pętli (np. przypisanie wartości do zmiennej).
    
2. **Warunek** — sprawdzany przed każdym wykonaniem ciała pętli. Jeśli warunek jest prawdziwy, pętla działa, w przeciwnym razie przerywa działanie.
    
3. **Zwiększenie/Zmiana** — wykonywana po każdym obiegu pętli (np. zwiększenie zmiennej sterującej).
    
**Składnia pętli `for` :**

```cpp
for (inicializacja; warunek; zmiana) {
	// kod do wykonania
}
```

**Jak to wygląda w przypadku `while`:**

Pętla `while` działa w podobny sposób, ale musisz ręcznie zadbać o inicjalizację, warunek i zmianę wartości zmiennej sterującej.

**Przykład z `for:`**

Załóżmy, że chcemy zrobić to samo, co w poprzednim przykładzie – wypisać liczby od 1 do 5.

**Używając** `for`**:**

```cpp
#include <iostream>
using namespace std;

int main(){
	for (int i = 1; i <= 5; i++){ // inicjalizacja: i = 1, warunek: i <= 5, zwiększenie: i++
		cout << i << " ";
	}
	
	return 0;
}
```

**Podobieństwa i różnice:**

- **Podobieństwa**: Obie pętle wykonują tę samą operację — drukują liczby od 1 do 5.
    
- **Różnice**: W pętli `for` wszystko jest zapisane w jednej linii, natomiast w `while` musimy osobno zadbać o inicjalizację, warunek i zmianę wartości.
    
Pętla `for` jest użyteczna, gdy dokładnie wiesz, ile razy chcesz wykonać pętlę, podczas gdy `while` jest bardziej ogólna i działa, dopóki warunek jest spełniony.

## Do-while

Pętla `do-while` jest podobna do pętli `while`, ale z tą różnicą, że warunek sprawdzany jest **po** wykonaniu kodu wewnątrz pętli. Oznacza to, że blok kodu w pętli `do-while` zawsze wykona się **przynajmniej raz**, niezależnie od tego, czy warunek na początku był prawdziwy.

**Składnia pętli `do-while`:**

```
do {
	// kod do wykonania
} while (warunek);
```

1. **Kod do wykonania**: Blok kodu wewnątrz pętli, który zostanie wykonany przynajmniej raz.
    
2. **Warunek**: Po każdej iteracji pętli sprawdzany jest warunek. Jeśli jest **prawdziwy**, pętla powtarza się. Jeśli jest **fałszywy**, pętla kończy działanie.
    
**Przykład pętli `do-while` :**

```cpp
#include <iostream>
using namespace std;

int main(){
	int i = 1;

	// Pętla, która wypisuje liczy od 1 do 5
	do {
		cout << i " ";
		i++; // zwiększenie zmiennej i
	} while (i <= 5);
	// Wypisze: 1 2 3 4 5
}
```

**Wyjaśnienie:**

- **Kod do wykonania**: `cout << i << " ";` – wypisuje wartość `i`, a następnie `++i` zwiększa ją o 1.
    
- **Warunek**: `i <= 5` – pętla będzie się powtarzać, dopóki `i` będzie mniejsze lub równe 5.
    
**Zastosowanie:**

Pętla `do-while` jest użyteczna, gdy chcesz, aby kod w pętli wykonał się przynajmniej raz, zanim zostanie sprawdzony warunek (np. w przypadku, gdy trzeba wykonać jakąś akcję przed sprawdzeniem warunku). Może być stosowana w sytuacjach, gdzie oczekujesz, że użytkownik wprowadzi dane, a sprawdzenie poprawności wprowadzenia nastąpi dopiero po pierwszej próbie.