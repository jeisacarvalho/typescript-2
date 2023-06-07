// => Variáveis [Type Annotations]
let nome: string = 'jeisa carvalho';
console.log(nome);

// => Arrays [type Annotations]
let animais: string[] = ['elefante','cachorro','gato','girafa'];
console.log(animais);

// => Objetos [type Annotations]
let carro: {
    nome: string;
    ano: number;
    preco: number
};
carro = {nome: 'Toyota yaris Sedan XS', ano: 2019, preco: 80000}
console.log(carro);

// => function [type Annotation]
function multiplicarNumero(num1: number, num2: number){
    return num1 * num2
}
console.log(multiplicarNumero(2,5))