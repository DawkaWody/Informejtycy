### Wstęp

Znasz już funkcję sort, która pozwala na posortowanie jakiejś struktury, ale sposób w jaki to robi nie jest zależny od Ciebie. Co jeśli chcemy posortować stringi np. po ich długości. Musimy wtedy sprawić, aby funkcja sort zachowywała się inaczej niż zwykle i do tego potrzebna jest **własna funkcja porównująca**. Wtedy sort wygląda tak:
```cpp
sort(first, last, comp);
```
### Funkcja porównująca

`Comp` jest funkcją, którą musimy sami stworzyć. Domyślna funkcja `comp` sortuje rosnąco (a raczej niemalejąco) i wygląda tak:
```cpp
bool comp(Typ a, Typ b)
{
	return a < b;
}
```
Na początek coś prostego: jak posortować liczby w kolejności malejącej? Wystarczy, że przepiszemy funkcję 'comp', ale z odwrotnym znakiem tak jak tutaj:
```cpp
bool porownaj(int a, int b)
{
	return a > b;
}
```
i teraz możemy jej użyć do porównywania!
```cpp
int main()
{
	vector<int> liczby = { 1, 8, 3, 6, 3 };
	sort(liczby.begin(), liczby.end(), porownaj);
}
```
Zauważ, że przy podawaniu funkcji `porównaj` nie piszemy nawiasów. To ważne - gdybyśmy podali ją z nawiasami, to program zwróciłby błąd. Jeśli teraz wypiszemy wektor `liczby` to otrzymamy
```
8 6 3 3 1
```

Pełny kod do tego przykładu wygląda tak:
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool porownaj(int a, int b)
{
	return a > b;
}

int main()
{
	vector<int> liczby = { 1, 8, 3, 6, 3 };
	sort(liczby.begin(), liczby.end(), porownaj);
	for (int l : liczby)
		cout << l << " ";
	cout << endl;
}
```
### Własne sortowanie

Teraz powróćmy do pytania z początku: jak posortować stringi po długości? Pamiętajmy, że stringi domyślnie sortują się leksykograficznie, więc musimy napisać swoją funkcję. Funkcja ta mogłaby wyglądać tak:
```cpp
bool porownaj(string a, string b)
{
	return a.size() < b.size();
}
```
funkcja ta będzie sortować je rosnąco, ale wystarczy, że odwrócimy znak i może sortować malejąco. Wczytajmy teraz trochę napisów do wektora a potem go posortujmy.
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool porownaj(string a, string b)
{
	return a.size() < b.size();
}

int main()
{
	cout << "Podaj ilosc napisów do posortowania: ";
	int n; cin >> n;
	vector<string> napisy;
	for (int i = 1; i <= n; i++)
	{
		cout << "Podaj napis nr " << i << ": ";
		string napis;
		cin >> napis;
		napisy.push_back(napis);
	}

	sort(napisy.begin(), napisy.end(), porownaj);

	cout << "Oto napisy posortowane po dlugosci: " << " ";
	for (string t : napisy)
		cout << t << " ";
	cout << endl;

	return 0;
}
```
### Sortowanie własnych obiektów

Dzięki własnej funkcji porównującej można sortować również swoje obiekty! Na początek stwórzmy sobie jakiegoś structa np. samochód
```cpp
struct Samochod
{
	string marka;
	string model;
	int hp;
};
```
powiedzmy, że chcemy go posortować po koniach mechanicznych (hp). Do tego również użyjemy własnej funkcji.
```cpp
bool porownaj_samochody(Samochod a, Samochod b)
{
	return a.hp < b.hp;
}
```
Sortowanie wektora z paroma samochodami wygląda wtedy podobnie do poprzednich przykładów:
```cpp
int main()
{
	vector<Samochod> samochody;
	// Deklarujemy kilka samochodów (dane prawdziwe)
	Samochod s1("Fiat", "126p", 30);
	Samochod s2("Hennessey", "Venom F5", 1817);
	Samochod s3("Mercedes", "AMG GT", 585);
	samochody.push_back(s1);
	samochody.push_back(s2);
	samochody.push_back(s3);

	// Sortujemy samochody i wypisujemy ich dane na wyjście
	sort(samochody.begin(), samochody.end(), porownaj_samochody);

	for (Samochod s : samochody)
		s.Wypisz();
}
```
Zakładając, że `Samochod` ma zdefiniowany konstruktor i metodę `Wypisz()` program powinien wypisać mniej więcej coś takiego:
```
Fiat 126p: 30hp
Mercedes AMG GT: 585hp
Hennessey Venom F5: 1817hp
```
### Bardziej "zaawansowane" porównywanie

W każdym z poprzednich przykładów funkcja sortująca miała 1 linię, ale oczywiście można posortować wg bardziej skomplikowanych warunków. W tym przykładzie nadal sortujemy samochody po koniach mechanicznych, ale jeśli wartości są równe to po długości nazwy modelu, chyba że samochód to fiat 126p - wtedy natychmiast idzie na koniec (niezbyt mądre, ale to tylko przykład).
```cpp
bool porownaj_samochody(Samochod a, Samochod b)
{
	if (a.marka == "Fiat" && a.model == "126p")
		return false;
	else if (b.marka == "Fiat" && b.model == "126p")
		return true;
	else
	{
		if (a.hp != b.hp)
			return a.hp < b.hp;
		else
			return a.model.size() < b.model.size();
	}
}
```
Zauważ, że funkcja porównująca ma zwracać czy a jest mniejsze od b, więc za pomocą wartości logicznych możemy trochę "oszukać" sortowanie (choć własna funkcja to już oszukiwanie sortowania), żeby pewne elementy zawsze były traktowane priorytetowo. Teraz możemy dodać trochę więcej samochodów i przetestować nasze sortowanie.
```cpp
int main()
{
	vector<Samochod> samochody;
	// Deklarujemy kilka samochodów
	Samochod s1("Fiat", "126p", 30);
	Samochod s2("Hennessey", "Venom F5", 1817);
	Samochod s3("Mercedes", "AMG GT", 585);
	Samochod s4("Fiat", "punto", 77);
	Samochod s5("Test", "bardzodluganazwamodelu", 77);
	samochody.push_back(s1);
	samochody.push_back(s2);
	samochody.push_back(s3);
	samochody.push_back(s4);
	samochody.push_back(s5);

	// Sortujemy samochody i wypisujemy ich dane na wyjście
	sort(samochody.begin(), samochody.end(), porownaj_samochody);

	for (Samochod s : samochody)
		s.Wypisz();
}
```
Dla takich danych program wypisze:
```
Fiat punto: 77hp
Test bardzodluganazwamodelu: 77hp
Mercedes AMG GT: 585hp
Hennessey Venom F5: 1817hp
Fiat 126p: 30hp
```
### Możliwe błędy

Jest kilka rzeczy, o których należy pamiętać używając custom sorta:
1: Należy pamiętać, że *funkcja porównująca musi przyjmować takie typy danych jakie są w kolekcji do posortowania i zawsze zwracać bool*. Na przykład jeśli posortujemy wektor
```cpp
vector<int> w = { "abc", "def", "ghi" };
```
funkcją
```cpp
bool porownaj(int a, int b)
{
	return a > b;
}
```
to kod się nie skompiluje. Zobaczymy wtedy błąd podobny do tego:
```
cannot convert argument from 'std::basic_string' to 'int'
```
2: Jeśli kiedyś funkcja sortująca posortuje odwrotnie niż chcesz, spróbuj odwrócić znak - odwróci to kolejność sortowania.
### Podsumowanie

Dzięki własnej funkcji porównującej możesz zmienić zachowanie funkcji `sort` tak aby pasowała do twoich potrzeb! W przykładach sortuję wektory, ale własną funkcję porównującą można zastosować na każdej kolekcji, która da się posortować. Custom sort to bardzo przydatna funkcjonalność i pewnie użyjesz jej wiele razy.