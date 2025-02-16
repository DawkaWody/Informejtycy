---
date: 2025-02-04T16:14:00+01:00
draft: false
title: 'Stack'
nerd: true
id: 9
---


# Stack 
## Wprowadzenie
`Stack` to typ kontenera w C++ działający w trybie LIFO (Last In, First Out). Oznacza to, że dodając i odczytując wartości ze stosu (`stack`), operacje te wykonywane są na elemencie znajdującym się na samej górze. Nie ma możliwości bezpośredniego dostępu do elementów znajdujących się niżej w strukturze.

Aby lepiej zrozumieć, jak działa stos, można przyrównać go do talii kart leżącej na stole. W tym przypadku można manipulować wyłącznie kartą znajdującą się na samej górze. Jeśli chcesz dostać się do kart znajdujących się niżej, musisz najpierw zdjąć karty znajdujące się wyżej.

## Przykładowy kod z użyciem `stack`

```cpp
#include <iostream> 
#include <stack>
using namespace std;
int main() {
    stack<int> stack;
    // Dodajemy wartości na stos za pomocą funkcji push
    stack.push(13);
    stack.push(42);
    stack.push(68);
    stack.push(2137);
    // Teraz stos wygląda w taki sposób: {13, 42, 68, 2137}
    return 0;
}
```
---

## Funkcje

W kontenerze `stack` dostępnych jest kilka przydatnych funkcji:

- `empty()` - zwraca informację, czy stos jest pusty (**O(1)**).
- `size()` - zwraca liczbę elementów na stosie (**O(1)**).
- `top()` - zwraca wartość elementu znajdującego się na górze stosu (**O(1)**).
- `push(v)` - dodaje wartość `v` na górę stosu (**O(1)**).
- `pop()` - usuwa element z góry stosu (**O(1)**).

**P.S.** Jeżeli nie wiesz, czym jest złożoność czasowa, na tym etapie wystarczy, że zapamiętasz, iż złożoność **O(1)** jest najlepszą możliwą złożonością operacji.

## Przykładowy kod z użyciem funkcji stosu

```cpp
#include <iostream>
#include <stack>
using namespace std;
int main() {
    stack<int> stack;
    stack.push(13);// przy pomocy funkcji push dodajemy wartości na górę
    stack.push(42);
    stack.push(68);
    stack.push(2137);
    // teraz nasz stack wygląda w taki sposób {13,42,68,2137}
    cout << stack.size() << endl;  // wypisze 4
    cout << stack.empty() << endl;  // wypisze 0 czyli false
    stack.pop(); //teraz stack wygląda tak {13,42,68}
    cout<<stack.top()<<endl;  // wypisze 68
    cout << stack.size()<<endl; // wypisze 3
    while (!stack.empty()) {
        stack.pop();
    }
    cout<<stack.empty()<<endl; //wypisze 1 czyli true
    return 0;  
}
```

Teraz wiesz czym jest stos!