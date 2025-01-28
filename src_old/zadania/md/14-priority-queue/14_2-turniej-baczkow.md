# Turniej bączków

Bączek to zabawka, która się kręci. Im dłużej bączek się kręci, tym lepsza jest zabawa. W pewnym mieście zorganizowano turniej bączków. Jest $n$ bączków, gdzie $i$-ty bączek kręci się przez $t_i$ sekund i dostarcza $z_i$ zabawy. Bączki można wypuszczać dokładnie co sekundę, jeden na raz. Jest to kluczowe, aby rozgrywka była ciekawa. Niestety, pewna organizacja zła zdecydowała się zrujnować turniej. W ich plan wchodzi pojawienie się na turnieju z telewizorem, na którym grany będzie konkurencyjny mecz piłki nożnej. Na szczęście, piłka nożna bywa dosyć nudna, toteż organizatorzy turnieju nie poddali się bez walki.

Chcą wypuścić w pewnym momencie bardzo dużo bączków, tak by wszyscy zaczęli je oglądać. Następnie, kilku ochroniarzy pójdzie i usunie organizację zła z widowni (wszyscy będą zajęci oglądaniem bączków, więc nikt tego nie zauważy). Docelowo, bączki w tym momencie mają zabawić widownię na $z_c$. Twoim celem jest wyznaczyć, czy widownia będzie dostatecznie zajęta oglądaniem bączków, to znaczy, czy poziom zabawy, zapewniany przez bączki, będzie wystarczająco wysoki, co za tym idzie, czy ochroniarzom uda się usunąć organizację zła z telewizorem.

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta docelowy poziom zabawy, ilość bączków i opis każdego bączka;
- Obliczy czy bączki osiągną poziom zabawy;
- Wypisze czy bączki osiągną poziom zabawy.

### Wejście

W pierwszym wierszu znajdą się trzy liczby: $1 \le n, z_c \le 10^6$ oznaczające kolejno ilość bączków i docelowy poziom zabawy. W kolejnych $n$ wierszach znajdą się dwie liczby $1 \le z_i,t_i \le 10^6$ opisujące $i$-ty bączek.

### Wyjście

W pierwszym wierszu wyjścia powinna znaleźć się informacja, czy uda się zabawić widownie na oczekiwany poziom. Powinno być to `TAK` lub `NIE`.

## Przykład

Wejście:

```
5 7
2 1
1 2
4 3
3 2
1 1
```

Wyjście:

```
TAK
```

### Wyjaśnienie do przykładu

Organizatorzy najpierw wypuszczą bączek zapewniający $7$ punktów zabawy, a potem ten, zapewniający $3$ punkty.