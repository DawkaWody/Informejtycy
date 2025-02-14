---
draft: false
title: 'Jak zacząć?'
id: 1
nerd: false
---

# Jak zacząć?

## Kompilatory online i edytory

Podstawowym narzędziem, bez którego nie da się rozpocząć nauki programowania, jest kompilator. Jest to miejsce, w którym nasz kod jest tłumaczony na język zrozumiały przez komputer, a następnie uruchamiany. Na samym początku można korzystać z kompilatorów online. W tym celu polecamy używanie:

- [ideone.com](https://ideone.com/l/cpp)
- [Programiz](https://www.programiz.com/cpp-programming/online-compiler/)
- [myCompiler](https://www.mycompiler.io/new/cpp)

Jeśli chcesz mieć pobrany program edytor kodu, aby móc zapisywać swoje odpowiedzi do zadań, polecamy:

- Dla systemu Windows/Linux:
  - **[REKOMENDOWANE]** [Code::Blocks](https://www.codeblocks.org) - istotne jest to by nazwa pobieranej wersji kończyła się na `mingw-setup`, na przykład `codeblocks-20.03mingw-setup.exe` (ta wersja ma instalator i wbudowany kompilator, czyli język C++).
  - [Microsoft Visual Studio](https://visualstudio.microsoft.com/pl/)
- Dla systemu macOS:
  - [Xcode](https://developer.apple.com/xcode/)
  - [Microsoft Visual Studio](https://visualstudio.microsoft.com/pl/)

Kompilatorem C++ jest g++. Jest on automatycznie wbudowany w Code::Blocks oraz Xcode, ale można go też uruchomić, korzystając z terminala. Zachęcamy do zapoznania się z nim, aczkolwiek na sam początek proponujemy pobrać jeden z wymienionych wyżej programów.

## Manualna instalacja kompilatora g++ na Windowsie

**Uwaga:** instalacja kompilatora i korzystanie z niego wymaga obsługi konsoli (wiersza poleceń) systemu Linux. **Na początek rekomendujemy korzystanie z edytora Code::Blocks lub kompilatorów online.**

Jeżeli nie zdecydowałeś się na Code::Blocks'a lub chcesz korzystać z Visual Studio Code, należy pobrać kompilator bezpośrednio. Na Windowsie, kompilator G++ instalujemy przez środowisko MSYS2 - na naszym komputerze zostanie zainstalowane kilka konsoli: `MINGW`, `CLANG` i `UCRT`.

1. Wchodzimy na [github msys2](https://github.com/msys2/msys2-installer/releases/tag/nightly-x86_64).
2. Wybieramy pozycję `msys2-x86_64-latest.exe` i po pobraniu go uruchamiamy.
3. Instalujemy MSYS2 - zostawiamy domyślną ścieżkę instalacji i wybieramy, czy chcemy mieć skróty konsol w menu start.
4. Kiedy się zainstaluje, uruchamiamy `mingw64.exe`.
5. Wpisujemy `pacman -S mingw64/mingw-w64-x86_64-gcc` i po komunikacie `Proceed with installation? [Y/n]` klikamy `y`.
6. Teraz możemy sprawdzić, czy `g++` został zainstalowany, wpisując `g++ -v` albo `gcc -v`. Powinno wypisać się sporo tekstu.
7. Następnie wpisujemy `cd c:` - umieści nas to w katalogu dysku C. Z niego możemy znawigować folder, w którym będziemy pisać nasze programy.

## Podsumowanie

Jeżeli masz już przygotowany kompilator online, zainstalowany Code::Blocks lub pobrany kompilator bezpośrednio, możesz przejść do pierwszej lekcji.
