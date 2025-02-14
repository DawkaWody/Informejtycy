---
date: 2025-02-04T16:14:00+01:00
draft: false
title: 'If, else if, else, oraz operatory logiczne'
nerd: false
id: 4
---

# If, else if, else, oraz operatory logiczne

## Wstęp

Już wiesz, czym są **zmienne**, a teraz nauczymy Cię, jak z nimi pracować. W C++ istnieją tzw. operatory logiczne, które są w dużej mierze oparte na matematyce. Ten dział jest omawiany w pierwszej klasie liceum.

## Porównywanie wartości

Zacznijmy od najprostszych operatorów porównania:
```cpp
a < b    //  a jest mniejsze od b
a <= b   //  a jest mniejsze bądź równe od b
a > b    //  a jest większe od b
a >= b   //  a jest większe bądź równe od b
a == b   //  a równa się b
a != b   //  a nie równa się b
```
Takie operatory zwracają wartość zmiennej typu `bool`:

- `true` (w przypadku spełnienia warunku),
- `false` (w przypadku niespełnienia warunku).

## Instrukcja warunkowa `if`

Instrukcja `if` działa w taki sposób, że wykonuje pewien blok kodu, jeśli podany warunek (np. `a < b`) jest spełniony. 
Wygląda to następująco:
```cpp
if (warunek) {  
	// blok kodu, który będzie wykonany w przypadku spełnienia warunku
}
```

Oprócz `if` istnieją jeszcze dwie dodatkowe konstrukcje: **`else if`** i **`else`**:

- **`else if`** zostanie wykonane, jeśli warunek w `if` nie został spełniony, a warunek w `else if` jest prawdziwy.
- **`else`** zostanie wykonane tylko wtedy, gdy żaden z wcześniejszych warunków (`if` i `else if`) nie został spełniony.

Przykładowa struktura:
```cpp
if (warunek) {  
	// blok kodu wykonywany, gdy warunek jest spełniony
}

else if (warunek2) {  
	// blok kodu wykonywany, gdy warunek2 jest spełniony, a warunek nie
}

else{  
	// blok kodu wykonywany, gdy żaden z wcześniejszych warunków nie został spełniony
}
```

Przykład kodu na C++ z użyciem warunków:
```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    if (a < b){
        cout << "a jest mniejsze niż b" << endl;
    }
    else if (a > b){
        cout << "a jest większe niż b" << endl;
    }
    else {
        cout << "a równa się b" << endl;
    }

    return 0;
}
```
## Operatory logiczne

Warto również wspomnieć o trzech podstawowych operatorach logicznych:

1. **Logiczne AND (`&&`)**
    Operator zwraca wartość `true`, tylko jeśli prawa i lewa strony mają wartość `true` (lub są różne od zera).  
    Przykład: `a > 0 && b > 0` (`a` jest wiksze od `0`  **I**  `b` jest większe od `0`)
    
2. **Logiczne OR (`||`)**  
    Operator zwraca wartość `true`, jeśli lewa bądź prawa strona ma wartość `true` (lub jest różny od zera).  
    Przykład: `a > 0 || b > 0` (`a` jest wiksze od `0`  **LUB**  `b` jest większe od `0`)
    
3. **Logiczne NOT (`!`)**  
    Operator zwraca wartość przeciwną do wartości logicznej wyrażenia.  
    Przykład: `!(a > b)` (prawda, jeśli `a` **NIE** jest większe niż `b`).


