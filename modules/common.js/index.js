//obj  module
//console.log(module);

//y para importarlo lo hacemos con la function require

const {suma,resta,multiplicacion} = require('./operaciones');
//console.log(multiplicacion(5,2));


/*
Metodo require de  common js
    Tambien puedo importar jsons  como  modulos
*/
const operaciones = require('./operaciones');
console.log(operaciones);

/*Importar  jsons*/
const users  = require('./user.json') ;

console.log(users);  

/*
Librerias
Si queremos importar  una libreria externa o una libreria que venga por defecto de node
no hay la necesidad de que importemos la libreria con toda la  ruta relativa
basta con el  nombre de la libreria
automaticamente lee el  node  modules va a la carpeta y va y lee el index  de esa libreria

*/

const jsonwebtoken = require('jsonwebtoken');


/*Variables globales*/

// console.log(__filename);
// console.log(__direname);

  
/*
Importar  modulos  de es  module desde commonn js
emacsript funcioona de forma  asyncrona en cambio
commonjs funciona de forma asyc por lo tanto tendriamos  
que importar  como si recibieramos una  promesa  

*/

import('./operaciones2.mjs').then(
    ({suma})=> console.log(suma(2,1))
    );