# Tablice i vectory
## Tablice
Tablice pozwalają na przechowywanie wielu wartości, których ilość została początkowo ustalona.
## Inicjowanie tablicy
Tablicę tworzymy poprzez podanie rodzaju danych jakie będzie przechowywać, jej nazwy oraz wielkości w nawiasach prostokątnych, np.:
```cpp
int a[10];

int n = 10;
int b[n];
```
Deklarując tablicę można również od razu przypisać do niej elementy, wypisując je w nawiasie klamrowym, ważne jednak jest aby liczba elementów w nawiasie była równa deklarowanej wielkości tablicy, np.:
```cpp
int a[5] = {1, 5, 2, 4, 6};
```
Istotną sprawą jest by program wiedział już przed kompilacją jak duża powinna być tablica w przeciwnym wypadku może się okazać, że żądana ilość pamięci nie będzie dostępna.
## Przypisywanie danych
W celu przypisania danych do komórki w tablicy piszemy nazwę tablicy, podajemy w nawiasie prostokątym indeks komórki do której chcemy zapisać dane (należy pamiętać że w cpp, jak również wielu innych językach programowania numeracja rozpoczyna się od zera), znak równości, po czym piszemy nazwę zmiennej bądź zwyczajnie dane:
```cpp
a[1] = 0;
int b = 2;
a[2] = b;
```
W celu wczytania do tablicy, przykładowo dziesięciu liczb, możemy użyć następującą mechanikę w kodzie:
```cpp
int liczby[10];
for(int i = 0; i < 10; i++){
    cin >> liczby[i];
}
``` 
## Odwołanie się do elementów tablicy
Aby odwołać się do elementów tablicy piszemy nazwę tablicy i indeks komórki tablicy w nawiasach kwadratowych, przykładowo: 
```cpp
cout << a[0];
```
## Vectory
Kolejną po tablicach nową struktórą danych jest vector. Duża część jego mechanik jest podobna do tablicy, jednak zawiera trochę nowych elementów. Główną zaletą vectorów jest brak konieczności określania ich początkowej wielkości. Ilość elementów vectora może być zwiększana lub zmniejszana w przeciwieństwie do tablicy. 
## Inicjowanie vectorów
Vector tworzymy poprzez zapisanie nazwy `vector`, typu danych w nawiasach ostrokątnych oraz nazwy na końcu, po której opcjonalnym elementem jest wypisanie początkowych elementów vectora w nawiasach, lub początkowej wielkości vectora w nawiasach prostokątnych:
```cpp
vector <int> liczby;

vector <int> liczby_2 = {1, 3, 5, 2};

vector <int> liczby_3(4);
```
Aby możliwe było używanie vectorów konieczne jest zapisanie następującej linijki na początku kodu:
```cpp
#include <vector>
```
## Przypisywanie danych
Po utworzeniu vectoru jego domyślną wielkością jest 0, dlatego aby dodać element do vectora używamy metody `push_back()`, która zwiększa wielkość vectora o jeden, a następnie na nowe miejsce dodaje wskazany element, przykłdowo:
```cpp
vector <int> liczby;
int a;
cin >> a;
liczby.push_back(a);
```
Jeżeli chcemy zmienić dane lub początkowo zadeklarowaliśmy wielkość vectora, możemy przypisywać jego elementom wartości tak samo jak w tablicy:
```cpp
vector <int> liczby(4);
cin >> liczby[3]; 
```
## Odwołanie się do elementów vectorów
Odwoływanie się do elementów vectorów przebiega w taki sam sposób jak w przypadku tablic, przykładowo:
```cpp
vector <int> liczby = {0};
cout << liczby[0];
```
## Inne funkcjonalności vectorów
Dodatkową funkcjonalością vectorów jest między innymi funkcja `size()`, która pozwala sprawdzić obecną wielkość vectora, przykładowo:
```cpp
vector <int> liczby;
liczby.push_back(3);
cout << liczby.size();
```

## Sortowanie tablic i wektorów

Funkcja sort z biblioteki <algorithm> pozwala na posortowanie elementów w tablicy lub wektorze w porządku rosnącym lub niestandardowym (zdefiniowanym przez użytkownika). Działa w złożoności $O(n \log n)$.

Składnia:

```cpp
sort(poczatek, koniec);
```

- poczatek: iterator wskazujący na początek zakresu do posortowania.
- koniec: iterator wskazujący na koniec zakresu do posortowania (nie włączając tego elementu).

Sortowanie tablicy:

```cpp
int T[5] = {5, 3, 8, 1, 4};

sort(T, T + 5); // Sortowanie rosnąco
for (int i = 0; i < n; i++) {
    cout << T[i] << " ";
} // wyjście: 1 3 4 5 8
```

Sortowanie wektora:

```cpp
vector<int> V = {5, 3, 8, 1, 4};
sort(V.begin(), V.end(), greater<int>()); // sortowanie malejąco - greater<int>()
for (int x : V) {
    cout << x << " ";
} // wyjście: 1 3 4 5 8
```