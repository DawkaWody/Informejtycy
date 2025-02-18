# NWD / NWW

Cachek interesuje się dzielnikami. Stwierdził, że będzie się rozwijał wszechstronnie. Zacznie od czegoś powiązanego z dzielnikami - NWW. Cachek prosi Cię o pomoc - napisz dla niego program, który dla podanych zapytań będzie liczył NWD/NWW danych liczb. Możesz skorzystać ze wzoru: $$ NWW(a, b)=\frac{a \cdot b}{NWD(a, b)}$$
### Wejście

W pierwszej linii wejścia znajduje się liczba $q$, a następnie $q$ linii, każda składa się z: trzech znaków - NWW / NWD (mówi co program ma obliczyć), i liczb $a$ i $b$, oznaczających liczby, z których masz obliczyć NWW / NWD. Możesz założyć, że $1 \leq q, a, b \leq 10^6$

### Wyjście

 Wyjście składa się z $q$ linii - każda linia odpowiada jednemu zapytaniu o NWD/NWW, ma się w niej znajdować wynik. Wynik nie będzie większy niż $10^{12}$.

## Przykłady

#### Przykład 1

###### Wejście

```
3
NWW 13 3
NWD 12 18
NWD 17 29
```
###### Wyjście

```
39
6
1
```
#### Przykład 2

###### Wejście

```
4
NWD 77 66
NWW 4 7
NWW 2 4
NWW 9 1
```
###### Wyjście

```
11
28
4
9
```
