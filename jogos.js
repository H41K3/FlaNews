document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  const titulo = document.querySelector("header h1");

  function voltarParaPaginaPrincipal() {
    window.location.href = "index.html";
  }

  logo.addEventListener("click", voltarParaPaginaPrincipal);
  titulo.addEventListener("click", voltarParaPaginaPrincipal);

  const searchBar = document.querySelector(".search-bar");
  searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase().trim();

    if (query === "menu") {
      window.location.href = "index.html";
    } else if (query === "noticia" || query === "notícias") {
      window.location.href = "notícias.html";
    } else if (
      query === "tabela" ||
      query === "classificacao" ||
      query === "brasileirao"
    ) {
      window.location.href = "classificação.html";
    }
  });

  // Array com os próximos jogos divididos por competição
  const proximosJogos = [
    {
      competicao: "Libertadores",
      fase: "Fase de Grupos",
      data: "16/04/26",
      horario: "21h30",
      estadio: "Maracanã, RJ",
      mandante: "Flamengo",
      escudoMandante: "flamengo.png",
      visitante: "Indep. Medellín",
      escudoVisitante: "indep-medel.png",
      corCabecalho: "#D4AF37", // Dourado Libertadores
      corTexto: "#000",
    },
    {
      competicao: "Brasileirão",
      fase: "12ª Rodada",
      data: "19/04/26",
      horario: "16h00",
      estadio: "Allianz Parque, SP",
      mandante: "Palmeiras",
      escudoMandante: "palmeiras.png",
      visitante: "Flamengo",
      escudoVisitante: "flamengo.png",
      corCabecalho: "#00b16a", // Verde Brasileirão
      corTexto: "#fff",
    },
    {
      competicao: "Copa do Brasil",
      fase: "3ª Fase - Ida",
      data: "23/04/26",
      horario: "20h00",
      estadio: "Maracanã, RJ",
      mandante: "Flamengo",
      escudoMandante: "flamengo.png",
      visitante: "Vitória",
      escudoVisitante: "vitoria.png",
      corCabecalho: "#005baa", // Azul Copa do Brasil
      corTexto: "#fff",
    },
  ];

  const containerJogos = document.getElementById("jogos-container");

  // Renderiza os cards na tela
  proximosJogos.forEach((jogo) => {
    const card = document.createElement("div");
    card.classList.add("card-jogo");

    card.innerHTML = `
      <div class="card-header" style="background-color: ${jogo.corCabecalho}; color: ${jogo.corTexto};">
        <span class="competicao-nome">${jogo.competicao}</span>
        <span class="competicao-fase">${jogo.fase}</span>
      </div>
      <div class="card-body">
        <div class="confronto">
          <div class="time">
            <img src="${jogo.escudoMandante}" alt="${jogo.mandante}" class="escudo-jogo">
            <p>${jogo.mandante}</p>
          </div>
          <div class="vs">X</div>
          <div class="time">
            <img src="${jogo.escudoVisitante}" alt="${jogo.visitante}" class="escudo-jogo">
            <p>${jogo.visitante}</p>
          </div>
        </div>
        <div class="detalhes-jogo">
          <p><strong>📅 Data:</strong> ${jogo.data}</p>
          <p><strong>⏰ Horário:</strong> ${jogo.horario}</p>
          <p><strong>🏟️ Local:</strong> ${jogo.estadio}</p>
        </div>
      </div>
    `;

    containerJogos.appendChild(card);
  });
});
