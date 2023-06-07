// => Exemplo 01 - Uso de Colchetes:

let frutas: string[] = ['abacaxi', 'uva', 'maça','melancia','morango']
console.log(frutas[2])

// => Exemplo 02 - Array Object (Objeto Array)
let frutas1: Array<string> = ['abacaxi', 'uva', 'maça','melancia','morango']
console.log(frutas1[3])

// =>Exemplo 03 - Adicionando mais strings com método 'push'
let idiomas: Array<string> = ['Português','Inglês','Espanhol','Francês']
console.log(idiomas)
idiomas.push('Mandarim')
console.log(idiomas)
idiomas.push('Italiano')
console.log(idiomas)