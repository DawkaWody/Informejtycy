# Lista zakupów

Mariusz napisał listę zakupów i wybrał się do sklepu, aby kupić potrzebne rzeczy. Ma jednak w zwyczaju kupowanie rzeczy mu niepotrzebnych. Aby pozbyć się problemu, poprosił cię, abyś napisał program, który powie mu czy włożył do koszyka niepotrzebny mu produkt. Przypisał produktom liczby całkowite, aby łatwiej je rozróżnić.

Napisz program, który:
- Wczyta liczbę produktów na liście zakupów i produkty w niej wymienione jako liczby całkowite.
- Wczyta produkty w koszyku Mariusza (których liczba jest taka sama, co produktów na liście) .
- Wypisze, czy w koszyku są produkty, które nie znajdują się na liście.

### Wejście:

Pierwsza linia zawiera liczbę $n$ ($0 < n \le 10^6$) – liczbę produktów na liście zakupów i produkty na niej.
Druga linia zawiera produkty przedstawione jako liczby $m$ ($0 < m \le 10^6$) w koszyku.
### Wyjście:

W pierwszej i jedynej linii wyjścia program wypisuje "TAK" lub "NIE" w zależności od tego, czy w koszyku znajdują się jedynie produkty z listy (nie muszą być wszystkie ani w odpowiedniej ilości - wystarczy, że Mariusz nie kupił nic spoza listy).

#### Przykład:

**Wejście:**

```
5
1 2 3 4 5
2 3 1 5 4
```

**Wyście:**

```
TAK
```