import "./style.scss";

document.getElementById("app").innerHTML = `
  <h1>Social Media Icons</h1>

  <ul>
    <li>
      <a href="https://www.linkedin.com/in/poveii/" target="_blank" rel="noopener noreferrer" class="ph-linkedin-logo"></a>
    </li>

    <li>
      <a href="https://www.instagram.com/poveiii/" target="_blank" rel="noopener noreferrer" class="ph-instagram-logo"></a>
    </li>

    <li>
      <a href="https://github.com/Poveii" target="_blank" rel="noopener noreferrer" class="ph-github-logo"></a>
    </li>

    <li>
      <a href="https://www.tabnews.com.br/Poveii" target="_blank" rel="noopener noreferrer" class="ph-tabnews-logo">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.7187 15.9018C46.7187 12.5042 43.9569 9.75 40.5499 9.75H11.2471C7.84008 9.75 5.07812 12.5042 5.07812 15.9018V35.8952C5.07812 39.2927 7.84008 42.0469 11.2471 42.0469H40.5499C43.9569 42.0469 46.7187 39.2927 46.7187 35.8952V15.9018ZM9.16723 35.6548V16.1421C9.16723 14.6557 10.047 13.518 11.5525 13.518H22.1161C23.2333 13.518 23.7483 15.6553 24.1606 16.6804L25.529 19.8428C25.9414 20.8679 26.9455 21.1885 28.0627 21.1885H40.517C42.0226 21.1885 42.5615 21.5249 42.5615 22.5342V35.6548C42.5615 37.1412 41.6818 38.3463 40.1762 38.3463H11.5525C10.047 38.3463 9.16723 37.1412 9.16723 35.6548Z" fill="currentColor"/>
        </svg>
      </a>
    </li>
  </ul>

  <a href="/" id="backToMenu">Voltar para o menu principal</a>
`;
