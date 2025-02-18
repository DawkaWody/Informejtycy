# Podzielność

Ramcio lubi sprawdzać, czy dana liczba dzieli się przez wymyśloną przez niego liczbę $x$. Chce sprawdzić $n$ liczb, przy czym zarówno $n$, $x$, jak i rozpatrywana liczba nie przekroczą $10^6$.


### Wejście

W pierwszej linii wejścia znajdują się dwie liczby naturalne $n$ i $x$. W następnych $n$ liniach wejścia znajduje się po jednej liczbie.


### Wyjście

W $i$-tej z $n$ linii wyjścia powinien się znaleźć napis "TAK" lub "NIE" w zależności od tego, czy liczba z $i+1$-wszej linii wejścia dzieli się przez $x$.


## Przykłady


#### Przykład 1


##### Wejście

```
2 3
25
6
```
##### Wyjście

```
NIE
TAK
```
Wyjaśnienie do przykładu: 25 nie dzieli się przez 3, natomiast 6 tak.

#### Przykład 2

##### Wejście

```
3 4
40
0
78
14
```

##### Wyjście

```
TAK
TAK
NIE
NIE
```
Wyjaśnienie do przykładu: liczby 40 i 0 dzielą się przez 4, natomiast liczby 78 i 14 nie dzielą się przez 4. 