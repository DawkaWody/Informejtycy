# Ogródek

Jadzia sadzi kwiatki. Niestety, kwiatki w odróżnieniu od ziemniaków czy cebuli są bardzo wymagające - mają swoje preferencje. Każdy kwiatek chciałby przesiadywać w grządce z tylko niektórymi innymi kwiatkami. Na szczęście, kwiatki buntują się dopiero wtedy, gdy żadnemu kwiatkowi z donicy nie podoba się obecnośc innego kwiatka, toteż roślinka może być lubiana tylko przez jedną z pozostałych w grządce. Jadzia ma do zasadzenia $n$ kwiatków, pomóż jej i oblicz, ile donic powinna przygotować.

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta ilość kwiatków i ich preferencje;
- Obliczy ilość donic potrzebną do posadzenia tychże kwiatków;
- Wypisze uzyskaną ilość donic.

### Wejście

W pierwszym wierszu pojawi się liczba $1 \le n \le 10^4$ oznaczająca liczbę kwiatków. W kolejnych $n$ wierszach zostaną podane preferencje kwiatków, tzn. $i$-ty wiersz odpowiada preferencji $i$-tego kwiatka. Pierwszą liczbą $1 \le p \le n$ jest ilość preferencji, następnie podawane są w formacie liczb $1 \le k_{i_m} \le n$ oddzielonych spacjami. W tym wypadku $k_{i_m}$ oznacza, że $m$-tą preferencją $i$-tego kwiatka jest $k$, czyli $i$-ty kwiatek chciałby przesiadywać z $k_{i_m}$-tym kwiatkiem ($1 \le m \le p$).

### Wyjście

W pierwszym wierszu wyjścia podana jest liczba donic, jaką Jadzia musi przygotować, aby zasadzić wybredne kwiatki.

## Przykład

Wejście:

```
5
2 2 3
1 3
1 2
1 5
1 4
```

Wyjście:

```
2
```

### Wyjaśnienie do przykładu

W pierwszej donicy jest $1$, $2$ i $3$ kwiatek. W drugiej jest $4$ i $5$.