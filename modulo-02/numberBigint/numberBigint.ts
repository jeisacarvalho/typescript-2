// => Exemplos: number
let num1: number = 23.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('number - ponto flutuante...:', num1);
console.log('number - hexadecimal...:', num2);
console.log('number - octal...:', num3);
console.log('number - binário...:', num4)


// => Exemplos: bigint 

let big1: bigint = 9007199254740991n;
let big2: bigint = 0b1000000000000000000000000000000000011n;
let big3: bigint = 0x200000000000000003n;
let big4: bigint = 0o4000000000000000000003n;

console.log('Bigint...:',big1);
console.log('Bigint - Binario...:',big2);
console.log('Bigint - Hexadecimal...:', big3);
console.log('Bigint - Octal...:', big4);
