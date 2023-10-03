const {MongoClient, ObjectId} = require("mongodb")


const urlConexion = process.env.ULR_MONGO; 

function conectar(){
    return MongoClient.connect(urlConexion);
    
}

function colores(){
    return new Promise(async callback => {

        let conexion = await conectar();

        let coleccion = conexion.db("colores").collection("colores");

        let colores = await coleccion.find({}).toArray();

        conexion.close();

        callback(colores);
    })
}

/*function crearColor({r,g,b}){
    return new Promise(async callback => {
        let conexion = await conectar();

        let coleccion = conexion.db("colores").collection("colores");

        let resultado = await coleccion.insertOne({r, g, b})

        conexion.close();

        callback({r,g,b});
    })
}*/

module.exports = {colores};