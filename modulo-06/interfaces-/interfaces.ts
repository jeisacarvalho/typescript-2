export {};

// ==> Exemplo 01: Interface Simples

interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

function exibirNome(pessoa: Pessoa) {
    return `
    Nome...: ${pessoa.nome}
    Sobrenome...: ${pessoa.sobrenome}
    Idade...: ${pessoa.idade}
    `;
}
const Jeisa = {
    nome: 'Jeisa',
    sobrenome: 'Carvalho',
    idade: 24,
}
console.log(exibirNome(Jeisa))

// ==> Exemplo 02: Interface com Propriedades Opcionais
interface Livro {
    titulo: string;
    autor: string;
    paginas?: number; // ==> Propriedade Opcional
}

const Livro: Livro = {
    titulo: 'Clean code',
    autor: 'Robert C. Martin',
}

console.log(Livro)

// ==> Exemplo 03: Interface com propriedade  de somente Leitura e Opcional

interface Carro {
    readonly modelo: string; // ==> somente Leitura
    ano: number;
    Valor?: number;
}
const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969,
}
console.log(carro);

// ==> Exemplo 04: Interface com implements Class
interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;


constructor(nome: string, idade: number, estaVivo: boolean) {
    this.nome = nome;
    this.idade = idade;
    this.estaVivo = estaVivo;
}
comer(tipoComida: string): void {
    console.log(`O gato ${this.nome}está comendo ${tipoComida}`);
}
}

const gato = new Gato('Totó', 10, true);
console.log(gato);
gato.comer('Ração');

// ==> Exemplo 05: Interface vs Alias Type

interface Pessoa_02 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa_03 = {
    nome: string;
    sobrenome: string;
    idade: number;

}