# Suma parzysta

Hasha bardzo nie lubi liczb nieparzystych. Chce obliczyć sumę cyfr dowolnych liczb całkowitych. Bardzo nie chce, żeby suma wyszła nieparzysta, dlatego będzie sumowała tylko cyfry parzyste. Napisz program, który zrobi to za nią.
### Wejście

W pierwszej linii wejścia znajduje się jedna liczba naturalna $n$ nie większa niż 10^6 odpowiadająca liczbie zapytań. W następnych $n$ liniach wejścia znajduje się po jednej liczbie całkowitej $a_i$, takiej, że $0 \leq a_i \leq 10^9$.
### Wyjście

W $n$ liniach wyjścia powinno się znajdować $n$ liczb, po jednej w każdej linii, będących sumami parzystych cyfr liczb z wejścia ($i$-ta linia wyjścia odpowiada $i+1$-wszej linii wejścia). Jeśli nie ma cyfr parzystych w danej liczbie, należy wypisać 0.
## Przykłady

#### Przykład 1

###### Wejście

```
2
96024
703
```
###### Wyjście

```
12
0
```
Wyjaśnienie do przykładu: $6+0+2+4=12$, $0=0$.
#### Przykład 2

###### Wejście

```
3
5137
904
268
```
###### Wyjście

```
0
4
16
```
Wyjaśnienie do przykładu: Pierwsza liczba nie zawiera cyfr parzystych, $0+4=4$, $2+6+8=16$.
