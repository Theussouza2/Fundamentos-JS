// CLASSES ES6

// Função Construtora
function Pessoa1(nome, sobrenome, dataDeNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNascimento = new Date(dataDeNascimento);
    
    this.obterNomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`
    }
};

// Classe ES6
class Pessoa {
    constructor(nome, sobrenome, dataDeNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDeNascimento = new Date(dataDeNascimento);
    }
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa1 = new Pessoa('ana', 'oliveira', '5-5-95');
console.log(pessoa1);
console.log(pessoa1.obterNomeCompleto());

class Cliente extends Pessoa {
    constructor(nome, sobrenome, dataDeNascimento, cpf) {
        super(nome, sobrenome, dataDeNascimento);
        this.cpf = cpf;
    }}
const cliente1 = new Cliente('carlos', 'almeida', '12-12-88', '123.456.789-00');
console.log(cliente1);
console.log(cliente1.obterNomeCompleto());
console.log(cliente1.cpf);

// SELETORES DE ELEMENTOS

// document.getElementById()
// document.getElementsBYtagName()
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll()

console.log(document.getElementById('meu-formulario'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

console.log(document.querySelector('li'));
console.log(document.querySelector('#item')); // Atraves do ID
console.log(document.querySelectorAll('.item')); // Atraves da Classe

console.log(document.querySelectorAll('.item'));

// MANIPULAÇÃO DO DOM

