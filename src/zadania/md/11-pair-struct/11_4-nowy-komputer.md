# Nowy komputer
Piotruś chce kupić sobie nowy komputer. Przeprowadził już selekcję wszystkich ofert i zostały mu tylko 2, z których musi wybrać. Chce wybrać ten komputer, który okaże się lepszy od drugiego w większej liczbie kategorii. Za każdą "wygraną" w kategorii Piotruś przyznaje komputerowi +1 punkt. Piotruś bierze pod uwagę 5 kategorii: rozmiar ekranu, pojemność pamięci operacyjnej, pojemność dysku, częstotliwość odświeżania obrazu oraz czas reakcji matrycy. Wszystkie te dane są podane jako liczby. Komputer wygrywa w danej kategorii, jeśli jego wartość w tej kategorii jest wyższa niż wartość drugiego komputera. Jeśli wartości będą takie same w obu komputerach, Piotruś nie dodaje punktu żadnemu z komputerów.

## Wejście
Wczytaj 5 wierszy, w każdym po 2 liczby. Każdy wiersz odpowiada jednej z kategorii w kolejności podanej powyżej. Liczby są z zakresu od 1 do $10^9$.

## Wyjście
Wypisz $1$ lub $2$ w zależności, który komputer okazał się lepszy. Możesz przyjąć, że zawsze, któryś z komputerów okaże się lepszy.

## Przykład

Wejście:
```
16 14
16 32
512 512
144 144
7 5
```

Wyjście:
```
1
```