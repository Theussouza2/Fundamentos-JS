// STRING

const nome = "Pedro";
const sobrenome = "Silva";
const idade = 27;

// Concatenação
const apresenta = "meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos.";
console.log(apresenta);

// Template de String
const apresenta2 = `seu nome é ${nome} ${sobrenome} minha idade é ${idade} anos `;
console.log(apresenta2);

const s = "oi mundo";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLocaleLowerCase());
console.log(s.substring(0, 3));
console.log(s.split("o"));


