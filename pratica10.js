// Funções de ordem maior

// .forEach
// .map
// .filter
// .reduce

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero) {
    console.log(numero);
});

const letras = ['a', 'b', 'c', 'd', 'e'];

letras.forEach(function (letra, indice) {
    console.log(`${indice}: ${letra}`);
});
//_______________________________________________________

const tarefas = [
    {
        id: 1,
        texto: "estuda",
        completo: false
    },
    {
        id: 2,
        texto: "trabalhar",
        completo: false
    },
    {
        id: 3,
        texto: "limpa a casa",
        completo: true
    }
];
tarefas.forEach(function (tarefa, indice, minhasTarefas) {
    console.log(`${indice + 1}: ${tarefa.texto}`);
    console.log(minhasTarefas)
});

//_______________________________________________________

// .map
const vetorDeTexto = tarefas.map(function (tarefa) {
    return tarefa.texto;
});

console.log(vetorDeTexto);

//_______________________________________________________

// .filter

const tarefa1 = tarefas.filter(function (tarefa) {
    return tarefa.id === 1;
});

console.log(tarefa1);

//_______________________________________________________

// .reduce

const vetor = [1, 2, 3, 4, 5];
const valorInicial = 0;

const soma = vetor.reduce(function (acumulador, elementoAtual) {
    return acumulador + elementoAtual
}, valorInicial);

console.log(soma);