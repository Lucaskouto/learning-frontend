global.preco = 10
global.desc = 0.18

const teste = (imposto = 0, moeda = 'R$ ') => {
  let preco = 20
  let desc = 0.453523
  console.log('valor de preco',preco)
  console.log('valor de desconto',desc)
  return `${moeda.concat(preco * (1 - desc) * (1 + imposto).toFixed(2))}`
}
 
 
 
const teste2 = function (imposto = 0, moeda = 'R$: '){
  console.log('valor de preco',this.preco)
  console.log('valor de desconto',this.desc)
  return `${moeda + this.preco * (1 - desc) * (1 + imposto).toFixed(2)}`
}
 
 
const produto = {
  nome: 'notebook',
  preco: 4589,
  desc: 0.15,
  teste
}
 
console.log('valor da função teste: ', teste())
console.log('valor da função teste2: ', teste2())