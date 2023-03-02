import "./style.scss";

import day01Photo from "./assets/day01-photo.png";
import day02Photo from "./assets/day02-photo.png";
import day03Photo from "./assets/day03-photo.png";
import day04Photo from "./assets/day04-photo.png";
import day05Photo from "./assets/day05-photo.png";

document.querySelector("#app").innerHTML = `
  <header>
    <h1>5 dias de (S)CSS</h1>
    <p>
      Desafios propostos pela 
      <a href="https://instagram.com/rocketseat">@rocketseat</a>
    </p>
  </header>

  <main>
    <article>
      <a href="/day01/">
      <img src="${day01Photo}" alt="" />
        <span>Dia 01</span>
      </a>
    </article>
    <article>
      <a href="/day02/">
      <img src="${day02Photo}" alt="" />
        <span>Dia 02</span>
      </a>
    </article>
    <article>
      <a href="/day03/">
      <img src="${day03Photo}" alt="" />
        <span>Dia 03</span>
      </a>
    </article>
    <article>
      <a href="/day04/">
      <img src="${day04Photo}" alt="" />
        <span>Dia 04</span>
      </a>
    </article>
    <article>
      <a href="/day05/">
      <img src="${day05Photo}" alt="" />
        <span>Dia 05</span>
      </a>
    </article>
  </main>

  <footer>
    Ver o repositório: 
    <a href="https://github.com/Poveii/5DiasDeCSS">5DiasDeCSS</a>
  </footer>
`;
