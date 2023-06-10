export {};

// Exemplo 01: Type assrtion com as 'as' '<>'

function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
    const precoFinal = preco * (1 - desconto);
    return formato ? `R$${precoFinal}` : precoFinal;
}

//const descontoFinal = exibirPrecoFinal(100, 0.25, true) as string;
const descontoFinal = <number>exibirPrecoFinal(100, 0.25, false);
console.log(`O preço final é ${descontoFinal}`);

// ==> Exemplo 02: Type Assertion 
/*
type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}

const humano = {
    idade: 24,
    idioma: 'Português',
}

const humano_2 = humano as Humano;
console.log(humano_2.nome.toUpperCase());
*/

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}

const humano = {
    idade: 24,
    idioma: 'Português',
}

const humano_2: Humano = humano;
console.log(humano_2.nome.toUpperCase());