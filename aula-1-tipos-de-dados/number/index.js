
// decalração
let value = 22.902345;

// Limita o número de casas decimais, arredondando o valor se necessário
console.log(value.toPrecision(3));

// Formata o número com base na moeda ou regras de um país (essencial para dinheiro).
console.log(value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

// Retorna uma string representando o número com a precisão especificada
console.log(value.toPrecision(4));


// Converte o número em string. Pode receber uma base (ex: 2 para binário, 16 para hexadecimal).
const num = 246232;
console.log(num.toString(2) + " base binario");
console.log(num.toString(8) + " base octal");
console.log(num.toString(10) + " base decimal");
console.log(num.toString(16) + "  base hexadecimal");












