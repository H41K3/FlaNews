document.addEventListener("DOMContentLoaded", function () {
  // Captura os elementos da logo e do título
  const logo = document.querySelector(".logo");
  const titulo = document.querySelector("header h1");

  // Função para redirecionar para a página principal
  function voltarParaPaginaPrincipal() {
    window.location.href = "index.html"; // Altere "index.html" se a sua página principal tiver outro nome
  }

  // Adiciona o evento de clique na logo e no título
  logo.addEventListener("click", voltarParaPaginaPrincipal);
  titulo.addEventListener("click", voltarParaPaginaPrincipal);

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
    if (query === "menu") {
      window.location.href = "index.html"; // redireciona para a página principal
    } else if (query === "noticia") {
      window.location.href = "notícias.html"; // redireciona para a página de Notícias
    } else if (query === "proximo") {
      window.location.href = "jogos.html"; // redireciona para a página de Próximos Jogos
    } else if (query === "jogos") {
      window.location.href = "jogos.html"; // redireciona para a página de Próximos Jogos
    }
  });

  // Função para criar as linhas da tabela dinamicamente
  const tabela = document
    .getElementById("tabela-brasileirao")
    .getElementsByTagName("tbody")[0];

  times.forEach(function (time) {
    const linha = document.createElement("tr"); // Cria uma nova linha

    // Preenche a linha com os dados de cada time
    linha.innerHTML = `
      <td>${time.posicao}</td>
      <td>${time.nome}</td>
      <td>${time.jogos}</td>
      <td>${time.pontos}</td>
      <td>${time.vitorias}</td>
      <td>${time.empates}</td>
      <td>${time.derrotas}</td>
      <td>${time.gols}</td>
      <td>${time.golsSofridos}</td>
      <td>${time.saldoDeGols}</td>
    `;

    // Adiciona a linha à tabela
    tabela.appendChild(linha);
  });
});
