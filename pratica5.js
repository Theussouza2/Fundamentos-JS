const vetor = ["A", 10, "oi", 1.5, true];
const numeros = [1, 2, 3, 4, 5];
const frutas = ["maçãs", "laranjas", "peras", "uvas"];

//Obter um valor
console.log(frutas[0]);
console.log(frutas[1]);

//Adicionar um elemento
frutas[4] = "melancia"
console.log(frutas);

// Alterar o valor de um elemento
frutas[1] = "limão"
console.log(frutas)

//Adicionar um elemento no final do array
frutas.push("morango")
console.log(frutas);

//Adicionar um elemento no inicio do array
frutas.unshift("mangas");
console.log(frutas);

frutas.pop(); // remove o último elemento
console.log(frutas);

frutas.shift(); //  Shift" remove o primeiro elemento de um array
console.log(frutas);

console.log(frutas.indexOf("limão")); // retorna o primeiro índice em que o elemento pode ser encontrado

console.log(Array.isArray(frutas)); // Este método verifica diretamente se o valor fornecido é um array JavaScript
console.log(Array.isArray(10));