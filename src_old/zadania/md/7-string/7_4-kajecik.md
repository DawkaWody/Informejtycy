# Kajecik

Bajdam jest perfekcjonalistą - wszystkie wydarzenia musi mieć zapisane w kajeciku, bo nie cierpi niespodziewanych wydarzeń. Niestety, pewnego razu okazało się, że ktoś sfotografował notesik Bajdama i odesłał notatki, w których opisał, co jego zdaniem należałoby poprawić. Oczywiście wydarzenie to nie było wpisane do harmonogramu, toteż Bajdam z wrażenia wylał na siebie herbatę. Pomimo tego, okazało się, że niektóre zmiany są całkiem przydatne i należałoby je wprowadzić. Bajdam chciał napisać algorytm, który wylistuje mu zmienione zapiski, ale przypomniał sobie o rozlanej herbacie. Nie może wpisać herbaty do harmonogramu, bo wtedy musiałby przerwać prace, którą ma zrobić teraz. Nie może również przejść do pracy, bo czeka na niego coś, co nie znajduje się w kajeciku. Bajdam jest w potrzasku, pomóż mu!

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta ilość zapisek w notesiku, ich treść, liczbę poprawionych zapisków nowy poprawiony harmonogram Bajdama;
- Wyznaczy kiedy należy posprzątać wylaną herbatę;
- Wypisze różnice w harmonogramie oraz kiedy należy posprzątać herbatę.

### Wejście

W pierwszym wierszu podana zostanie liczba $1 \le n \le 1440$ oznaczająca ilość podpunktów w kajeciku. W następnych $n$ wierszach zostanie podany harmonogram Bajdama w schemacie `godziny:minuty praca`, gdzie praca to ciąg małych i dużych liter alfabetu łacińskiego, znaków interpunkcyjnych i spacji. Ciąg ten będzie nie dłuższy niż $10^4$. W kolejnych $n \le k \le 1440$ wierszach zmiany naniesione na kajecik, w takim samym schemacie jak oryginalny harmonogram. Zmiany zakończą się, wraz z wystąpieniem lini `To tyle`. W zmienionych pozycjach mogą pojawić się prace w godzinach niezagospodarowanych w oryginalnym harmonogramie oraz takich, które zmieniają prace przeznaczoną na daną godzinę.

### Wyjście

W pierwszym wierszu wyjścia podana zostanie liczba zmian, w schemacie takim samym jak oryginalny harmonogram. Następnie, wszystkie zmienione podpunkty. Na koniec, w jakiej godzinie należy posprzątać herbatę. Jeżeli jest ich więcej niż jedna, wypisz tę najwcześniejszą (Bajdam chce mieć jak najszybciej z głowy sprzątanie).

## Przykład

Wejście:

```
5
08:00 Zjesc sniadanie.
08:30 Rozpoczac prace.
11:00 Drugie sniadanie.
15:11 Obiad, pierwsze i drugie danie!
19:30 Polozyc sie spac.
08:00 Zjesc sniadanie.
08:30 Rozpoczac prace nad projektem.
09:45 Krotka przerwa.
11:00 Drugie sniadanie.
15:11 Obiad, pierwsze i drugie danie!
16:00 Kontynuacja pracy.
21:00 Polozyc sie spac.
To tyle
```

Wyjście:

```
4
08:30 Rozpoczac prace nad projektem.
09:45 Krotka przerwa.
16:00 Kontynuacja pracy.
21:00 Polozyc sie spac.
00:00
```

### Wyjaśnienie do przykładu

W harmonogramie pojawiły się 4 zmiany: 3 nowe wpisy i jedna zmiana godziny. Na koniec, Bajdam posprząta herbatę o `00:00`, gdyż jest to najwcześniejsza, niezajęta godzina.