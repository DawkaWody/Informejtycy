# Rakieta

Kosmonauci mają problem - lecą właśnie rakietą, lecz ta jest za ciężka, by opuścić atmosferę. Mają więc w rzędzie ustawionych $n$ przedmiotów, z których część wyrzucą. Przedmioty opisywane są ich wagą $w_i$. Astronauci to jednak naukowcy, więc w imię nauki postanowią chwilę poczekać i zobaczyć jak może wyglądać ich rząd przedmiotów, w zależności od tego jakie przedmioty wyrzucą. Pomóż im!

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta liczbę przedmiotów i przedmioty;
- Wypisze jak może wyglądać rządek przedmiotów po wyrzuceniu niektórych z nich (każdą możliwość).

### Wejście

W pierwszym wierszu wejścia znajdzie się liczba $1 \le n \le 18$, oznaczająca liczbę przedmiotów. W drugim wierszu znajdzie się $n$ liczb opisujących wagi przedmiotów, gdzie $1 \le w_i \le 10^{18}$, oddzielonych spacjami.

### Wyjście

W $2^n - 1$ wierszach (należy pominąć wyrzucenie wszystkich przedmiotów) powinny znaleźc się wszystkie kombinacje jakie pozostaną astronautom po usunięciu zbędnego balastu. Należy wypisać je w kolejności leksykograficznej.

## Przykład

Wejście:

```
3
2 7 3
```

Wyjście:2

```
2
2 3
2 7
2 7 3
3
7
7 3
```