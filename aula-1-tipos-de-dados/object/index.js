

// Literal (mais comum)
const user = { nome: "Ana", idade: 30 };
console.log(user.nome);


// Construtor
const obj = new Object({nome: "José", idade: 20});
console.log(obj.hasOwnProperty());
console.log(obj.nome);

// Objetos são armazenados por referência.  Atribuir um objeto
// a outra variável copia a referência, não o valor
let newObj = new Object();
newObj = obj;
console.log(newObj.idade);
console.log(newObj === obj);// mesmo objeto
console.log(newObj.isPrototypeOf(obj));
console.log(newObj.isPrototypeOf(Object));

// metodos
const clean = {
 cokies() { return 'cokies limpo!'; },
 caches() { return 'cache limpo!'; }
};

console.log(clean.cokies());

const user2 = {
 name: 'Marcos',
 age: '32',
 email: 'marcos@email.com',
 infoUser() { return `Nome: ${ this.name } Idade: ${ this.age } Email: ${ this.email }`}
};

console.log(user2.infoUser());



// Object.create (com protótipo explícito)
const o = Object.create(null); // sem protótipo (null prototype)



// copia rasa de objetos
const u1 = Object.assign({}, user);
console.log(u1.nome);




const player = {
 nike: 'player1',
 login: [true, false], 
 scores: [
  { level: [32, 45, 16]},
  { level: [14, 23, 18]},
  { level: [26, 71, 40]}
 ]
};

const sumScore = () => {
 let score = 0;
 player.scores.forEach(obj => {
  obj.level.forEach(n => {
   score += n;
  });
 });
 return score;
}
console.log(sumScore());


// copia profunda
const p1 = structuredClone(player);
p1.scores.forEach(obj => obj.level.forEach(num => console.log(num)));


// obter as chaves
console.log(Object.keys(player));


// obter os valores
console.log(Object.values(player));


// obter chaves e valores
console.log(Object.entries(player));


// obter os valores
console.log(Object(player));


// objeto contruido com proviedade de valores vazios
// e atribuidos valores depois
const Animal = new Object({animal: '', breed: '', gender: ''});
Animal.animal = "Cavalo";
Animal.breed = "Manga-larga";
Animal.gender = "Macho";
console.log(Animal);


