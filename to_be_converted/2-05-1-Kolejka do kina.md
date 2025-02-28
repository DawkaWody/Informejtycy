# Kolejka do kina
W mieście otwarto nowy, popularny multipleks. Przed kasami ustawia się długa kolejka chętnych do zakupu biletów. Każdy klient podchodzi do kasy w kolejności, w jakiej przyszedł. Jednak czasami zdarza się, że niektórzy rezygnują i opuszczają kolejkę.

## Zadanie
Napisz program, który obsłuży kolejkę do kasy kinowej. Możliwe operacje:

    - DODAJ X – dodaje osobę o imieniu $X$ do kolejki,
    - OBSLUZ – obsługuje (usuwa) pierwszą osobę w kolejce i wypisuje jej imię.

Jeśli kolejka jest pusta, wypisz "BRAK" zamiast imienia.

## Wejście
W pierwszym wierszu wejścia znajduje się jedna liczba całkowita $n$ ($1 \leq n \leq 10^6$), oznaczająca liczbę operacji.
W kolejnych $n$ wierszach znajdują się operacje w formacie DODAJ X lub OBSLUZ.

## Wyjście
W pierwszym wierszu wejścia znajduje się jedna liczba całkowita $n$ ($1 \leq n \leq 10^6$), oznaczająca liczbę operacji.
W kolejnych $n$ wierszach znajdują się operacje w formacie DODAJ X lub OBSLUZ.

## Przykład
Wejście:
```
5
DODAJ Anna
DODAJ Jan
OBSLUZ
OBSLUZ
OBSLUZ
```

Wyjście:
```
Anna
Jan
BRAK
```