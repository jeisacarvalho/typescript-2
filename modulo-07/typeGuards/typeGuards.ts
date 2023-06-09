import { clearCaches } from "@typescript-eslint/parser";

export {};
// ==> Exemplo 01 - Type Guards: typeof
type alfanumerico = string | number;

function exibirTipo(a: alfanumerico, b: alfanumerico) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } 
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }

    throw new Error("Os parâmetros precisam ser do mesmo tipo");
}

console.log(exibirTipo('Jeisa', '2'));
console.log(exibirTipo(2, 2));
//console.log(exibirTipo('carvalho', 5));

// ==> Exemplo 02 - Type Guards: instanceof
class Carro {
    nome: string;
    marca: string;

    constructor(nome: string, marca: string) {
        this.nome = nome;
        this.marca = marca;
    }
}

class Moto {
    nome: string;
    ano: number;

    constructor(nome: string, ano: number) {
        this.nome = nome;
        this.ano = ano;
    }
}

function detalhesVeiculo(veiculo: Carro | Moto) {
    if (veiculo instanceof Carro) {
        return `O carro ${veiculo.nome} é da marca ${veiculo.marca}`;
    }else if (veiculo instanceof Moto) {
        return `A moto ${veiculo.nome} é do ano ${veiculo.ano}`;
    }
}

const carro = new Carro('Civic', 'Honda');
console.log(detalhesVeiculo(carro));

const moto = new Moto('Biz', 2019);
console.log(detalhesVeiculo(moto));

// ==> Exemplo 03 - Type Guards: in
interface Animal_05 {
    grupo: string;
}

class peixe implements Animal_05 {
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class ave implements Animal_05 {
    grupo: string;
    corAve: string;

    constructor(grupo: string, corAve: string) {
        this.grupo = grupo;
        this.corAve = corAve;
    }
}

function nadar(grupo: string) {
    console.log(`O grupo ${grupo} nada`);
}

function voar(grupo: string) {
    console.log(`O grupo ${grupo} voa`);
}

function mover(animal: Animal_05) {
    if ("corPeixe" in animal) {
        nadar((animal as peixe).grupo);
    }else if ("corAve" in animal) {
        voar((animal as ave).grupo);
    }
}

