// ==> Exemplo 01 - Generics Constraints

interface Pessoa {
    nome: string;
    idade: number;
}

function obterPessoaIdadeMaiorQue<T extends Pessoa>(pessoa: T[], idade: number): T[] {
    return pessoa.filter(pessoa => pessoa.idade > idade);

}

const pessoas: Pessoa[] = [
    { nome: 'Victor', idade: 20 },
    { nome: 'João', idade: 15 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 40 },
    { nome: 'Paulo', idade: 50 },
];

const pessoasComIdadeMaiorQue20 = obterPessoaIdadeMaiorQue(pessoas, 20);

console.log(pessoasComIdadeMaiorQue20);

// ==> Exemplo 02 - Generics Constraints
 function juntarObjetos<U, V>(obj1: U, obj2: V){
     return { ...obj1, ...obj2 };
 }  

 const pessoa = juntarObjetos({ nome: 'Victor' }, { idade: 20 });

    console.log(pessoa);

    const pessoa2 = juntarObjetos({ nome: 'Victor' }, 20 );

    console.log(pessoa);

    function juntarObjetos2<U extends object, V extends object>(obj1: U, obj2: V){
        return { ...obj1, ...obj2 };
    }  

    //const pessoa3 = juntarObjetos2({ nome: 'Victor' }, idade: 20 );

    // ==> Exemplo 03 - Type parameter in Generics Constraints

    /*function prop<T, K >(obj: T, chave: K){
        return obj[chave];
    }*/

    function prop<T, K extends keyof T >(obj: T, chave: K){
        return obj[chave];
    }

   // const pessoa4 = prop2({ nome: 'Victor' }, 'nome' );

    //console.log(pessoa4);

    //const pessoa5 = prop2({ nome: 'Victor' }, 'idade' );

    //console.log(pessoa5);