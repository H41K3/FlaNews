document.addEventListener("DOMContentLoaded", function () {
  const noticiasList = document.getElementById("noticias-list");

  // Últimas Notícias usando as suas imagens exatas e textos complementares
  const noticias = [
    {
      titulo: "Pedro atinge marca histórica",
      descricao:
        "O atacante Pedro foi homenageado pelo clube após atingir uma marca histórica com o Manto Sagrado. Considerado por especialistas como o melhor centroavante em atividade no Brasil, ele retomou seu protagonismo e é o grande pilar do ataque rubro-negro na temporada.",
      textoCompleto:
        "Na cerimônia realizada no Ninho do Urubu, o camisa 9 recebeu uma placa comemorativa das mãos da diretoria. Com impressionantes números nesta temporada, Pedro se isolou ainda mais na lista dos maiores artilheiros da história do clube no século XXI. O técnico Leonardo Jardim fez questão de ressaltar a ética de trabalho do jogador: 'Ele é o primeiro a chegar e o último a sair. Essa marca é fruto de muita dedicação diária'.",
      imagem: "pedro.jpeg", 
    },
    {
      titulo: "Foco total na Libertadores",
      descricao:
        "O Flamengo vive a expectativa para o importante duelo diante do Independiente Medellín. Com o elenco focado e força máxima disponível, o Rubro-Negro busca mais uma vitória crucial dentro do Maracanã nesta rodada da fase de grupos da competição continental.",
      textoCompleto:
        "A comissão técnica confirmou que os treinamentos da semana focaram em jogadas de bola parada e transições rápidas. Com o Maracanã lotado, a equipe espera impor seu ritmo desde os primeiros minutos. Além disso, o departamento médico liberou dois titulares importantes que haviam sido poupados na última rodada do Brasileirão, dando a Leonardo Jardim o seu 'time ideal' para o confronto.",
      imagem: "elenco.jpeg", 
    },
    {
      titulo: "Samuel Lino ganha destaque",
      descricao:
        "Em excelente fase, Samuel Lino cresce de produção e se torna uma peça fundamental no esquema tático da equipe. Suas atuações recentes, marcadas por muita velocidade, dribles curtos e participações em gols, renderam muitos elogios dos torcedores e da mídia esportiva.",
      textoCompleto:
        "Contratado para dar mais profundidade e agressividade pelas pontas, Lino lidera as estatísticas de assistências do time no mês. Em coletiva recente, o jogador destacou a recepção da torcida e o entrosamento: 'Jogar no Flamengo é diferente de tudo. A energia do Maracanã me dá confiança para arriscar as jogadas um contra um e partir para cima da marcação', declarou o ponta.",
      imagem: "lino.jpeg", 
    },
  ];

  function renderizarNoticias() {
    noticiasList.innerHTML = "";

    noticias.forEach((noticia) => {
      const card = document.createElement("div");
      card.classList.add("news-card");

      // Adicionamos a div 'news-full-text' que começará escondida
      card.innerHTML = `
        <img src="${noticia.imagem}" alt="${noticia.titulo}" class="news-image">
        <div class="news-content">
          <h3 class="news-title">${noticia.titulo}</h3>
          <p class="news-text">${noticia.descricao}</p>
          <div class="news-full-text">
            <p>${noticia.textoCompleto}</p>
          </div>
          <button class="leia-mais">Ler matéria completa</button>
        </div>
      `;

      // Lógica de Expandir/Recolher ao clicar no botão
      const btnLeiaMais = card.querySelector(".leia-mais");
      btnLeiaMais.addEventListener("click", function () {
        card.classList.toggle("expanded");
        
        // Troca o texto do botão dependendo do estado do card
        if (card.classList.contains("expanded")) {
          btnLeiaMais.textContent = "Mostrar menos";
        } else {
          btnLeiaMais.textContent = "Ler matéria completa";
        }
      });

      noticiasList.appendChild(card);
    });
  }

  renderizarNoticias();

  // Comportamento do Header
  const logo = document.querySelector(".logo");
  const titulo = document.querySelector("header h1");

  function voltarParaPaginaPrincipal() {
    window.location.href = "index.html";
  }

  logo.addEventListener("click", voltarParaPaginaPrincipal);
  titulo.addEventListener("click", voltarParaPaginaPrincipal);

  // Barra de Pesquisa
  const searchBar = document.querySelector(".search-bar");
  searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase().trim();

    if (query === "menu") {
      window.location.href = "index.html";
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