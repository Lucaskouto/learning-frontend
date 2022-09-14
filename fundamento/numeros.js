const peso1 = 1.0;
const peso2 = Number('2.0'); //Number é uma função, number é um dado

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //valor inteiro
console.log(Number.isInteger(peso2)); //valor inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //quantidade de casa decimais depois do ponto
console.log(media.toString()); //converte sistemas numericos
console.log(typeof media);
console.log(typeof Number);
