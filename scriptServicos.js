let nome = localStorage.getItem('nomeUsuario');
document.getElementById('usuario').innerHTML = "Olá, <br>" + nome;

function clickMenu(){
    if (itens.style.display == "block") {
        itens.style.display = "none";
    } else {
        itens.style.display = "block";
    }
}

function mostrarInformacao(){
    
}

// document.querySelector('#lista').addEventListener('click', mostrarMenu());

// const imagens = ['','','','']

// function alternarFoto(){

// }