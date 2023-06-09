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

// expressApp.use(accountRouter);
expressApp.use('/account',accountRouter);


expressApp.get('/raiz',(req,res)=>{
res.send();
})






