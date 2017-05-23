'use strict'

var Favorito = require('../models/favorito');

function prueba(req,res){
    if( req.params.nombre){
        var nombre = req.params.nombre;
    }else{
        var nombre = "SIN NOMBRE";
    }
    res.status(200).send({
        data: [2,3,4],
        message: "HOla mundo con Node.js y EXPRESSS - "+ nombre
    });

}
function getFavorito(req,res){
   var favoritoId= req.params.id;
   Favorito.findById(favoritoId,(err,favorito)=>{
         if(err){
            res.status(500).send({message: 'Error al devolver los marcador'});
        } else {
            if(!favorito){
                  res.status(404).send({message: 'No hay marcador'});
               }
            else {
                  res.status(200).send({favorito}); 
                 }
       }
   });
}
function getFavoritos(req,res){
    Favorito.find({}).sort('-_id').exec((err,favoritos)=>{
        if(err){
            res.status(500).send({message: 'Error al devolver los marcadores'});
        }
        if(!favoritos){
            res.status(404).send({message: 'No hay marcadores'});
        }
        res.status(200).send({favoritos});
    });
}
function saveFavorito(req,res){  
    var favorito = new Favorito();
    var params = req.body;
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url=params.url; 
    favorito.save((err,favoritoStored)=>{
        if(err){
            res.status(500).send({message: 'Error al guardar el marcador'});
        }
        res.status(200).send({favorito:favoritoStored});
    });
}
/* Para poder revisar los parametros del update 
function updateFavorito(req,res){
    var favoritoId= req.params.id;
    var actualizar = req.body;
    console.log(actualizar);
    res.status(200).send({actualizar});
}*/
function updateFavorito(req,res){
    var favoritoId= req.params.id;
    var update = req.body;

    Favorito.findByIdAndUpdate(favoritoId,update,(err,favoritoUpdate)=>{
    if(err){
            res.status(500).send({message: 'Error al actualizar el marcador'});
        }
        res.status(200).send({favorito:favoritoUpdate});
    });
}
function deleteFavorito(req,res){
    var favoritoId= req.params.id;
    Favorito.findById(favoritoId,(err,favorito)=>{
           if(err){
            res.status(500).send({message: 'Error al devolver el marcador'});
        }
           if(!favorito){
              res.status(404).send({message: 'No hay marcadores'});
           } else {
                favorito.remove(err=> {
                    if(err){
                      res.status(500).send({message: 'Error al borrar'});
                    }else{
                      res.status(200).send({message: 'El marcador se ha eliminado'});
                    }
                });
           }
    });
}
module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}
