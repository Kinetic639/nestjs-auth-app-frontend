<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Kinetic639/nestjs-auth-app-frontend">
    <img src="./readme/logo.png" alt="Logo" width="226" height="160">
  </a>

<h1 align="center">[FE] MegaK - Head Hunter</h1>

  <p align="center">
    Aplikacja "MegaK - Head Hunter" została stworzona aby łączyć kursantów MegaK z potencjalnymi pracodawcami, którzy szukają uzdolnionych i ambitnych programistów.
    <br />
    <br />
<!--
    <a href="https://github.com/Kinetic639/nestjs-auth-app-frontend">View Demo</a>
    ·
    <a href="https://github.com/Kinetic639/nestjs-auth-app-frontend/issues">Report Bug</a>
    ·
    <a href="https://github.com/Kinetic639/nestjs-auth-app-frontend/issues">Request Feature</a>
-->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Spis treści</summary>
  <ol>
    <li>
      <a href="#o-projekcie">O projekcie</a>
      <ul>
        <li><a href="#technologie">Technologie</a></li>
      </ul>
    </li>
    <li>
      <a href="#jak-zacząć">Jak zacząć</a>
      <ul>
        <li><a href="#warunki-wstepne">Warunki wstępne</a></li>
        <li><a href="#instalacja">Instalacja</a></li>
      </ul>
    </li>
    <li>
      <a href="#użycie">Użycie</a>
      <ul>
        <li><a href="#admin">Admin</a></li>
        <li><a href="#hr">Hr</a></li>
        <li><a href="#kursant">Kursant</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## O projekcie

![Product Name Screen Shot][product-screenshot]

Projekt został stworzony na potrzeby MegaK. Aplikacja ma na celu pomóc kursantom w znalezieniu pracy, a firmom w znalezieniu zdolnych, początkujących programistów. Aplikacja zawiera trzy role.
1. **Admin** - czuwa nad przebiegiem rekrutacji
2. **Hr** - posiada uprawnienia do wyświetlania listy kursantów, brania kursantów na rozmowy oraz ich zatrudniania.
3. **Kursant** - posiada możliwość wyświetlania własnego profilu, a także możliwość edytowania go. Kursant ma również możliwość zmiany statusu konta na "zatrudniony"

<p align="right">(<a href="#top">back to top</a>)</p>



### Technologie
[![React][React.js]][React-url]
[![Typescript][Typescript]][Typescript-url]
[![Sass][Sass]][Sass-url]
[![Reactrouter][Reactrouter]][Reactrouter-url]
[![Papaparse][Papaparse]][Papaparse-url]
[![Axios][Axios]][Axios-url]
[![Dropzone][Dropzone]][Dropzone-url]
[![Reacttoastify][Reacttoastify]][Reacttoastify-url]
[![Reactpopup][Reactpopup]][Reactpopup-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Jak zacząć

### Warunki wstępne

* npm
  ```sh
  npm@^6.14.15
  ```

### Instalacja

1. Sklonuj repozytorium
   ```sh
   git clone https://github.com/Kinetic639/nestjs-auth-app-frontend.git
   ```
2. Przejdź do katalogu projektu
   ```sh
   cd head-hunter-fe
   ```
2. Zainstaluj wszystkie zależności
   ```sh
   npm install
   ```
3. Podaj adres url do api `src/config.js`
   ```js
   export const apiUrl = process.env.REACT_APP_API_URL ?? 'http://localhost:3001/api';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Użycie

### Admin
1. **Dodawanie kursantów - należy przenieść i upuścić plik csv lub nacisnąć przycisk "upuść plik csv" i wybrać plik. Następnie zapisać przyciskiem "zapisz". Po tym do wszystkich kursantów zostanie wysłany link z dokończeniem rejestracji.**.
   <br/>
   <br/>
   ![add-students-screenshot]
   ![add-students-2-screenshot]
   ![csv-screenshot]
   *Przykładowy plik csv ^*
   <br/>
   <br/>
2. **Dodawanie hr - należy wypełnić wszystkie dane i kliknąć przycisk "Dodaj". Po tym zostanie wysłany link rejestracyjny na podanego maila.**
   <br />
   <br />
   ![add-hr-screenshot]
   <br />
   <br />
3. **Zmiana hasła - Admin ma możliwość zmiany swojego hasła**
   <br />
   <br />
   ![admin-change-password-screenshot]
   <br />
   <br />
4. **Powiadomienia - akcje, o których admin musi, wiedzieć zostają wyświetlone w zakładce powiadomienia. Można je wyszukiwać, używając imienia, nazwiska lub id użytkownika**
   <br />
   <br />
   ![notification-screenshot]
   <br />
   <br />
<p align="right">(<a href="#top">back to top</a>)</p>

### Hr
1. **Dostępni kursanci - Hr ma możliwość przeglądania dostępnych kursantów i zarezerwowania go na rozmowę.**
   <br />
   <br />
   ![product-screenshot]
   <br />
   <br />
2. **Do rozmowy - znajdują się tu wszystkie osoby zaproszone wcześniej na rozmowę. Hr może zatrudnić daną osobę, zrezygnować z zatrudnienia lub otworzyć cv danego kursanta**
   <br />
   <br />
   ![interview-screenshot]
   <br />
   <br />
3. **Zmiana hasła - Hr ma możliwość zmiany hasła**
   <br />
   <br />
   ![hr-change-password-screenshot]
   <br />
   <br />
4. **Cv kursanta - hr może wyświetlić cv kursantów**
   <br />
   <br />
   ![cv-screenshot]
   <br />
   <br />
<p align="right">(<a href="#top">back to top</a>)</p>

### Kursant
1. **CV - kursant widzi swoje cv**
   <br />
   <br />
   ![cv-screenshot]
   <br />
   <br />
2. **Edycja konta - kursant ma możliwość edycji swojego CV, a także zmianę innych danych jak np. hasło lub email.**
   <br />
   <br />
   ![student-edit-screenshot]
   <br />
   <br />
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Kinetic639/nestjs-auth-app-frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/Kinetic639/nestjs-auth-app-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kinetic639/nestjs-auth-app-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/Kinetic639/nestjs-auth-app-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/Kinetic639/nestjs-auth-app-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/Kinetic639/nestjs-auth-app-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/Kinetic639/nestjs-auth-app-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/Kinetic639/nestjs-auth-app-frontend/issues
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Sass]: https://img.shields.io/badge/sass-20232A?style=for-the-badge&logo=sass&logoColor=d5699f
[Sass-url]: https://sass-lang.com/
[Papaparse]: https://img.shields.io/badge/Papa%20Parse-20232A?style=for-the-badge&logo=papaparse&logoColor=1D80AB
[Papaparse-url]: https://www.papaparse.com/
[Axios]: https://img.shields.io/badge/axios-20232A?style=for-the-badge&logo=axios&logoColor=1D80AB
[Axios-url]: https://axios-http.com/docs/intro
[Dropzone]: https://img.shields.io/badge/react%20dropzone-20232A?style=for-the-badge&logo=reactdropzone&logoColor=1D80AB
[Dropzone-url]: https://react-dropzone.js.org/
[Typescript]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript&logoColor=3178c6
[Typescript-url]: https://www.typescriptlang.org/
[Reactrouter]: https://img.shields.io/badge/React%20Router-20232A?style=for-the-badge&logo=reactrouter&logoColor=fff
[Reactrouter-url]: https://reactrouter.com/
[Reacttoastify]: https://img.shields.io/badge/react%20toastify-20232A?style=for-the-badge&logo=react-toastify&logoColor=fff
[Reacttoastify-url]: https://fkhadra.github.io/react-toastify/introduction
[Reactpopup]: https://img.shields.io/badge/reactjs%20popup-20232A?style=for-the-badge&logo=reactjs-popup&logoColor=fff
[Reactpopup-url]: https://react-popup.elazizi.com/
[Reactrouter]: https://img.shields.io/badge/react%20spinners-20232A
[product-screenshot]: readme/available.png
[add-students-screenshot]: readme/add-students.png
[add-students-2-screenshot]: readme/add-students-2.png
[csv-screenshot]: readme/csv.png
[add-hr-screenshot]: readme/add-hr.png
[admin-change-password-screenshot]: readme/admin-change-password.png
[notification-screenshot]: readme/notification.png
[interview-screenshot]: readme/interview.png
[hr-change-password-screenshot]: readme/hr-change-password.png
[cv-screenshot]: readme/cv.png
[student-edit-screenshot]: readme/student-edit.png
