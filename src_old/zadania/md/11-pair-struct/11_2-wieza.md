# Wieża
Franek chce ułożyć wieżę z klocków. Jego klocki mają taką samą głębokość, ale inną szerokość i wysokość. Franek chce, aby klocki na jego wieży były ułożone na sobie w odpowiedni sposób. Ma zamiar zbudować tę wieżę tak, aby na samym dole znajdował się klocek o największej szerokości, a na samej górze - klocek o najmniejszej szerokości. Jeśli klocki mają taką samą szerokość, niżej jest klocek z większą wysokością. Napisz program, który ułoży klocki Franka w odpowiedniej kolejności.

## Wejście
Wczytaj liczbę $n$, (1 $\le$  $n$ $\le$  $10^6$), oznaczającą liczbę klocków. Następnie w $n$ wierszach wczytaj kolejno: szerokość $s$ (1 $\le$  $s$ $\le$  $10^6$) oraz wysokość $w$ (1 $\le$  $w$ $\le$  $10^6$) $i$-tego klocka.

## Wyjście
Wypisz szerokość i wysokość klocków w odpowiedniej kolejności. Zacznij wypisywanie od klocka, który powinien być na samym dole. Zakończ na tym, który jest na samej górze. Dane każdego klocka wypisz w oddzielnej linii.

## Przykład

Wejście:
```
5
1 4
2 6
4 2
1 3
1 1
```

Wyjście:
```
4 2
2 6
1 4
1 3
1 1
```