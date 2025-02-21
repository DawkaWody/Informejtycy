# Liczby parzyste

Napisz program, który:

- Wczyta liczbę całkowitą $n$ ($0 < n \le 10^6$).
- Wypisuje wszystkie liczby parzyste od 2 do $n$ (włącznie, jeśli $n$ jest parzyste), ale każdą z nich pomnożoną przez jej numer w kolejności parzystych liczb.

#### Wejście:

W pierwszej linii wejścia znajduje się liczba $n$.

#### Wyjście:

W pierwszej linii wyjścia znajdują się po spacji liczby parzyste od 2 do $n$ pomnożone przez swój numer w kolejności liczb parzystych.

#### Przykład:

**Wejście:**

```
10
```

**Wyjście:**

```
2 8 18 32 50
```

Ponieważ 2 * 1 = 2, 4 * 2 = 8, 6 * 3 = 18, ...