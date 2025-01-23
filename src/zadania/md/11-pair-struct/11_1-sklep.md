# Sklep
Jerzy rozpoczyna działalność swojego sklepu internetowego. Na jego stronie można zamówić jedynie 3 przedmioty. Jerzy dostaje zamówienia i chciałby szybko sprawdzić czy może je zrealizować, a także jaka jest kwota, którą może na tym zamówieniu zarobić. Pomóż Jerzemu i napisz program, który wczyta nazwy dostępnych w jego sklepie produktów, ich dostępną ilość i cenę za jedną sztukę, a następnie zamówienia klientów. Każde zamówienie może się składać z produktu jedynie jednego rodzaju w wybranej przez klienta ilości. Jeżeli liczba sztuk jakiegokolwiek produktu zamawianego przez klientów przekroczy ich liczby dostępnych w sklepie, wypisz "NIE". Jeżeli Jerzy będzie mógł zrealizować wszystkie zamówienia, wypisz kwotę, którą zarobi.

## Wejście
W 3 liniach wczytaj po 3 informacje - kolejno: nazwę produktu, ilość dostępnych sztuk produktu $s$ (1 $\le$  $s$ $\le$  $10^6$) oraz kwotę za jedną sztukę $j$ (1 $\le$  $j$ $\le$  $10^6$). Następnie wczytaj $n$ (1 $\le$  $n$ $\le$  $10^6$), oznaczające liczbę różny zamówień. W kolejnych $n$ liniach wczytaj po 2 informacje - kolejno: nazwę produktu oraz ilość zamówionych sztuk tego produktu $p$ (1 $\le$  $p$ $\le$  $10^6$).

## Wyjście
Wypisz kwotę $k$, którą zarobi Jerzy, lub "NIE", jeśli nie będzie mógł zrealizować wszystkich zamówienia.

## Przykład

Wejście:
```
bulka 3 2
sok 5 5
ser 1 15
5
bulka 1
bulka 2
sok 3
ser 1
sok 1
```

Wyjście:
```
41
```