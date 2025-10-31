// OBJETOS

const nome = 'pedro';
const sobrenome = 'silva';
const idade =18;
const passatempo = ['musica', 'filmes'];
const enderecoRua = 'avenida gomes'
const enderecoCidade = 'vitoria';
const enderecoEstado = 'PA';

// Criaçao de Objeto
const pessoa = {
    nome: 'rhuan',
    sobrenome: 'souza',
    passatempo: ['musica', 'filme', 'esportes'],
    idade: 18,
    endereco: {
        rua: 'avenida gomes',
        cidade: 'vitoria',
        estado: 'ES'
    }
}

// Acessar uma propriedade
console.log(pessoa.nome);

// Acessar um elemento de uma propriedade vetor
console.log(pessoa.passatempo[0]);

// Acessar uma propriedade de uma propriedade
console.log(pessoa.endereco.cidade);

//Definir uma nova propriedade
pessoa.email = 'teste@gmail.com';
console.log(pessoa);

// criar um vetor de objetos
const tarefas = [
    {id: 1,
    texto: 'tirar o lixo',
    completo: false
},
{
    id: 2,
    texto: 'varrer o chão',
    completo: true
},
{
    id:3,
    texto: 'lavar o carro',
    completo: false
}
];

// Acessar uma propriedade de um elemento especifico
console.log(tarefas[1].texto);

// Formatar um objeto em formato JSON
console.log(JSON.stringify(tarefas));
console.log(JSON.stringify(pessoa));
