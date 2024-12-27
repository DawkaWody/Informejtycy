### Wstęp

Podczas nauki C++ nie sposób nie wspomnieć o jego prędkości. Jest on jednym z najszybszych języków programowania jednocześnie dostarczając wiele użytecznych funkcjonalności. Jednak jakby się postarać, to w każdym języku programowania można napisać coś co będzie baaardzo wolne. No właśnie - ale jak bardzo wolne?
### Jak zmierzyć czas wykonywania programu?

Do mierzenia szybkości programu wykorzystywana jest notacja dużego O. Zanim powiem na czym polega, przeanalizujmy dlaczego zwykłe mierzenie czasu wykonywania programu nie jest zbyt miarodajne. Przypuśćmy, że bierzemy pod lupę taki fragment kodu:
```cpp
int liczba = 123;
int n; 
cin >> n;
for (int i = 1; i <= n; i++)
{
	int kwadrat = i * i;
	cout << kwadrat + liczba << endl;
}
```
Spróbujmy zmierzyć czas wykonywania tego kodu. Za pomocą nagłówka `chrono` można uzyskać czas w milisekundach. Taki kod z dodatkiem mierzenia czasu wyglądałby tak:
```cpp
#include <iostream>
#include <chrono>

using namespace std;
using namespace std::chrono;

int main()
{
	unsigned long long start = duration_cast<milliseconds>(
		system_clock::now().time_since_epoch()
	).count();
	int liczba = 123;
	int n;
	cin >> n;
	for (int i = 1; i <= n; i++)
	{
		int kwadrat = i*i;
		cout << kwadrat + liczba << endl;
	}
	unsigned long long koniec = duration_cast<milliseconds>(
		system_clock::now().time_since_epoch()
	).count();

	unsigned long long czas = koniec - start;
	cout << "Czas wykonywania programu: " << czas << "ms" << endl;
}
```
Nie przejmuj się, jeśli czegoś tu nie rozumiesz, ale w skrócie uzyskujemy czas przed i po wykonaniu tego fragmentu kodu a następnie obliczamy różnicę. Jeśli teraz uruchomisz ten program i podasz wartość `n` to powinieneś zobaczyć na ekranie trochę liczb a na dole czas wykonywania tego programu. U mnie było to 13 milisekund dla `n = 150`. 

Tu pojawia się problem mierzenia szybkości w ten sposób: jeśli podasz programowi tę samą liczbę, prawdopodobnie zobaczysz inną wartość! Dzieje się tak, ponieważ czas wykonywania programu zależy od komputera, kompilatora i wielu innych rzeczy. Spróbuj uruchomić ten program kilka razy. Twoje wyniki (dla tych samych wartości `n`) powinny się od siebie odrobinę różnić. Czasami program wykonuje się dłużej, a czasami krócej. Dlatego mierzenie czasu wykonywania programu w ten sposób nie ma sensu - nawet na tym samym sprzęcie wynik nie jest stały. Jak w takim razie opisać jak szybki jest program?
### Notacja dużego O

Z pomocą przychodzi notacja dużego O, która nie opisuje **czasu** wykonywania programu, a **liczbę operacji**, którą wykonuje w stosunku do danych wejściowych. Operacja to np. stworzenie zmiennej, dodanie dwóch liczb lub wypisanie czegoś na wyjście. Jednak gdybyśmy liczyli wszystkie operacje wykonywane przez nasz program wyszłoby ich bardzo wiele, dlatego w notacji dużego O uwzględnia się *tylko operacje dominujące*, czyli takie, które wykonają się najwięcej razy i mają realny wpływ na prędkość działania programu. Mały test: która operacja w tym fragmencie kodu jest dominująca?
```cpp
int liczba = 123;
int n; 
cin >> n;
for (int i = 1; i <= n; i++)
{
	int kwadrat = i * i;
	cout << kwadrat + liczba << endl;
}
```
Dominująca jest operacja w linii drugiej czyli pętla for. Wykona się dokładnie `n` razy, a ile to `n` wynosi to już zależy od danych wejściowych. Idealne dla notacji dużego O, ponieważ opisuje ona zależność *od danych wejściowych*. Dlatego złożoność tego programu w notacji dużego O to **O(n)** gdzie `n` jest wielkością wczytywaną z wejścia.

Notacja dużego O nie konwertuje się na sekundy, natomiast wiemy, że jeśli podamy programowi liczbę 150 to wykona on 150 operacji. Ale zaraz, zaraz! Przecież w tym przykładzie widzimy, że program w każdej iteracji pętli wykonuje trzy operacje. Policzenie kwadratu, dodanie do niego zmiennej `liczba` i wypisanie wyniku na standardowe wyjście. To prawda, jednak w notacji dużego O **ignoruje się stałe**, ponieważ podobnie jak operacje niedominujące, nie mają one realnego wpływu na czas działania programu. Tak naprawdę O(n) oznacza O(c * n), gdzie `c` to jakaś stała liczba operacji, która nie ma wpływu na czas działania programu (liczba operacji w jednej iteracji pętli). Notacja dużego O ma być tak prosta, jak to tylko możliwe - zero niepotrzebnych informacji.
### Typowe złożoności programów

Złożoność to inaczej ilość wykonywanych przez program operacji, czyli idealnie to co opisuje notacja dużego O. Poznałeś już jedną złożoność programu - O(n) nazywaną również *czasem liniowym*. Jakie inne złożoności jeszcze istnieją? Wyobraź sobie, że chcesz podzielić kwadratową kartkę na 16 równych kwadratowych części. Możesz rysować kwadraty po kolei. To jest czas liniowy. Można to jednak zrobić szybciej. Zauważ, że jeśli będziesz zginał kartkę na pół, to za każdym razem otrzymasz 2 razy więcej kratek niż poprzednio. Zatem potrzebna ilość złożeń kartki to *log*₂16 czyli 4. Logarytm dwójkowy z 16 oznacza "do jakiej potęgi podnieść 2 aby otrzymać 16?". Złożoność takiego składania kartki to **O(log n)**. Przeanalizujmy teraz te najpowszechniejsze złożoności programów, z którymi możesz się spotkać. Złożoności są przedstawione od najszybszej do najwolniejszej

| Złożoność                            | Przykład                                                      |
| ------------------------------------ | ------------------------------------------------------------- |
| `O(1)` - złożoność stała             | Operacja niezależna od wejścia np. policzenie czegoś ze wzoru |
| `O(log n)` - złożoność logarytmiczna | Składanie kartki                                              |
| `O(n)` - złożoność liniowa           | Pojedyncza pętla                                              |
| `O(n log n)`                         | Składanie `n` kartek                                          |
| `O(n²)` - złożoność kwadratowa       | Dwie zagnieżdżone pętle (jedna pętla w drugiej)               |
| `O(n³)` - złożoność sześcienna       | Trzy zagnieżdżone pętle                                       |
### Notacja dużego O określa najgorszy przypadek

Spójrz teraz na ten fragment kodu:
```cpp
vector<int> w = { 2, 3, 7, 1, 8, 5 };
cout << "Podaj szukana wartosc: ";
int szukana;
cin >> szukana;
for (int i : w)
	if (i == szukana)
		cout << i << " znalezione!" << endl;
```
Jak opisałbyś jego złożoność? Cóż, spójrzmy, co by się stało, gdybyśmy na wejściu podali wartość `2`. Program wykonałby jedną iterację pętli i natychmiast znalazłby szukaną wartość. Możemy wtedy powiedzieć: "Ponieważ pętla wykonała się tylko 1 raz, to złożoność tego programu to O(1). Wow! Jest bardzo szybki!", ale czy to prawda? Odpowiedź brzmi: nie, program nie zmienia swojej złożoności tylko dlatego, że dostał wygodniejsze dane. Notacja dużego O opisuje **najgorszy przypadek**. Gdybyśmy do tego programu podali na przykład 5, to musiałby on przejść po każdym elemencie wektora i to jest najgorszy możliwy przypadek. Czas O(n) to tak na prawdę zapewnienie, że program **na pewno** nie wykona więcej, niż `n` operacji.
### Jak określić maksymalny czas działania na podstawie notacji dużego O?

Jak już powiedziałem, notacja dużego O nie konwertuje się bezpośrednio na jednostki czasu, ponieważ do tego nie służy i zawiera zbyt dużo pominięć. Możemy jednak posłużyć się pewnym przybliżeniem. Współczesne komputery wykonują około 10⁸ operacji na sekundę. Musimy też znać maksymalny rozmiar naszego wejścia, lub chociaż orientacyjnie wiedzieć w jaki przedziale będzie się znajdować. Dzięki temu będziemy mogli przewidzieć jak nasz program będzie się zachowywać w najgorszym przypadku. Jeśli np. nasze maksymalne `n` wynosi 100000 a nasz program ma złożoność kwadratową, to maksymalna liczba operacji to 100000² = 10¹⁰, czyli program dla `n = 100000` będzie się wykonywał `10¹⁰/10⁸ = 10² = 100` sekund. Dane te nie są jednak dokładne, a jest to jedynie przybliżenie. Jak w takim razie przewidzieć czas działania?
### Jak ocenić wydajność programu?

Zastanówmy się teraz nad programem, który dla danego `n` policzy sumę liczb od 1 do `n`. Istnieje kilka różnych podejść prowadzących do tego celu. Oto pierwsze z nich:
```cpp
for (int i = 1; i <= n; i++)
	for (int j = 1; i <= j; j++)
		wynik++;
```
Jaką złożoność ma taki kod? Są to 2 zagnieżdżone pętle, zatem złożoność to O(n²). To rozwiązanie można jednak łatwo przyspieszyć - zauważ, że zwiększanie wyniku o `i` da dokładnie ten sam rezultat (jest to dokładnie to, co osiągamy drugą pętlą). Oto bardziej zoptymalizowany kod:
```cpp
for (int i = 1; i <= n; i++)
	wynik += i;
```
Teraz "ulepszyliśmy" nasz program do złożoności liniowej! Ale da się jeszcze szybciej. Wystarczy, że użyjemy wzoru na sumę ciągu od 1 do n ([1 + 2 + ... + n](https://pl.wikipedia.org/wiki/Szereg_1_%2B_2_%2B_3_%2B_4_%2B_%E2%80%A6)). Używając tego wzoru możemy napisać taki program:
```cpp
wynik = (n * (n + 1)) / 2;
```
Zwróć uwagę, że liczba operacji jest niezależna od wejścia - dla każdego `n` wykonamy 1 mnożenie, 1 dodawanie i 1 dzielenie, zatem złożoność tego programu to O(1). Szybciej się już nie da!

Powyższy przykład pokazuje, że istnieją różne złożoności dla tego samego problemu. Możemy jednak bez przeszkód ocenić, który algorytm jest najlepszy. W miarę kontynuacji nauki coraz lepiej będzie Ci szło rozpoznawanie, czy da się coś zrobić wydajniej, czy nie.
### Podsumowanie

Dzięki notacji dużego O umiesz już oceniać szybkość programu. Jest to lepsza alternatywa dla czasu w milisekundach powszechnie używana w opisach algorytmów. Na twojej przygodzie programistycznej dużo razy spotkasz się z tym sposobem zapisu.