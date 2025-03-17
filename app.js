let nomesSorteados = []; // Lista para armazenar os nomes já sorteados

// Função para adicionar o nome à lista
function adicionarAmigo() {
    let inputNome = document.getElementById('amigo');
    let nome = inputNome.value.trim(); // Remove espaços extras

    // Verifica se o nome está vazio
    if (nome === "") {
        alert("Por favor, insira um nome");
        console.log("Nome vazio, operação cancelada.");
        return;
    }

    // Pega a lista de amigos já inseridos
    let listaAmigos = document.getElementById('listaAmigos');
    let amigos = Array.from(listaAmigos.getElementsByTagName('li')); // Transforma a lista de elementos em um array

    // Verifica se o nome já foi inserido na lista
    if (amigos.some(item => item.textContent === nome)) {
        alert("Este nome já foi inserido. Por favor, coloque outro nome");
        console.log(`Nome repetido: "${nome}" não foi adicionado.`);
        inputNome.value = ''; // Limpa o campo para tentar novamente
        return;
    }

    // Cria um novo item de lista e adiciona o nome
    let li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);

    console.log(`Nome adicionado: "${nome}"`);
    inputNome.value = ''; // Limpa o input após adicionar o nome
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');
    let amigos = Array.from(listaAmigos.getElementsByTagName('li')); // Transforma a lista de elementos em um array

    console.log("Lista de amigos: ", amigos.map(item => item.textContent)); // Exibe todos os amigos na lista

    // Verifica se todos os nomes já foram sorteados
    if (nomesSorteados.length === amigos.length) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "Todos os nomes já foram sorteados. Clique em \"Sortear amigo\" novamente para reiniciar o sorteio.";
        console.log("Todos os nomes já foram sorteados. Reiniciando sorteio...");
        reiniciarSorteio();
        return;
    }

    // Filtra os amigos que ainda não foram sorteados
    let amigosDisponiveis = amigos.filter(item => !nomesSorteados.includes(item.textContent));

    // Sortear um amigo aleatório
    let amigoSorteado = amigosDisponiveis[Math.floor(Math.random() * amigosDisponiveis.length)].textContent;

    // Marca o amigo como sorteado
    nomesSorteados.push(amigoSorteado);

    // Exibe o nome do amigo secreto sorteado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu amigo secreto é ${amigoSorteado}!`; // Usando innerHTML para mostrar o resultado
    console.log(`Amigo secreto sorteado: "${amigoSorteado}"`);
}

// Função para reiniciar o sorteio sem apagar a lista de amigos
function reiniciarSorteio() {
    nomesSorteados = []; // Limpa a lista de nomes sorteados para permitir novo sorteio
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa a exibição do resultado

    console.log("Sorteio reiniciado. Todos os nomes podem ser sorteados novamente.");
}
