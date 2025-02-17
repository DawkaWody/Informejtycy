# Nieznośny brat
Marek dostał na urodziny urządzenie, któremu może podawać różne funkcje do wykonania. Oto one:
1. p $x$ $y$ - przypisywanie elementowi $x$ wartości $y$ ($x$ oraz $y$ to napisy);
2. u $x$ - usuwanie elementu $x$;
3. s - informacja o rozmiarze zbioru;
4. c - usunięcie wszystkich elementów zbioru;
5. t $x$ - sprawdzenie czy element $x$ występuje;
6. w $x$ - wypisanie wartości przypisanej elementowi $x$.

Niestety młodszy brat Marka schował tę maszynę i Marek nie może z niej korzystać. Napisz program, który będzie działał w ten sam sposób co to urządzenie.

## Wejście
Wczytaj $n$ ($1 \le  n \le  10^6$) oznaczające ilość komend podanych przez Marka. Następnie w $n$ wierszach wczytaj te komendy tak jak wyżej.

## Wyjście
Wypisz odpowiedzi na zapytania, każde w oddzielnej linii:
1. s - wypisz rozmiar;
2. t $x$ - jeśli $x$ występuje w zbiorze wypisz $TAK$, jeśli nie, wypisz $NIE$;
3. w $x$ - wypisz wartość przypisaną elementowi $x$.

## Przykład

Wejście:
```
7
p zupa pomidorowa
s
p kotlet mielony
p salatka jarzynowa
t kotlet
w salatka
c
```

Wyjście:
```
1
TAK
jarzynowa
```
