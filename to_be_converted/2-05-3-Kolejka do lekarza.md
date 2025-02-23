# Kolejka do lekarza
Pacjenci czekają na wizytę u lekarza. Czasami jednak przychodzi ktoś w pilnym stanie i zostaje obsłużony jako pierwszy.

## Zadanie
Napisz program, który obsłuży pacjentów w kolejce do lekarza. Możliwe operacje:
    - ZAPISZ_NORMALNIE X – dodaje pacjenta $X$ na koniec kolejki,
    - ZAPISZ_PILNIE X – dodaje pacjenta $X$ na początek kolejki,
    - PRZYJMIJ – usuwa i wypisuje pierwszego pacjenta.
Jeśli nie ma pacjentów, wypisz "BRAK".

## Wejście
Pierwsza linia zawiera jedną liczbę całkowitą $n$ ($1 \leq n \leq 10^6$) – liczbę operacji.
N kolejnych linii zawiera operacje w podanym formacie.

## Wyjście
Dla każdej operacji PRZYJMIJ wypisz imię pacjenta lub "BRAK".

## Przykład
Wejście:
```
6
ZAPISZ_NORMALNIE Kasia
ZAPISZ_PILNIE Marek
ZAPISZ_NORMALNIE Tomek
PRZYJMIJ
PRZYJMIJ
PRZYJMIJ
```

Wyjście:
```
Marek
Kasia
Tomek
```