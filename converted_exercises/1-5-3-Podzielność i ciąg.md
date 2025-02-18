# Podzielność i ciąg
Pingisław postanowił połączyć zagadnienia z dwóch poprzednich zadań. Dla podanego $n$-elementowego ciągu chce wiedzieć, ile elementów z tego ciągu dzieli się przez $x$ oraz czy co najmniej połowa elementów tego ciągu jest liczbami pierwszymi.
### Wejście

W pierwszej linii wejścia znajdują się dwie liczby naturalne nie przekraczające $10^4$ $n$ oraz $x$. W drugiej i ostatniej linii wejścia znajduje się $n$ liczb oddzielonych spacjami, żadna z nich nie przekracza $10^4$. 
### Wyjście

W pierwszej i zarazem ostatniej linii wyjścia powinna się znajdować liczba oznaczająca liczbę elementów z ciągu podzielnych przez $x$ oraz napis "TAK" lub "NIE" informujący o tym, czy co najmniej połowa elementów ciągu z wejścia jest liczbami pierwszymi.
## Przykłady

#### Przykład 1

###### Wejście

```
4 2
1 3 7 12
```
###### Wyjście

```
1 TAK
```
Wyjaśnienie do przykładu: z podanego ciągu tylko 12 dzieli się przez 2, dokładnie połowa elementów tego ciągu to liczby pierwsze (3, 7)
#### Przykład 2

###### Wejście

```
5 6
0 123 56 65 14
```
###### Wyjście

```
2 NIE
```
Wyjaśnienie do przykładu: 0 i 123 dzielą się przez 6, w ciągu nie występuje żadna liczba pierwsza