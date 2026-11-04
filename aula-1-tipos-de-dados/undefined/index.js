
// Undefined representa um valor não definido
// mas geralmente é o sistema que utiliza esse valor

let name;
console.log(name);

const array = [1, 2, 3];
for (let index = 0; index < 5; index++) {
 console.log(array[index]);
}

function reader(book, autor)  {
 return book + ": " + autor + ": ";
}

console.log(reader("Manoscritos"));


function soma(a, b) {
 if (a === undefined || b === undefined) {
  throw new Error("Faltam argumentos");
 }
 return a + b;
}

console.log(soma(10));
