// import express from "express";
import { Router } from "express";
import { USERS_BBDD } from "../bbdd.js";

const accountRouter = Router();

//Router
/*
Nos permite agrupar aislar y estructurar mejor nuestras rutas en nuestro codigo
*/


accountRouter.use((req,res, next)=>{
    console.log(req.ip);

    next(); //Ejecuto mi midelware y sigo el flujo de ejecucion de lo que halla abajo ya sea un midelware o un break point
});



accountRouter.get('/:guid',(req,res)=>{
    const {guid} = req.params;
    const user = USERS_BBDD.find(user=> user.guid === guid);

    //Si  no se encontro nada 
    if(!user) return res.status(404).send('No found'); 

    //De  lo contraria  enviamos el user
    return res.send(user);
});

//Crear una nueva cuenta
accountRouter.post('/',(req,res)=>{
    console.log(req.body);
    const {guid, name} = req.body;

    if(!guid || !name)  return res.state(400).send();

    const user = USERS_BBDD.find(user=> user.guid === guid);
    //Si existe el usario mandamos un 409  que significa conflicto
    if(user) return res.status(409).send('User already exist'); 

    USERS_BBDD.push({
        guid,
        name
    });

    return res.send();
    
});


//Actualizar el nombre de una cuenta
accountRouter.patch('/:guid',(req,res)=>{
    const {guid} = req.params;
    const {name} = req.body;

    if(!name)  return res.state(400).send();

    const user = USERS_BBDD.find(user=> user.guid === guid);

    //Si  no se encontro nada 
    if(!user) return res.status(404).send('No found'); 

    user.name = name;
    return res.send();

});

//Eliminar una cuenta
accountRouter.delete('/:guid',(req,res)=>{
    const {guid} = req.params;
    const userIndex = USERS_BBDD.findIndex(user=> user.guid === guid);

    //Si  no se encontro nada 
    if(userIndex === -1) return res.status(404).send(); 

    USERS_BBDD.splice(userIndex, 1);

    return res.send('User delete');

});

export default accountRouter;