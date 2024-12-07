
C++ jest językiem programowania, który umożliwia tworzenie wydajnych i złożonych aplikacji. Będąc początkującym, warto zrozumieć podstawową strukturę programu w C++, ponieważ wszystkie programy będą bazowały na podobnym szablonie. W tym artykule przedstawimy krok po kroku strukturę prostego programu w C++.

## Podstawowa struktura programu

Każdy program w C++ składa się z kilku podstawowych elementów:

### 1. Dyrektywa preprocesora `#include`

Na początku programu zwykle znajduje się dyrektywa preprocesora. Dyrektywy preprocesora to instrukcje dla kompilatora wykonywane przed kompilacją kodu. Najczęściej spotykanym poleceniem jest `#include`, które służy do dołączania bibliotek.

```cpp
#include <iostream>
```

`<iostream>` to standardowa biblioteka umożliwiająca korzystanie z wejścia i wyjścia, takich jak `cout` (do wyświetlania tekstu w konsoli) i `cin` (do wczytywania danych). Więcej na ten temat w kolejnym artykule.
### 2. Dodanie przestrzeni nazw

Aby uprościć korzystanie z elementów standardowej biblioteki C++, można dodać polecenie:

```cpp
using namespace std;
```

Dzięki temu nie trzeba będzie poprzedzać nazw takich jak `cout` czy `cin` prefiksem `std::`.
### 3. Funkcja `main`

Funkcja `main` jest punktem wejścia każdego programu w C++. To właśnie od niej zaczyna się wykonanie programu.

```cpp
int main()
```

- `int` oznacza, że funkcja zwraca wartość całkowitą (zwykle 0, jeśli program zakończył się poprawnie).
- Nawiasy `()` mogą zawierać argumenty, ale dla prostych programów są puste.

### 4. Blok kodu `{}`

Kod, który ma być wykonany przez funkcję `main`, znajduje się w nawiasach klamrowych `{}`. To tzw. ciało funkcji.

```cpp
{
    // Twój kod tutaj
}
```

### 5. Instrukcja `return`

Na końcu funkcji `main` zwykle znajduje się instrukcja `return`, która zwraca wartość całkowitą. Wartość ta informuje system operacyjny o zakończeniu programu.

```cpp
    return 0;
```

`0` oznacza, że program zakończył się sukcesem. Jeśli program napotka błąd, można zwrócić inną wartość (np. `1`).
## Jak uruchomić program w C++?

Aby uruchomić program, należy:

1. **Napisać kod**: Użyj dowolnego edytora tekstu lub zintegrowanego środowiska programistycznego (IDE), np. Visual Studio Code, CLion lub Code::Blocks.
2. **Skompilować program**: Za pomocą kompilatora, takiego jak GCC czy Clang. W wierszu poleceń można wpisać:
   ```bash
   g++ -o program nazwa_pliku.cpp
   ```
   gdzie `-o` to flaga po której podaje się nazwę pliku wykonywalnego, `program` to nazwa pliku wykonywalnego, a `nazwa_pliku.cpp` to Twój plik z kodem.
   
3. **Uruchomić program**: wpisując:
   ```bash
   ./program
   ```
   na Linuxie lub:
   ```bash
   program
   ```
   na Windowsie.
## Podsumowanie

Podstawowa struktura programu w C++ jest prosta, ale zrozumienie jej fundamentów jest kluczowe, aby móc pisać bardziej złożone aplikacje. Warto zapamiętać, że każdy program rozpoczyna się od funkcji `main` i kończy instrukcją `return`. W kolejnych artykułach omówimy bardziej zaawansowane aspekty programowania w C++, takie jak zmienne, pętle czy funkcje.
