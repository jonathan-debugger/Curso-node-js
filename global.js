/*
Global
En javascript tenemos  en window que se refiere al objeto de la ventana
en cambio en node tenemos el objeto global
el global tambien contiene los console.log y los settimeout como en js
*/

console.log(global);


/* 
Process
significa el proceso actual o la aplicacion que se esta ejecutando actualmente en 
node
*/

//Matar el proceso actual o salir del proceso actual
 //console.log(process.exit());

 /*
 Process.env
 Variables de entorno
 Son valores dinamicos que pueden alterar el flujo de la aplicacion

 */

 console.log(process.env);




/* 
Modulos con node 
Por defecto node ya  trae un gestor de modulos el cual es common js
el cual nos permite manipular los modulos
*/
const operaciones = require('./suma');
// const math = require('./math');

console.log(operaciones.suma(3,2));

console.log( operaciones.resta(3,2));


//Ruta directorio actual ..
console.log(__dirname); 

//Ruta archivo actual ..
console.log(__filename);


/*
Diferencias entre variables
en javascript podemos definir variables globales con var por ejemplo que tiene scope global
podriamos acceder a esa variable con window de esta forma 
ejem:
var mivar =0;
console.log(window.mivar);

window.variable
en cambio en node 

*/

var mivar2 = 0;
//de esta forma no funcionaria 
// console.log(global.mivar2);

// Tendriamos que hacerlo de la siguiente forma
global.mivar2 ='This var with global';

console.log(global.mivar2);








