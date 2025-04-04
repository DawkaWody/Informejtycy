# Podróż do szkoły

Wojtek idzie do szkoły przez $d$ kilometrów. Chciałby iść jak najwolniej, żeby się za bardzo nie zmęczyć, ale wystarczająco szybko, aby dotrzeć do szkoły w $t$ minut. Oblicz, z jaką prędkością powinien się poruszać, by być na czas. Prędkość należy podać w kilometrach na godzinę. Oto wzór na prędkość:

$$
v = \frac{s}{t}
$$

Gdzie:
- $v$ to prędkość;
- $s$ to odległość;
- $t$ to czas;

## Wejście

W pierwszym wierszu wejścia znajdzą się dwie liczby $0 \le d, t \le 10^6$ oddzielone odstępami, oznaczające odległość w KM jaką Wojtek ma do przejścia do szkoły i czas w minutach jaki na to ma.

## Wyjście

W pierwszym wierszu wyjścia powinna znaleźć się liczba, oznaczająca prędkość w kilometrach na godzine, z jaką powinien poruszać się Wojtek. Liczba ta powinna być wypisana jako typ `float`, nie `double`.

## Przykład

Wejście:

```
2 10
```

Wyjście:

```
12
```

## Podpowiedź

C++ przy dzieleniu liczb całkowitych, oblicza wynik jako liczbę całkowitą, czyli $\frac{1}{2}$ to $0$. Żeby tego uniknąć, należy przekonwertować jedną z liczb na typ `float`.
