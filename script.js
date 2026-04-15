document.addEventListener("DOMContentLoaded", function () {
  const noticiasList = document.getElementById("noticias-list");

  // As mesmas notícias da página de Notícias!
  const noticias = [
    {
      titulo: "Pedro atinge marca histórica",
      descricao:
        "O atacante Pedro foi homenageado pelo clube após atingir uma marca histórica com o Manto Sagrado. Considerado por especialistas como o melhor centroavante em atividade no Brasil, ele retomou seu protagonismo e é o grande pilar do ataque rubro-negro na temporada.",
      imagem: "pedro.jpeg",
    },
    {
      titulo: "Foco total na Libertadores",
      descricao:
        "O Flamengo vive a expectativa para o importante duelo diante do Independiente Medellín. Com o elenco focado e força máxima disponível, o Rubro-Negro busca mais uma vitória crucial dentro do Maracanã nesta rodada da fase de grupos da competição continental.",
      imagem: "elenco.jpeg",
    },
    {
      titulo: "Samuel Lino ganha destaque",
      descricao:
        "Em excelente fase, Samuel Lino cresce de produção e se torna uma peça fundamental no esquema tático da equipe. Suas atuações recentes, marcadas por muita velocidade, dribles curtos e participações em gols, renderam muitos elogios dos torcedores e da mídia esportiva.",
      imagem: "lino.jpeg",
    },
  ];

  function renderizarNoticias() {
    noticiasList.innerHTML = "";

    noticias.forEach((noticia) => {
      // Usando a estrutura moderna de Card
      const card = document.createElement("div");
      card.classList.add("news-card");

      card.innerHTML = `
        <img src="${noticia.imagem}" alt="${noticia.titulo}" class="news-image">
        <div class="news-content">
          <h3 class="news-title">${noticia.titulo}</h3>
          <p class="news-text">${noticia.descricao}</p>
          <a href="notícias.html" class="leia-mais">Ler matéria completa</a>
        </div>
      `;

      noticiasList.appendChild(card);
    });
  }

  renderizarNoticias();

  // Comportamento do Header
  const logo = document.querySelector(".logo");
  const titulo = document.querySelector("header h1");

  function recarregarPagina() {
    location.reload();
    window.scrollTo(0, 0);
  }

  logo.addEventListener("click", recarregarPagina);
  titulo.addEventListener("click", recarregarPagina);

  // Barra de Pesquisa
  const searchBar = document.querySelector(".search-bar");
  searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase().trim();

    if (query === "noticia" || query === "notícias") {
      window.location.href = "notícias.html";
    } else if (query === "proximo" || query === "jogos") {
      window.location.href = "jogos.html";
    } else if (
      query === "tabela" ||
      query === "classificacao" ||
      query === "brasileirao"
    ) {
      window.location.href = "classificação.html";
    }
  });
});
