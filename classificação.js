document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  const titulo = document.querySelector("header h1");

  function voltarParaPaginaPrincipal() {
    window.location.href = "index.html"; 
  }

  logo.addEventListener("click", voltarParaPaginaPrincipal);
  titulo.addEventListener("click", voltarParaPaginaPrincipal);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); 
      const targetId = this.getAttribute("href").substring(1); 
      const targetElement = document.getElementById(targetId); 
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetOffsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: targetOffsetTop - headerHeight, 
        behavior: "smooth", 
      });
    });
  });

  const searchBar = document.querySelector(".search-bar");
  searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase().trim();

    if (query === "menu") {
      window.location.href = "index.html"; 
    } else if (query === "noticia" || query === "notícias") {
      window.location.href = "notícias.html"; 
    } else if (query === "proximo" || query === "jogos") {
      window.location.href = "jogos.html"; 
    }
  });

  // Array atualizado com o histórico de partidas EXATO aos prints do GE
  const times = [
    { posicao: 1, nome: "Palmeiras", escudo: "palmeiras.png", jogos: 11, pontos: 26, vitorias: 8, empates: 2, derrotas: 1, gols: 21, golsSofridos: 10, saldoDeGols: 11, forma: ['v', 'v', 'v', 'v', 'e'] },
    { posicao: 2, nome: "Flamengo", escudo: "flamengo.png", jogos: 10, pontos: 20, vitorias: 6, empates: 2, derrotas: 2, gols: 18, golsSofridos: 10, saldoDeGols: 8, forma: ['v', 'e', 'd', 'v', 'v'] },
    { posicao: 3, nome: "São Paulo", escudo: "sp.png", jogos: 11, pontos: 20, vitorias: 6, empates: 2, derrotas: 3, gols: 15, golsSofridos: 9, saldoDeGols: 6, forma: ['d', 'd', 'e', 'v', 'd'] },
    { posicao: 4, nome: "Fluminense", escudo: "fluminense.png", jogos: 11, pontos: 20, vitorias: 6, empates: 2, derrotas: 3, gols: 18, golsSofridos: 13, saldoDeGols: 5, forma: ['d', 'v', 'v', 'e', 'd'] },
    { posicao: 5, nome: "Bahia", escudo: "bahia.png", jogos: 10, pontos: 20, vitorias: 6, empates: 2, derrotas: 2, gols: 15, golsSofridos: 10, saldoDeGols: 5, forma: ['v', 'd', 'v', 'd', 'v'] },
    { posicao: 6, nome: "Athletico-PR", escudo: "atl-pr.png", jogos: 11, pontos: 19, vitorias: 6, empates: 1, derrotas: 4, gols: 17, golsSofridos: 13, saldoDeGols: 4, forma: ['v', 'v', 'd', 'd', 'v'] },
    { posicao: 7, nome: "Coritiba", escudo: "coritiba.png", jogos: 11, pontos: 16, vitorias: 4, empates: 4, derrotas: 3, gols: 13, golsSofridos: 12, saldoDeGols: 1, forma: ['v', 'd', 'e', 'e', 'e'] },
    { posicao: 8, nome: "Atlético-MG", escudo: "atl-mg.png", jogos: 11, pontos: 14, vitorias: 4, empates: 2, derrotas: 5, gols: 14, golsSofridos: 13, saldoDeGols: 1, forma: ['v', 'd', 'v', 'v', 'd'] },
    { posicao: 9, nome: "Bragantino", escudo: "braga.png", jogos: 11, pontos: 14, vitorias: 4, empates: 2, derrotas: 5, gols: 11, golsSofridos: 12, saldoDeGols: -1, forma: ['d', 'd', 'v', 'v', 'd'] },
    { posicao: 10, nome: "Vitória", escudo: "vitoria.png", jogos: 10, pontos: 14, vitorias: 4, empates: 2, derrotas: 4, gols: 11, golsSofridos: 14, saldoDeGols: -3, forma: ['d', 'v', 'd', 'e', 'v'] },
    { posicao: 11, nome: "Botafogo", escudo: "botafogo.png", jogos: 10, pontos: 13, vitorias: 4, empates: 1, derrotas: 5, gols: 18, golsSofridos: 21, saldoDeGols: -3, forma: ['d', 'v', 'v', 'v', 'e'] },
    { posicao: 12, nome: "Grêmio", escudo: "gremio.png", jogos: 11, pontos: 13, vitorias: 3, empates: 4, derrotas: 4, gols: 14, golsSofridos: 14, saldoDeGols: 0, forma: ['v', 'd', 'd', 'e', 'e'] },
    { posicao: 13, nome: "Vasco", escudo: "vasco.png", jogos: 11, pontos: 13, vitorias: 3, empates: 4, derrotas: 4, gols: 16, golsSofridos: 17, saldoDeGols: -1, forma: ['v', 'v', 'e', 'd', 'e'] },
    { posicao: 14, nome: "Internacional", escudo: "inter.png", jogos: 11, pontos: 13, vitorias: 3, empates: 4, derrotas: 4, gols: 9, golsSofridos: 10, saldoDeGols: -1, forma: ['v', 'v', 'e', 'v', 'e'] },
    { posicao: 15, nome: "Santos", escudo: "santos.png", jogos: 11, pontos: 13, vitorias: 3, empates: 4, derrotas: 4, gols: 14, golsSofridos: 16, saldoDeGols: -2, forma: ['d', 'e', 'v', 'd', 'v'] },
    { posicao: 16, nome: "Corinthians", escudo: "corinthians.png", jogos: 11, pontos: 11, vitorias: 2, empates: 5, derrotas: 4, gols: 8, golsSofridos: 11, saldoDeGols: -3, forma: ['e', 'e', 'd', 'd', 'e'] },
    { posicao: 17, nome: "Cruzeiro", escudo: "cruzeiro.png", jogos: 11, pontos: 10, vitorias: 2, empates: 4, derrotas: 5, gols: 14, golsSofridos: 21, saldoDeGols: -7, forma: ['d', 'e', 'v', 'd', 'v'] },
    { posicao: 18, nome: "Remo", escudo: "remo.png", jogos: 11, pontos: 8, vitorias: 1, empates: 5, derrotas: 5, gols: 11, golsSofridos: 18, saldoDeGols: -7, forma: ['d', 'v', 'd', 'e', 'e'] },
    { posicao: 19, nome: "Chapecoense", escudo: "chape.png", jogos: 10, pontos: 8, vitorias: 1, empates: 5, derrotas: 4, gols: 10, golsSofridos: 18, saldoDeGols: -8, forma: ['e', 'd', 'd', 'e', 'd'] },
    { posicao: 20, nome: "Mirassol", escudo: "mirassol.png", jogos: 10, pontos: 6, vitorias: 1, empates: 3, derrotas: 6, gols: 11, golsSofridos: 16, saldoDeGols: -5, forma: ['d', 'd', 'd', 'd', 'd'] }
  ];

  const tabela = document.getElementById("tabela-corpo");

  times.forEach(function (time) {
    const linha = document.createElement("tr");

    let ultimosJogosHTML = `<div class="bolinhas-container">`;
    time.forma.forEach(resultado => {
      let classeCor = resultado.toLowerCase(); 
      ultimosJogosHTML += `<span class="bolinha ${classeCor}" title="${resultado.toUpperCase()}"></span>`;
    });
    ultimosJogosHTML += `</div>`;

    linha.innerHTML = `
      <td>${time.posicao}</td>
      <td class="coluna-clube">
        <img src="${time.escudo}" alt="Logo do ${time.nome}" class="logo" />
        ${time.nome}
      </td>
      <td>${time.jogos}</td>
      <td><strong>${time.pontos}</strong></td>
      <td>${time.vitorias}</td>
      <td>${time.empates}</td>
      <td>${time.derrotas}</td>
      <td>${time.gols}</td>
      <td>${time.golsSofridos}</td>
      <td>${time.saldoDeGols}</td>
      <td>${ultimosJogosHTML}</td>
    `;

    tabela.appendChild(linha);
  });
});