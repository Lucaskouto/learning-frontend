const valores = [7.7, 8.9, 6.3, 9.2]; // 0, 1, 2, 3.
console.log(valores[0], valores[3]);
console.log(valores[4]); // Não existe valor na quarta casa da array 

valores[1] = 10.3; // Adicionado mais um valor no conjunto da array
console.log(valores);
console.log(valores.length); // Quantidade de valores num array

valores.push({id: 3}, false, null, 'teste'); // Adicionar mais valores no array
console.log(valores);

console.log(valores.pop()); // retira um elemento do array
delete valores[0]; // Delete um elemento do erray
console.log(valores);

console.log(typeof valores);