let num1 = 1
let num2 = 2

num1++ // posFixada // acrescenta uma unidade
console.log(num1)
--num1 // Prioridade maior
// preFixado // subtrai uma unidade
console.log(num1)

console.log(++num1 === num2--) // num2-- baixa prioridade === acontece primeiro -> true
console.log(num1 === num2)