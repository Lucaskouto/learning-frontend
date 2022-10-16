// #Notação Ponto

console.log(Math.ceil(6.1)); // notação ponto usado para acessar uma função dentro de Math

const obj1 = {}
obj1.nome = 'Espada' // Adicionar um nome/valor dentro do Objeto obj1
// obj1['nome'] = 'Lança' // mesma forma de escrever 
// não é recomendado usar este método, pois não tera como acessar o objeto com notação ponto futuramente no código

console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome // this.nome recebe nome e ficara visivel globalmente
    this.exec = function() {
    console.log('Exec...')
    }
}


const obj2 = new Obj('Machado')
const obj3 = new Obj('Cajado')

console.log(obj1.nome)
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

