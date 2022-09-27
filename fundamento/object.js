// Objeto - Anotação literal de objetos
// Json - Javascript object notation - não é um object
// Um objeto é uma coleção de chave/valor

const prod1 = {}; // Par de chaves - representa um objeto
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
}

console.log(prod2);

console.log(typeof prod1);