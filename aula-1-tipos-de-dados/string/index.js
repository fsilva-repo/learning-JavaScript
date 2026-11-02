
// ### Importante strings são imutáveis ###

let hi = 'hello world' // variavel
const name = 'flavio' // constante imutavel

// o slice fatia a string onde recebe um começo e fim,
// o resto da string ele descarta 
let unite = hi.slice(0, 6).concat(name);
console.log(unite);

// comprimento da string
let len = unite.length;
console.log(len);

// assim a string não muda a linha modificada será apenas a 17 a 18 não muda
unite.replace(unite[0], unite.charAt(0).toUpperCase());
let upCase = unite;
console.log(upCase);
console.log(unite.replace(unite[0], unite.charAt(0).toUpperCase()));

// para armazenar a mudança deve ser feito assi:
let captalize = unite.charAt(0).toUpperCase() + unite.slice(1);
console.log(captalize);

// substitição
let email = "silva#gmail.com";
email = email.replace("#", "@");
//let emailCorrection = email;
console.log( email);


// atribuião direta temporaria
let voiD = '';
console.log(voiD[0] = 'A');


// copia do valor literal
const student = "flavio";
let copiStr = student;
console.log(copiStr);


