# Podzielność sumy

Bajtek zainteresował się dużymi liczbami. Jako że ostatnio uczył się o sumie cyfr, stwierdził, że chce dla wymyślonej przez siebie liczby całkowitej $x$ sprawdzać, czy suma cyfr dowolnej liczby jest podzielna przez $x$. Prosi cię o napisanie programu, który zrobi to za niego.
### Wejście

Napisz program, który wczyta dwie liczby $q$ i $x$, oznaczające kolejno liczbę zapytań oraz wymyśloną przez Bajtka liczbę, a następnie $q$ linii, a w każdej z nich jedną liczbę naturalną nie większą niż $10^{666}$. Liczba zapytań i $x$ nie przekroczą $10^3$.
### Wyjście

Wyjście składa się z $q$ linii. W $i$-tej linii wyjścia powinna się znajdować informacja, czy liczba z $i+1$-wszej linii wejścia jest podzielna przez liczbę $x$, wyrażona przez napis: "TAK" jeśli jest, oraz "NIE" w przeciwnym wypadku.
## Przykłady

#### Przykład 1

###### Wejście

```
3 2
5381
266
97
```
###### Wyjście

```
NIE
TAK
TAK
```
Wyjaśnienie do przykładu: $5+3+8+1=17$, $17$ nie jest podzielne przez 2, $2+6+6=14$, $14$ jest podzielne przez 2, $9+7=16$, $16$ też jest podzielne przez 2.

#### Przykład 2

###### Wejście

```
2 5
1234
0
```
###### Wyjście

```
TAK
TAK
```
Wyjaśnienie do przykładu: $1+2+3+4=10$, $10$ jest podzielne przez 5, 0 też jest podzielne przez 5.