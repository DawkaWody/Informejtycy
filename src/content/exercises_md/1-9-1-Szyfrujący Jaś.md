# Szyfrujący Jaś

Jasio bardzo interesuje się szyframi. Uznał, że większość dobrze znanych szyfrów jest zbyt słaba, dlatego wymyślił własną metodę kodowania. W szyfrze Jasia pierwsza literka to literka wiadomości. Następnie jest `k` liter wypełniaczy, po których jest kolejna literka zakodowanej wiadomości. Jasiu ma jednak pewien problem - wiadomości są bardzo długie. Dlatego też prosi Ciebie o pomoc.

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta długość zaszyfrowanej wiadomości, długość wypełniaczy i zaszyfrowaną wiadomość;
- Rozszyfruje wiadomość, korzystając z Szyfru Jasia;
- Wypisze rozszyfrowaną wiadomość.

### Wejście

W pierwszym wierszu wejścia znajdują się 2 liczby: $1 \le n \le 10^6$ oraz $0 \le k \le n$ oznaczające długość wiadomości oraz długość wypełniaczy między literkami. W drugim wierszu znajdzie się ciąg dużych i małych znaków alfabetu łacińskiego, o długości $n$ - wiadomość zakodowaną przez Jasia.

### Wyjście

Na wyjściu powinna znaleźć się rozszyfrowana wiadomość Jasia.

## Przykład

Wejście:

```
19 1
SWzyypferlJnaisaica
```

Wyjście:

```
SzyfrJasia
```