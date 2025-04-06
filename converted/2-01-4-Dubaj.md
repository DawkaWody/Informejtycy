# Dubaj

Jaś leci samolotem do Dubaju. W pewnym momencie włącza aplikację na telefonie, która notuje zmianę wysokości lotu samolotu co każdą minutę. Po pewnym czasie wyłącza ją i zapisuje dane. Następnie postanawia obliczyć, w którym momencie samolot leciał najniżej. Jednak nie umie tego zrobić i prosi cię o pomoc.

## Wejście

W pierwszym wierszu wejścia znajduje się dokładnie jedna liczba całkowita n ($0 \le n \le 50$) oznaczająca liczbę danych zanotowanych przez aplikację. W drugim wierszu znajduje się n liczb oznaczających zanotowane przez aplikacje zmiany wysokości (-$10^4 \le a \le 10^4$).

## Wyjście

Na wyjściu powinna znajdować się jedna liczba - łączna zmiana wysokości, od momentu włączenia aplikacji, przy której samolot leciał najniżej. 

## Przykład

### Wejście

```
10
30 -20 -50 -40 60 -30 96 419 223 102
```     

### Wyjście

```
-80
```

#### Wyjaśnienie do przykładu:
Przy pierwszym pomiarze samolot wzniósł się na wysokość 30 w stosunku do swojego początkowego położenia, potem obniżył tą wysokość na 10, następnie na -40, potem na -80 i uzyskał najniższą wysokość. 

