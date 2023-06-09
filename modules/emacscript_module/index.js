/*
Por  defecto  si queremos  utilizar solo un archivo  en common js
lo forzariamos de  la siguiente forma
colocando la extencion de ese archivo en particular en .cjs
*/

import { suma,resta,multiplicacion } from './operaciones.js';

console.log(suma(1,8));
console.log(resta(1,8));
console.log(multiplicacion(1,8));

/*
Import con  el  export default
Este no permite desectructurar cuando se usa default
el fuerza a que sea una variable posteriormente se accede a su objeto o
objetos que le hallamos enviado.
*/


import operaciones from "./operaciones.js";

console.log(operaciones);

/*
En emacsript module no tenemos  
__dirname
__filename

Pero tenemos algo  parecido
ya que import es objeto

console.log(import.meta.url);


Tampoco con emacscript module tampoco podemos hacer
importar un json   
Pero si queremos importar un  json podemos hacerlo con el core  de node
importando
createRequire..

*/


/*
Usamos common js dentro emacsript module
*/
import { suma2, resta2, multiplicacion2 } from "./operaciones2.cjs";
console.log(suma2);

/*
Si queremos usar import dentro de emascript  module podemos hacer

*/

//Module viene por defecto en el  core de  node
import { createRequire } from 'module';

//import.meta.url para que sepa  la ruta actual
const require = createRequire(import.meta.url);


//Ahora si podemos hacer un require
const users = require('./user.json');
console.log(users);

