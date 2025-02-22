# Cyfry od końca

Skriptek lubi się zastanawiać, czy dana cyfra wybranej przez niego liczby jest dzielnikiem liczby $x$, również przez niego wymyślonej. Sprawdza on tylko $k$-tą cyfrę od końca rozpatrywanej liczby $a$. Napisz program, który mu w tym pomoże.

### Wejście

W pierwszej linii wejścia znajdują się trzy liczby naturalne $q$, $x$, $k$ nie większe niż $10^3$ oznaczające kolejno liczbę zapytań, liczbę wymyśloną przez Skriptka oraz liczbę, mówiącą nam która cyfra od końca będzie rozpatrywana. Możesz założyć, że taka cyfra zawsze istnieje. W następnych $q$ liniach znajdują się rozpatrywane liczby, po jednej na linię, każda z nich nie przekracza $10^{64}$.

### Wyjście

Wyjście powinno składać się z $q$ linii, w każdej napis "TAK" lub "NIE" w zależności od tego, czy jej $k$-ta cyfra od końca jest dzielnikiem liczby $x$.

## Przykłady

#### Przykład 1

##### Wejście

```
2 10 2
123
654
```

##### Wyjście

```
TAK
TAK
```

Wyjaśnienie do przykładu: drugą cyfrą od końca liczby 123 jest 2, 2 jest dzielnikiem 10, drugą cyfrą od końca liczby 654 jest 5, 5 jest dzielnikiem 10.

#### Przykład 2

##### Wejście

```
3 5 3
123
9372
1234567
```

##### Wyjście

```
TAK
NIE
TAK
```
Wyjaśnienie do przykładu: trzecią cyfrą od końca liczby 123 jest 1, 1 jest dzielnikiem 5, trzecią cyfrą od końca liczby 9372 jest 3, 3 nie jest dzielnikiem 5, natomiast trzecią liczbą od końca liczby 1234567 jest 5, 5 jest dzielnikiem 5.