const titulo = document.getElementById("titulo");

function imprimirtitulo() {
    console.log(titulo);
}

titulo.addEventListener("click", imprimirtitulo);



const body = document.querySelector(".botao");

function botaoFoiClicado(evento) {
    evento.preventDefault();
    console.log("botao");
    console.log(evento.target.className);
    document.getElementById("meu-formulario").style.backgroundColor = "lightblue";
    document.querySelector("body").style.background = "green";
}

body.addEventListener("click", botaoFoiClicado);