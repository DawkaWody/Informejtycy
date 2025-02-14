---
draft: false
title: Własne funkcje
id: 3
nerd: true
---
# FUNKCJE
Funkcje piszemy, aby nasz kod stał się czytelniejszy. Jest to pewien rodzaj podprogramu, znajdującego się poza funkcją `main`. Zazwyczaj korzysta się z funkcji, kiedy program ma wielokrotnie wykonać jakieś operacje. Funkcja wykonuje określone operacje i może zwracać jakąś wartość.
## Deklaracja funkcji
Najpierw, **przed funkcją `main`**, piszemy typ zmiennej, który ma zwracać, lub `void`, jeśli funkcja nic nie zwraca. Następnie, po spacji, piszemy nazwę funkcji. Po nazwie, w nawiasach okrągłych piszemy argumenty, jakie funkcja przyjmuje, poprzedzone ich typem danych. Jeśli funkcja nie przyjmuje argumentów, pozostawiamy puste nawiasy.
```cpp
int policz_iloczyn(int a, int b)
```
Z powyższej linii możemy dowiedzieć się, że jest to funkcja zwracająca wartość typu `int`, przyjmująca dwie wartości, również typu `int`.
## Ciało funkcji
Ciało funkcji znajduje się w całości w nawiasach klamrowych, wszystko co jest poza nimi nie będzie wykonywane po wywołaniu funkcji. Każda funkcja, oprócz funkcji `void`, powinna coś zwracać. Do zwracania wartości używamy komendy `return`, a następnie podajemy nazwę zmiennej i kończymy średnikiem. Funkcja `policz_iloczyn`, będzie wyglądała tak:
```cpp
int policz_iloczyn(int a, int b)
{
    int wynik=a*b;
    return wynik;
}
```
Aby wywołać daną funkcję, należy napisać jej nazwę, następnie nawiasy okrągłe - w nich należy umieścić argumenty przyjmowane przez funkcje, bez typów danych, lub nic nie umieszczać, jeśli funkcja nie przyjmuje  żadnych argumentów. Wywołanie funkcji `policz_iloczyn` będzie wyglądało tak:
```cpp
policz_iloczyn(czynnik1, czynnik2)
```
Można wartość zwracaną przez tę funkcję bezpośrednio wypisać, lub przypisać do jakiejś zmiennej.
Poniższy program będzie wczytywał dwie liczby i wypisywał ich iloczyn;
```cpp
#include <iostream>
using namespace std;
int policz_iloczyn(int a, int b){
    int wynik = a * b;
    return wynik;
}
int main()
{
    int czynnik1, czynnik2;
    cin >> czynnik1 >> czynnik2;
    cout << policz_iloczyn(czynnik1, czynnik2);
    return 0;
}
```
Co ważne, zmienne zadeklarowane w funkcji `main` nie będą dostępne w innych funkcjach, i odwrotnie. Oznacza to, że zmienne możemy nazwać tak samo w funkcji `main` jak w innych funkcjach i nie wystąpi kolizja oznaczeń. Jeśli zadeklarujemy jakąś zmienną poza funkcjami, będzie ona zmienną globalną - będzie dostępna we wszystkich funkcjach. 
## Inne typy funkcji - przykłady
Przykładowa funkcja typu `void` - funkcja przyjmująca liczbę i napis, a następnie wypisuje ten napis tyle razy ile podano:
```cpp
#include <iostream>
using namespace std;
void wypisz_n_razy(int n, string napis){
    for(int i = 0; i < n; i++) cout << napis << '\n';
}
int main()
{
    int n;
    string napis;
    cin >> n >> napis;
    wypisz_n_razy(n, napis);
    return 0;
}

```
Jak widać, zarówno w funkcji `main`, jak w funkcji `wypisz_n_razy` występują te same nazwy funkcji, jednak nie występuje kolizja oznaczeń. Funkcja `wypisz n razy` kopiuje wartości `n` i `napis`, więc może zmieniać ich wartość, nie zmieniając wartości zmiennych `n` i `napis` w funkcji `main`.
Poniższa funkcja sprawdza, czy liczba jest parzysta i zwraca wartość typu `bool`:
```cpp
bool czy_parzysta(int x){
    if(x%2==0) return true;
    return false;
}
```
W tym przypadku nie potrzebujemy umieszczać konstrukcji `else` w tej funkcji, ponieważ komenda `return` automatycznie kończy jej wykonywanie.

Przydatne informacje:
- Funkcje mogą zwracać **maksymalnie jedną wartość** (może to być m.in. zmienna, vector/tablica)
- Funkcja może wywoływać inne funkcje (w tym samą siebie)
- Funkcja może odwoływać się tylko do funkcji znajdujących się nad nią (w kodzie) - program czytany jest od "góry"
- Funkcja typu `void` "automatycznie" się kończy po wykonaniu wszystkich operacji - nie potrzebna jest komenda `return`