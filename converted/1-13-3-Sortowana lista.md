# Sortowana lista
Albert wymyślił nową zabawę o wektorach, którą nazwał sortowaną listą. Polega ona na tym, żeby dodawać lub usuwać ostatni element z listy, albo sortować całą listę. Albert chciał, aby inne osoby również mogły bawić się w jego grę, dlatego prosi Cię abyś napisał program z którym będzie można w nią grać. 

## Zadanie
Napisz program, który wczyta i wykona $n$ komend, spośród trzech dostępnych: dodanie liczby, uśnięcie liczby z końca listy lub posortowanie całej listy, a następnie wypisze powstałą na koniec listę. 

## Wejście
W pierwszym wierszu wejścia znajduje się liczba całkowita $n$ ($1 \le n \le 10^6$), oznaczająca ilość komend do wykonania. W następnych $n$ wierszach znajdują się komendy w następujących schematach:
DODAJ $a$, gdzie ($1 \le a \le 10^6$) - oznacza dodanie liczby $a$ na koniec listy
USUŃ - oznacza usunięcie jednej liczby z końca listy
SORTUJ - oznacza posortowanie rosnąco listy

## Wyjście 
W jedynym wierszu wyjścia powinna znaleźć lista po wykonaniu wszystkich komend.

## Przykład
Wejście:
```
6
DODAJ 1
DODAJ 4
DODAJ 2
USUŃ
SORTUJ
DODAJ 5
```
Wyjście:
```
1 4 5
```

