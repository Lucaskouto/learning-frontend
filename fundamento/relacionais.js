console.log('1)', '1' == 1) // compara a igualdade -> operador binario
console.log('2)', '1' === 1) // estritamente igual
console.log('3)', '3' != 3) // diferente
console.log('4)', '3' !== 3) // estritamente diferente

console.log('5)', 3 < 2)  // menor
console.log('6)', 3 > 2) // maior
console.log('7)', 3 <= 2) // menor igual
console.log('8)', 3 >= 2) // maior igual

const d1 = new Date(0) // 0 significa a data de referencia -> 1 de janeiro de 1970
const d2 = new Date(0)
console.log('9)', d1 === d2) // variavel de referência de memoria não faz diferença == ou === -> porque vai comparar o endereço de memória 
console.log('10)',d1 == d2)
console.log('11)',d1.getTime() === d2.getTime()) // comparando Numbers -> são estritamente iguais
console.log('12)',undefined == null) 
console.log('12)',undefined === null) // via de regra é melhor utilizar o === para não confundir tipos. CUIDADO!!! 

