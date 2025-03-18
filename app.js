let listaAmigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const nomeAmigo = amigoInput.value.trim();  // Limpar espaços extras

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaAmigos.push(nomeAmigo);

    amigoInput.value = "";
    amigoInput.focus();


    atualizarLista();
}

function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; 

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];
    const resultadoElement = document.getElementById("resultado");
    
    resultadoElement.textContent = `O amigo secreto é: ${amigoSorteado}`;
}
