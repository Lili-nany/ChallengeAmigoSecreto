//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let nome of amigos) {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li>${amigos[indiceSorteado]} foi sorteado!</li>`;
}


    