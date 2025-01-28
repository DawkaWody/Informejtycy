# Walec

Bajtoni dostał na urodziny zdalnie sterowany walec. Na podłodze w jego pokoju leży długa mata ze znakami o szerokości walca i długości `n` pól. Gdy walec wjedzie na znak, wbija go w matę, zostawiając lukę w postaci spacji `_`. Zabawa polega na tym, by nie zjechać z maty oraz zobaczyć jak będzie wyglądać po wykonaniu ruchów zabawki. Walec może ruszać się w dwóch kierunkach: w lewo `L` i w prawo `P`. Bajtoni może też przenieść walec, na `k` pole liczone od lewej. Zabawka zaczyna również z tej strony, znajduje się wtedy poza matą.

Bajtoni już pobawił się walcem, ale teraz musi kupić nową matę. Nie chce po każdej zabawie kupować nowej maty, więc poprosił Ciebie, abyś wyznaczył wygląd maty po zabawie Bajtoniego.

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta ilość pól i ruchów walca;
- Obliczy wygląd maty po ruchach walca;
- Wypisze na wyjście wygląd maty albo komunikat o zjechaniu z maty.

### Wejście

W pierwszej lini wejścia znajdują się 2 liczby: $1 \le n \le 10^6$ i $0 \le r \le 10^6$, które odpowiadają długości maty i ilości ruchów walca. W drugim wierszu znajdują się znaki na macie - ciąg małych liter alfabetu łacińskiego o długości $n$. W kolejnych $r$ wierszach podane zostaną ruchy walca, które przyjmą jedną z poniższych form:

- `L k` - ruch w lewo o $k$ pól, gdzie $-10^3 \le k \le 10^3$;
- `P k` - ruch w prawo o $k$ pól, gdzie $-10^3 \le k \le 10^3$;
- `G p` - przeniesienie walca na $p$ pole liczone od lewej strony maty, gdzie $1 \le p \le n$.

### Wyjście

W pierwszym wierszu wyjścia powinien znaleźć się ciąg $n$ małych znaków alfabetu łacińskiego lub `_` oznaczających stan maty po ruchach walca lub `ZJECHAL` jeżeli zabawka zjechała z maty. **Walec może jeździć po wciśniętych znakach, nie jest to liczone jako zjazd z maty.**

## Przykład

Wejście:

```
5 5
abcde
P 2
G 1
P 2
G 5
L 1
```

Wyjście:

```
_____
```

### Wyjaśnienie do przykładu

Walec przejechał 2 pola w prawo wciskając `a` i `b`, następnie został przeniesiony na pierwszą z wciśniętych literek i przejechał ponownie 2 pola w prawo wciskając dodatkowo `c`. Potem został przeniesiony na literkę `e` i przejechał w lewo o jedno pole na koniec usuwając `d`.


## Dodatkowe ograniczenia

Twoje rozwiązanie może uzyskać pewien procent poprawności, pomimo, że nie jest wzorowe. Musi jedynie spełniać podane limity.

| Dodatkowy limit | Na ile procent zadanie będzie zaliczone |
| :---: | :----: |
| $1 \le n \le 10^3$ <br> $1 \le r \le 10^3$ | 50 - 60 % |
