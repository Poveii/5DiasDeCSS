import "./style.scss";

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
      <img src="./assets/day01-photo.png" alt="" />
        <span>Dia 01</span>
      </a>
    </article>
    <article>
      <a href="/day02/">
      <img src="./assets/day02-photo.png" alt="" />
        <span>Dia 02</span>
      </a>
    </article>
    <article>
      <a href="/day03/">
      <img src="./assets/day03-photo.png" alt="" />
        <span>Dia 03</span>
      </a>
    </article>
    <article>
      <a href="/day04/">
      <img src="./assets/day04-photo.png" alt="" />
        <span>Dia 04</span>
      </a>
    </article>
    <article>
      <a href="/day05/">
      <img src="./assets/day05-photo.png" alt="" />
        <span>Dia 05</span>
      </a>
    </article>
  </main>

  <footer>
    Ver o repositório: 
    <a href="https://github.com/Poveii/5DiasDeCSS">5DiasDeCSS</a>
  </footer>
`;
