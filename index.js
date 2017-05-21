'use strict'
var mongoose = require('mongoose');
var app = require("./app");
var port = process.env.port || 3678;

mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err,res)=>{
    if(err){
        throw err;
    }else{
        console.log("Conexion de base de datos exitosa");
        app.listen(port,function(){
        //console.log(`API REST FAVORITOS FUNCIONANDO EN ${port}`);
           console.log("API REST FAVORITOS FUNCIONANDO EN "+port);
           console.log("prueba nodemon ");
         });
    }

    
});



