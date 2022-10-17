// #Destructuring. Novo recurso introduzido no ES2015
// Operador de desestruturação, extrai os atributos de dentro de uma estrutura, sendo elementos de um array ou atributos de um objeto

const grandesAntigos = {
    nome: 'Cthulhu',
    raça: 'Deus Antigo',
    ameaça: 'cosmica',
    caracteristicas: {
        cabeça: 'Polvo com tentaculos',
        corpo: 'Antropomófico',
        tronco: 'Revestido de escamas',
    }
}

const { nome, raça } = grandesAntigos
console.log(nome, raça)

const { nome: n, raça: r } = grandesAntigos
console.log(n, r)

const { terror, especial = true } = grandesAntigos
console.log(terror, especial)

const { caracteristicas: { cabeça, corpo } } = grandesAntigos
console.log(corpo, cabeça)
