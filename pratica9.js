
function dizer_ola_pedro() {
    console.log('ola thina');
}

function dizer_ola_ana() {
    console.log('ola aline');
}


dizer_ola_pedro();
dizer_ola_ana();
//_______________________________________________________

function dizer_ola(nome) {
    console.log('ola ' + nome);
}
dizer_ola('marcos');
//_______________________________________________________
function se_apresenta(nome, idade) {
    console.log('Meu nome' + ' ' + nome + ' ' + 'e tenho' + ' ' + idade + ' ' + 'anos');
}
se_apresenta('marcos', 30);
//_______________________________________________________

function criar_nome_completo(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

const nome_completo = criar_nome_completo('marcos', 'silva');
console.log(nome_completo);

//_______________________________________________________
function criar_nome_completo2(nome, sobrenome, sexo) {
    sexo = sexo.toUpperCase();
   if (sexo=== 'M') {
    return `Sr. ${nome} ${sobrenome}`;
   } else if (sexo=== 'F') {
    return `Sra. ${nome} ${sobrenome}`;
   } else {
    return ` ${nome} ${sobrenome}`;   
}
}

const nome_completo2 = criar_nome_completo2('rhuan', 'rodrigues', 'M');
const nome_completo3 = criar_nome_completo2('Leticia', 'rodrigues', 'F');

console.log(nome_completo2);
console.log(nome_completo3);

//_______________________________________________________

// Função Seta
const dizer_oi = () => console.log('oi');
dizer_oi();

const dizer_oi_tudo_bem = () => {
    console.log('oi');
    console.log('tudo bem?');
}
dizer_oi_tudo_bem();

const somar = (x, y) => {
    return x + y;
}
const resultado = somar(2, 3);
console.log(resultado);
