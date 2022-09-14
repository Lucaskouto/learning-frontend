// Sentenças de código 
//importante sempre usar ; para uma melhor organização do código.

console.log("isso é uma sentença de código.");

// Bloco de código

{
    console.log("isso");
    console.log("é um bloco de código");
    console.log("teórico");
}

{
    {
        {
            //é possivel ter mais de um bloco de código dentro de outro desde que use sempre as chaves pra abrir e fechar
        }
    }
}

// dados

// é possível fazer uso de (var ou let) para variaveis 
// sempre vai ser variavel e identificador em seguida.

let nome = "Jorge";
let sexo = "masculino";
let profissão = "operario";
let idade = 25;

//é possivel usar os identificadores dentro de qualquer estrutura do código

console.log("Ficha cadastral ");
console.log(nome);
console.log(sexo);
console.log(idade);

idade = idade * 2;

console.log(idade);

// também tem outro tipo de variavel chamada const aonde seu valor não pode ser modificado ao decorrer do código. importante para valores fixos como PI

const pi = 3.1415 // casas decimais tem . como separador.

console.log(pi);
console.log(Math.PI);

// tipos de variáveis mais comuns: number, boolean, string

console.log(typeof 1);
console.log(typeof true); // or false
console.log(typeof "Teste");

// concatenar textos dentro do código

console.log("número inteiro: " + 1 / 5 + ", Teste de concatenar: " + 1 * 2);

//pode-se trocar váriaveis com colchetes

let x, y, z
x = 4
y = 5
z = x - y

console.log(x, y, z);

[x, y] = [y, x];

z = x - y // porque preciso declarar o z novamente?

console.log(x, y, z);

// Variantes numericos

let ava1 = 7.6
let ava2 = Number(6.0);
let ava3 = 3.4
const total = ava1 + ava2 + ava3
const media = total / 3

console.log(media);

console.log(Number.isInteger(media)); //teste true or false to see if a number is integer
console.log(media.toString(2)); //conversão númerica 
console.log(media.toFixed(2)); //quantidade de casas decimais
console.log(typeof media);
console.log(typeof Number); //Number é função number é uma variante

// Variante String

const escola = "Cod3r"

console.log(escola.charAt(4)) // valor atribuido no quarto caractere
console.log(escola.charAt(5)) // se não tiver 5 caracteres retorna um valor vazio
console.log(escola.charCodeAt(3)) // valor na tabela ASCII
console.log(escola.indexOf('o')) // indice associado ao 1 dentro da palavra variavel escola

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // do indice 0 até a quantidade de caracteres

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // substituir caracteres

console.log('Ana,Maria,Pedro'.split(',')) // gera um array

// Template Script




