// Uma função é um bloco de código nomeado. 
// A função recebe parametros de entrada e no final retorna um valor
// Uma função pode não retornar dados 
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);

// Funcão com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))