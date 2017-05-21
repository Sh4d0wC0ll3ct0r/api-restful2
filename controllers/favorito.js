'use strict'
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
   res.status(200).send({data:favoritoId});
}
function getFavoritos(req,res){

}
function saveFavorito(req,res){  
    var params = req.body;
    res.status(200).send({favorito:params});
}
function updateFavorito(req,res){
    var params = req.body;
    res.status(200).send({favorito:params});
}
function deleteFavorito(req,res){
    var params = req.body;
    res.status(200).send({favorito:params});
}
module.exports = {
    prueba,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}
