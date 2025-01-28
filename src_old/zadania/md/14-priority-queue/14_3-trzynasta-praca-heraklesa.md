# Trzynasta praca Heraklesa

Heraklesowi nudziło się życie po ukończeniu dwunastej pracy, toteż postanowił, że wykona kolejną. Zdecydował się, że wyruszy na wyprawę. Idzie ciągle do przodu (tzn. od lewej do prawej) i żadnego pola nie może ominąć. Herakles w podróży napotyka na kamienie szlachetne: diament `D`, ametyst `A`, szmaragd `S` i rubin `R`. Warte są kolejno: `1` złoty talar, `5` złotych talarów, `10` złotych talarów i `13` złotych talarów.

Niestety, Herakles ma słabość do puszczania kaczek. Gdy na swojej drodze napotyka jeziorko `J`, o długości nie większej niż ilość kamieni, które ma ze sobą, nie może się powstrzymać i zaczyna rzucać kamienie. Kiedy rozpocznie puszczanie kaczek, nic już go nie powstrzyma, przed wyrzuceniem wszystkich. Jedynym sposobem, by Herakles nie zmarnował swoich kamieni szlachetnych, jest ich nie branie. **Jeśli Herakles napotyka się na kamień, może go nie wziąć.** Pomóż Heraklesowi i wyznacz, których kamieni nie może brać oraz ile maksymalnie złotych talarów uda mu się zarobić.

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta długość trasy i trasę Heraklesa;
- Wyznaczy optymalne przejście Heraklesa po trasie;
- Wypisze indeksy kamieni, których nie należy brać oraz ile maksymalnie Herakles zarobi.

### Wejście

W pierwszym wierszu wejścia znajduje się liczba $1 \le n \le 10^6$ oznaczająca długość trasy Heraklesa, czyli ilośc obiektów, które spotka. W drugim wierszu pojawi $n$ dużych liter alfabetu łacińskiego oddzielonych spacją, gdzie `D` oznacza diament, `A` ametyst, `S` szmaragd, `R` rubin i `J` jeziorko. Po literze `J` znajduje się też długość jeziorka $1 \le d \le 10^3$.

### Wyjście

W pierwszym wierszu wyjścia powinna znaleźć się maksymalna ilość złotych talarów, jakie może zarobić Herakles. W drugim wierszu powinny znaleźć się liczby $0 \le i < n$ oddzielone spacją, oznaczające pozycje kamieni **(względem wszystkich napotkanych obiektów)**, których Herakles nie powinien brać. Należy je wypisać rosnąco. Jeżeli takowych nie ma, należy wypisać pustą linię. Indeksowanie działa w ten sposób, że dla trasy `D D J 0 A` indeks pierwszego diamentu to $0$, a indeks ametystu to $3$. W tym wypadku żaden kamień szlachetny nie będzie miał indeksu $2$, bo tam jest jeziorko.

## Przykład

Wejście:

```
5
J 2 A D R J 3
```

Wyjście:

```
18
2
```

### Wyjaśnienie do przykładu

Herakles nie może wziąć wszystkich kamieni, gdyż inaczej musiałby je wyrzucić na ostatnim jeziorku. Może wziąć zaś dwa kamienie. Wobec tego, weźmie dwa o najwyższej cenie: ametyst i rubin.