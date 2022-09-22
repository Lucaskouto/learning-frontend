// strings

const nome = 'Alan'
const sobrenome = 'Ferreira'

console.log(nome.charAt(0)) // atribuição do caractere

console.log(nome.charCodeAt(3)) // Tabela ASCII

console.log(nome.indexOf('A')) // Qual a posição da letra

console.log(nome.replace('l', 'b')) // Substitui o caractere por outro

console.log(nome.split('.')) // Cria um array a partir do caractere selecionado

console.log(nome.concat(sobrenome)) // Concatenar

console.log(nome.substring(2)) // Cria outra string a partir da posição do caractere
console.log(nome.substring(0, 3)) // String determinada aonde começa e quantos caracteres escrever

// Number

let x = Number('2.65') // Função Number
let y = Number('4.845') 
const z = x + y

console.log(x)
console.log(y)
console.log(z.toFixed(2)) // Quantidade de casas após o ponto
console.log(Number.isInteger(z)) // Verifica se o numero é inteiro
console.log(x.toString(2)) // Transforma em uma string com o sistema numerico escolhido 

// Math

const pi = Math.PI;
const potencia = Math.pow(x, y);
console.log(`${potencia.toFixed(2)}, ${pi}`)

// Arrays

let ar_1 = ['Lucas', 'Couto', 'de', 'Souza']
ar_1.split