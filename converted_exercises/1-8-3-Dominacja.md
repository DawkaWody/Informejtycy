# Dominacja

Bajtek lubi wielkie litery. Nie jest zadowolony, gdy istnieje mała litera, która dominuje w danym ciągu. Jeśli dana litera dominuje, to znaczy że występuje w danym ciągu największą liczbę razy biorąc pod uwagę wszystkie litery w tym ciągu (rozróżniając małe i wielkie litery). Napisz program, który wczyta liczbę $n$, następnie ciąg o długości $n$, składający się wyłącznie z liter alfabetu łacińskiego, i wypisze TAK lub NIE (TAK, jeśli Bajtek jest zadowolony, w przeciwnym wypadku NIE). Możesz założyć, że $1 \leq n \leq 10^{6}$.
## Przykłady

#### Przykład 1

##### Wejście

```
8
HDjkLmHn
```

##### Wyjście

```
TAK
```
Wyjaśnienie do przykładu: najczęściej występującą literą w tym ciągu jest H, a H jest wielką literą.

#### Przykład 2

##### Wejście

```
11
WkoPlmkWays
```

##### Wyjście

```
NIE
```
Wyjaśnienie do przykładu: litera W wystąpiła 2 razy, tyle samo razy co litera k. Niemniej jednak, litera k jest literą występującą największą liczbę razy, więc Bajtek nie jest zadowolony.



