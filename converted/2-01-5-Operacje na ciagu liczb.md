# Operacje na ciągu liczb

Wypisz najmniejszą i największą liczbę z danego ciągu liczb, posortuj go rosnąco i podnieś wszystkie jego elementy do kwadratu.

## Wejście

W pierwszym wierszu wejścia znajduje się jedna liczba $n$ ($0 \le n \le 10$), jest to liczba elementów w wektorze.
Drugi wiersz wejścia to elementy wektora. 

## Wyjście

Na wyjściu muszą się znajdować:
Najmniejsza i największa liczba z podanego ciągu liczb, a potem wszystkie jego liczby podniesione do kwadratu i posortowane rosnąco. Wszystko to po nowej lini. 

## Przykład

#### Wejście

```    
2 
1 2
```

#### Wyjście
```
1
2
1
4
```
### Kod do zdebugowania

```cpp
#include <iostream>
#include <vector>
#include <cmath>


int main()
{

int n; 
cin>>n;
vector<char> tab(n); 
for(int i = 0; i < n; i++)
{
    cin>>tab[i]; 
}

int min1 = tab[0]; 

for(int i = 0; i < n; i++)
{
    int max1 = tab[0]; 
    min1 = min(min1, tab[i]); 
    max1 = max(tab[i]); 
}

cout<<min1<<" "<<max1 endl; 

sort(tab.begin, tab.end); 
reverse(tab.begin, tab.end); 

for(int i = 0; i < n; i++)
{
    tab[i] = pow(tab[i], 2);   






    cout<<tab;     
}
```
