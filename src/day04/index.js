import "./style.scss";

document.querySelector("#app").innerHTML = `
  <h1>Grayscale</h1>

  <div class="instructors-photos">
    <a 
      href="https://github.com/jakeliny" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Jake"
    >
      <img src="https://github.com/jakeliny.png" alt="" />
    </a>
    <a 
      href="https://github.com/diego3g" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Diego 2x"
    >
      <img src="https://github.com/diego3g.png" alt="" />
    </a>
    <a 
      href="https://github.com/maykbrito" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Maykão"
    >
      <img src="https://github.com/maykbrito.png" alt="" />
    </a>
    <a 
      href="https://github.com/rodrigorgtic" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Rodrigo Gonçalves, o cara"
    >
      <img src="https://github.com/rodrigorgtic.png" alt="" />
    </a>
    <a 
      href="https://github.com/birobirobiro" 
      target="_blank" 
      rel="noopener noreferrer"
      title="João, o BiroBiroBiro"
    >
      <img src="https://github.com/birobirobiro.png" alt="" />
    </a>
  </div>

  <a href="/" id="backToMenu">Voltar para o menu principal</a>
`;
