
// comparação de valores primitivos
const s1 = 'hello';
const s2 = s1;
console.log(s1 == s2);


//valor number dentro de strings é conciderado
// como numero resultado verdadeiro
const n1 = 8;
const strN = '8';
console.log(n1 == strN);

/**
 * O mecanismo do JavaScript
 * chamado coerção de tipo implícita (type coercion),
 * que ocorre especificamente quando usamos o operador de igualdade suave (==).
 * Quando você usa o ==, o JavaScript tenta "ajudar" convertendo os dois valores
 * para um tipo comum antes de fazer a comparação física.
 * 
 * A Regra de Conversão (ToNumber)
 * Pelas regras oficiais da linguagem, quando você compara
 * um Boolean (false) com qualquer outro tipo usando ==,
 * o JavaScript converte o Boolean em um Número primeiro.
 * • false vira 0
 * • true vira 1
 */
console.log(0 == false);
console.log("" == false);
 

// comparação de referencias
const obj1 = { texto: 'hello' };
const obj2 = { texto: 'hello' };
const obj3 = obj2;
console.log(obj1 == obj2)// referencias diferentes na memoria
console.log(obj2 == obj3);// mesma referencia na memoria

// comparando valores de propriedades de objetos
console.log(obj1.texto == obj2.texto); // valores de propriedades iguais em objetos diferentes




// comparando tipos, operado estrito dê preferencia a esse comparador
console.log(n1 === strN);// string é diferente do tipo number resultado false
console.log(0 === false);// number é diferente do tipo boolean 

