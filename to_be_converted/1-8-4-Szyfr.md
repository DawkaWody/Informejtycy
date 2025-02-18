# Szyfr

Skriptek i Cachek są najlepszymi przyjaciółmi. Lubią wysyłać do siebie liściki podczas lekcji, jednak ze względu na treści w nich zawarte nie chcą, żeby nauczyciel lub inna osoba z klasy przeczytała wiadomość. Aby temu zapobiec, wprowadzili prosty szyfr. Piszą do siebie ciągi znaków złożonych tylko z cyfr i liter alfabetu łacińskiego. Odczytują tylko cyfry, litery nie mają znaczenia. Poprosili Cię o napisanie programu, który wczyta liczbę $n$, oraz, w następnej linii wejścia, $n -$elementowy ciąg znaków i wypisze kolejno liczby wystąpień cyfr: $0, 1, \dots, 9$ w jednej linii, oddzielone spacją. Możesz założyć, że $1 \leq n \leq 10^6$.

## Przykłady


#### Przykład 1


###### Wejście

```
15
09hdd6ssh71ios9
```

###### Wyjście

```
1 1 0 0 0 0 1 1 0 2
```
Wyjaśnienie do przykładu: cyfra 0 wystąpiła 1 raz, cyfra 1 również 1 raz, cyfra 2 wystąpiła 0 razy, ... , cyfra 9 wystąpiła 2 razy 

#### Przykład 2


###### Wejście

```
21
9s68sd01k23354dg86761
```

###### Wyjście

```
1 2 1 2 1 1 3 1 2 1 
```
Wyjaśnienie do przykładu: cyfra 0 wystąpiła 1 raz, cyfra 1 wystąpiła 2 razy, cyfra 2 wystąpiła  1 raz, ... , cyfra 9 wystąpiła 1 raz
