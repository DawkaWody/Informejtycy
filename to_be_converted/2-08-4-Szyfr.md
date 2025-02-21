# Szyfr
Baron chce komunikować się ze swoim Agentem za pomocą szyfru. Szyfr ten działa w następujący sposób. Baron podaje Agentowi listę słów. Pierwsze słowo ma wartość 0, a każde kolejne o 10 więcej niż poprzednie. Następnie Baron podaje Agentowi zaszyfrowane liczby. Pomóż Agentowi je odszyfrować.

## Wejście
Wczytaj liczbę $n$ ($1 \le  n \le  10^6$) oznaczającą liczbę słów przekazanych przez Barona. W $n$ wierszach wczytaj te słowa. Następnie wczytaj $q$ ($1 \le  q \le  10^6$) oznaczające liczbę liczb do odszyfrowania. Wczytaj te liczby w osobnych wierszach.

## Wyjście
Wypisz odszyfrowane słowa. Każde w oddzielnej linii.

## Przykład

Wejście:
```
3
kot
pies
chomik
5
0
10
20
10
20
```

Wyjście:
```
kot
pies
chomik
pies
chomik
```
