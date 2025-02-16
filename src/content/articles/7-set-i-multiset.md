---
draft: false
title: 'Set i multiset'
id: 7
nerd: true
---
# Set i multiset

## Set

`set` jest strukturą danych, która przechowuje unikalne elementy w porządku rosnącym (domyślnie, ale porządek ten można dostosować).

**Podstawowe cechy `set`:**

 - **Unikalność elementów** – `set` nie dopuszcza powtarzających się elementów. Każdy element w zbiorze występuje tylko raz.

 - **Porządek** – elementy w `set` są przechowywane w uporządkowanej kolejności.

**Operacje na `set`:**

- `insert()` – dodaje element do zbioru (jeśli nie istnieje).
    
- `find()` – wyszukuje element w zbiorze.
    
- `erase()` – usuwa element ze zbioru.
    
- `size()` – zwraca liczbę elementów w zbiorze.
    
- `empty()` – sprawdza, czy zbiór jest pusty.

- `lower_bound` - zwraca iterator* do pierwszego elementu, który nie jest mniejszy od podanej wartości (czyli jest większy lub równy).

- `upper_bound` -  zwraca iterator* do pierwszego elementu, który jest większy od podanej wartości (czyli jest większy, nierówny).
    
\* -  Iterator w to obiekt, który pozwala na przechodzenie przez elementy kontenera (np. `vector`, `set`). Umożliwia dostęp do elementów, ich modyfikację oraz poruszanie się po nich.

**Deklaracja i użycie `set`:**

```cpp
#include <iostream>
#include <set>
using namespace std;

int main (){
	set<int> s;

	// Deklaracja iteratorów
	set<int>::iterator lb, ub;

	// Dodawanie elementów
	s.insert(5);
	s.insert(2);
	s.insert(5); // Nie zostanie dodane, ponieważ już istnieje w zbiorze

	// Nadanie wartości iteratorom
	lb = s.lower_bound(2);
	ub = s.upper_bound(2);
	cout << *lb << endl; // 2
	cout << *ub << endl; // 5

	// Sprawdzanie istnienia elementu
	if (s.find(5) != s.end()){
		cout << "element jest w zbiorze!" << endl;
	}

	// Usuwanie elementu
	s.erase(2);

	// Sprawdzanie czy set jest pusty
	if (s.empty()){
		cout << "zbiór jest pusty!" << endl;
	}

	return 0;
}
```

**Zastosowanie:**

- `set` jest często używane, gdy potrzebujesz zbioru unikalnych elementów, które mają być przechowywane w określonym porządku, i operacji na nich muszą być szybkie (np. dodawanie, usuwanie, sprawdzanie obecności).

## Multiset

Podobnie jak `set`, struktura danych `multiset` przechowuje elementy w porządku rosnącym (domyślnie), ale **dopuszcza powtarzające się elementy**.

**Różnica od `set`:**

**Powtarzające się elementy** – w przeciwieństwie do `set`, `multiset` pozwala na przechowywanie elementów, które mogą się powtarzać. Możesz dodać ten sam element wiele razy.

**Operacje na `multiset`:**

- `count()` – zwraca liczbę wystąpień danego elementu w multiset.
    
- Wszystkie operacje wcześniej opisane przy set, przy czym w przypadku `set` funkcja `find()` znajduje **tylko jeden element**, ponieważ `set` przechowuje unikalne elementy. Z kolei w przypadku `multiset` funkcja `find()` znajdzie **pierwsze wystąpienie** **danego elementu.**
    
**Deklaracja i użycie `multiset`:**

```cpp
#include <iostream>
#include <set>
using namespace std;

int main(){
	multiset<int> ms;

	// Dodawanie elementów
	ms.insert(5);
	ms.insert(2);
	ms.insert(5); // Można dodać powtórnie, ponieważ multiset pozwala na duplikaty

	// Sprawdzanie liczby wystąpień elementu
	cout << "Liczba wystąpień 5: " << ms.count(2) << endl; // Wypisze: 2

	// Usuwanie elementu
	ms.erase(2); // Usunie wszystkie wystąpienia liczby 2

	return 0;
}
```

**Zastosowanie:**

- `multiset` jest przydatny, gdy potrzebujesz zbioru, w którym mogą występować duplikaty, ale chcesz mieć zachowany porządek elementów. Często stosuje się go w sytuacjach, gdzie liczba wystąpień elementów jest istotna.
