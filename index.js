const express = require("express")
const cors = require("cors")
const {colores, crear} = require("./db.js")

let puerto = process.env.PORT || 4000;

const servidor = express();

servidor.use(cors());

servidor.use("/prueba", express.static("./estaticos"))


servidor.get("/", async (peticion, respuesta) => {
    let listaColores = await colores();
    respuesta.json(listaColores[Math.floor(Math.random() * listaColores.length)])
})

servidor.get("/crear", async (peticion, respuesta) => {
    respuesta.json(crear())
    console.log("hecho")
})

servidor.use((peticion, respuesta) => {
    respuesta.status(404)
    respuesta.send("not found 🧸")
})

servidor.listen(puerto)