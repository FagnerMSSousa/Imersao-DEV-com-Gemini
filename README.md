# Imersao-DEV-com-Gemini
Base de conhecimento em programação desenvolvido durante Imersão DEV Alura com Google Gemini 

# 📖 Base de Conhecimento Tech

<img width="1348" height="619" alt="Captura de tela de 2025-11-22 17-23-18" src="https://github.com/user-attachments/assets/d7095b00-8e08-4277-968d-ba2b81070c15" />


Um glossário interativo de tecnologias de programação, desenvolvido como parte da **Imersão DEV da Alura**. Este projeto é uma Single Page Application (SPA) que permite aos usuários pesquisar e filtrar dinamicamente uma lista de linguagens, frameworks e ferramentas de desenvolvimento, com dados carregados de forma assíncrona.

## ✨ Funcionalidades Principais

-   **Busca Dinâmica:** Filtra os cards em tempo real conforme o usuário digita, pesquisando nos nomes e descrições das tecnologias.
-   **Autocomplete Inteligente:** Oferece sugestões de busca abaixo da barra de pesquisa para agilizar a navegação.
-   **Renderização Assíncrona:** Os dados das tecnologias são carregados de um arquivo `data.json` externo, e os cards são gerados dinamicamente com JavaScript, sem a necessidade de recarregar a página.
-   **Design Moderno e Responsivo:** Interface com tema escuro, imagem de fundo temática e layout que se adapta a diferentes tamanhos de tela (desktop, tablet e mobile).
-   **Links Externos:** Cada card possui um link "Saiba mais" que direciona para a documentação oficial ou página principal da tecnologia.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

-   **HTML5:** Para a estrutura semântica da página.
-   **CSS3:** Para estilização, layout responsivo (Flexbox) e customização com variáveis.
-   **JavaScript (ES6+):** Para toda a lógica de interatividade, incluindo:
    -   Manipulação do DOM.
    -   Consumo de dados com `fetch` API (assincronismo com `async/await`).
    -   Implementação da lógica de busca e autocomplete.
    -   Renderização dinâmica dos componentes.
-   **JSON:** Como fonte de dados para as tecnologias listadas.

## 📂 Estrutura do Projeto

```
/
├── 📄 index.html      # Arquivo principal com a estrutura da página
├── 🎨 style.css       # Folha de estilos para toda a aplicação
├── ⚙️ script.js       # Código JavaScript com a lógica do projeto
└── 📦 data.json       # Banco de dados com as informações das tecnologias
```

## 🔧 Como Executar Localmente

Como este é um projeto frontend puro, não é necessário um servidor complexo. Basta seguir os passos:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência.

E pronto! A aplicação estará funcionando.

## ✒️ Autor

Desenvolvido por **Fagner Sousa** durante a Imersão DEV da Alura.

[!LinkedIn](https://www.linkedin.com/in/fagner-magro-da-silva-sousa-ba4821162/)
[!GitHub](https://github.com/FagnerMSSousa)

