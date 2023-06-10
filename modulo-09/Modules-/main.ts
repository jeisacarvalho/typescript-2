export {};

import { EmailValidator, ZipCodeValidator } from "./validators-";

const email = 'glaucia.lemos@email.com';
const validator = new EmailValidator();
const result = validator.isValid(email);

console.log(`O e-mail ${email} é válido? ${result}`);

const validator2 = new ZipCodeValidator();
const result2 = validator2.isValid('12345');

console.log(`O CEP 12345 é válido? ${result2}`);