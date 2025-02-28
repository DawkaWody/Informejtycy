# Skandal

Skriptek jest bardzo osobliwą personą. W szczególności, nienawidzi liczby 4. Do tego stopnia, że jak zobaczy liczbę posiadającą dokładnie 4 dzielniki lub podzielną przez 4, wpada w szał i w nocy zakrada się informatykom do domów i zmienia nazwy iteratorów w programach na inne niż i, j, k (to zbrodnia!). Legenda głosi, że gdy Skriptek zobaczy liczbę 4, dodatkowo zmienia nazwy zmiennych przechowujących liczbę elementów na inne niż n, m, k! Skandal!

### Wejście

W pierwszej linii wejścia znajduje się liczba q, taka że $1 \leq q \leq 10^5$. Następne q linii wejścia składa się z jednej liczby naturalnej nie większej niż $10^6$ (po jednej na linię).

### Wyjście

Wyjście ma się składać z q linii, w każdej informacja o tym, czy na widok liczby podanej na wejściu Skriptek dopuścił się pogwałcenia praw informatyki (TAK - jeśli tej nocy zbezcześcił jakiś kod, lub NIE w przeciwnym wypadku). Liczba q się nie wlicza do oceny.

## Przykłady 

#### Przykład 1

##### Wejście

```
3
45
6
24
```
##### Wyjście

```
NIE
TAK
TAK
```
Wyjaśnienie do przykładu: liczba 45 nie dzieli się przez 4 i ma więcej niż 4 dzielniki, liczba 6 ma 4 dzielniki, natomiast liczba 24 dzieli się przez 4.

#### Przykład 2

##### Wejście

```
2
7
4
```

##### Wyjście

```
NIE
TAK
```
Wyjaśnienie do przykładu: Liczba 7 ma tylko 2 dzielniki i nie dzieli się przez 4, liczba 4 jest podzielna przez 4.

