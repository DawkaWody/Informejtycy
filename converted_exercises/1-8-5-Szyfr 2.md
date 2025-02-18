# Szyfr 2
Bufferka i Hasha, przyjaciółki, podobnie jak Skriptek i Cachek, szyfrują liściki. Ich algorytm działa jednak na innej zasadzie - biorą pod uwagę tylko cyfry parzyste (żeby nikt się nie domyślił, piszą też nieparzyste). Pierwszym krokiem w odszyfrowywaniu wiadomości jest policzenie sumy cyfr parzystych. Pomóż im poprawić program, wczytujący liczbę $n$, następnie $n$ cyfr wypisujący sumę cyfr parzystych, aby mogły pisać do siebie liściki. Możesz założyć, że $1 \leq n \leq 10^6$
## Przykłady

#### Przykład 1

###### Wejście

```
7
1872406
```
###### Wyjście

```
20
```
Wyjaśnienie do przykładu: $8+2+4+0+6=20$
#### Przykład 2

###### Wejście

```
4
1939
```
###### Wyjście

```
0
```
Wyjaśnienie do przykładu: ciąg nie zawiera cyfr parzystych, więc ich suma to 0


Kod z błędami:
```cpp
#include <iostream>
using namespace std;
int main() 
{
	ios_base::sync_with_studio(false);
	cin.tie(0);
	int n; 
	cin >> n;
	char cyfra;
	int suma = 0; //tu bedziemy przechowywac sume cyfr parzystych
	for(int i = 0; i <= n; i++)
	{
		cin >> cyfra;
		if(suma % 2 = 0) //sprawdzanie, czy cyfra jest parzysta
		{
			suma += '9' - cyfra; //uzyskiwanie wartosci cyfry
		}
	}
	cout >> suma; //wypisywanie wyniku
	return 0;
}
