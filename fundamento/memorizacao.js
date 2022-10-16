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

var number1 = Number(10.03);
var number2 = Number(12.59);
const somaNum = number1 + number2;

console.log(number1.toFixed(1));
console.log(number2.toString(2));
console.log(Math.pow(number1, Math.PI));
console.log(Number.isInteger(number1));

// Arrays

const array1 = ['uva', 'maça', 'banana'];
console.log(array1);

delete array1[0];
console.log(array1);

array1[0] = 'morango';
console.log(array1);

array1.push('pessego', 'tomate');
console.log(array1);

console.log(array1.length);

console.log(array1.pop());

// Booleanos

console.log(!!true);
console.log(!true);

const isRaining = 'Tomorrow will be raining';

console.log(!isRaining || 'Tomorrow will be a sunny day');

// Object 

const obj1 = {
    nome: 'Lucas',
    idade: '21 anos',
    altura: '183 cm',
    peso: '75 kg'
}

obj1.estado = 'RIO DE JANEIRO';

console.log(obj1)


// Funções

function somaFunc(a, b) {
    return a + b
};

console.log(somaFunc(2, 3));

subtracaoFunc = (a, b) => {
    return a - b
};
console.log(subtracaoFunc(2, 3));

divisaoFunc = (a = 2, b = 3) => a / b
console.log(divisaoFunc());

// Hoisting

console.log(n)
var n = 'N= ' + 1




