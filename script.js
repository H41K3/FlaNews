document.addEventListener("DOMContentLoaded", function () {
  const noticiasList = document.getElementById("noticias-list");

  const noticias = [
    {
      titulo: "De saída",
      descricao:
        "Em entrevista pós-jogo, Gabigol anunciou que está se despedindo do clube rubro-negro após sete anos repletos de conquistas, recordes e vitórias.",
      imagem: "GABIGOL.webp",
    },
    {
      titulo: "Flamengo conquista sua 5ª CDB",
      descricao:
        "Em dois jogos eletrizantes, o Flamengo de Filipe Luís bate o Atlético-MG de Gabriel Milito por 4x1 no placar agregado e fatura a Copa do Brasil de 2024.",
      imagem: "FLAMENGO-CAMPEAO.avif",
    },
    {
      titulo: "Vai ficar",
      descricao:
        "Após conquistar o título da Copa do Brasil, a diretoria do clube confirmou o atual técnico interino da equipe rubro-negra para a próxima temporada.",
      imagem: "FILIPE-LUIS.jpeg",
    },
  ];

  // função para renderizar as notícias
  function renderizarNoticias() {
    noticiasList.innerHTML = ""; // limpa a lista antes de adicionar as novas notícias
    noticias.forEach((noticia) => {
      const noticiaElemento = document.createElement("div");
      noticiaElemento.classList.add("noticia");

      // adiciona a imagem
      const imagem = document.createElement("img");
      imagem.src = noticia.imagem;
      imagem.alt = noticia.titulo;
      imagem.classList.add("imagem-noticia");

      // adiciona o título
      const titulo = document.createElement("h3");
      titulo.textContent = noticia.titulo;

      // adiciona a descrição
      const descricao = document.createElement("p");
      descricao.textContent = noticia.descricao;

      // adiciona todos os elementos dentro do bloco de notícia
      noticiaElemento.appendChild(imagem);
      noticiaElemento.appendChild(titulo);
      noticiaElemento.appendChild(descricao);

      // adiciona o bloco de notícia à lista
      noticiasList.appendChild(noticiaElemento);
    });
  }

  // renderiza as notícias quando o DOM estiver pronto
  renderizarNoticias();

  // evento para recarregar a página e voltar ao topo quando clicar na logo ou no título "FlaNews"
  const logo = document.querySelector(".logo");
  const titulo = document.querySelector("header h1");

  // função para recarregar a página e voltar ao topo
  function recarregarPagina() {
    location.reload(); // recarrega a página
    window.scrollTo(0, 0); // volta para o topo após o reload
  }

  // adiciona o evento de clique à logo e ao título
  logo.addEventListener("click", recarregarPagina);
  titulo.addEventListener("click", recarregarPagina);

  // código de rolagem suave para os links de navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // impede o comportamento padrão de rolagem do link

      const targetId = this.getAttribute("href").substring(1); // Obtém o ID do destino
      const targetElement = document.getElementById(targetId); // Elemento de destino

      // calcula o offset do topo e ajusta a rolagem
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetOffsetTop = targetElement.offsetTop;

      // ajusta a rolagem levando em consideração a altura do cabeçalho
      window.scrollTo({
        top: targetOffsetTop - headerHeight, // ajusta para a altura do cabeçalho
        behavior: "smooth", // rolagem suave
      });
    });
  });

  // adiciona o evento de captura de digitação na barra de pesquisa
  const searchBar = document.querySelector(".search-bar");
  searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase().trim();

    // verifica o valor digitado e redireciona para a página correspondente
    if (query === "noticia") {
      window.location.href = "notícias.html"; // redireciona para a página de Notícias
    } else if (query === "proximo") {
      window.location.href = "jogos.html"; // redireciona para a página de Próximos Jogos
    } else if (query === "jogos") {
      window.location.href = "jogos.html"; // redireciona para a página de Próximos Jogos
    } else if (query === "tabela") {
      window.location.href = "classificação.html"; // redireciona para a página da Tabela Brasileirão
    } else if (query === "classificacao") {
      window.location.href = "classificação.html"; // redireciona para a página da Tabela Brasileirão
    } else if (query === "brasileirao") {
      window.location.href = "classificação.html"; // redireciona para a página da Tabela Brasileirão
    }
  });
});
