export {};
// ==> Exemplo 01 - Conditional Type

type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
};

type Empresa = {
    nome: string;
    cnpj: number;
};

type enderecoPessoa = {
    enderecoSegundario: string;
    cidade: string;
    pais: string;
};

type EnderecoEmpresa = {
    localizacão: 'rua' | 'avenida' | 'Praça';
};

type EnderecoFinal<T> = T extends { endereco: string } ? enderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
    enderecoSegundario: 'Rua 1',
    cidade: 'São Paulo',
    pais: 'Brasil',
}
 const enderecoEmpresa: EnderecoFinal<Empresa> = {
        localizacão: 'rua',
 };

console.log(enderecoPessoa)
console.log(enderecoEmpresa)

// ==> Exemplo 02 - Conditional Type

type FormatoArquivos = 'png' | 'jpeg' | 'svg' | 'mp4' | 'np3';

type TipoFormatoMedia<T> = T extends 'mp4' | 'np3' ? T : never;

type ArquivoAudio = TipoFormatoMedia<FormatoArquivos>;

const arquivoAudio: ArquivoAudio = 'np3';

console.log(arquivoAudio)