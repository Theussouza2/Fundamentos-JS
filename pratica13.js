// MANIPULAÇAO DO DOM

const ul = document.querySelector('.itens');
console.log(ul);

// remover um elemento
// ul.remove();

// remover o ultimo elemento filho
ul.lastElementChild.remove();

// alterar o texto do primeiro elemento filho
ul.firstElementChild.textContent = "Olá alterado!"; 

ul.children[1].textContent = "Olá alterado 2!";

// Definir o HTML interno de um elemento
ul.lastElementChild.innerHTML = "<h1>Novo Título</h1>";

// alterar o estilo de um elemento
const botao = document.querySelector('.botao');

botao.style.backgroundColor = 'blue';
botao.style.color = 'white';

// MANIPULAÇÃO DO DOM
// .REMOVE() - remove um elemento
// .TEXTCONTENT - altera o texto de um elemento
// .INNERHTML - define o HTML interno de um elemento
// .STYLE - altera o estilo de um elemento via JavaScript
// .LASTELEMENTCHILD - seleciona o último elemento filho
// .FIRSTELEMENTCHILD - seleciona o primeiro elemento filho
// .CHILDREN - seleciona todos os elementos filhos
