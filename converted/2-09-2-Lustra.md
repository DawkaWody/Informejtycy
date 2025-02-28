
# Lustra

Warek zwrócił uwagę na to że niektóre znaki na klawiaturze mają swoje odlustrowane wersje (np.`<` i `>`) i chce ułożyć z nich bardziej skomplikowane wyrażenia nawiasowe, ale nie jest pewien czy dobrze je napisał. Twoim zadaniem jest napisać kod, który będzie sprawdzać czy wyrażenia nawiasowe na wejściu są poprawnie ułożone.

*Poprawnie ulożone wyrażenie: `<()>`
Niepoprawnie ułożone wyrażenia: `<(>)`, `<)(>`*

## Wejście
Na wejście program otrzymuje ciąg ze znaków `(`,`)`,`<`,`>`,`[`,`]`,`{`i`}`

## Wyjście
Na wyjście program musi wypisać **"TAK"** jeśli wyrażenie jest poprawne, lub **"NIE"** w przeciwnym wypadku.

## Przykłady
##### Wejście 1
```
({}(
```
##### Wyjście 1
```
NIE
```
##### Wejście 2
```
<(<>{})>
```
##### Wyjście 2
```
TAK
```