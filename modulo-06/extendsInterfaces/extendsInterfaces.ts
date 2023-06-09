export {};

// ==> Exemplo 01 - Extends Interfaces
interface Animal_01 {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro_01 extends Animal_01 {
    raça: string;

}

const cachorro: Cachorro_01 = {
    nome: 'Dog',
    idade: 10,
    porte: 'Grande',
    raça: 'Vira-lata'
};
console.log(cachorro);

// ==> Exemplo 02 - Extends de Múltiplas Interfaces
interface Cachorro {
    nome: string;
}

interface Gato {
    nome: string;

}

interface Animal extends Cachorro, Gato {
    idade: number;
}

const animal: Animal = {
    nome: 'Farofa',
    idade: 10
}
console.log(animal);

// ==> Exemplo 03 - Uso do Omit

interface Funcionario {
    id: number;
    nome: string;
    salario: number;
}
interface Desenvolvedor extends Omit<Funcionario, 'id'| 'salario' > { 
    id: string;
    salario: string;
    linguagem: string;
}
const desenvolvedor: Desenvolvedor = {
    id: 'js-123',
    nome: 'Jeisa',
    salario: 'R$ 10.000,00',
    linguagem: 'JavaScript'
}

console.log(desenvolvedor);