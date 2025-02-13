---
draft: false
title: 'Map i Unordered map'
id: 9
nerd: true
---
# Map i Unordered map
## Map
Mapa służy do przyporządkowywania danym kluczom pewnych wartości. Aby jej użyć należy zaincludować bibliotekę map. Klucz to wartość występująca jako pierwsza.
```cpp
#include<map>
```
## Inicjowanie mapy
Mapę tworzy się bardzo podobnie do pary. Należy podać w nawiasie ostrokątnym dwa typy zmiennych, gdyż pierwszy element jest odpowiednikiem drugiego.
```cpp
map <string, string> glosy = {{"Ania", "mezzosopran"}, {"Beatka", "alt"}, {"Czarek", "tenor"}};
```

## Odwoływanie się do elementów mapy
Odwoływanie się w mapie polega na dostawaniu się do wartości kryjącej się pod kluczem. Robimy to, stosując nawiasy kwadratowe lub komendę `nazwa_mapy.at(wartość)`. Co ciekawe jeśli odwołujemy się do klucza, który nie istnieje, automatycznie się on tworzy. Jeśli nie podamy wartości, jakiej powinien przypadać klucz, to ten drugi element będzie się równał:
- string - ""
- int - 0
- long long - 0
- bool - 0 (false)
```cpp
map <string, string> glosy = {{"Ania", "mezzosopran"}, {"Beatka", "alt"}, {"Czarek", "tenor"}};
cout << glosy["Beatka"] << endl;
```
W tym przypadku wypisze się wyraz "alt".

## Dodawanie elementów
Elementy dodajemy do mapy poprzez użycie nawiasów kwadratowych lub komendy `nazwa_mapy.insert(wartość)`.
```cpp
map <string, string> glosy = {{"Ania", "mezzosopran"}, {"Beatka", "alt"}, {"Czarek", "tenor"}};

glosy["Darek"] = "bas";
glosy["Ela"] = "sopran";
glosy.insert({"Franek", "baryton"});
```
Jeżeli dwa razy dodamy metodą insert ten sam klucz, ale z inną drugą wartością, zachowana zostanie jedynie ta, którą dodaliśmy jako pierwszą, np.:
```cpp
map <string, string> glosy = {{"Ania", "mezzosopran"}, {"Beatka", "alt"}, {"Czarek", "tenor"}};

glosy.insert({"Darek", "bas"});
glosy.insert({"Darek", "kontratenor"});

cout << glosy["Darek"] << endl;
```
W takim wypadku pod kluczem "Darek" jest zachowany "bas".

Nie oznacza to jednak, że nie możemy zmieniać wartości przypadających kluczom. Możemy tego dokonać, używając nawiasów kwadratowych:
```cpp
map <string, string> glosy = {{"Ania", "mezzosopran"}, {"Beatka", "alt"}, {"Czarek", "tenor"}};

glosy["Darek"] = "bas";
glosy["Darek"] = "kontratenor";

cout << glosy["Darek"] << endl;
```
W tej sytuacji wypisze się wyraz "kontratenor".

## Funkcje używane przy mapie
Aby dowiedzieć się, jaki rozmiar ma mapa, stosujemy:
```cpp
glosy.size();
```
Aby usunąć dany klucz, wykorzystujemy:
```cpp
glosy.erase("Czarek");
```
Aby usunąć wszystkie elementy mapy, korzystamy z:
```cpp
glosy.clear();
```
Aby sprawdzić, czy mapa jest pusta,. używamy:
```cpp
glosy.empty();
```
Jeżeli wypisze się "0", to mapa nie jest pusta. Natomiast, gdy dostaniemy "1", będzie to oznaczało, że w mapie nic się nie znajduje.

Aby sprawdzić, czy dany element znajduje się w mapie, wykorzystujemy:
```cpp
glosy.count("Ania");
```
Aby odnaleźć pierwszy elementy niemniejszy od x, zapisujemy:
```cpp
glosy.lower_bound(x);
```
Aby odnaleźć pierwszy element większy od x, stosujemy:
```cpp
glosy.upper_bound(x);
```

## Pętla przez mapę
Jeśli chcemy przejść pętlą po całej mapie i wypisać klucze oraz odpowiadające im wartości wykorzystujemy `.first` oraz `.second`:
```cpp
map <string, string> glosy = {{"Ania", "mezzosopran"}, {"Beatka", "alt"}, {"Czarek", "tenor"}};

for (pair osoby : glosy) {
	cout << osoby.first << ' ' << osoby.second << endl;
}
```
W powyższym przykładzie "osoby" odpowiada każdemu kluczowi.

## Unordered map
Jeśli chcemy użyć unordered map, musimy zaincludować odpowiednią bibliotekę.
```cpp
#include<unordered_map>
```
Różnica pomiędzy zwykłą mapą a unordered map polega na tym, że ta druga nie jest automatycznie sortowana po kluczach. Dzięki temu szacowana złożoność czasowa wynosi O(1). Oznacza to jednak, że ten typ mapy nie zawsze działa w czasie stałym. W najgorszym wypadku jej złożoność będzie równa O(n). Jednakże, przy wykonaniu wielu operacji, złożoność się uśrednia i wyjątki te nie odgrywają aż tak istotnej roli. W związku z tym ten rodzaj mapy jest z reguły szybszy od zwykłego jej wariantu. Aby zobrazować różnicę między tymi mapami, możemy prześledzić wyniki poniższych programów:
```cpp
map <string, string> glosy = {{"Czarek", "tenor"}, {"Ania", "mezzosopran"}, {"Beatka", "alt"}};

for (auto osoby : glosy) {
	cout << osoby.first << ' ' << osoby.second << endl;
}
```
W tym wypadku wynikiem będzie:
```cpp
Ania mezzosopran
Beatka alt
Czarek tenor
```
Natomiast gdy to samo wykonamy w unordered map:
```cpp
unordered_map <string, string> glosy = {{"Czarek", "tenor"}, {"Ania", "mezzosopran"}, {"Beatka", "alt"}};

for (pair osoby : glosy) {
	cout << osoby.first << ' ' << osoby.second << endl;
}
```
Dostaniemy:
```cpp
Beatka alt
Ania mezzosopran
Czarek tenor
```
Jest to przykład, że w unordered map kolejność elementów jest losowa, a w zwykłej mapie - posortowana.

Funkcje działające w unordered map nie różnią się od tych dotyczących normalnej mapy, oczywiście oprócz `lower_bound` i `upper_bound`.