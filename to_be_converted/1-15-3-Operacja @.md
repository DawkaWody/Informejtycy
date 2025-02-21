# Operacja @

Cachek się nudzi. Wymyślił własną operację matematyczną, oznacza ją znakiem @. Jest ona operacją wykonywaną na liczbach całkowitych: $a @ b=\frac{a \cdot (a+1)}{2}- b$. Dla a @ b @ c Najpierw obliczamy a @ b, a potem (a @ b) @ c.

### Wejście

Wejście składa się z liczby $n$, oraz, w nowej linii, $n$ liczb naturalnych, nie większych niż $7$, oddzielonych znakami @ otoczonych spacjami z obu stron. Możesz założyć, że $2 \leq n < 7$. 

### Wyjście 

Na standardowe wyjście należy wypisać jedną liczbę naturalną - wynik tej operacji.

## Przykłady

#### Przykład 1

##### Wejście

```
2
3 @ 4
```

##### Wyjście

```
2
```
Wyjaśnienie do przykładu: $3@4=\frac{3 \cdot (3+1)}{2}-4=6-4=2$.

#### Przykład 2

##### Wejście

```
3
1 @ 2 @ 3
```

##### Wyjście

```
-3
```
Wyjaśnienie do przykładu: $1@2@3=(\frac{1 \cdot (1+1)}{2}-2) @ 3 = -1@3 = \frac{-1 \cdot (-1+1)}{2}-3=-3$.

