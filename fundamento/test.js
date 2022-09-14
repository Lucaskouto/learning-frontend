// strings

const nome = 'Alan.Best.Player.Of.Brasil'
const sobrenome = 'Ferreira'

console.log(nome.charAt(0)) // atribuição do caractere

console.log(nome.charCodeAt(3)) // Tabela ASCII

console.log(nome.indexOf(2))

console.log(nome.replace('l', 'b'))

console.log(nome.split('.'))

console.log(nome.concat(sobrenome))

console.log(nome.substring(2))
console.log(nome.substring(0, 3))

// Number

let x = Number('2.65')
let y = Number('4.845')
const z = x + y

console.log(x)
console.log(y)
console.log(z.toFixed(2))
console.log(Number.isInteger(z))
console.log(x.toString(2))
