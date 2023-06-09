export const suma = (a,b)=> a + b;

export const resta = (a,b)=> a - b ;

export const multiplicacion = (a,b)=> a * b;

/*
Se puede usar  de esta manera con  la palabra reservada 
export al costado de la funcion, propiedad, etc..
O tambien de la siguiente:

Siempre se exporta como un objeto nunca asi: export multiplicacion

export {suma,resta,multiplicacion}

*/

//export {suma,resta,multiplicacion}

/*
Export default
Por defecto podemos exportar algun valor y lo podemos  recibir asi ej:

export  default suma;

y lo  importamos  asi:

import suma from  './operaciones.js'

El export default no  permite  desectructar  eje:

*/ 


export default {suma,resta,multiplicacion};

