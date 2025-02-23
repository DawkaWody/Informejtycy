# Ruch wahadłowy
Na remontowanej drodze ruchem kieruje sygnalizator. Samochody nadjeżdżają z dwóch stron i czekają w dwóch oddzielnych kolejkach. W danym momencie może przejechać samochód z jednej lub drugiej kolejki.

## Zadanie
Napisz program, który obsłuży ruch wahadłowy. Możliwe operacje:
    - DODAJ_LEWY X – dodaje samochód $X$ do kolejki z lewej strony,
    - DODAJ_PRAWY X – dodaje samochód $X$ do kolejki z prawej strony,
    - PRZEJAZD LEWY – usuwa pierwszy samochód z lewej kolejki i wypisuje jego numer,
    - PRZEJAZD PRAWY – usuwa pierwszy samochód z prawej kolejki i wypisuje jego numer.
Jeśli w wybranej kolejce nie ma samochodów, wypisz "PUSTO".

## Wejście
W pierwszym wierszu wejścia znajduje się jedna liczba całkowita $n$ ($1 \leq n \leq 10^6$), oznaczająca liczbę operacji.
W kolejnych $n$ wierszach znajdują się operacje w podanym formacie.

## Wyjście
Dla każdej operacji PRZEJAZD LEWY i PRZEJAZD PRAWY wypisz numer samochodu lub "PUSTO", jeśli kolejka jest pusta.

## Przykład
Wejście:
```
6
DODAJ_LEWY A123
DODAJ_PRAWY B456
PRZEJAZD LEWY
PRZEJAZD PRAWY
PRZEJAZD LEWY
```

Wyjście:
```
A123
B456
PUSTO
```