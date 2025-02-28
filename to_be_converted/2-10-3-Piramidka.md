# Piramidka

Fraktal to obrazek, który jest złożony z mniejszych obrazków, które są złożone z jeszcze mniejszych obrazków itd. Wyobraźmy sobie teraz fraktal konsolowy, taki narysowany ze znaków ascii. Niech tym fraktalem będzie piramidka. Piramidka to obrazek złożony z 6 znaków: 3 odstępów ` ` i 3 krzyżyków `#`. Niech ta piramidka będzie $P_1$:

```
 # 
###
```

Możemy nawet powiedzieć, że $P_0$ to `#`. Następnie, $P_2$ to piramidka zbudowana z piramidek, w której każdy odstęp zastępuje się sześcioma odstępami $2*3$, a każdy krzyżyk zastępuje się piramidką $P_1$. Oto $P_2$:

```
    #    
   ###   
 #  #  # 
#########
```

Twoim zadaniem jest wyznaczyć $P_n$.

### Twoim zadaniem jest napisanie rozwiązania, które:

- Wczyta stopień piramidki;
- Wypisze piramidkę wczytanego stopnia.

### Wejście

W pierwszym wierszu wejścia znajdzie się liczba $1 \le n \le 7$.

### Wyjście

Na wyjściu powinna znaleźć się piramidka $P_n$. **UWAGA:** piramidka musi być wypełniona dookoła spacjami. Innymi słowy, $P_n$ musi być narysowana w prostokącie $2^n*3^n$, gdzie puste przestrzenie to spacje.

## Przykład

Wejście:

```
2
```

Wyjście:

```
    #    
   ###   
 #  #  # 
#########
```

### Podpowiedź

Spróbuj rozwiązać to zadanie z matrycą reprezentującą wyjście programu.