// Sentença de código

console.log('Sentença de código #1');

// 

{
    console.log('Bloco de código');
}

// Variaveis e identificadores

var a = 10
let b = 2
const c = a / b

console.log(c)

// concatenar e templateString

console.log('Valor de A: '.concat(a).concat(' Valor de B: ').concat(b));

var nome = 'Enel'
var protagonista = 'Joseph'
const dialInicio = `Ser desconhecido: olá me chamo ${nome}.
prazer em conhece-lo senhor?
Joseph: Sou ${protagonista}`

console.log(dialInicio);

// String

let nome_1 = 'Jorge'
let sobrenome_1 = 'Firgue'

console.log(nome_1.charAt(1));
console.log(nome_1.charCodeAt(3));
console.log(nome_1.indexOf('r'));

console.log(nome_1.split(''));
console.log(nome_1.concat(' ' + sobrenome_1));

console.log(sobrenome_1.replace('F', 'B'));
console.log(sobrenome_1.substring(1, 4));

// Number

