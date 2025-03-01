---
draft: false
title: 'Systemy liczbowe'
nerd: false
id: 12
---

# Systemy liczbowe

## System dziesiętny
System dziesiętny to najpopularniejszy system liczbowy, którego używamy na co dzień. Składa się z dziesięciu cyfr: 0, 1, 2, 3, 4, 5, 6, 7, 8 i 9. Ważne jest też położenie cyfry w liczbie – określa ono jej wartość (np. w liczbie 2136: 2 oznacza tysiące, 1 oznacza setki, 3 – dziesiątki, a 6 – jedności). Uważa się, że na co dzień używamy właśnie systemu dziesiętnego, ponieważ jest najprostszy do nauki. Wynika to z faktu, że mamy 10 palców, za pomocą których jako dzieci uczymy się liczenia.

## System dwójkowy (binarny)
System binarny składa się z dwóch cyfr: 1 i 0. Jest bardzo przydatny przy pracy z komputerami, ponieważ bardzo łatwo go zinterpretować. Zero oznacza brak prądu, a jedynka – jego obecność. Dla przykładu liczba 3 w systemie dziesiętnym odpowiada liczbie 11 w systemie dwójkowym.

## System szesnastkowy
System szesnastkowy również jest często wykorzystywany przez informatyków, ponieważ łatwo można go przekształcić na system binarny. Używa się go z tego powodu do skracania zapisów w systemie dwójkowym. System szesnastkowy składa się z szesnastu symboli: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 oraz A, B, C, D, E, F. Na przykład liczba 255 w systemie szesnastkowym to FF.

## Jak zamieniać liczby między systemami?
Zamiana liczb między systemami wcale nie jest trudna. Oto prosty przykład zamiany liczby z systemu dziesiętnego na system binarny:

**Zamiana liczby dziesiętnej 10 na system binarny:**
1. Dzielimy 10 przez 2: wynik to 5, reszta 0.
2. Dzielimy 5 przez 2: wynik to 2, reszta 1.
3. Dzielimy 2 przez 2: wynik to 1, reszta 0.
4. Dzielimy 1 przez 2: wynik to 0, reszta 1.

Czytamy reszty od dołu do góry: 1010.

**Zamiana liczby binarnej na system dziesiętny:**

Dla zamiany liczby binarnej na system dziesiętny należy zastosować algorytm wykorzystujący kolejne potęgi liczby 2.

**Przykład:** Liczba binarna 1010:

1. Pierwsza cyfra (od prawej): 0 × 2⁰ = 0
2. Druga cyfra: 1 × 2¹ = 2
3. Trzecia cyfra: 0 × 2² = 0
4. Czwarta cyfra: 1 × 2³ = 8

Dodajemy: 0 + 2 + 0 + 8 = 10 (dziesiętnie).

Podobny algorytm można zastosować dla innych systemów liczbowych, zastępując podstawę 2 odpowiednią liczbą (np. 16 dla systemu szesnastkowego).