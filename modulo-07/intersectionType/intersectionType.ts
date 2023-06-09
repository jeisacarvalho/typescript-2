export {};

// ==> Exemplo 01 - Intersection Type

interface DadosBancarios {
    conta: string;
    agencia: string;
    banco: string;
}
interface Cliente {
    nome: string;
    email: string;
}

interface DadosPessoaFisica {
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const DadosCliente: DadosCliente = {
    conta: '12345-6',
    agencia: '0001',
    banco: 'Banco do Brasil',
    nome: 'jeisa',
    email: 'jeisa@gmail.com',
    cpf: 123456789
}

console.log(DadosCliente);