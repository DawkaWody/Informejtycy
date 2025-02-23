# Plac zabaw
Dzieci ustawiają się w kolejce do zjeżdżalni. Czasami jednak ktoś zmienia zdanie i odchodzi.

## Zadanie
Napisz program, który obsłuży kolejkę dzieci na placu zabaw. Możliwe operacje:
    - DODAJ X – dodaje dziecko $X$ do kolejki,
    - ZJEZDZAJ – usuwa pierwsze dziecko i wypisuje jego imię.
Jeśli kolejka jest pusta, wypisz "BRAK".

## Wejście
Pierwsza linia zawiera liczbę $n$ ($1 \leq n \leq 10^6$) – liczbę operacji.
N kolejnych linii zawiera operacje w podanym formacie.

## Wyjście
Dla każdej operacji ZJEZDZAJ wypisz imię dziecka lub "BRAK".

## Przykład
Wejście:
```
5
DODAJ Ola
DODAJ Bartek
ZJEZDZAJ
ZJEZDZAJ
ZJEZDZAJ
```

Wyjście:
```
Ola
Bartek
BRAK
```