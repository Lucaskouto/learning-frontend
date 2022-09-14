const exer13 = `Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é:
 n1 * 2 + n2 * 3 + n3 * 5 / 10`

 console.log(exer13)

 let n1 = Number(10)
 let n2 = Number(10)
 let n3 = Number(10)
 let peso1 = n1 * 2
 let peso2 = n2 * 3
 let peso3 = n3 * 5

 const mediaFinal = peso1 + peso2 + peso3 / 10;
 const resultado = `Média anual de rendimento do aluno: ${mediaFinal.toFixed(2)}`; // Template String

 console.log(Number.isInteger(mediaFinal))
 console.log(resultado)
 console.log(resultado.substring(0, 6))
