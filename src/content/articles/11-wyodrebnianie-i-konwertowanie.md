---
draft: false
title: Cyfry danej liczby i konwersja na napis
id: 11
nerd: false
---
# Wyodrębnianie cyfr danej liczby, konwertowanie liczb na napisy
## Wyodrębnianie ostatniej cyfry na liczbach
Aby uzyskać ostatnią cyfrę danej liczby, możemy użyć operacji modulo (`%`). Gdy otrzymamy resztę z dzielenia przez 10 danej liczby całkowitej, to tak naprawdę otrzymamy jej cyfrę jedności, czyli ostatnią cyfrę. Analogicznie, aby otrzymać liczbę składającą się z dwóch ostatnich cyfr danej liczby, możemy zastosować resztę z dzielenia przez 100. Dla uzyskania trzech ostatnich liczb zastosujemy resztę z dzielenia przez 1000, i tak dalej.
Oto program wczytujący liczbę całkowitą i wypisujący jej ostatnią cyfrę:
```cpp
#include <iostream>
using namespace std;

int main()
{
    int liczba;
    cin >> liczba;
    int ostatnia_cyfra = liczba % 10; // kluczowa linia kodu - zastosowanie reszty z dzielenia przez 10
    cout << ostatnia_cyfra;
    return 0;
}
```
## Wyodrębnianie ostatniej cyfry na stringach
Ostatnią cyfrę można wyodrębnić używając zmiennych typu string. Zasada działania jest bardzo prosta: uzyskujemy ostatni znak ciągu jako char. Aby zamienić go na zmienną liczbową, można wykorzystać sposób opisany w [temacie 8](https://informejtycy.pl/articles/8-ascii/).
```cpp
#include <iostream>
using namespace std;

int main()
{
    string liczba;
    cin >> liczba;
    int dlugosc = liczba.size();

    char ostatnia_cyfra_z = liczba[dlugosc - 1]; // ostatni znak ze stringa
    cout << ostatnia_cyfra_z << '\n'; // wypisywanie jako znak

    int ostatnia_cyfra_i = ostatnia_cyfra_z - '0'; // uzyskiwanie wartosci liczbowej uzywajac sposobu z tematu 9
    cout << ostatnia_cyfra_i; // wypisywanie jako liczba
    return 0;
}

```
## Uzyskiwanie sumy cyfr danej liczby
Aby uzyskać sumę cyfr danej liczby, możemy w pętli po kolei dodawać do sumy wartość liczbową ostatniej cyfry i odcinać ją od liczby początkowej. Używając sposobu uzyskiwania ostatniej cyfry na liczbach będziemy po prostu po każdym wykonaniu pętli dzielić całkowitoliczbowo przez 10.
Oto implementacja z użyciem liczb i dzielenia przez 10:
```cpp
#include <iostream>
using namespace std;

int main()
{
    int liczba, cyfra;
    cin >> liczba;

    int suma_cyfr = 0;
    while (liczba > 0) {
        cyfra = liczba % 10; // uzyskiwanie wartosci ostatniej cyfry
        liczba /= 10; // 'odcinanie' ostatniej cyfry
        suma_cyfr += cyfra; // aktualizowanie sumy
    }

    cout << suma_cyfr;
    return 0;
}

```
Uzyskiwanie sumy cyfr można też zaimplementować na stringach. Po prostu uzyskujemy wartość ostatniej cyfry jako znaku (sposób na uzyskiwanie wartości cyfry jako znaku opisany w [temacie 8](https://informejtycy.pl/articles/8-ascii/)), aktualizujemy sumę i przesuwamy iterator o jeden w lewo, aż przejdziemy po całym stringu.
## Funkcje wbudowane
W celu zamienienia, czyli przekonwertowania stringa na zmienną liczbową lub odwrotnie, możemy użyć wbudowanych funkcji z biblioteki `<string>`(zawartej w `<bits/stdc++.h>` - biblioteka ta zawiera wiele potrzebnych bibliotek i automatycznie je dodaje):
- `to_string()` - zamienia zmienną liczbową na zmienną typu `string`
- `stoi()` - zamienia zmienną typu `string` na zmienną typu `int` (string to integer)
- `stoll()` - zamienia zmienną typu `string` na zmienną typu `long long` (string to long long)
Przykładowy kod:
```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int liczba;
    string ciag;
    cin >> liczba;
    cin >> ciag;

    int liczba_ciag1 = stoi(ciag); // string konwertujemy na int
    long long liczba_ciag2 = stoll(ciag); // string konwertujemy na long long
    string ciag_liczba = to_string(liczba); // int konwertujemy na string

    cout << "Oto pierwsza liczba, wczytana jako int, wypisana jako string: " << ciag_liczba << '\n';
    cout << "Oto druga liczba, wczytana jako string, wypisana jako int: " << liczba_ciag1 << '\n';
    cout << "Oto druga liczba, wczytana jako string, wypisana jako long long: " << liczba_ciag2;

    return 0;
}
```
