'use strict'
var app = require("./app");
var port = process.env.port || 3678;
app.listen(port,function(){
    //console.log(`API REST FAVORITOS FUNCIONANDO EN ${port}`);
    console.log("API REST FAVORITOS FUNCIONANDO EN "+port);
    console.log("prueba nodemon ");
});
