/* 
Cada vez que se re ejecute me va a limpiar los resultados anteriores 
al tener el comando de  la  libreria nodemon activo que esta en el package.json
*/

console.clear(); 

//Libreria nativa de  node

import { createServer } from "http";

//instacia  del  servidor
/*
cuando le hagamos  la peticion  a createServer yo quiero que me  retorne algo en base a la peticion que le echo 
para ello usamos requestListener que es un callback que se  ejecutara cuando hallamos 
echo una  peticion a la instacia del servidor

*/

const httpServer = createServer((req, res)=>{ //request y response
    //Nos falta el verbo /metodo para  indicar que  quiere hacer el cliente
    //console.log(req.method); //verbo metodo ya  sea get, post, put, delete

    //Nos falta el path / ruta para identificar el recurso
   // console.log(req.url);  //ruta o direcion   

    //Faltan las cabeceras
    //console.log(req.headers);

    //Nos falta el body/payload


    /* 
    Nuestro request peticion puede recibir eventos
    le pasamos el evento  de data para que escuche cuando la data
    halla llegado pero como la data tiene un limite de bytes hay que trocearla
    */

    let data  = "";
    let chunkIndex = 0;

    req.on('data',(chunk)=>{ 
        data +=  chunk;

        chunkIndex ++;
        console.log(chunkIndex);
    });

    req.on('end', ()=>{
        res.end('Peticion recibida');
    });
    
    res.end('Bienvenidos');

});

//Abrimos el  servidor  para  que pueda  escuchar con listen y el port 3000
httpServer.listen(3000) //pasamos el puerto hay varios

