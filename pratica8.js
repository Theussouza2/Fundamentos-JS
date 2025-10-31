// Prática 8: Estrutura de controle switch

const cor ='branco';

switch (cor) {
    case 'vermelho':
        console.log('A cor é vermelho');
        break;
    case 'verde':
        console.log('A cor é verde');
        break;
    case 'azul':
        console.log('A cor é azul');
        break;
    default:
        console.log('A cor não é vermelho, verde ou azul');
}

const contador = 3;
switch (contador) {
    case 5:
    console.log('5');
    case 4:
    console.log('4');
    case 3:
    console.log('3');
    case 2:
    console.log('2');
    case 1: 
    console.log('1');
    default:
        console.log('Booom!!');
}

const sexo = 'M';
switch (sexo) {
    case 'M':
    case 'm':
    console.log('Masculino');
    break;
    case 'F':
    case 'F':
    console.log('Feminino');
    break;
    default:
    console.log('Invalido');
}

let numero;

if (cor == 'vermelho') {
    numero = 10;
} else {
    numero = 20;
}

console.log(numero);

// Operador ternário
const numero2 = (cor == 'vermelho') ? 10 : 20;
console.log(numero2);

// ESTRUTURAS DE REPETIÇÃO
let contador2 = 0;
while (contador2 < 3) {
    console.log('miau');
    contador2++;
}

for (let i =0; i < 5; i++) {
    console.log(`Número da repetição for: ${i}`);
}

const tarefas = [
    {
        id: 1,
        texto: 'Tira o lixo',
        completo: false
    },
    {
        id: 2,
        texto: 'jantar com esposa',
        completo: false,
    },
    {
        id: 3,
        texto: 'reuniao com chefe',
        completo: true,
    },
];

for (let i = 0; i < tarefas.length; i++) {
    console.log(`Tarefa ${i + 1} ${tarefas[i].texto}`)
}

// segunda forma de fazer o loop
for (let tarefa of tarefas) {
    console.log(tarefa.texto);
}