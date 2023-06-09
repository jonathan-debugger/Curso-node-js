console.clear();

//Express
import express from 'express';
import dotenv  from "dotenv"; //libreria la cual nos facilita usar las variables de entorno .env
import accountRouter  from "./routes/account.js";

// Importamos nuestras variables de entorno con dotenv.config();
dotenv.config();

// Después de llamar a dotenv.config(), las variables de entorno están disponibles en process.env
const PORT= process.env.PORT; // 3000

const expressApp = express();




//Midelware
/* Los midelware van en orden y estos afectan al router o a nuetras end points o rutas */
expressApp.use(express.json());
expressApp.use(express.text());

//Usamos el router como un midelware se lo pasamos de esta forma a express para usarlo


/*
 El primer parametro es opcional si no se le pasa nada le indicamos que 
 los midelwares que tenga dentro se van a ejecutar en la raiz o globlamente para evitar
 eso lo que hacemos es pasarle la ruta de donde solo se afectara esa ruta con sus midelwares
*/

// expressApp.use(accountRouter);
expressApp.use('/account',accountRouter);


expressApp.get('/raiz',(req,res)=>{
res.send();
})



//Express directamente tiene los mentodos htpp
/*
verbos se refiere a los metodos get, post, put, delete

expressApp.all() no importa con que verbo ingrese ataque a esa url si se usa all servira con cualquiera
expressApp.get()
expressApp.post()
expressApp.put()
expressApp.delete()
*/

/* parametro :idcuenta*/


expressApp.post('/cuenta/:idcuenta',(req, res)=>{
    
    //res.send(req.get('accept')) // obtenemos las propiedades del request
    
    console.log(req.body);

    res.send();
    // res.status(481).send({ 
    //     errorMessage:"No autorizado"
    // }); 
    // console.log(req.params.idcuenta);
});

expressApp.post('/search',(req, res)=>{
    
    //res.send(req.get('accept')) // obtenemos las propiedades del request
    
    console.log(req.query);

    res.send();
    // res.status(481).send({ 
    //     errorMessage:"No autorizado"
    // }); 
    // console.log(req.params.idcuenta);
});

expressApp.listen(PORT, ()=>{
    console.log(`Servidor levantado en el puerto  ${PORT}`);
});
