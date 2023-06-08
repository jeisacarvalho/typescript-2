// Modificadores de Acesso: readonly
//Propriedade Somente Leitura
//Acessados fora da Classe
//Não pode ser alterado
//inicializados dentro do construtor classe

export {};

// ==> Exemplo 01
class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}
const funcionario = new Funcionario(new Date(1986,10,24));
//funcionario.dataNascimento = new Date(1986, 10, 24);

// ==> Exemplo 02

class Funcionario_01 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento
    }
}

// ==> Exemplo 03
class Funcionario_03 {
    nome: string;
    readonly codigoFuncionario: number


constructor(nome: string, codigo: number){
    this.codigoFuncionario = codigo;
    this.nome = nome;
}
}

const func = new Funcionario_03('jeisa', 112333);
func.nome = 'Jeisa carvalho';

console.log(func);

// Exemplo 04

interface IFuncionario {
    codigoFuncionario: number;
    nomeEmpregado: string;
}

const funcionario_01: Readonly<IFuncionario> = {
    codigoFuncionario: 506699,
    nomeEmpregado: 'jeisa',
}

//funcionario_01.codigoFuncionario = 887653;
//funcionario_01.nomeEmpregado= 'Carvalho';

const funcionario_02: IFuncionario = {
    codigoFuncionario: 506699,
    nomeEmpregado: 'jeisa',
}

funcionario_02.codigoFuncionario = 887653;
funcionario_02.nomeEmpregado= 'Carvalho';