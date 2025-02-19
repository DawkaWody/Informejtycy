# Ciąg połowiczny

Kursek lubi liczby pierwsze. Kursek lubi dany ciąg, jeżeli co najmniej połowa elementów tego ciągu to liczby pierwsze. Napisz program, który sprawdzi, czy Kursek lubi dany ciąg.

### Wejście

W pierwszym wierszu wejścia znajduje się liczba $n$, taka, że $1 \leq n \leq 10^4$. W drugim i zarazem ostatnim wierszu wejścia znajduje się $n$ liczb oddzielonych spacjami. Żadna z nich nie przekroczy $10^4$.

### Wyjście

W jedynym wierszu wyjścia powinna się znaleźć informacja o tym, czy Kursek lubi ciąg podany a wejściu ("TAK"/"NIE").

## Przykłady

#### Przykład 1

##### Wejście

```
6
1 2 3 4 5 6
```

##### Wyjście

```
TAK
```
Wyjaśnienie do przykładu: liczby 2, 3 i 5 są liczbami pierwszymi. Jest to równo połowa elementów.

#### Przykład 2

##### Wejście

```
5
7 8 32 37 76
```

##### Wyjście

```
NIE
```
Wyjaśnienie do przykładu: liczby 7 i 37 są jedynymi liczbami pierwszymi w tym ciągu. Jest to mniej niż połowa elementów.
