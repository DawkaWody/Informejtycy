# Kolejka łapówkowa

Kolejka łapówkowa to struktura, w której pozycja zależy nie od tego, jak wcześnie się ustawiło, ale od tego, jak dużo *da się w łapę* zarządcy. Ty jesteś kierownikiem kolejki i twoim celem jest ją obsłużyć. 

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta ilość operacji do wykonania;
- Wykona operacje;
- Dla każdej operacji wypisze kto stał na przodzie kolejki.

### Wejście

W pierwszym wierszu wejścia znajdzie się liczba $1 \le n \le 10^6$ oznaczająca ilość operacji. W następnych $n$ wierszach podane zostaną operacje w jednym z dwóch formatów: `D k` dodanie osoby do kolejki, która dała $0 \le k \le 10^{12}$ łapówki i `W` wypuszczenie pierwszej osoby z kolejki.

### Wyjście

Na wyjściu powinna znaleźć się informacja, ile łapówki dała osoba, która stoi na przodzie kolejki po każdej operacji. Łącznie powinno być $n$ wierszy. Jeżeli kolejka jest pusta, należy wypisać kropkę.

## Przykład

Wejście:

```
5
D 5
D 1
W
W
D 0
```

Wyjście:

```
5
5
1
.
0
```