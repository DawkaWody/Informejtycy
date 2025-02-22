---
draft: false
title: 'Kolejka'
id: 5
nerd: true
---
# Queue i deque
## Queue
Kolejną poznaną strukturą danych będzie kolejka, która pozwala na przechwywanie danych według kolejności ich dodawania.
## Inicjowanie kolejki
Kolejkę tworzymy porzez napisanie nazwy `queue`, typu danych jakie będzie przechowywać oraz nazwy:
```cpp
queue<int> kolejka;
```
Do używania kolejki konieczne jest zaimportowanie modułu `queue`:
```cpp
#include <queue>
```
## Przypisywanie danych
Dane do kolejki dodajemy przez metodę `push`, która umieszcza je na końcu kolejki:
```cpp
kolejka.push(3);
```
## Odwołanie się do elementów
Kolejka róźni się od dotąd poznanych typów danych, brakiem swobodnego dostępu do wszystkich danych, a jedynie do pierwszego elementu poprzez metodę `front`, np.:
```cpp
kolejka.front();
```
Również jedynym elementem jaki można usuwać jest ten na przodzie, używa się do tego metody `pop`:
```cpp
kolejka.pop();
```
## Deque
Deque (inna nazwa kolejka dwukierunkowa) jest struktórą bardzo podobną do zwykłej kolejki, jednak występuje mniedzy nimi kilka różnic.
## Inicjowanie deque
Kolejkę tworzymy porzez napisanie nazwy `deque`, typu danych jakie będzie przechowywać oraz nazwy:
```cpp
deque<int> kolejka;
```
Do używania kolejki konieczne jest zaimportowanie modułu `queue`:
```cpp
#include <queue>
```
## Przypisywanie danych

Dane do kolejki dodajemy przez metody `push_back` oraz `push_front`, które umieszczają dane odpowiednio na końcu i początku kolejki:
```cpp
kolejka.push_back(7);

kolejka.push_front(2);
```
## Odwołanie się do elementów
Podobnie do kolejki w deque nie możemy odwołać się do dowolnego elementu w kolejce, a wyłącznie do pierwszego metodą `front` i ostatniego metodą `back`, np.:
```cpp
kolejka.front();

kolejka.back();
```
Możliwe jest usuwanie elementów zarówno z początku jak i końca kolejki dwukierunkowej z użyciem `pop_front` i `pop_back`:
```cpp
kolejka.pop_front();

kolejka.pop_back();
```
## Inne fukcje kolejki i kolejki dwukierunkowej
Wielkość kolejki możemy sprawdzić metodą `size()`:
```cpp
kolejka.size();
```
Inną przydatną metodą jest `empty()`, zwracająca wartość `bool` która oznacza czy kolejka jest pusta:
```cpp
kolejka.empty();
```