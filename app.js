//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeDosAmigos = [];
let listaDeAmigosSorteados = [];

function adicionarAmigo(){
    let nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == ""){
        alert ('Por favor, insira um nome válido.');
    }
    
    if(nomeDosAmigos.includes(nomeDoAmigo)){
        alert(`${nomeDoAmigo} já está na lista. Informe um outro nome.`);        
    }
    else{        
        nomeDosAmigos.push(nomeDoAmigo);        
    }
    limparCampoNome();
}

function limparCampoNome(){
    nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}

function verificaTamanhoDaLista(){
    if (nomeDosAmigos.length < 4){
        alert('Participantes insulficientes para realização do sorteio. Tente novamente com no mínimo 4 pessoas.')                    
    } 
}

function sortearAmigo(){    
    verificaTamanhoDaLista();

    let nomeDoAmigoSorteado;    
    let indiceSorteado = parseInt(Math.random() * nomeDosAmigos.length);

    if(listaDeAmigosSorteados.length == nomeDosAmigos.length){
        alert('Todos já foram sorteados!');
        listaDeAmigosSorteados = [];
    }

    if(listaDeAmigosSorteados.includes(nomeDosAmigos[indiceSorteado])){        
        sortearAmigo(); //zona de perigo
    }else{
        listaDeAmigosSorteados.push(nomeDosAmigos[indiceSorteado]);
        nomeDoAmigoSorteado = nomeDosAmigos[indiceSorteado];
        document.getElementById('resultado').textContent = `O amigo secreto sorteado é: ${nomeDoAmigoSorteado}.`
    }
}
