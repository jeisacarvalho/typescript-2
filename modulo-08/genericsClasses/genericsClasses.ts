export {};

//==> Exemplo 01 - Generics Classes

class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem() {
        return this.item;
    }

    setItem(item: T) {
        this.item = item;
    }
}

const boxString = new Box<string>('Victor');
const boxNumber = new Box<number>(20);

console.log(boxString.getItem());
console.log(boxNumber.getItem());

//==> Exemplo 02 - Generics Classes
class Estudante<T,U> {
    private id: T;
    private nome: U;

    setValor(id: T, nome: U): void {
        this.id = id;
        this.nome = nome;
    }

    retornaValor(): void {
        console.log(`ID: ${this.id} - Nome: ${this.nome}`);
    }
}

const estudante = new Estudante<number, string>();

estudante.setValor(1, 'Victor');
estudante.retornaValor();

const estudante2 = new Estudante<string, string>();

estudante2.setValor('2', 'jeisa');
estudante2.retornaValor();