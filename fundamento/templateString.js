const nome = 'Terry'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` //template 
console.log(concatenacao, template)

// expressoes
console.log(`1 + 1 = ${1 + 1}`) // interpolação

const up = texto => texto.toUpperCase()
console.log (`Ei... ${up('cuidado')}!`)

const raio = `PI ${Math.PI.toString(2)}!`
console.log(raio)

