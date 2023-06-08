export {};
// ==> Exemplo 01: Get
class Quadrado {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado() {
        return this._altura * this._largura;
    }

}
console.log(new Quadrado().calcularQuadrado);

// ==> Exemplo 02: Set
class Pessoa {
    nome:string;

    retornarNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}
const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Jeisa carvalho');
console.log('Meu nome é...:', pessoa.nome)

// ==> Exemplo 03: Get [explicação mais densa]
// acessa o item daquele objeto
class Estudante {
    private _nome = 'Jeisa carvalho';
    private _semestre: number;
    private _curso: string;

    public get nomeEstudante(){
        return this._nome;
    }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado)

// ==> Exemplo 04: Set/Get [explicação mais densa]
class Estudante_01 {
    nome: string;
    semestre: number;
    curso: string;

    constructor(nomeEstudante: string, semestreEstudante: number, cursoEstudante: string) {
        this.nome = nomeEstudante;
        this.semestre = semestreEstudante;
        this.curso = cursoEstudante;
    }
    public get cursos(){
        return this.curso;
    }
    public set cursos(setCurso: string) {
        this.curso = setCurso;
    }
}

const estudante_01 = new Estudante_01('Jeisa Carvalho', 5, 'Sistema da Informação');
console.log(estudante_01);

// setter call
estudante_01.curso = 'Analise e Desenvolvimento de Sistemas';

// Getter call
console.log('Curso atualizado...', estudante_01.cursos)