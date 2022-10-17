// Operadores E -> v e v = v / v e f = f / f e ? = f // Obrigatoriamente todos os operandos precisam ser verdadeiros para uma expressão E seja verdadeiro
// Operadores Ou -> v ou ? = v / f ou f = f 
// Operadores Not -> !v = f / !f = v
// Operadores Xor -> v xor v = f / v xor f = v / f xor f = f

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // operador OU
    const comprarTv50 = trabalho1 && trabalho2  // operadores E chamados de curto circuito
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // Exclusivo Bitwise Xor não trabalho com boolean, portando precisa converter usando o !!
    const comprarTv32 = trabalho1 != trabalho2 // Operador XOR 
    const manterSaudavel = !comprarSorvete // Operador NOT
    
    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel } // Criação mais inteligente de obj sem precisar definir a chave/valor
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, false));
console.log(compras(false, true));