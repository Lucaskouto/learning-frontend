// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        cidade: 'Teresopolis'
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: i, idade: n} = pessoa
console.log(i, n)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, cidade, cep = 25995}} = pessoa
console.log(logradouro, cidade, cep)