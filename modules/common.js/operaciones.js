const suma =(a,b)=> a + b;

const resta =(a,b)=> a - b ;

const multiplicacion =(a,b)=> a * b;

/* 
Simplemente por el echo de que common.js esta por defecto en node tenemos
tenemos el  objeto module

Casi siempre es mejor usar  el module.exports para no tener problemas con la referencia
al usar solo el exports

*/

// console.log(module);
module.exports = {suma, resta, multiplicacion}

console.log(module.exports);
console.log(exports);
console.log(module.exports===exports);
