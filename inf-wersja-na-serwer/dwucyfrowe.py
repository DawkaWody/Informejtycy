import os
import re

# Funkcja do zmiany nazw plików
def zmien_nazwe_pliku(nazwa_pliku):
    # Wyrażenie regularne do dopasowania wzorca [cyfra]-[liczba jedno lub dwucyfrowa]-[nazwa zadania].md
    wzorzec = r'(\d+)-(\d{1,2})-(.*)\.md'
    dopasowanie = re.match(wzorzec, nazwa_pliku)
    
    if dopasowanie:
        cyfra = dopasowanie.group(1)
        liczba = dopasowanie.group(2).zfill(2)  # Dodajemy zeru, jeżeli liczba jest jednocyfrowa
        nazwa_zadania = dopasowanie.group(3)
        
        # Tworzymy nową nazwę pliku
        nowa_nazwa = f"{cyfra}-{liczba}-{nazwa_zadania}.md"
        return nowa_nazwa
    return None

# Funkcja do przetworzenia folderu
def przetworz_folder(folder):
    # Iteracja po wszystkich plikach w folderze
    for plik in os.listdir(folder):
        sciezka_pliku = os.path.join(folder, plik)
        
        # Sprawdzamy, czy to plik
        if os.path.isfile(sciezka_pliku):
            nowa_nazwa = zmien_nazwe_pliku(plik)
            if nowa_nazwa:
                sciezka_nowej_nazwy = os.path.join(folder, nowa_nazwa)
                os.rename(sciezka_pliku, sciezka_nowej_nazwy)
                print(f"Zmieniono nazwę pliku: {plik} -> {nowa_nazwa}")

# Wskazujemy folder do przetworzenia
folder_do_przetworzenia = 

# Uruchamiamy proces zmiany nazw plików
przetworz_folder(folder_do_przetworzenia)
