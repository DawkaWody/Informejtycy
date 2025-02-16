---
draft: false
title: 'Priority queue'
id: 6
nerd: true
---
# Priority queue

Poznałeś już, czym jest zwykła kolejka. Każdy dodany element ustawia się w niej i czeka na chwilę, gdy znajdzie się na jej przodzie. Niekiedy jednak przydatne mogłoby okazać się narzędzie, umożliwiające na trzymanie elementów w dowolnej kolejności - najlepiej tak, aby wpasowywało ono nowo dodany fragment w już istniejący. Standardowa biblioteka C++ oczywiście posiada takie narzędzie. Nosi ono nazwę `priority_queue` i zawiera
się w nagłówku `<queue>`.

By zainicjować kolejkę priorytetową wystarczy napisać `priority_queue` i w nawiasach ostrokątnych podać typ, jaki będzie przechowywany w kolejce. Domyślnie kolejka przechowuje elementy malejąco.

```cpp
priority_queue<int> pq; // kolejka priorytetowa liczb całkowitych
```

## Działanie kolejki priorytetowej

Wyobraź sobię, że do naszej kolejki priorytetowej, będziemy dodawać kolejne elementy zbioru `{10, 15, 7, 8, 20, 13}`. Prześledźmy stan kolejki w każdym kroku.

- `{}` - kolejka jest pusta.
- `{10}` - po dodaniu `10`.
- `{15, 10}` - po dodaniu `15`.
- `{15, 10, 7}` - po dodaniu `7`.
- `{15, 10, 8, 7}` - po dodaniu `8`.
- `{20, 15, 10, 8, 7}` - po dodaniu `20`.
- `{20, 15, 13, 10, 8, 7}` - po dodaniu `13`.

Jak więc widać, pomimo iż `7` pojawiło się w kolejce jako trzecia liczba, na początek dotrze jako ostatnia. Ostatecznym rezultatem jest posortowany zbiór początkowy, jakie są więc zalety korzystania z kolejki priorytetowej?

## Użycie kolejki priorytetowej

Załóżmy, że zawiadujemy kolejką łapówkową. Pozycja w niej zależy od tego, jak dużo zapłacisz. Musimy być w stanie dodać do kolejki nową osobę oraz wypuszczać z kolejki `k` pierwszych osób. Sposobem, który dotychczas poznałeś, można tę kolejkę trzymać w wektorze, który z dodaniem każdej osoby będzie na nowo sortowany. Pytanie więc brzmi - po co w takiej sytuacji korzystać z `priority_queue`? **Dla wydajności i własnej wygody.** Kolejka priorytetowa ma złożoność czasową $O(n \log n)$, a wektor sortowany po dodaniu każdego elementu około $O(n^2 \log n)$.

> Zakładamy, że w rozwiązaniu dodajemy pojedynczo każdą nową osobę do kolejki i wektor sortujemy za każdym razem. Oczywiście, wektor może być  sortowany dopiero przy "wypuszczeniu" `k` pierwszych osób, ale zakładamy wariant faworyzujący kolejkę priorytetową.

- Sortowany wektor
	- Dodanie osoby do wektora to złożoność $O(1)$, co robimy `n` razy, więc wychodzi $O(n)$. Posortowanie to $O(n \log n)$, co również robimy `n` razy, więc otrzymujemy $O(n^2 \log n)$. Ostateczna złożoność to $O(n + n^2 \log n)$ czyli około $O(n^2 \log n)$.
- Kolejka priorytetowa
	- Dodanie osoby do kolejki to złożoność $O(\log n)$, co robimy `n` razy, więc wychodzi $O(n \log n)$.

## Własna funkcja porównująca

Jak wspomniałem wcześniej, kolejka priorytetowa jest narzędziem pozwalającym na trzymanie elementów w dowolnej kolejności - nie tylko malejąco. By to zrobić musimy dodać zawartość nagłówka `<vector>` i `<functional>`, dla kolejno obiektów `std::vector` i `std::function`. Tworzymy funkcję porównującą `bool cmp(int a, int b)`, która będzie sortowała rosnąco. Schemat deklarowania funkcji porównującej dla
kolejki priorytetowej wygląda następująco.

```cpp
priority_queue<typ, vector<typ>, function<bool(typy_argumentow_funkcji_cmp)>> pq(cmp);
```

Oto przykład dla funkcji sortującej rosnąco i kolejki priorytetowej typu `int`.

```cpp
#include <iostream>
#include <queue>
#include <vector>
#include <functional>
using namespace std;

bool cmp(int a, int b)
{
	return a > b;
}

int main()
{
	priority_queue<int, vector<int>, function<bool(int, int)>> kolejka(cmp);
	
	kolejka.push(1);
    kolejka.push(3);
    kolejka.push(-2);
    kolejka.push(2);
	
	// kolejka to {-2, 1, 2, 3}
}
```

## Metody na `priority_queue`

| Metoda | Opis |
| ------- | ------ |
| `priority_queue.push()` | Dodaje element do kolejki |
| `priority_queue.pop()` | Usuwa pierwszy element kolejki |
| `priority_queue.top()` | Zwraca pierwszy element kolejki |
| `priority_queue.empty()` | Zwraca wartość logiczną - informację czy kolejka jest pusta |

```cpp
#include <queue>
#include <iostream>
using namespace std;

int main()
{
	priority_queue<int> kolejka;
	
	kolejka.push(15);
	kolejka.push(10);
	kolejka.push(100);
	kolejka.push(-100);
	
	cout << kolejka.top() << endl; // wypisze 100
	cout << kolejka.top() << endl; // znowu wypisze 100 - top() nie usuwa górnego elementu
	
	kolejka.pop();
	
	cout << kolejka.top() << endl; // wypisze 15
	
	cout << boolalpha; // zamienia bool'owe 0 na false i 1 na true
	cout << kolejka.empty() << endl; // wypisze false, bo w kolejce znajduje się jeszcze 15, 10 i -100
}
```

## Iteracja po kolejce priorytetowej

Iteracja, czyli przejście po kolejce priorytetowej, nie jest taka prosta. `priority_queue` (tak jak `queue` i stos) nie udostępnia żadnych iteratorów, co za tym idzie, wypisanie na wyjście wszystkich elementów kolejki nie jest procesem optymalnym. Należy skopiować kolejkę priorytetową, a następnie wypisywać i usuwać elementy stojące na jej przodzie.

```cpp
#include <iostream>
#include <queue>
using namespace std;

int main()
{
	priority_queue<int> pq;
	
	pq.push(5);
	pq.push(-2);
	pq.push(3);
	pq.push(1);
	
	priority_queue<int> pq_kopia = pq; // utworzenie kopii pq
	
	while (not pq_kopia.empty()) {
		cout << pq_kopia.top() << endl; // wypisanie pierwszego elementu
		pq_kopia.pop();                 // usunięcie pierwszego elementu
	}
}
```

> Oczywiście nie trzeba kopiować `priority_queue`, można wypisywać i usuwać elementy z oryginalnej kolejki. Należy tylko liczyć się z tym, że utracimy jej zawartość.

Gdy funkcja przyjmie parametr o typie `priority_queue`, kolejka skopiuje się sama, więc możemy utworzyć procedurę wypisującą zawartość kolejki priorytetowej.

```cpp
void wypisz_pq(priority_queue pq)
{
	while (not pq.empty()) {
		cout << pq.top() << endl;
		pq.pop();
	}
}
```

## Podsumowanie

Na dzisiejszej lekcji poznałeś narzędzie jakim jest kolejka priorytetowa. Dowiedziałeś się dlaczego z niej korzystamy i poznałeś metody udostępniane na owej kolejce przez standardową bibliotekę języka C++.