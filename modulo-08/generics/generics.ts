export { };

// ==> Exemplo 01: Generics

function retornarElementosRandomicos<T>(items: T[]): T {
  const itemRandomico = Math.floor(Math.random() * items.length);
  return items[itemRandomico];
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosRandomicos = retornarElementosRandomicos<number>(numeros);
console.log(numerosRandomicos);

const estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
const estadosRandomicos = retornarElementosRandomicos<string>(estados);
console.log(estadosRandomicos);

// ==> Exemplo 02: Generics

function exibirElementos<T>(array: T[]): void {
  array.forEach((elemento) => {
    console.log(elemento);
  });
};

const number: number[] = [1, 2, 3, 4, 5];
const states: string[] = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul'];

exibirElementos<number>(number);
exibirElementos<string>(states);