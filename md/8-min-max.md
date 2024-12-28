W tym artykule zaprezentujemy podstawowe funkcje z biblioteki `algorithm` w języku C++, takie jak `min`, `max`, `swap`, `reverse`, `empty` oraz `pow`. Są to narzędzia, które pozwalają na łatwe i efektywne rozwiązywanie różnych problemów związanych z manipulowaniem danymi czy obliczeniami matematycznymi. Dzięki prostym przykładom omówimy, jak wykorzystać te funkcje w praktyce, by usprawnić pisanie kodu i poprawić jego wydajność. Poznamy również ich zastosowanie w bardziej złożonych algorytmach, takich jak sortowanie bąbelkowe czy losowanie elementów z kolekcji.
# `min`  
Funkcja `min` znajduje mniejszą z dwóch wartości. Jesli wartości są równe,
zwraca pierwszą z nich. Jest częścią nagłówka `algorithm`.

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
	int a, b;
	cout << "Podaj liczbe kalorii w pierwszej potrawie: ";
	cin >> a;
	cout << "Podaj liczbe kalorii w drugiej potrawie: ";
	cin >> b; 
	int minimum = min(a, b); 
	cout << "Mniejsza liczba kalorii to: " << minimum << endl;
    return 0;
}
```

Uzytkownik podaje liczbę kalorii zawartą w potrawie a, a potem w potrawie b. Program deklaruje zmienną 'minimum' przechowującą najmniejszą liczbę kalorii w potrawie, a potem ją wypisuje. 

# `max `
Funkcja `max` znajduje większą z dwóch wartości. Również jest częścią `algorithm`. 

Napiszemy algorytm, który będzie znajdował największy element w tablicy.   
```cpp
#include <iostream>  
#include <vector>  
#include <algorithm>  
using namespace std;

int main()
{ 
    int n;
    cin >> n;
    vector<int> tab(n);

    for (int i = 0; i < n; i++)
        cin >> tab[i];
    
	int maks = 0;
    for (int i = 0; i < n; i++)
        maks = max(maks, tab[i]);

    cout << maks << endl;
    return 0;
}
```

Program wczytuje liczbę elementów w tablicy, oraz jej elementy, inicjalizuje pętlę w której przechodzi przez tablicę i korzystając z funkcji `max` przypisuje zmiennej maks największą wartość, a na koniec ją wypisuje.   

# `swap`  
Funkcja `swap` zamienia miejscami wartości dwóch zmiennych.

Funkcja `swap` ma swoje zastosowanie w sortowaniu bąbelkowym (ang. bubble sort), polega ono na wielokrotnym przechodzeniu przez listę, porównywaniu sąsiadujących elementów i zamienianiu ich miejscami jeśli wystepują w niewłaściwej kolejności. Nie ma on jednak praktycznie żadnego zastosowania poza celami edukacyjnymi, ponieważ jest mało wydajny w porównaniu z nowocześniejszymi algorytmami - np. quicksort, mergesort. Mimo wszystko, napiszmy taki algorytm. 

```cpp
#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& tab) {
	int n = tab.size();
	for (int i = 0; i < n - 1; i++) {
	    for (int j = 0; j < n - i - 1; j++)
	        if (tab[j] > tab[j + 1])
	            swap(tab[j], tab[j + 1]); 
	}
}

int main() 
{
    vector<int> tab = {64, 34, 25, 12, 22, 11, 90};
    cout << "Przed sortowaniem:" << endl;
    for (int x : tab) cout << x << " ";
    cout << endl;

    bubbleSort(tab);

    cout << "Po sortowaniu:" << endl;
    for (int x : tab) cout << x << " ";
    cout << endl;
    return 0;
}
```

Funkcja bubbleSort porównuje każdy element z następnym i jeżeli jest większy to zamieniają się miejscami dzięki funkcji `swap`. Powtarza ten proces aż największe liczby znajdą się na końcu tablicy. Na koniec wypisuje zawartość posortowanego wektora.  

# `reverse`
Funkcja `reverse` odwraca kolejność elementów w tablicy.

Używając funkcji `reverse` możemy na przykład posortować wektor malejąco tzn. od największego elementu do najmniejszego. Oto jak można to zrobić:

```cpp
#include <iostream> 
#include <vector>
#include <algorithm> 
using namespace std; 

int main()
{
	int n; 
	cin >> n; 
	vector<int> tab(n);

	for(int i = 0; i < n; i++)
		cin >> tab[i];

	sort(tab.begin(), tab.end()); 
	reverse(tab.begin(), tab.end()); 

	for(int i = 0; i < n; i++)
	    cout << tab[i] << " ";

    return 0;   
}
```

Program wczytuje liczbę elementów w wektorze od użytkownika. Potem sortuje je rosnąco funkcją `sort`, następnie odwraca kolejność elementów w wektorze funkcją `reverse` i uzyskuje wektor posortowany malejąco. Na koniec wypisuje zawartość tego wektora. 

# `empty` 

Funkcje `empty` sprawdza, czy kontener jest pusty.

`empty` można użyć np. do napisania algorytmu, który będzie losował nagrody.

```cpp
#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {

	srand(static_cast<unsigned>(time(nullptr)));
	vector<string> nagrody = {"Samochód", "Rower", "Voucher", "Kubek"};

	while (!empty(nagrody)) {
	    int indeks = rand() % nagrody.size();
	    cout << "Wylosowano nagrodę: " << nagrody[indeks] << endl;
	    nagrody.erase(nagrody.begin() + indeks);
	}

	cout << "Gra zakończona." << endl;
	return 0;
}
```

Na początku warto wspomnieć co robi  
```cpp
srand(static_cast<unsigned>(time(nullptr)));  
```
 Ta linijka inicjalizuje generowanie losowych liczb w naszym programie za pomocą funkcji rand(). Otóż nasz algorytm generuje losową liczbę funkcją rand() (jest to liczba z zakresu od 0 do RAND_MAX czyli stałej, zwykle wynoszącej 32767) a potem ogranicza ją do rozmiaru naszej listy zadeklarowanych nagród.  

```cpp
int indeks = rand() % nagrody.size();  
```
Tak losowana jest nasza nagroda. Takie losowanie odbywa się dopóki lista nie będzie pusta. Używamy przy tym funkcji `empty`. Za każdym przejściem pętli usuwana jest wylosowana nagroda z listy, aby uniknąć wypisania jej po raz kolejny. Jeżeli lista jest pusta to pętla się przerywa, a losowanie kończy.
  
# `pow`
Funkcja `pow` podnosi liczbę do danej potęgi.

Dzięki `pow` możemy obliczyć np. pole koła.

```cpp
#include <iostream>
#include <cmath> // pow

int main() {

	double promien;
    cout << "Podaj promien kola: ";
    cin >> promien;

    double pole = M_PI * pow(promien, 2); // Pole koła = π * r^2

    cout << "Pole kola o promieniu " << promien << " wynosi: " << pole << endl;
    return 0;
}
```

Program wczytuje promień koła od użytkownika, następnie używa wzoru na pole koła:
$$
P = \pi * r^2
$$
Używamy funkcji `M_PI` z biblioteki `cmath`, która daje wiarygodne przybliżenie liczby π, następnie mnożymy tą wartość przez promień podniesiony do kwadratu funkcją `pow`. 