# Liczby
Adam bardzo lubi bawić się liczbami, które zapisuje na kartce, a następnie wybiera te najciekawsze. Adam nazywa najciekawszymi liczbami, te które występują na pozycjach co $c$ miejsc, zaczzynając od pierwszej liczby na kartce. Pomóż mu znaleść najciekawsze liczby z jego kartki!

## Zadanie
Napisz program który wczyta $n$ liczb całkowitych oraz liczbę $c$, a następnie wypisze co $c$-tą z nich.

## Wejście
W pierwszym wierszu wejścia znajduję się jedna liczba całkowita $n$ ($1 \le n \le 10^6$), oznaczająca ilość liczb na kartce Adam. W drugim wierszu zawiera $n$ liczb całkowitych $r$ ($1 \le r \le 10^6$), oznaczających kolejne liczby z karki. Trzeci, a zarazem ostatni wiersz wejścia zawiera liczbę $c$ oznaczającą co która liczba ma zostać wypisana.

## Wyjście
Pierwszy, a zarazem jedyny wiersz wyjścia powinien zawierać najciekawsze liczby z kartki Adam.

## Przykład

Wejście:
```
1
1 2 3 4 5 6 7 8 9
2
```

Wyjście:
```
1 3 5 7 9
```