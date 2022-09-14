const escola = "Cod3r"

console.log(escola.charAt(4)) // valor atribuido no quarto caractere
console.log(escola.charAt(5)) // se não tiver 5 caracteres retorna um valor vazio
console.log(escola.charCodeAt(3)) // valor na tabela ASCII
console.log(escola.indexOf('o')) // indice associado ao indice 3 dentro da palavra escola

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // do indice 0 até a quantidade de caracteres

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // substituir caracteres

console.log('Ana,Maria,Pedro'.split(',')) // gera um array

