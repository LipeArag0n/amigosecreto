# Projeto: Amigo Secreto

## Descrição

Este projeto é uma implementação de um sorteio de **Amigo Secreto** em uma página web. O sistema permite que o usuário insira nomes de amigos, sorteie um amigo secreto aleatório e mostre o resultado. Após todos os nomes terem sido sorteados, o sorteio pode ser reiniciado sem apagar a lista de amigos, permitindo que o processo de sorteio aconteça várias vezes.

## Funcionalidades

- **Adicionar amigos**: O usuário pode inserir os nomes dos amigos para o sorteio.
- **Sorteio de amigo secreto**: Após inserir os nomes, o botão "Sortear amigo" sorteia um amigo aleatório.
- **Mensagens de alerta**: Alertas são exibidos caso o usuário insira um nome vazio ou repetido.
- **Controle de sorteio**: Cada nome só pode ser sorteado uma vez. Após todos os amigos serem sorteados, uma mensagem informa que todos os nomes foram sorteados.
- **Reinício do sorteio**: Após todos os nomes serem sorteados, o sorteio é reiniciado para permitir um novo ciclo de sorteios, sem alterar a lista de amigos.

## Como Funciona

### Estrutura do Projeto

Este projeto é composto por três arquivos principais:

- **HTML (`index.html`)**: Contém a estrutura da página web, incluindo a entrada de nomes, o botão de sorteio e a exibição do resultado.
- **CSS (`style.css`)**: Arquivo de estilo para dar formato e aparência à página.
- **JavaScript (`app.js`)**: Contém toda a lógica para adicionar nomes, sortear o amigo secreto e reiniciar o sorteio quando necessário.

### Funcionalidade do Código JavaScript

#### 1. **Adicionar Amigos**
   - O usuário digita o nome de um amigo na caixa de entrada e clica no botão "Adicionar".
   - O nome é adicionado à lista de amigos na tela.
   - Se o nome estiver vazio, um alerta é exibido solicitando a inserção de um nome.
   - Se o nome já tiver sido inserido, um alerta é exibido informando que o nome é repetido.

#### 2. **Sortear Amigo Secreto**
   - Ao clicar no botão "Sortear amigo", o código sorteia um amigo aleatório da lista de amigos.
   - Se o nome for sorteado, o nome é exibido na tela como o "amigo secreto" do usuário.
   - Se todos os amigos já tiverem sido sorteados, uma mensagem aparece informando que todos os amigos já foram sorteados.
   - O sorteio pode ser reiniciado a qualquer momento ao clicar novamente no botão "Sortear amigo", e todos os amigos podem ser sorteados novamente.

### Funções Importantes

- **adicionarAmigo()**:
  - Adiciona um nome à lista de amigos.
  - Verifica se o nome inserido é vazio ou repetido.
  
- **sortearAmigo()**:
  - Sorteia um amigo aleatório e exibe o resultado.
  - Garante que um nome só seja sorteado uma vez.
  
- **reiniciarSorteio()**:
  - Limpa a lista de nomes sorteados e permite que o sorteio seja reiniciado.

## Estrutura do HTML

O código HTML contém a estrutura básica da página, incluindo:

- **Cabeçalho** com o título "Amigo Secreto".
- **Secção de entrada** onde o usuário pode adicionar nomes de amigos.
- **Botões** para adicionar amigos e sortear o amigo secreto.
- **Lista de amigos** que serão sorteados.
- **Área de resultado** onde o nome do amigo secreto sorteado será exibido.

### Exemplo de Estrutura HTML

```html
<main class="main-content">
    <header class="header-banner">
        <h1 class="main-title">Amigo Secreto</h1>
        <img src="assets/amigo-secreto.png" alt="Imagem representativa de amigo secreto">
    </header>

    <section class="input-section">
        <h2 class="section-title">Digite o nome dos seus amigos</h2>
        <div class="input-wrapper">
            <input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
            <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
        </div>
       
        <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
        <ul id="resultado" class="result-list" aria-live="polite"></ul>

        <div class="button-container">
            <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
                <img src="assets/play_circle_outline.png" alt="Ícone para sortear">
                Sortear amigo
            </button>
        </div>
    </section>
</main>
