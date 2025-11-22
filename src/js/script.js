let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let autocompleteList = document.getElementById("autocomplete-list");
let dados = [];

// Carrega os dados do JSON assim que a página é carregada
async function carregarDados() {
  try {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
  } catch (error) {
    console.error("Falha ao buscar dados:", error);
  }
}

function iniciarBusca() {
  const termoBusca = campoBusca.value.toLowerCase();
  const dadosFiltrados = dados.filter(
    (dado) => dado.nome.toLowerCase().includes(termoBusca) /*  ||
      dado.descricao.toLowerCase().includes(termoBusca) */
  );

  autocompleteList.innerHTML = ""; // Limpa a lista de autocomplete
  autocompleteList.style.display = "none"; // Esconde a lista
  renderizarCards(dadosFiltrados);
}

function mostrarSugestoes() {
  const termoBusca = campoBusca.value.toLowerCase();
  autocompleteList.innerHTML = "";

  if (termoBusca.length === 0) {
    autocompleteList.style.display = "none";
    return;
  }

  const sugestoes = dados
    .filter((dado) => dado.nome.toLowerCase().startsWith(termoBusca))
    .slice(0, 5); // Limita a 5 sugestões

  if (sugestoes.length > 0) {
    sugestoes.forEach((sugestao) => {
      const li = document.createElement("li");
      li.textContent = sugestao.nome;
      li.onclick = () => {
        campoBusca.value = sugestao.nome;
        iniciarBusca();
      };
      autocompleteList.appendChild(li);
    });
    autocompleteList.style.display = "block";
  } else {
    autocompleteList.style.display = "none";
  }
}

function renderizarCards(dados) {
  cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
  for (let dado of dados) {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p><strong>Ano de criação:</strong> ${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link_oficial}" target="_blank">Saiba mais</a>
        `;
    cardContainer.appendChild(article);
  }
}

// Adiciona os event listeners
campoBusca.addEventListener("input", mostrarSugestoes);
document.addEventListener("click", function (e) {
  if (e.target !== campoBusca) {
    autocompleteList.style.display = "none";
  }
});

// Carrega os dados iniciais
carregarDados();
