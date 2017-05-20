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


module.exports = {
    prueba
}
