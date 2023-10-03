const {MongoClient} = require("mongodb")

const urlConexion = "mongodb+srv://nahumpl8:8888@cluster01.lgecmz8.mongodb.net/" 

//const urlConexion = process.env.ULR_MONGO; 

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

function crear(){
    return new Promise( async callback => {

        let conexion = await conectar();

        let coleccion = conexion.db("colores").collection("colores");

        let resultado = await coleccion.insertOne({r : Math.floor(Math.random() * 255), g : Math.floor(Math.random() * 255), b : Math.floor(Math.random() * 255)})

        conexion.close();

        callback(resultado)


    })
}
module.exports = {colores, crear};