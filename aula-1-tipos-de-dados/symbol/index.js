
/**
 * Chaves de propriedades de objetos exclusivas:
 * Como cada símbolo é único, usá-los como chaves de objetos evita colisões
 * de nomes ou sobrescritas acidentais por bibliotecas de terceiros ou outros
 * trechos de código
*/

// a descrição é opcional, útil para debug
const sym1 = Symbol('descricao');

const obj1 = {
[sym1]: 'secret',
data() {
  return  `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}` }
};

console.log(obj1.data());
const sym = Object.getOwnPropertySymbols(obj1);

sym.forEach(s => { 
  console.log(`obter a descrição: '${s.description}', e obter o valor do symbol '${obj1[s]}'`);
});


const id = Symbol();
const user = { [id]: '375', nike: 'aleph' };
console.log(user);

const u2 = user;
u2.nike = 'miui';
console.log(u2);

// mesmo guardando o mesmo valor os dois symbol não serão iguais
const compare1 = Object.getOwnPropertySymbols(user);
const compare2 = Object.getOwnPropertySymbols(u2);
console.log(compare1 === compare2);
