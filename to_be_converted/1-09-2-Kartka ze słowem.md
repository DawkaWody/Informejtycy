# Kartka ze słowem

Bajtrysia napisała na kartce słowo. Zauważyła, że jej mama użyła pewnego razu bardzo podobnego słowa. Bajtrysia nie od początku rozumiała, skąd ma takie przeczucie. W końcu odkryła - te słowa są *anagramami*. Znaczy to, że mają takie same literki, ale w różnej kolejności. Przykładowo anagramami są "klapa" i "alpak". Niestety, mama Bajtrysi nie podziela jej zdania. Bajtrysia prosi Cię byś pomógł jej udowodnić, że ma rację.

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta długość słowa i słowo;
- Zliczy litery słowa;
- Wypisz ilość liter w słowie Bajtrysi.

### Wejście

W pierwszym wierszu wejścia znajduje się liczba $1 \le n \le 10^6$. W drugim wierszu znajduje się ciąg małych liter alfabetu łacińskiego o długości $n$.

### Wyjście

Wyjście powinno składać się tylu wierszy, ile unikatowych liter liczy sobie wczytane słowo, w kolejności alfabetycznej. Schemat każdego wiersza to `litera: ilość`, gdzie dla każdej litery znajduje się informacja, ile razy wystąpiła w słowie. Litery, których nie było, należy pominąć.

## Przykład

Wejście:

```
5
czesc
```

Wyjście:

```
c: 2
e: 1
s: 1
z: 1
```