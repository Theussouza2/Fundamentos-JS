// PROGRAMAÇAO ORIENTADA A OBJETOS

const nome = 'pedro';
const sobrenome = 'silva';
const dataNascimento = '20/03/2000';

const pessoaA = {
    nome: 'maria',
    sobrenome: 'souza',
    dataDeNascimento: new Date('10-10-90'),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
    
}

const pessoaB = {
    nome: 'joao',
    sobrenome: 'pereira',
    dataDeNascimento: new Date('1-1-99'),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
}

console.log(pessoaA.nome);
console.log(pessoaA.sobrenome);
console.log(pessoaA.obterNomeCompleto());
console.log(pessoaA.obterAnoNascimento());
console.log(pessoaB.nome);
console.log(pessoaB.sobrenome);
console.log(pessoaB.obterNomeCompleto());
console.log(pessoaB.obterAnoNascimento());

// Função construtora
function Pessoa(nome, sobrenome, dataDeNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNascimento = new Date(dataDeNascimento);
    this.amigos = [];
    this.obterAnoNascimento = function() {
        return this.dataDeNascimento.getFullYear();
    };

    this.adicionarAmigo = function(amigo) {
        pessoa1.amigos.push(amigo);
        amigo.amigos.push(this);
    }
}


const pessoa1 = new Pessoa('ana', 'oliveira', '5-5-95');
const pessoa2 = new Pessoa('carlos', 'almeida', '12-12-88');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.obterAnoNascimento());

pessoa1.adicionarAmigo(pessoa2);
console.log(pessoa1.amigos);

// tipos de function arrow function

function dizerOla () {
    console.log('ola');
}

const dizerOi = () => {
    console.log('oi');
}

// Construtores Internos
const nome2 = new String('teste');
console.log(typeof nome2);
console.log(typeof 'teste');

const idade = new Number(25);
console.log(typeof idade);
console.log(typeof 25);