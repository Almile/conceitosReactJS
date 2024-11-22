# Praticando Conceitos Essenciais do ReactJS

Este repositório contém o desenvolvimento de uma série de atividades práticas utilizando ReactJS. Cada exercício tem como objetivo reforçar o aprendizado de conceitos fundamentais da biblioteca, como hooks, componentes funcionais, manipulação de estado e efeitos colaterais. 

---

## Sumário

1. [Contador Simples](#contadoresimples)
2. [Alteração de Cor de Fundo](#alteracaodecor)
3. [Lista de Tarefas](#listadetarefas)
4. [Temporizador com useEffect](#temporizadoreffect)
5. [Filtro de Lista](#filtrolista)
6. [Formulário de Registro Simples](#formularioregistro)
7. [Aplicação de Requisição de Dados Simples](#aplicacaorequisicao)
8. [Galeria de Imagens com Visualização Detalhada](#galeriaimagens)
9. [Timer com Intervalo e Alerta](#timerintervalo)
10. [Componentes com Tabs Navegáveis](#tabsnavegaveis)

---

## Instruções de Instalação (Vite)

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seuusuario/atividade-7-react.git
   ```

2. **Entre na pasta do projeto**
   ```bash
   cd atividade-7-react
   ```

3. **Instale as dependências**  
   Para instalar as dependências usando o Vite, execute o seguinte comando:
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**
   Para iniciar o servidor de desenvolvimento com o Vite, use o comando:
   ```bash
   npm run dev
   ```

Agora você pode acessar o projeto no seu navegador em `http://localhost:5173`.

---

## Descrição das Atividades

### <a name="contadoresimples"></a>1. Contador Simples
- **Objetivo**: Criar um contador que exibe um número na tela e possui dois botões: “Incrementar” e “Decrementar”. Usamos o hook `useState` para manter o valor do contador.
- **Desafio**: Não permitir que o contador fique com valor menor que zero.

### <a name="alteracaodecor"></a>2. Alteração de Cor de Fundo
- **Objetivo**: Criar um componente onde o fundo da página muda de cor a cada clique de um botão. Usamos o hook `useState` para armazenar a cor atual e `useEffect` para atualizar o fundo.
- **Desafio**: Gerar cores aleatórias sempre que o botão for clicado.

### <a name="listadetarefas"></a>3. Lista de Tarefas
- **Objetivo**: Criar uma lista de tarefas onde o usuário pode adicionar e remover tarefas. Usamos `useState` para armazenar as tarefas e renderizar a lista.
- **Desafio**: Permitir que o usuário marque as tarefas como concluídas e filtre para ver apenas as pendentes.

### <a name="temporizadoreffect"></a>4. Temporizador com useEffect
- **Objetivo**: Criar um temporizador que conta o tempo em segundos e exibe na tela. Usamos `useEffect` para iniciar o temporizador ao carregar o componente.
- **Desafio**: Adicionar botões para pausar e reiniciar o temporizador.

### <a name="filtrolista"></a>5. Filtro de Lista
- **Objetivo**: Criar um componente que renderiza uma lista de nomes e adiciona um campo de entrada para filtrar os nomes com base no texto digitado.
- **Desafio**: Ignorar maiúsculas e minúsculas ao filtrar.

### <a name="formularioregistro"></a>6. Formulário de Registro Simples
- **Objetivo**: Criar um formulário de registro com campos de nome, e-mail e senha. Ao enviar, uma mensagem de boas-vindas deve ser exibida com as informações inseridas.
- **Desafio**: Validar os campos para garantir que todos estejam preenchidos antes de enviar.

### <a name="aplicacaorequisicao"></a>7. Aplicação de Requisição de Dados Simples
- **Objetivo**: Criar um componente que exibe uma lista de posts obtidos de uma API pública (JSONPlaceholder). Usamos `useEffect` para fazer a requisição e exibir os posts.
- **Desafio**: Adicionar um botão para recarregar os dados e um indicador de carregamento enquanto os dados são requisitados.

### <a name="galeriaimagens"></a>8. Galeria de Imagens com Visualização Detalhada
- **Objetivo**: Criar uma galeria de imagens onde, ao clicar em uma imagem, ela é exibida em uma visualização ampliada (modal).
- **Desafio**: Adicionar um botão de “Fechar” no modal e permitir navegação entre as imagens.

### <a name="timerintervalo"></a>9. Timer com Intervalo e Alerta
- **Objetivo**: Criar um timer onde o usuário define o número de segundos e, ao iniciar, o tempo é exibido e diminui a cada segundo.
- **Desafio**: Adicionar botões para pausar e reiniciar o timer. Exibir um alerta quando o tempo acabar.

### <a name="tabsnavegaveis"></a>10. Componentes com Tabs Navegáveis
- **Objetivo**: Criar uma interface com abas onde cada aba exibe um conteúdo diferente ao ser clicada.
- **Desafio**: Adicionar um efeito visual para destacar a aba ativa.

---

## Estrutura do Projeto

```
/atividade-7-react
├── /public
│   └── index.html
├── /src
│   ├── /components
│   │   ├── Contador.js
│   │   ├── ChangeBackground.js
│   │   ├── ToDoList.js
│   │   ├── Temporizer.js
│   │   ├── NameFilter.js
│   │   ├── RegistrationForm.js
│   │   ├── PostList.js
│   │   ├── Gallery.js
│   │   ├── Timer.js
│   │   └── Tabs.js
│   ├── /pages
│   │   └── PostPage.js
│   ├── /api
│   │   └── UserService.js
│   ├── App.js
│   └── index.js
├── /styles
│   ├── App.css
│   └── Tabs.css
└── README.md
```
