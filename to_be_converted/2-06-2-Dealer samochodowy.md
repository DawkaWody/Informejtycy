# Dealer samochodowy

Pewna instytucja organizuje maraton targów samochodowych. Odbędzie się dokładnie $n$ targów. Pewna firma planuje na każdy z nich wystawić nowy samochód. Samochód określany jest przez 2 parametry, poza nazwą: ilość koni mechanicznych i cena. Firmie zależy aby zaprezentować się jak najlepiej, toteż muszą wybrać najlepszy samochód. Najlepszy samochód to taki, który ma jak najwięcej koni mechanicznych, przy możliwie jak najniższej cenie. Na przykład, weźmy na warsztat 2 pojazdy: `Peugeot 208`, 120 KM, cena: 105 000 zł, oraz `Ford Mustang`, 300 KM, cena: 300 000 zł. Na pierwszy rzut oka mogłoby się zdawać, że `Ford Mustang` jest lepszym samochodem do wystawienia. Wykonajmy obliczenia, aby się przekonać.

$$
\mathrm{stosunek}_{peugeot} = \frac{120}{110000} \approx 0.0011
$$

$$
\mathrm{stosunek}_{ford} = \frac{300}{300000} = 0.0010
$$

Z racji na to, że podzieliliśmy konie mechaniczne na cenę, interesuje nas największy stosunek. W tym wypadku `peugeot 208` okazał się być lepszy. Twoim celem, jest odpowiedzieć firmie po każdej produkcji samochodu, który najlepiej będzie wystawić na zbliżający się targ.

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta ilość targów i samochody produkowane przez firmę;
- Obliczy, które samochody najlepiej wystawiać;
- Wypisze samochody, które najlepiej wystawiać.

### Wejście

W pierwszym wierszu wejścia znajdzie się liczba $1 \le n \le 10^6$, oznaczająca ilość targów. W kolejnych $n$ wierszach podane zostaną modele samochodów, w następującym formacie: `nazwa KM cena`. Nazwa to małe i duże litery alfabetu łacińskiego, cyfry i podłogi `_`. Będzie ona nieznacznej długości, do $100$ znaków. `KM` i `cena` to liczby zawierające się w zakresie $\langle 1, 10^{18} \rangle$. Co jakiś czas, może pojawić się rówież wiersz `SPRZEDAWAC`, który oznacza, że firma oddała swój najlepszy samochód do sprzedaży masowej, a co za tym idzie, nie będzie już mogła wystawić go na targu. Oznacza to również, że firma nie zdąży wyprodukować nowego samochodu do kolejnego targu, czyli wystawi jakiś z już utworzonych. Możesz założyć, że zawsze będzie wtedy jakiś samochód do wystawienia.

### Wyjście

Na wyjściu powinno znaleźć się $n$ wierszy, dla każdego samochodu odpowiadających na pytanie, który samochód firma powinna wystawić na targu - w każdym wierszu powinna znaleźć się jego nazwa. Jeśli proporcje parametrów samochodów były równe, należy wypisać ten nowszy (wyprodukowany później).

## Przykład

Wejście:

```
4
peugeot_208 120 105000
Ford_Mustang 300 300000
Volkswagen_Golf 150 90000
SPRZEDAWAC
```

Wyjście:

```
peugeot_208
peugeot_208
Volkswagen_Golf
peugeot_208
```