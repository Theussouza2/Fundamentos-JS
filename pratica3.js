// OPERADORES DE COMPARAÇÃO

/* 
> MAIOR DO QUE

< MENOR DO QUE

>= MAIOR OU IGUAL A

<= MENOR OU IGUAL

== IGUAL

!= DIFERENTE

*/

const a = 10;
const b = 20;

console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(a == b);
console.log(a != b);

// OPERADORES LÓGICO

/* 

&& E

|| OU

! NÃO (REVERTE O VALOR)

*/

console.log(a < b && a > b); // False
console.log(a < b && a != b); // True
console.log(a == b && a > b); // False

console.log(a < b || a > b); //True
console.log(a == b || a != b); // True
console.log(a == b || a > b); // False

console.log(!true); //False
console.log(!false); // True