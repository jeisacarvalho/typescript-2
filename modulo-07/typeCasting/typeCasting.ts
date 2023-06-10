export {};

// Exemplo 01: Type Casting com o operador "as"

const nome: unknown = 'Jeisa';
console.log((nome as string).toLowerCase());

// ==> Exemplo 02: Type Casting: '<>'
const carro: unknown = 'BMW';

const tamanhoCarro: number = (<string>carro).length;

console.log(tamanhoCarro);