# Drukarka
Drukarka kolejkuje dokumenty do wydruku w kolejności zgłoszenia. Możliwe jest jednak anulowanie ostatnio dodanego dokumentu.

## Zadanie
Napisz program obsługujący drukarkę. Możliwe operacje:
    - DRUKUJ X – dodaje dokument $X$ do kolejki,
    - USUN – usuwa ostatnio dodany dokument,
    - WYDRUKUJ – drukuje (usuwa) pierwszy dokument z kolejki i wypisuje jego nazwę.
Jeśli kolejka jest pusta, wypisz "BRAK".

## Wejście
W pierwszym wierszu znajduje się liczba $n$ ($1 \leq n \leq 10^6$) – liczba operacji.
N kolejnych wierszy zawiera operacje w podanym formacie.

## Wyjście
Dla każdej operacji WYDRUKUJ wypisz nazwę dokumentu lub "BRAK".

## Przykład
Wejście:
```
6
DRUKUJ raport1
DRUKUJ raport2
USUN
WYDRUKUJ
WYDRUKUJ
WYDRUKUJ
```

Wyjście:
```
raport1
BRAK
BRAK
```